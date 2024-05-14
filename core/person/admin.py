from django.contrib import admin

from core.person.models import Person


class PersonAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'last_name']
    search_fields = ['first_name', 'last_name']

    class Meta:
        model = Person
