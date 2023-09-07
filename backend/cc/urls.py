from django.urls import  path
from cc import views

urlpatterns = [
    path('', views.GetsummaryinfoAPIView.as_view(), name = "summary"),

]