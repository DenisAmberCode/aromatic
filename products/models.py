from django.db import models
from django.db.models.signals import post_save, pre_save, pre_delete, post_delete


class ProductCategoryInNavbar(models.Model):
    name = models.CharField(max_length=256, blank=True, null=True, default=None)
    nameEnglish = models.CharField(max_length=256, blank=True, null=True, default=None)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return "%s" % (self.name)

    class Meta:
        verbose_name = "Категория товара в Navbar"
        verbose_name_plural = "Категории товаров в Navbar"


class ProductCategory(models.Model):
    name = models.CharField(max_length=256, blank=True, null=True, default=None)
    nameEnglish = models.CharField(max_length=256, blank=True, null=True, default=None)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return "%s" % (self.name)

    class Meta:
        verbose_name = "Основная категория товара"
        verbose_name_plural = "Основные категории товаров"


class ProductSubCategory(models.Model):
    name = models.CharField(max_length=256, blank=True, null=True, default=None)
    nameEnglish = models.CharField(max_length=256, blank=True, null=True, default=None)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return "%s" % (self.name)

    class Meta:
        verbose_name = "Подкатегория товара"
        verbose_name_plural = "Подкатегории товаров"


class Product(models.Model):
    name = models.CharField(max_length=256, blank=True, null=True, default=None)
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    price_with_discount = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    discount = models.IntegerField(default=0)
    categoryInNavbar = models.ManyToManyField(ProductCategoryInNavbar, blank=True)
    category = models.ManyToManyField(ProductCategory, blank=True)
    subCategory = models.ManyToManyField(ProductSubCategory, blank=True)
    description = models.TextField(blank=True, null=True, default=None)
    short_description = models.TextField(blank=True, null=True, default=None)
    is_active = models.BooleanField(default=True)
    is_novelty = models.BooleanField(default=False)
    is_best_seller = models.BooleanField(default=False)
    is_exclusively_online = models.BooleanField(default=False)
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

def product_post_save(sender, instance, created, **kwargs):
    if instance.is_novelty:
        new_novelty, created = Novelty.objects.get_or_create(product=instance)
    elif Novelty.objects.filter(product__id=instance.id, product__is_active=True).exists():
        Novelty.objects.filter(product__id=instance.id, product__is_active=True).delete()

    if instance.is_best_seller:
        new_best_seller, created = BestSeller.objects.get_or_create(product=instance)
    elif BestSeller.objects.filter(product__id=instance.id, product__is_active=True).exists():
        BestSeller.objects.filter(product__id=instance.id, product__is_active=True).delete()

    if instance.is_exclusively_online:
        new_exclusively_online, created = ExclusivelyOnline.objects.get_or_create(product=instance)
    elif ExclusivelyOnline.objects.filter(product__id=instance.id, product__is_active=True).exists():
            ExclusivelyOnline.objects.filter(product__id=instance.id, product__is_active=True).delete()


post_save.connect(product_post_save, sender=Product)


class ProductImg(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, blank=True, null=True, default=None)
    image = models.ImageField(upload_to='products_images')
    is_main = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    created = models.DateTimeField(auto_now_add=True, auto_now=False)
    updated = models.DateTimeField(auto_now_add=False, auto_now=True)

    def __str__(self):
        return "%s" % (self.id)

    class Meta:
        verbose_name = "Фотография"
        verbose_name_plural = "Фотографии"


class Novelty(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, blank=True, null=True, default=None)

    def __str__(self):
        return "%s" % (self.id)

    class Meta:
        verbose_name = "Новинка"
        verbose_name_plural = "Новинки"

def novelty_pre_save(sender, instance, **kwargs):
    if instance.id:
        old_product = Novelty.objects.get(id=instance.id).product
        old_product.is_novelty = False
        old_product.save(force_update=True)


pre_save.connect(novelty_pre_save, sender=Novelty)

def novelty_post_save(sender, instance, created, **kwargs):
    if not instance.product.is_novelty:
        instance.product.is_novelty = True
        instance.product.save(force_update=True)


post_save.connect(novelty_post_save, sender=Novelty)

def novelty_post_delete(sender, instance, **kwargs):
    if instance.product.is_novelty:
        instance.product.is_novelty = False
        instance.product.save(force_update=True)


post_delete.connect(novelty_post_delete, sender=Novelty)


class BestSeller(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, blank=True, null=True, default=None)

    def __str__(self):
        return "%s" % (self.id)

    class Meta:
        verbose_name = "Бестселлер"
        verbose_name_plural = "Бестселлеры"

def best_seller_pre_save(sender, instance, **kwargs):
    if instance.id:
        old_product = BestSeller.objects.get(id=instance.id).product
        old_product.is_best_seller = False
        old_product.save(force_update=True)


pre_save.connect(best_seller_pre_save, sender=BestSeller)

def best_seller_post_save(sender, instance, created, **kwargs):
    if not instance.product.is_best_seller:
        instance.product.is_best_seller = True
        instance.product.save(force_update=True)


post_save.connect(best_seller_post_save, sender=BestSeller)

def best_seller_post_delete(sender, instance, **kwargs):
    if instance.product.is_best_seller:
        instance.product.is_best_seller = False
        instance.product.save(force_update=True)


post_delete.connect(best_seller_post_delete, sender=BestSeller)


class ExclusivelyOnline(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, blank=True, null=True, default=None)

    def __str__(self):
        return "%s" % (self.id)

    class Meta:
        verbose_name = "Эксклюзивный товар онлайн"
        verbose_name_plural = "Эксклюзивные товары онлайн"

def exclusively_online_pre_save(sender, instance, **kwargs):
    if instance.id:
        old_product = ExclusivelyOnline.objects.get(id=instance.id).product
        old_product.is_exclusively_online = False
        old_product.save(force_update=True)


pre_save.connect(exclusively_online_pre_save, sender=ExclusivelyOnline)

def exclusively_online_post_save(sender, instance, created, **kwargs):
    if not instance.product.is_exclusively_online:
        instance.product.is_exclusively_online = True
        instance.product.save(force_update=True)


post_save.connect(exclusively_online_post_save, sender=ExclusivelyOnline)

def exclusively_online_post_delete(sender, instance, **kwargs):
    if instance.product.is_exclusively_online:
        instance.product.is_exclusively_online = False
        instance.product.save(force_update=True)


post_delete.connect(exclusively_online_post_delete, sender=ExclusivelyOnline)
