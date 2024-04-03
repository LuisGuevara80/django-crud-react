from django.contrib import admin
from .models import Task

admin.site.register(Task) # Registers the Task model to appear in the Admin menu.
