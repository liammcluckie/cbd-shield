from django.shortcuts import render, redirect, reverse, get_object_or_404
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth.decorators import login_required

from .models import ProductReview
from products.models import Product


@login_required
def add_product_review(request, product_id):
    """
    Get product object
    Retrieve review form data and create review in DB
    """
    product = get_object_or_404(Product, pk=product_id)

    if request.method == 'POST' and request.user.is_authenticated:
        stars = request.POST.get('stars', '')
        content = request.POST.get('content', '')
        review = ProductReview.objects.create(
            product=product, user=request.user, stars=stars, content=content)
        messages.success(request, 'Thanks! You successfully added a review.')

        return redirect(reverse('single_product', args=[product.id]))
    else:
        messages.error(request, 'Sorry an error has occurred. Please \
            try again.')

        return redirect(reverse('single_product', args=[product.id]))
