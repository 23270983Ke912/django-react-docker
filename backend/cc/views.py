from django.shortcuts import render
from rest_framework.response import Response

from rest_framework.permissions import AllowAny, IsAuthenticated
from . import serializers
from .models import Summary
from rest_framework import status

from rest_framework.generics import GenericAPIView
# Create your views here.
class GetsummaryinfoAPIView(GenericAPIView):


    permission_classes = (AllowAny,)
    serializer_class = serializers.RegisterationSummarySerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        data = serializer.data
        return Response(data, status=status.HTTP_201_CREATED)
    def get(self, request, *args, **kwargs):
        # Check if an object exists based on some condition (e.g., filter by a field)
        instance = Summary.objects.first()  # Modify this filter condition
        if instance is not None:
            serializer = self.get_serializer(instance)
            return Response(serializer.data)
        else:
            return Response({'message': 'Object not found'}, status=status.HTTP_404_NOT_FOUND)

    
    def put(self, request, *args, **kwargs):
        instance = Summary.objects.first() 
        serializer = self.get_serializer(instance, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        data = serializer.data
        return Response(data, status=status.HTTP_200_OK)