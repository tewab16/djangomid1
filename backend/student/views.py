from django.shortcuts import render
from rest_framework.generics import ListAPIView
from rest_framework.generics import CreateAPIView
from rest_framework.generics import DestroyAPIView
from rest_framework.generics import UpdateAPIView
from student.serializer import StudentSerializer
from student.models import Student

# Create your views here.
class ListStudentAPIView(ListAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

class CreateStudentAPIView(CreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

