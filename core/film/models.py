from django.db import models
from psycopg2.sql import NULL

from core.abstract.models import AbstractModel, AbstractManager

class FilmManager(AbstractManager):
    pass

class Film(AbstractModel):
    title = models.CharField(max_length=255)
    genre = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    rating = models.CharField(max_length=255)
    release_date = models.DateField()
    photo = models.ImageField(upload_to="poster/%Y/%m/%d", default=None, blank=True, null=True)
    class AgeLimit(models.TextChoices):
        ZERO = "0+"
        SIX = "6+"
        TWELVE = "12+"
        SIXTEEN = "16+"
        EIGHTEEN = "18+"

    age_limit = models.CharField(
        max_length=3,
        choices=AgeLimit,
    )
    object = FilmManager()

    class Meta:
        db_table = "'core.film'"