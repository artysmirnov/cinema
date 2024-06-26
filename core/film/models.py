from django.core.exceptions import ObjectDoesNotExist
from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models
from django.http import Http404
from psycopg2.sql import NULL

from core.abstract.models import AbstractModel, AbstractManager
from core.genre.models import Genre
from core.person.models import Person


class FilmManager(AbstractManager):
    def get_object_by_public_id(self, public_id):
        try:
            instance = self.get(public_id=public_id)
            return instance
        except (ObjectDoesNotExist, ValueError, TypeError):
            return Http404


class Film(AbstractModel):
    title = models.CharField(max_length=255)
    genre = models.ManyToManyField(Genre)
    country = models.CharField(max_length=255)
    average_rating = models.PositiveIntegerField(default=None, validators=[MinValueValidator(1), MaxValueValidator(10)])
    release_date = models.DateField()
    photo = models.ImageField(upload_to="poster/%Y/%m/%d", default=None, blank=True, null=True)
    actors = models.ManyToManyField(Person)
    slug = models.SlugField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    active = models.BooleanField(default=True)

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
    objects = FilmManager()

    class Meta:
        db_table = "'core.film'"
