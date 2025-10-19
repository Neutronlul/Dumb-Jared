from django.shortcuts import render
from rest_framework import viewsets
from api.models import Team
from api.serializers import TeamSerializer

# Create your views here.
class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer