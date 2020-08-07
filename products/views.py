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
    allProducts = ProductImg.objects.all()
    return_dict = dict()
    return_dict["products"] = list()
    for item in allProducts:
        product_dict = dict()
        product_dict["id"] = item.product.id
        product_dict["name"] = item.product.name
        product_dict["price"] = item.product.price_with_discount
        product_dict["description"] = item.product.short_description
        product_dict["image"] = item.image.url
        return_dict["products"].append(product_dict)

    return JsonResponse(return_dict)

def productsFilterByCategory(request, categoryInNavbar, category, page):
    limit = 4
    allProducts = ProductImg.objects.filter(product__categoryInNavbar__nameEnglish=categoryInNavbar, product__category__nameEnglish=category)
    productsCountAll = allProducts.count()
    if page*limit > productsCountAll:
        Products = allProducts[limit*(page-1):]  # Последняя страница товаров
    else:
        Products = allProducts[limit*(page-1):limit*page]

    return_dict = dict()
    return_dict["products"] = list()
    for item in Products:
        product_dict = dict()
        product_dict["id"] = item.product.id
        product_dict["name"] = item.product.name
        product_dict["price"] = item.product.price_with_discount
        product_dict["description"] = item.product.short_description
        product_dict["image"] = item.image.url
        return_dict["products"].append(product_dict)
    if page == 1:
        return_dict["productsCountAll"] = productsCountAll
    return JsonResponse(return_dict)

def productsFilterBySubCategory(request, categoryInNavbar, category, subCategory, page):
    limit = 3
    allProducts = ProductImg.objects.filter(product__categoryInNavbar__nameEnglish=categoryInNavbar, product__category__nameEnglish=category, product__subCategory__nameEnglish=subCategory)
    productsCountAll = allProducts.count()
    if page*limit > productsCountAll:
        Products = allProducts[limit*(page-1):]  # Последняя страница товаров
    else:
        Products = allProducts[limit*(page-1):limit*page]

    return_dict = dict()
    return_dict["products"] = list()
    for item in Products:
        product_dict = dict()
        product_dict["id"] = item.product.id
        product_dict["name"] = item.product.name
        product_dict["price"] = item.product.price_with_discount
        product_dict["description"] = item.product.short_description
        product_dict["image"] = item.image.url
        return_dict["products"].append(product_dict)
    if page == 1:
        return_dict["productsCountAll"] = productsCountAll

    return JsonResponse(return_dict)

def productsInCarousel(request, carouselTitle):
    if carouselTitle == "novently":
        allProducts = ProductImg.objects.filter(product__is_novelty=True)
    elif carouselTitle == "best-seller":
        allProducts = ProductImg.objects.filter(product__is_best_seller=True)
    elif carouselTitle == "exclusively-online":
        allProducts = ProductImg.objects.filter(product__is_exclusively_online=True)
    return_dict = dict()
    return_dict["products"] = list()
    for item in allProducts:
        product_dict = dict()
        product_dict["id"] = item.product.id
        product_dict["name"] = item.product.name
        product_dict["price"] = item.product.price_with_discount
        product_dict["description"] = item.product.short_description
        product_dict["image"] = item.image.url
        return_dict["products"].append(product_dict)

    return JsonResponse(return_dict)