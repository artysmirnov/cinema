from django.contrib import admin

from core.genre.models import Genre


class GenreAdmin(admin.ModelAdmin):
    list_display = ['genre']
    class Meta:
        model = Genre
