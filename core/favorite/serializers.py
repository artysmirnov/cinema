from core.abstract.serializers import AbstractSerializer
from core.favorite.models import Favorite
from rest_framework import serializers


class FavoriteFilmSerializer(AbstractSerializer):
    class Meta:
        model = Favorite
        fields = ['film']

    def validate_film(self, value):
        if Favorite.objects.filter(user=self.context['request'].user, film=value).exists():
            raise serializers.ValidationError("This film is already in favorites.")
        return value