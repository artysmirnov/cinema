from rest_framework import serializers

from core.abstract.serializers import AbstractSerializer
from core.rating.models import Rating


class RatingSerializer(AbstractSerializer):
    class Meta:
        model = Rating
        fields = ['film', 'rating']
