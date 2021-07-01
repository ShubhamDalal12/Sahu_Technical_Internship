from django.shortcuts import render, redirect
from ContactApp.models import ContactUs
from django.contrib import messages

# Create your views here.
def contact_home(request):
    return render(request, 'web.html')

def contact_us(request):
    return render(request, 'ContactUs.html')

def form_details(request):
    if request.method == 'POST':
        name1 = request.POST['name']
        email1 = request.POST['email']
        message1 = request.POST['message']

        contact_us_obj = ContactUs.objects.create(
            name=name1,
            email=email1,
            message=message1
        )
        contact_us_obj.save()
        messages.success(request, 'Your Message was sent successfully!')
        return redirect('ContactApp:contact-us')

def form_home_details(request):
    if request.method == 'POST':
        name1 = request.POST['name']
        email1 = request.POST['email']
        phone1 = request.POST['phone']

        contact_us_obj = ContactUs.objects.create(
            name=name1,
            email=email1,
            phone=phone1
        )
        contact_us_obj.save()
        messages.success(request, 'Your Message was sent successfully!')
        return redirect('ContactApp:contact-home')