from django.shortcuts import render
from django.contrib.auth import get_user_model
from rest_framework.response import Response

from rest_framework.permissions import AllowAny, IsAuthenticated
from . import serializers

from rest_framework import status

from rest_framework.generics import GenericAPIView

from .models import Suburbs

class GisAPIView(GenericAPIView):
    """
    Get, Update user information
    """

    permission_classes = (IsAuthenticated,)
    serializer_class = serializers.SuburbGISSerializer

 
    def get_queryset(self):
        # This method should return the queryset (list of objects) you want to retrieve.
        # For example, to retrieve all suburbs:
        return Suburbs.objects.all().first()

    def get(self, request, *args, **kwargs):
        # Handle the GET request here.
        suburbs = self.get_queryset()
        serializer = self.serializer_class(suburbs)  # Use many=True here
   
        return Response(serializer.data, status=status.HTTP_200_OK)