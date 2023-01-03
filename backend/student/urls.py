from django.urls import path
from student import views

urlpatterns = [
    path("",views.ListStudentAPIView.as_view(),name="student_list"),
    path("create/", views.CreateStudentAPIView.as_view(),name="student_create"),
]