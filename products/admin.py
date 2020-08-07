from django.contrib import admin
from .models import *

class ProductImgInline(admin.TabularInline):
	model = ProductImg
	extra=0

class ProductCategoryInNavbarAdmin(admin.ModelAdmin):
	list_display = [field.name for field in ProductCategoryInNavbar._meta.fields]

	class Meta:
		model = ProductCategoryInNavbar
admin.site.register(ProductCategoryInNavbar,ProductCategoryInNavbarAdmin)

class ProductCategoryAdmin(admin.ModelAdmin):
	list_display = [field.name for field in ProductCategory._meta.fields]

	class Meta:
		model = ProductCategory
admin.site.register(ProductCategory,ProductCategoryAdmin)

class ProductSubCategoryAdmin(admin.ModelAdmin):
	list_display = [field.name for field in ProductSubCategory._meta.fields]

	class Meta:
		model = ProductSubCategory
admin.site.register(ProductSubCategory,ProductSubCategoryAdmin)

class ProductAdmin(admin.ModelAdmin):
	list_display = [field.name for field in Product._meta.fields]
	fieldsets = (
		(None, {
			'fields': ('name', 'price', 'price_with_discount', 'discount', 'categoryInNavbar','category', 'subCategory', 'description',
					   'short_description', ('is_active', 'is_novelty', 'is_best_seller', 'is_exclusively_online'))
		}),
	)
	inlines = [ProductImgInline]

	class Meta:
		model = Product
admin.site.register(Product,ProductAdmin)

class ProductImgAdmin(admin.ModelAdmin):
	list_display = [field.name for field in ProductImg._meta.fields]

	class Meta:
		model = ProductImg
admin.site.register(ProductImg,ProductImgAdmin)

class NoveltyAdmin(admin.ModelAdmin):
	list_display = [field.name for field in Novelty._meta.fields]

	class Meta:
		model = Novelty
admin.site.register(Novelty,NoveltyAdmin)

class BestSellerAdmin(admin.ModelAdmin):
	list_display = [field.name for field in BestSeller._meta.fields]

	class Meta:
		model = BestSeller
admin.site.register(BestSeller,BestSellerAdmin)

class ExclusivelyOnlineAdmin(admin.ModelAdmin):
	list_display = [field.name for field in ExclusivelyOnline._meta.fields]

	class Meta:
		model = ExclusivelyOnline
admin.site.register(ExclusivelyOnline,ExclusivelyOnlineAdmin)

