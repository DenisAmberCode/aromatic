from django.db import models


class ProductCategory(models.Model):
    name = models.CharField(max_length=256, blank=True, null=True, default=None)
    is_active=models.BooleanField(default=True)

    def __str__(self):
    	return "%s" % (self.name)

    class Meta:
    	verbose_name = "Категоря товара"
    	verbose_name_plural = "Категория товаров"

class Product(models.Model):
    name=models.CharField(max_length=256, blank=True, null=True, default=None)
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    price_with_discount = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    discount = models.IntegerField(default=0)
    category = models.ForeignKey(ProductCategory, on_delete=models.CASCADE, blank=True, null=True, default=None)
    description=models.TextField(blank=True, null=True, default=None)
    short_description=models.TextField(blank=True, null=True, default=None)
    is_active=models.BooleanField(default=True)
    created = models.DateTimeField(auto_now_add=True, auto_now=False)
    updated = models.DateTimeField(auto_now_add=False, auto_now=True)

    def __str__(self):
    	return "%s" % (self.name)

    class Meta:
    	verbose_name = "Товар"
    	verbose_name_plural = "Товары"

    def save(self, *args, **kwargs):
        price = self.price

        self.price_with_discount = price - (price / 100 * int(self.discount))

        super(Product, self).save(*args, **kwargs)

class ProductImg(models.Model):
    product=models.ForeignKey(Product, on_delete=models.CASCADE, blank=True, null=True, default=None)
    image=models.ImageField(upload_to='products_images')
    is_main=models.BooleanField(default=False)
    is_active=models.BooleanField(default=True)
    created = models.DateTimeField(auto_now_add=True, auto_now=False)
    updated = models.DateTimeField(auto_now_add=False, auto_now=True)

    def __str__(self):
    	return "%s" % (self.id)

    class Meta:
    	verbose_name = "Фотография"
    	verbose_name_plural = "Фотографии"
