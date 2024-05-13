from rest_framework import serializers
from rest_framework.exceptions import ValidationError

from core.abstract.serializers import AbstractSerializer

from core.film.models import Film
from core.person.models import Person
from core.person.serializers import PersonSerializer


class FilmSerializer(AbstractSerializer):
    actors = serializers.StringRelatedField(many=True)

    class Meta:
        model = Film
        fields = ['title', 'actors', 'age_limit']
