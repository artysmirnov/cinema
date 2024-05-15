from django.db import models

from django.core.validators import MaxValueValidator, MinValueValidator
from core.abstract.models import AbstractModel
from core.film.models import Film
from core.user.models import User


class Score(AbstractModel):
    film = models.ManyToManyField(Film)
    person = models.ManyToManyField(User)
    score = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)])
