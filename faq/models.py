from django.db import models


class Faq(models.Model):
    """ Create faq fields in DB """
    question = models.TextField()
    answer = models.TextField()
    item_id_number = models.CharField(default='One', max_length=20, null=False, blank=False)

    def __str__(self):
        return self.question
