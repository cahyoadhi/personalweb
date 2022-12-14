from pyexpat.errors import messages
from django.db import models

# Create your models here.
class Email(models.Model):
    name = models.CharField(max_length=50, null=True, blank=True)
    subject = models.CharField(max_length=50, null=True, blank=True)
    message = models.TextField()
    dates = models.DateField(auto_now_add=True, null=True, blank=True)

    def __str__(self):
        return str(self.name) 