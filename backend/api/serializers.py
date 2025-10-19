from api.models import Team, Glossary

from rest_framework import serializers

class TeamSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Team
        fields = ['name']

class GlossarySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Glossary
        fields = ['acronym', 'definition']