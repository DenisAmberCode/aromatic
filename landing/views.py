from django.shortcuts import render
from .forms import SubsForm
from products.models import *
from orders.models import *
# from django.contrib.auth.decorators import login_required

def landing(request):

    form=SubsForm(request.POST or None)
    if request.method == 'POST' and form.is_valid():
        form.save()
    return render(request, 'landing/landing.html', locals())



# @login_required
def home(request):
    session_key = request.session.session_key
    if not session_key:
        request.session["session_key"] = 123
        request.session.cycle_key()
    if request.user.is_authenticated:
        products_in_basket = ProductInBasket.objects.filter(user=request.user, is_active=True)
    else:
        products_in_basket = ProductInBasket.objects.filter(session_key=session_key, is_active=True)

    list_products_in_basket = []
    for i in products_in_basket:
        list_products_in_basket.append(i.product.id)

    if request.user.is_authenticated:
        products_in_favorites = ProductsInFavorites.objects.filter(user=request.user, is_active=True, product__is_active=True)
    else:
        products_in_favorites = ProductsInFavorites.objects.filter(session_key=session_key, is_active=True, product__is_active=True)

    list_products_in_favorites = []
    for i in products_in_favorites:
        list_products_in_favorites.append(i.product.id)

    # products_images = ProductImg.objects.filter(is_active=True, is_main=True, product__is_active=True)
    # products_images_category_1 = products_images.filter(product__category__id=1)
    # products_images_category_2 = products_images.filter(product__category__id=2)
    # products_images_category_3 = products_images.filter(product__category__id=3)
    return render(request, 'landing/home.html', locals())
