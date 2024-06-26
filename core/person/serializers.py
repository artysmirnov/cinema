from core.abstract.serializers import AbstractSerializer
from core.person.models import Person


class PersonSerializer(AbstractSerializer):
    class Meta:
        model = Person
        fields = ['public_id', 'first_name', 'last_name', 'role', 'bio']
