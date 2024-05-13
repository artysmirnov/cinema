from django.contrib import admin

from core.film.models import Film


class FilmAdmin(admin.ModelAdmin):
    list_display = ['title', 'active']
    search_fields = ['title']
    list_filter = ['active']
    class Meta:
        model = Film
