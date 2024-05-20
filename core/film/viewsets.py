from rest_framework import viewsets
from .models import Film
from .serializers import FilmSerializer, AllFilmsSerializer
from ..abstract.viewsets import AbstractViewSet


class AllFilmsViewSet(AbstractViewSet):
    queryset = Film.objects.all()

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return FilmSerializer
        else:
            return AllFilmsSerializer

    def get_queryset(self):
        return Film.objects.all()

    def get_object(self):
        obj = Film.objects.get_object_by_public_id(self.kwargs['pk'])
        return obj
