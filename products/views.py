from django.shortcuts import render
from products.models import *
from orders.models import *

def product(request, product_id):
    product = Product.objects.get(id=product_id)
    # return render(request, 'products/product.html', locals())

    session_key = request.session.session_key
    if not session_key:
        request.session.cycle_key()

    # print(request.session.session_key)
    if request.user.is_authenticated:
        products_in_favorites = ProductsInFavorites.objects.filter(user=request.user, is_active=True, product__is_active=True)
    else:
        products_in_favorites = ProductsInFavorites.objects.filter(session_key=session_key, is_active=True, product__is_active=True)
    list_products_in_favorites = []
    for i in products_in_favorites:
        list_products_in_favorites.append(i.product.id)

    return render(request, 'products/product.html', locals())
