from django.contrib import admin
from .models import Product, Category


class ProductAdmin(admin.ModelAdmin):
    """ List of product fields to display ordered by sku """
    list_display = (
        'sku',
        'name',
        'category',
        'price',
        'image'
    )
    ordering = ('sku',)


class CategoryAdmin(admin.ModelAdmin):
    """ List of category fields to display """
    list_display = (
        'friendly_name',
        'name'
    )


admin.site.register(Product, ProductAdmin)
admin.site.register(Category, CategoryAdmin)
