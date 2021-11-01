from django import template
from django.urls import reverse


register = template.Library()


@register.simple_tag
def anchor(url_name, section_id):
    """ Create custom url in order to link to section id's """
    return reverse(url_name) + '#' + section_id
