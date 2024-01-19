from django.contrib import admin
from .models import  *
@admin.register(student)
class stuent(admin.ModelAdmin):
    list_display=['id','name','roll','city',]



# Register your models here.
