from django.db import models


class NewsletterRegister(models.Model):
    """
    Add user email to newsletter model
    """
    email = models.EmailField(max_length=254, null=False, blank=False)

    class Meta:
        """ Order user emails by date added """
        ordering = ['-email']
