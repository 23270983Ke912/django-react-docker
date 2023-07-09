from django.db import models
from django.contrib.auth.models import AbstractUser
from .validators import validate_name,validate_email

# Create your models here.
class User(AbstractUser):
    name = models.CharField(max_length=255,validators=[validate_name])
    email = models.CharField(max_length=255, unique=True,validators=[validate_email])
    password = models.CharField(max_length=255)
    username = None

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []