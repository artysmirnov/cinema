from rest_framework import viewsets
from .models import Film
from .serializers import FilmSerializer


class FilmViewSet(viewsets.ModelViewSet):
    serializer_class = FilmSerializer

    def get_queryset(self):
        return Film.objects.all()

    def get_object(self):
        obj = Film.objects.get_object_by_public_id(self.kwargs['pk'])
        return obj
