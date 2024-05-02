from rest_framework import serializers
from rest_framework.exceptions import ValidationError

from core.abstract.serializers import AbstractSerializer

from core.film.models import Film
from core.person.models import Person


class FilmSerializer(AbstractSerializer):

    class Meta:
        model = Film
        fields = ['id', 'title', 'genre', 'country', 'rating', 'age_limit', 'release_date', 'photo', 'actors']
