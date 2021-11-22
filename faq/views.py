from django.shortcuts import render

from .models import Faq


def all_faq(reqest):
    faqs = Faq.objects.all()

    context = {
        'faqs': faqs,
    }

    return render(request, 'faq/faq.html', context)
