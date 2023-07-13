from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import User
from django.utils import timezone


class CustomUserSerializer(serializers.ModelSerializer):
    """
    Serializer class to serialize CustomUser model.
    """

    class Meta:
        model = User
        fields = ("id", "name", "email", "is_staff", "is_superuser", "last_login")

class UserRegisterationSerializer(serializers.ModelSerializer):
    """
    Serializer class to serialize registration requests and create a new user.
    """

    class Meta:
        model = User
        fields = ("id", "name", "email", "password")
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)
    
class UserLoginSerializer(serializers.Serializer):
    """
    Serializer class to authenticate users with email and password.
    """
    
    email = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            user.last_login = timezone.now().strftime("%Y-%m-%d %H:%M:%S")
            user.save()
            return user
        raise serializers.ValidationError("Incorrect Credentials")
