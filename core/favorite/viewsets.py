from rest_framework import viewsets
from rest_framework.response import Response
from .models import Favorite
from .serializers import FavoriteFilmSerializer


class FavoriteFilmViewSet(viewsets.ModelViewSet):
    queryset = Favorite.objects.all()
    serializer_class = FavoriteFilmSerializer

    def get_queryset(self):
        return Favorite.objects.filter(user=self.request.user)  # Фильтруем queryset для текущего пользователя

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
