from django.contrib import admin

from core.film.admin import FilmAdmin
from core.film.models import Film
from core.person.admin import PersonAdmin
from core.person.models import Person
from core.score.models import Score

admin.site.register(Film, FilmAdmin)
admin.site.register(Person, PersonAdmin)
admin.site.register(Score)
