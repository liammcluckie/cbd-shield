from django.contrib import admin

from .models import NewsletterRegister


class NewsletterAdmin(admin.ModelAdmin):
    list_display = (
        'email',
    )


admin.site.register(NewsletterRegister, NewsletterAdmin)
