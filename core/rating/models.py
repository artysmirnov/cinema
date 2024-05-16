from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models

from core.film.models import Film
from core.user.models import User


class Rating(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    film = models.ForeignKey(Film, on_delete=models.CASCADE)
    rating = models.PositiveSmallIntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)])
