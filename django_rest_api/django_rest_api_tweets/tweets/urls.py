
from django.urls import path 
from tweets import views

# define the urls
urlpatterns = [
    path('tweets/', views.tweets),
    path('tweets/<int:pk>/', views.tweet_detail),
]