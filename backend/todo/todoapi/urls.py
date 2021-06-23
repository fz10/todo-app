from django.urls import include, path
from django.conf.urls import url
from todoapi import views

urlpatterns = [
    url(r'^api/todos$', views.todo_list),
    url(r'^api/todos/(?P<pk>[0-9]+)$', views.todo_detail),
]