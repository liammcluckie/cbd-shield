from django.shortcuts import render, redirect, reverse
from django.contrib import messages
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.conf import settings


from .models import NewsletterRegister


def index(request):
    """ View to return index page """

    return render(request, 'home/index.html')


def add_user_signup(request):
    """
    Add users email to model DB
    On form submit send new user a welcome email
    """

    if request.method == 'POST':
        user_email = request.POST.get('newsletter_signup', '')
        newsletter = NewsletterRegister.objects.create(
            email=user_email)

        messages.success(request, 'Thanks for signing up to our newsletter. \
            Check your inbox soon for our welcome email!')

        welcome_email = user_email
        subject = render_to_string(
            'home/welcome_email/welcome_email_subject.txt')
        body = render_to_string(
            'home/welcome_email/welcome_email_body.txt',
            {'user_email': user_email, 'contact_email': settings.DEFAULT_FROM_EMAIL})
        send_mail(
            subject,
            body,
            settings.DEFAULT_FROM_EMAIL,
            [welcome_email]
        )

        return(redirect(reverse('home')))
    else:
        messages.error(request, 'Sorry there has been an error! Please \
            check your email and try again.')

        return(redirect(reverse('home')))
