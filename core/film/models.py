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
            raise Http404(f"No film found with public ID: {public_id}")


class Film(AbstractModel):
    title = models.CharField(max_length=255)
    genre = models.ManyToManyField(Genre, related_name="films")
    country = models.CharField(max_length=255)

    average_rating = models.PositiveIntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)])

    release_date = models.DateField()
    photo = models.ImageField(upload_to="poster/%Y/%m/%d", blank=True, null=True)
    actors = models.ManyToManyField(Person, related_name="films")
    slug = models.SlugField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    active = models.BooleanField(default=True)

    class AgeLimit(models.TextChoices):
        ZERO = "0+", "Zero years"
        SIX = "6+", "Six years"
        TWELVE = "12+", "Twelve years"
        SIXTEEN = "16+", "Sixteen years"
        EIGHTEEN = "18+", "Eighteen years"

    age_limit = models.CharField(
        max_length=3,
        choices=AgeLimit,
    )

    objects = FilmManager()

    class Meta:
        db_table = 'core.film'
        verbose_name = 'Film'
        verbose_name_plural = 'Films'

    def __str__(self):
        return self.title
