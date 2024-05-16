from django.db.models import Avg
from .models import Film, Rating


def update_film_rating(film_id):
    film = Film.objects.get(pk=film_id)
    average_rating = Rating.objects.filter(film=film).aggregate(Avg('rating'))['rating__avg']
    film.average_rating = average_rating
    film.save()
