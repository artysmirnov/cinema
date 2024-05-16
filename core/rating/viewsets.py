from django.db.models import Avg
from rest_framework import status
from rest_framework.response import Response

from .models import Film, Rating
from .serializers import RatingSerializer
from ..abstract.viewsets import AbstractViewSet


def update_film_rating(film_id):
    film = Film.objects.get(pk=film_id)
    average_rating = Rating.objects.filter(film=film).aggregate(Avg('rating'))['rating__avg']
    film.average_rating = average_rating
    film.save()


class RatingViewSet(AbstractViewSet):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
        film_id = serializer.data['film']
        update_film_rating.delay(film_id)  # Используем задачу для выполнения в фоне

        return Response(serializer.data, status=status.HTTP_201_CREATED)
