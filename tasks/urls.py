from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from tasks import views

# Create a default router to handle API routes
router = routers.DefaultRouter()

# Register the 'TaskView' view under the 'tasks' route in the router
# The third argument ('tasks') is optional and provides a name for this route
router.register(r'tasks', views.TaskView, 'tasks')

#api versioning
urlpatterns = [
    path("api/v1/", include(router.urls)), # Include router-defined URLs
    path('docs/', include_docs_urls(title='Tasks API')),
]