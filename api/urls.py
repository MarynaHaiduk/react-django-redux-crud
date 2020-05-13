from rest_framework import routers
from api.views import CardView


router = routers.SimpleRouter()
router.register("card", CardView, "card")
urlpatterns = router.urls
