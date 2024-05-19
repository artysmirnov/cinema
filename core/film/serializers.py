from rest_framework import serializers
from rest_framework.exceptions import ValidationError

from core.abstract.serializers import AbstractSerializer

from core.film.models import Film
from core.person.models import Person
from core.person.serializers import PersonSerializer


class FilmSerializer(AbstractSerializer):
    actors = PersonSerializer(many=True)

    class Meta:
        model = Film
        fields = ['public_id', 'title', 'genre', 'country', 'release_date', 'photo', 'description', 'actors',
                  'age_limit']
