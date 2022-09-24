from django.shortcuts import render
from django.contrib import messages
from .models import Email
# Create your views here.

def homePage(request):
    if request.method=='POST':
        newemail = Email()
        newemail.name = request.POST.get('name')
        newemail.subject = request.POST.get('subject')
        newemail.message = request.POST.get('message')
        newemail.save()
        messages.success(request, "Messages sent")
    context = {}
    return render (request, 'index.html', context)