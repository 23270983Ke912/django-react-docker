from django.db import models

# Create your models here.
class Summary(models.Model):
    location_of_fire = models.CharField(max_length=255, null=True, blank=True)
    safe_to_leave = models.CharField(max_length=255, null=True, blank=True)
    direction_and_speed = models.CharField(max_length=255, null=True, blank=True)
    firefighters_activity= models.CharField(max_length=255, null=True, blank=True)
    number_of_firefighters= models.CharField(max_length=255, null=True, blank=True)
    what_is_on_fire= models.CharField(max_length=255, null=True, blank=True)
    google_map= models.JSONField(default=list, null=True, blank=True)
    def __str__(self):
        return self.location_of_fire


