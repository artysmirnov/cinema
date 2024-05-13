from django.contrib import admin

from core.film.admin import FilmAdmin
from core.film.models import Film
from core.person.models import Person

admin.site.register(Film, FilmAdmin)
admin.site.register(Person)
