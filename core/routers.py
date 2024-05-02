from rest_framework import routers
from core.auth.viewsets import RegisterViewSet, LoginViewSet, RefreshViewSet
from core.film.viewsets import FilmViewSet
from core.person.viewsets import PersonViewSet
from core.user.viewsets import UserViewSet



router = routers.SimpleRouter()


router.register(r'user', UserViewSet, basename='user')

router.register(r'auth/register', RegisterViewSet, basename='auth-register')
router.register(r'auth/login', LoginViewSet, basename='auth-login')
router.register(r'auth/refresh', RefreshViewSet, basename='auth-refresh')



router.register(r'film', FilmViewSet, basename='film')

router.register(r'person', PersonViewSet, basename='person')

urlpatterns = [
    *router.urls,
]