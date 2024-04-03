from django.db import models
from django.db.models import CharField, TextField, BooleanField

class Task(models.Model):
    title = CharField(max_length=200)
    description = TextField(blank=True)
    done = BooleanField(default=False) # By default, it's going to be False when created.

    def __str__(self):
        return self.title # Returns the title of the task for display in the admin interface.


