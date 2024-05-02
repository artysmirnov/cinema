from django.shortcuts import render
from rest_framework.permissions import AllowAny

from core.abstract.viewsets import AbstractViewSet
from core.person.models import Person
from core.person.serializers import PersonSerializer


class PersonViewSet(AbstractViewSet):
    http_method_names = ('get',)
    permission_classes = (AllowAny,)
    serializer_class = PersonSerializer

    def get_queryset(self):
        return Person.objects.all()
