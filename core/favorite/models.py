from django.db import models

from core.abstract.models import AbstractModel
from core.film.models import Film
from core.user.models import User


class Favorite(AbstractModel):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    film = models.ForeignKey(Film, on_delete=models.CASCADE)
