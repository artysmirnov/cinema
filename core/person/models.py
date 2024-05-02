from django.db import models

from core.abstract.models import AbstractModel


class Person(AbstractModel):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)

    class Role(models.TextChoices):
        ACTOR = "actor"
        DIRECTOR = "director"
        PRODUCER = "producer"
        OPERATOR = "operator"

    role = models.CharField(
        choices=Role
    )

    bio = models.TextField(null=True)

