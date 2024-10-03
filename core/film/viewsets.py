from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import Film
from .serializers import FilmSerializer, AllFilmsSerializer
from ..abstract.viewsets import AbstractViewSet
from ..auth.permissions import UserPermission


class AllFilmsViewSet(AbstractViewSet):
    http_method_names = ('post', 'get', 'put', 'delete')
    serializer_class = FilmSerializer
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

    @action(methods=['post'], detail=True, permission_classes=[UserPermission])
    def like(self, request, *args, **kwargs):
        film = self.get_object()
        user = self.request.user

        user.like(film)
        serializer = self.serializer_class(film)
        return Response(serializer.data, status=status.HTTP_200_OK)

    @action(methods=['post'], detail=True,permission_classes=[UserPermission])
    def remove_like(self, request, *args, **kwargs):
        film = self.get_object()
        user = self.request.user
        user.remove_like(film)
        serializer = self.serializer_class(film)
        return Response(serializer.data, status=status.HTTP_200_OK)


class LikedFilmsViewSet(AbstractViewSet):
    http_method_names = ('get',)
    serializer_class = FilmSerializer

    def get_queryset(self):
        user = self.request.user
        return user.liked_films.all()


