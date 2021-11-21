from django.db import models
from django.urls import reverse

from datetime import datetime


class BlogPost(models.Model):
    title = models.CharField(max_length=255)
    image = models.ImageField(blank=True, null=True)
    text = models.TextField()
    description = models.TextField(blank=True, null=True)
    published = models.BooleanField(default=False)

    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    pub_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        ordering = ['-pub_date']

    def __str__(self):
        return self.title
    
