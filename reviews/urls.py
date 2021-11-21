from django.urls import path
from . import views


urlpatterns = [
    path('review/<product_id>/', views.add_product_review, name='add_product_review'),
]
