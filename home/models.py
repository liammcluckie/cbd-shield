from django.db import models
from django.db.models import DateTimeField



class NewsletterRegister(models.Model):
    """
    Add user email to newsletter model
    """
    email = models.EmailField(max_length=254, null=False, blank=False)
    date_added = models.DateTimeField(auto_now_add=True)

    class Meta:
        """ Order user emails by date added """
        ordering = ['-date_added']
