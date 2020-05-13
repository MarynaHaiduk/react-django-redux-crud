from django.db import models
from django.contrib.auth.models import User


class Card(models.Model):
    title = models.CharField(verbose_name="Restaurant name", max_length=200)
    foodtype = models.CharField(verbose_name="Food type", max_length=200)
    country = models.CharField(verbose_name="Country", max_length=100)
    street = models.CharField(verbose_name="Street", max_length=100)
    city = models.CharField(verbose_name="City", max_length=100)
    zip = models.IntegerField(verbose_name="Zip")
    image = models.ImageField(upload_to='static/images')
    alt = models.CharField(max_length=100, blank=True, null=True)
    rating = models.IntegerField(verbose_name="Rating")
    slug = models.SlugField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-created_at']
