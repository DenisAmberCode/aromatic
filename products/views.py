from django.http import JsonResponse
from django.shortcuts import render
from products.models import *
from orders.models import *

def product(request, product_id):
    product = Product.objects.get(id=product_id)
    session_key = request.session.session_key
    if not session_key:
        request.session["session_key"] = 123
        request.session.cycle_key()

    if request.user.is_authenticated:
        products_in_favorites = ProductsInFavorites.objects.filter(user=request.user, is_active=True, product__is_active=True)
        products_in_basket = ProductInBasket.objects.filter(user=request.user, is_active=True)
    else:
        products_in_favorites = ProductsInFavorites.objects.filter(session_key=session_key, is_active=True, product__is_active=True)
        products_in_basket = ProductInBasket.objects.filter(session_key=session_key, is_active=True)

    list_products_in_favorites = []
    for i in products_in_favorites:
        list_products_in_favorites.append(i.product.id)

    list_products_in_basket = []
    for i in products_in_basket:
        list_products_in_basket.append(i.product.id)

    return render(request, 'products/product.html', locals())

def products(request):
    allProducts = Product.objects.filter(is_active=True)
    return_dict = dict()
    return_dict["products"] = list()
    for product in allProducts:
        product_dict = dict()
        product_dict["id"] = product.id
        product_dict["name"] = product.name
        product_dict["price"] = product.price_with_discount
        product_dict["description"] = product.short_description
        product_dict["image"] = ProductImg.objects.get(product__id=product.id, is_main=True).image.url
        return_dict["products"].append(product_dict)

    return JsonResponse(return_dict)

def productsJsonResponse(allProducts, limit, page):
    if allProducts == None:
        return {"products": []}
    productsCountAll = allProducts.count()
    if page*limit > productsCountAll:
        Products = allProducts[limit*(page-1):]  # Последняя страница товаров
    else:
        Products = allProducts[limit*(page-1):limit*page]

    return_dict = dict()
    return_dict["products"] = list()
    for product in Products:
        product_dict = dict()
        product_dict["id"] = product.id
        product_dict["name"] = product.name
        product_dict["price"] = product.price_with_discount
        product_dict["description"] = product.short_description
        product_dict["image"] = ProductImg.objects.get(product__id=product.id, is_main=True).image.url
        return_dict["products"].append(product_dict)
    if page == 1:
        return_dict["productsCountAll"] = productsCountAll

    return return_dict

def sortProducts(allProducts, sortParam):
    if sortParam == 'price':
        return allProducts.order_by('price')
    elif sortParam == 'alphabet':
        return allProducts.order_by('name')
    elif sortParam == 'popularity':
        return allProducts

def productsFilterByCategory(request, categoryInNavbar, category):
    page = int(request.GET.get('page', 0))
    sortParam = request.GET.get('sort', '')
    limit = 4
    allProducts = Product.objects.filter(categoryInNavbar__nameEnglish=categoryInNavbar, category__nameEnglish=category, is_active=True)
    if sortParam != '':
        allProducts = sortProducts(allProducts, sortParam)
    return_dict = productsJsonResponse(allProducts, limit, page)

    return JsonResponse(return_dict)

def productsFilterBySubCategory(request, categoryInNavbar, category, subCategory):
    page = int(request.GET.get('page', 0))
    sortParam = request.GET.get('sort', '')
    limit = 4
    allProducts = Product.objects.filter(categoryInNavbar__nameEnglish=categoryInNavbar, category__nameEnglish=category, subCategory__nameEnglish=subCategory, is_active=True)
    if sortParam != '':
        allProducts = sortProducts(allProducts, sortParam)
    return_dict = productsJsonResponse(allProducts, limit, page)

    return JsonResponse(return_dict)

def productsFilterBySpecialCategory(request, specialCategory):
    page = int(request.GET.get('page', 0))
    sortParam = request.GET.get('sort', '')
    limit = 9
    if specialCategory == "novently":
        allEntries = Novelty.objects.filter(product__is_active=True)
    elif specialCategory == "best-seller":
        allEntries = BestSeller.objects.filter(product__is_active=True)
    elif specialCategory == "exclusively-online":
        allEntries = ExclusivelyOnline.objects.filter(product__is_active=True)
    else:
        allEntries = None

    if sortParam == 'price':
        allEntries = allEntries.order_by('product__price')
    elif sortParam == 'alphabet':
        allEntries = allEntries.order_by('product__name')
    elif sortParam == 'popularity':
        pass

    if allEntries == None:
        return {"products": []}
    productsCountAll = allEntries.count()
    if page*limit > productsCountAll:
        Entries = allEntries[limit*(page-1):]  # Последняя страница товаров
    else:
        Entries = allEntries[limit*(page-1):limit*page]

    return_dict = dict()
    return_dict["products"] = list()
    for entry in Entries:
        product_dict = dict()
        product_dict["id"] = entry.product.id
        product_dict["name"] = entry.product.name
        product_dict["price"] = entry.product.price_with_discount
        product_dict["description"] = entry.product.short_description
        product_dict["image"] = ProductImg.objects.get(product__id=entry.product.id, is_main=True).image.url
        return_dict["products"].append(product_dict)
    if page == 1:
        return_dict["productsCountAll"] = productsCountAll

    return JsonResponse(return_dict)