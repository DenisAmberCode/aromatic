from django.http import JsonResponse
from .models import *
from django.shortcuts import render, redirect
from .forms import CheckoutContactForm
from django.contrib.auth.models import User
from products.models import *

def basket_adding(request):
    return_dict = dict()
    session_key = request.session.session_key
    data = request.POST
    product_id = data.get('product_id')
    nmb = data.get('nmb')
    is_delete = data.get('is_delete')

    if is_delete == 'true':
        ProductInBasket.objects.filter(id=product_id).update(is_active=False)

    elif nmb == "0":
        ProductInBasket.objects.filter(session_key=session_key, is_active=True, id=product_id).delete()
    else:
        if request.user.is_authenticated:
            new_product, created = ProductInBasket.objects.get_or_create(session_key=session_key, user=request.user, product_id=product_id, is_active=True, order=None, defaults={"nmb": nmb})
        else:
            new_product, created = ProductInBasket.objects.get_or_create(session_key=session_key, user=None, product_id=product_id, is_active=True, order=None, defaults={"nmb": nmb})
        if not created:
            print("not_created")
            new_product.nmb += int(nmb)
            new_product.save(force_update=True)

    if request.user.is_authenticated:
        products_in_basket = ProductInBasket.objects.filter(user=request.user, is_active=True)
    else:
        products_in_basket = ProductInBasket.objects.filter(session_key=session_key, is_active=True)
    products_total_nmb = products_in_basket.count()
    return_dict["products_total_nmb"] = products_total_nmb

    return_dict["products"] = list()

    for item in products_in_basket:
        product_dict = dict()
        product_dict["id"] = item.id
        product_dict["name"] = item.product.name
        product_dict["price_per_item"] = item.price_per_item
        product_dict["nmb"] = item.nmb
        return_dict["products"].append(product_dict)

    return JsonResponse(return_dict)

#  Отправка заказа через POST
def checkoutprocess(request):
    session_key = request.session.session_key
    form = CheckoutContactForm(request.POST or None)
    if request.POST:
        print(request.POST)
        if form.is_valid():
            data = request.POST
            name = data.get("name")
            phone = data["phone"]
            email = data.get('email')
            user, created = User.objects.get_or_create(username=phone, defaults={'first_name': name, 'email': email})
            if user.email != email:
                User.objects.filter(username=phone).update(email=email)
            if user.first_name != name:
                User.objects.filter(username=phone).update(first_name=name)

            order = Order.objects.create(user=user, customer_name=name, customer_email=email, status_id=1)
            for name, value in data.items():
                if name.startswith("product_in_basket"):
                    product_in_basket_id = name.split("product_in_basket")[1]
                    print(product_in_basket_id)
                    product_in_basket = Product.objects.get(id=product_in_basket_id)

                    product_in_basket.nmb = value
                    product_in_basket.order = order
                    product_in_basket.save(force_update=True)
                    ttl_price = product_in_basket.nmb * int(product_in_basket.price_with_discount)

                    ProductInOrder.objects.create(product=product_in_basket, number=product_in_basket.nmb,
                                                  price_per_item=product_in_basket.price_with_discount,
                                                  total_price=ttl_price,
                                                  order=order)
            if request.user.is_authenticated:
                ProductInBasket.objects.filter(user=request.user, is_active=True).all().delete()
            else:
                ProductInBasket.objects.filter(session_key=session_key, is_active=True).all().delete()
        else:
            print("not_valid")
    return redirect('/')

#  Отправка заказа через ajax
# def checkoutprocess1(request):
#     return_dict = dict()
#     session_key = request.session.session_key
#     if request.user.is_authenticated:
#         products_in_basket = ProductInBasket.objects.filter(user=request.user, is_active=True)
#     else:
#         products_in_basket = ProductInBasket.objects.filter(session_key=session_key, is_active=True)
#     form = CheckoutContactForm(request.POST or None)
#     data = request.POST
#     print(data)
#     if request.POST:
#         data = request.POST
#         name = data.get('name')
#         phone = data['phone']
#         email = data.get('email')
#         # number = data['nmb']
#         kol = int(data['kol'])
#         j = 0
#
#         user, created = User.objects.get_or_create(username=phone, defaults={'first_name': name, 'email':email})
#         if user.email != email:
#             User.objects.filter(username=phone).update(email=email)
#
#         order = Order.objects.create(user=user, customer_name=name, customer_email=email, status_id=1)
#         for i in range(0, kol):
#             str_id = 'id[' + str(j) + ']'
#             str_nmb = 'nmb[' + str(j) + ']'
#             j = j + 1
#             product_in_basket_id = int(data[str_id])
#             #print(product_in_basket_id)
#             product_in_basket = Product.objects.get(id=product_in_basket_id)
#             product_in_basket.nmb = int(data[str_nmb])
#             # print(product_in_basket.nmb)
#             product_in_basket.order = order
#             product_in_basket.save(force_update=True)
#             ttl_price = product_in_basket.nmb * product_in_basket.price
#             ProductInOrder.objects.create(product=product_in_basket, number=product_in_basket.nmb,
#                                           price_per_item=product_in_basket.price,
#                                           total_price=ttl_price, order=order)
#         if request.user.is_authenticated:
#             ProductInBasket.objects.filter(user=request.user, is_active=True).all().delete()
#         else:
#             ProductInBasket.objects.filter(session_key=session_key, is_active=True).all().delete()
#
#     return JsonResponse(return_dict)

def checkout(request):

    session_key = request.session.session_key
    if request.user.is_authenticated:
        products_in_basket = ProductInBasket.objects.filter(user=request.user, is_active=True)
    else:
        products_in_basket = ProductInBasket.objects.filter(session_key=session_key, is_active=True)

    products_images = ProductImg.objects.filter(is_active=True, is_main=True, product__is_active=True)

    list_products_in_basket = {}
    for i in products_in_basket:
        list_products_in_basket[i.product.id] = i.id

    form = CheckoutContactForm(request.POST or None)
    if request.POST:
        if form.is_valid():
            data = request.POST
            name = data.get('name')
            phone = data['phone']
            user, created = User.objects.get_or_create(username=phone, defaults={'first_name': name})

            order = Order.objects.create(user=user, customer_name=name, customer_phone=phone, status_id=1)
            for name, value in data.items():
                if name.startswith('product_in_basket'):
                    product_in_basket_id = name.split('product_in_basket')[1]
                    product_in_basket = ProductInBasket.objects.get(id=product_in_basket_id)
                    product_in_basket.nmb = value
                    product_in_basket.order = order
                    product_in_basket.save(force_update=True)

                    ProductInOrder.objects.create(product=product_in_basket.product, number=product_in_basket.nmb, price_per_item=product_in_basket.price_per_item, total_price=product_in_basket.total_price, order=order)

    return render(request, 'orders/checkout.html', locals())

def end(request):

    return render(request, 'orders/end.html', locals())

def favorites(request):
    session_key = request.session.session_key
    if request.user.is_authenticated:
        products_in_favorites = ProductsInFavorites.objects.filter(user=request.user, is_active=True, product__is_active=True)
    else:
        products_in_favorites = ProductsInFavorites.objects.filter(session_key=session_key, is_active=True, product__is_active=True)
    list_products_in_favorites = []
    for i in products_in_favorites:
        list_products_in_favorites.append(i.product.id)

    products_images = ProductImg.objects.filter(is_active=True, is_main=True, product__is_active=True)
    return render(request, 'orders/favorites.html', locals())

def action_in_favorites(request):
    return_dict = dict()
    session_key = request.session.session_key
    data = request.POST
    product_id = data.get('product_id')
    act = data.get('act')

    if act == "del":
        if request.user.is_authenticated:
            ProductsInFavorites.objects.filter(user=request.user, is_active=True, product__id=product_id).delete()
        else:
            ProductsInFavorites.objects.filter(session_key=session_key, is_active=True, product__id=product_id).delete()
    elif act == "add":
        if request.user.is_authenticated:
            ProductsInFavorites.objects.create(session_key=session_key, user=request.user, product_id=product_id, is_active=True)
        else:
            ProductsInFavorites.objects.create(session_key=session_key, user=None, product_id=product_id, is_active=True)


    if request.user.is_authenticated:
        products_in_favorites = ProductsInFavorites.objects.filter(user=request.user, is_active=True, product__is_active=True)
    else:
        products_in_favorites = ProductsInFavorites.objects.filter(session_key=session_key, is_active=True)

    return_dict["products"] = list()

    for item in products_in_favorites:
        product_dict = dict()
        product_dict["id"] = item.id
        return_dict["products"].append(product_dict)

    return JsonResponse(return_dict)
