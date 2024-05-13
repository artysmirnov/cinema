from core.abstract.serializers import AbstractSerializer
from core.person.models import Person


class PersonSerializer(AbstractSerializer):
    class Meta:
        model = Person
        fields = '__all__'