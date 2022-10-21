from django.shortcuts import redirect, render
from . import forms
from django.contrib import messages
from django.contrib.auth.models import User
from django.core.mail import EmailMessage, send_mail
from django.contrib.sites.shortcuts import get_current_site
from django.template.loader import render_to_string
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from django.utils.encoding import force_bytes, force_text
from django.contrib.auth import authenticate, login, logout
from . tokens import generate_token
from chatflix import settings

# Create your views here.
def register(request):
    #register_form = forms.RegistrationForm()
    #context = {
    #    'form': register_form
    #}
    if request.method == 'POST':
        register_form = forms.RegistrationForm(request.POST)
        if register_form.is_valid():
            user=register_form.save(commit=False)
            user.username=user.username.lower()
            user.email=register_form.cleaned_data['email']
            user.set_password(register_form.cleaned_data['password'])
            user.is_active = False
            user.save()
            getting_the_site = get_current_site(request)
            subject = 'Email Activation'
            message = render_to_string('sign_up.html',
            {
                'user': user,
                'domain': getting_the_site.domain,
                'uid': urlsafe_base64_encode(force_bytes(user.pk))
                }
            )
            user.email_user(subject=subject, message=message)
           # context = {
           #     'form': register_form
           # }
           # return render(request, 'test.html', context)

    # else:
    #    register_form=RegistrationForm()
        # Welcome Email
        subject = "Welcome to GFG- Django Login!!"
        message = "Hello " + user.first_name + "!! \n" + "Welcome to Chatflix!! \nThank you for visiting our website\n. We have also sent you a confirmation email, please confirm your email address. \n\nThanking You\nGoodness Mbakara"        
        from_email = settings.EMAIL_HOST_USER
        to_list = [user.email]
        send_mail(subject, message, from_email, to_list, fail_silently=True)
        
        #Activation mail
        # Email Address Confirmation Email
        current_site = get_current_site(request)
        email_subject = "Confirm your Email @ GFG - Django Login!!"
        message2 = render_to_string('email_confirmation.html',{
                
                'name': user.first_name,
                'domain': current_site.domain,
                'uid': urlsafe_base64_encode(force_bytes(user.pk)),
                'token': generate_token.make_token(user)
            })
        email = EmailMessage(
            email_subject,
            message2,
            settings.EMAIL_HOST_USER,
            [user.email],
            )
        email.fail_silently = True
        email.send()
            
        return redirect('signin')

    return render(request, 'sign_up.html',{'form': register_form})


def activate(request,uidb64,token):
    try:
        uid = force_text(urlsafe_base64_decode(uidb64))
        myuser = User.objects.get(pk=uid)
    except (TypeError,ValueError,OverflowError,User.DoesNotExist):
        myuser = None

    if myuser is not None and generate_token.check_token(myuser,token):
        myuser.is_active = True
        # user.profile.signup_confirmation = True
        myuser.save()
        login(request,myuser)
        messages.success(request, "Your Account has been activated!!")
        return redirect('signin')
    else:
        return render(request,'activation_failed.html')


