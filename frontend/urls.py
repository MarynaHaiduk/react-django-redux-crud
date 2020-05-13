from django.urls import path
from frontend import views
from django.contrib.auth.views import LoginView

urlpatterns = [
    path('', views.index),
    # path('login/', LoginView.as_view(), name='login'),
]