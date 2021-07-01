from django.urls import path

from . import views

app_name='ContactApp'
urlpatterns = [
    path('', views.contact_home, name='contact-home'),
    path('contact-us', views.contact_us, name='contact-us'),
    path('form-details', views.form_details, name='form-details'),
    path('form-home-details', views.form_home_details, name='form-home-details'),
]