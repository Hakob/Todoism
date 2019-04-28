"""todoism URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.urls import path, include
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static

from rest_framework import routers  # Import the router

from apps.todo.views import TaskViewSet  # Import the view we just created

router = routers.DefaultRouter()  # Define the router with our view
router.register(r'tasks', TaskViewSet)

urlpatterns = [
    path('', TemplateView.as_view(template_name="index.html")),
    path('', include(router.urls)),  # Add the view to the patterns
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

