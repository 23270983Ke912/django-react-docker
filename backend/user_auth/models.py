from django.db import models
from django.contrib.auth.models import AbstractUser
from .validators import validate_name,validate_email
from django.utils.translation import gettext_lazy as _
from .managers import UserManager
from django.template.defaultfilters import slugify
from django.conf import settings
import os
# Create your models here.
class User(AbstractUser):
    name = models.CharField(max_length=255,validators=[validate_name])
    email = models.EmailField(_("email address"), unique=True, validators=[validate_email])
    password = models.CharField(max_length=255)
    
    username = None

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["name"]

    objects = UserManager()

    def __str__(self):
        return self.email
    

def get_image_filename(instance, filename):
    name = instance.product.name
    slug = slugify(name)
    return f"products/{slug}-{filename}"

class Profile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    avatar = models.ImageField(upload_to=get_image_filename, blank=True)
    bio = models.CharField(max_length=200, blank=True)

    def __str__(self):
        return self.user.email

    @property
    def filename(self):
        return os.path.basename(self.image.name)