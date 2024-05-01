from rest_framework.permissions import IsAdminUser, AllowAny
from rest_framework.response import Response
from rest_framework import status

from core.abstract.viewsets import AbstractViewSet
from core.film.models import Film
from core.film.serializers import FilmSerializer


class FilmViewSet(AbstractViewSet):
    http_method_names = ('get',)
    permission_classes = (AllowAny,)
    serializer_class = FilmSerializer

    def get_queryset(self):
        return Film.objects.all()

