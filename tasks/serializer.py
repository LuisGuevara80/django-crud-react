from rest_framework import serializers
from .models import Task

# Define a serializer for the Task class
class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        # Specify the model to serialize and the fields to include in the JSON representation
        model = Task
        # Here '__all__' is used to include all fields of the model
        fields = '__all__'
