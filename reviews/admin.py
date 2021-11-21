from django.contrib import admin

from .models import ProductReview

class ReviewAdmin(admin.ModelAdmin):
    list_display = (
        'product',
        'user',
        'stars'
    )

admin.site.register(ProductReview, ReviewAdmin)
