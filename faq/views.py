from django.shortcuts import render

from .models import Faq


def all_faq(request):
    """ Retrieve and pass all faq's from model to template """
    faqs = Faq.objects.all()

    context = {
        'faqs': faqs,
    }

    return render(request, 'faq/faq.html', context)
