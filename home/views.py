from django.shortcuts import render, redirect, reverse
from django.contrib import messages


from .models import NewsletterRegister


def index(request):
    """ View to return index page """

    return render(request, 'home/index.html')


def add_user_signup(request):
    """
    Add users email to model DB
    """

    if request.method == 'POST':
        user_email = request.POST.get('newsletter_signup', '')
        newsletter = NewsletterRegister.objects.create(
            email=user_email)

        messages.success(request, 'Thanks for signing up to our newsletter. \
            Check your inbox soon for our welcome email!')

        return(redirect(reverse('home')))
    else:
        messages.error(request, 'Sorry there has been an error! Please \
            check your email and try again.')

        return(redirect(reverse('home')))
