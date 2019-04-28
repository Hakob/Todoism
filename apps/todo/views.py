from .models import Task  # Import our Task model
from .serializers import TaskSerializer  # Import the serializer we just created

# Import django rest framework functions

from rest_framework import viewsets


class TaskViewSet(viewsets.ModelViewSet):  # Create a class based view
    """
    API endpoint that allows tasks to be viewed or edited.
    """
    # authentication_classes = (BasicAuthentication,)
    # permission_classes = (IsAuthenticated,)
    queryset = Task.objects.all()  # Select all tasks
    serializer_class = TaskSerializer  # Serialize data
