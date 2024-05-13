from rest_framework import viewsets
from .models import Film
from .serializers import FilmSerializer

class FilmViewSet(viewsets.ModelViewSet):
    serializer_class = FilmSerializer

    def get_queryset(self):
        return FilmSerializer(Film.objects.prefetch_related('actors').all().filter(active=True), many=True).data
