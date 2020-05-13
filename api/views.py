from rest_framework import viewsets, permissions
from api.serializer import CardSerializer
from api.models import Card


class CardView(viewsets.ModelViewSet):
    queryset = Card.objects.all()
    serializer_class = CardSerializer
    permission_classes = (permissions.AllowAny,)
