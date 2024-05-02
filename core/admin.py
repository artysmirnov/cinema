from django.contrib import admin

from core.film.models import Film
from core.person.models import Person

admin.site.register(Film)
admin.site.register(Person)
