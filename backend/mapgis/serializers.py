from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import Suburbs
from django.utils import timezone


class SuburbGISSerializer(serializers.ModelSerializer):
    """
    Serializer class to serialize CustomUser model.
    """

    class Meta:
        model = Suburbs
        fields = ("sal_code21","wkb_geometry")
