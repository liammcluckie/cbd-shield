from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='home'),
    path('home/', views.add_user_signup, name='add_user_signup'),
]
