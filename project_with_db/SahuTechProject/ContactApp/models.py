from django.db import models

# Create your models here.
class ContactUs(models.Model):
    name = models.CharField(max_length=30)
    email = models.CharField(max_length=30)
    phone = models.CharField(max_length=30, blank=True)
    message = models.CharField(max_length=300, blank=True)

    def __str__(self):
        return self.name
