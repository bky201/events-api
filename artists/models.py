from django.db import models
from django.contrib.auth.models import User


class Artist(models.Model):
    """
    Artist model, related to User
    """
    owner = models.OneToOneField(User, on_delete=models.CASCADE)
    speciality = models.CharField(max_length=255)
    email = models.EmailField(null=True, blank=True)
    hourly_rate = models.IntegerField()
    phone = models.CharField(max_length=50, null=True, blank=True)
    location = models.CharField(max_length=255, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        """
        Orders the objects by latest created first
        """
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.owner}'s Artist Details"