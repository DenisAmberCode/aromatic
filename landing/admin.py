from django.contrib import admin
from .models import *

class SubAdmin(admin.ModelAdmin):
	#list_display = [field.name for field in Sub._meta.fields]
	list_display = ["id", "name", "email"]
	exclude = []
	fields = []
	list_filter = ["name"]
	search_fields = ["id","name", "email"]
	#inlines = [FieldMappingInline]

	class Meta:
		model = Sub


admin.site.register(Sub,SubAdmin)
