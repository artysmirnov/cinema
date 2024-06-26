from django.db import models

from core.abstract.models import AbstractModel


class Genre(AbstractModel):
    genre = models.CharField(max_length=50)

    def __str__(self):
        return self.genre
