from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import Suburbs,SuburbData
from django.utils import timezone


class SuburbDataSerializer(serializers.ModelSerializer):


    class Meta:
        model = SuburbData
        fields = "__all__"
