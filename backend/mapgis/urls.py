from django.urls import path
from . import views

urlpatterns = [
    path("getgis/", views.GisAPIView.as_view(), name="get-gis"),
    # path("login/", views.UserLoginAPIView.as_view(), name="login-user"),
    # path("token/refresh/", TokenRefreshView.as_view(), name="token-refresh"),
    # path("logout/", views.UserLogoutAPIView.as_view(), name="logout-user"),
    # path("", views.UserAPIView.as_view(), name="user-info"),
]