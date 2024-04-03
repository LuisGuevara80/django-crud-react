from rest_framework import viewsets
from .serializer import TaskSerializer
from .models import Task

# Define a view set for Task objects, providing automatic CRUD functionality
class TaskView(viewsets.ModelViewSet):
    # Set the serializer class to handle Task serialization
    serializer_class = TaskSerializer
    # Queryset containing all Task objects from the database
    queryset = Task.objects.all()
