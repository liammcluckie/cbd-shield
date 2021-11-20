from django.db import models
from django.contrib.auth.models import User
from django.db.models import DateTimeField
from django.db.models.functions import Trunc

from products.models import Product


class ProductReview(models.Model):
    """
    Create product review fields
    Retrieve product and user Foreign Keys
    """
    product = models.ForeignKey(Product, related_name="reviews", on_delete=models.CASCADE)
    user = models.ForeignKey(User, related_name="reviews", on_delete=models.CASCADE)

    content = models.TextField(blank=False, null=False)
    stars = models.IntegerField()

    date_added = models.DateTimeField(auto_now_add=True)

    class Meta:
        """ Order reviews in DB by descending date added """
        ordering = ['-date_added']
