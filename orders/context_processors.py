from .models import ProductInBasket

def getting_basket_info(request):
    session_key = request.session.session_key
    if not session_key:
        request.session["session_key"] = 123
        request.session.cycle_key()

    if request.user.is_authenticated:
        products_in_basket = ProductInBasket.objects.filter(user=request.user, is_active=True)
    else:
        products_in_basket = ProductInBasket.objects.filter(session_key=session_key, is_active=True)

    products_total_nmb = products_in_basket.count()

    return locals()
