from django.contrib import admin

from core.film.admin import FilmAdmin
from core.film.models import Film
from core.genre.admin import GenreAdmin
from core.genre.models import Genre
from core.person.admin import PersonAdmin
from core.person.models import Person

admin.site.register(Film, FilmAdmin)
admin.site.register(Person, PersonAdmin)
admin.site.register(Genre, GenreAdmin)
