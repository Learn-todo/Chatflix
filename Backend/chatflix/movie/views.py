from django.shortcuts import render, redirect
from . import forms
from django.contrib.auth.models import User
from django.contrib.auth import login
from django.contrib.sites.shortcuts import get_current_site
from django.template.loader import render_to_string
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_str
from . import tokens

# Create your views here.
def register(request):
    register_form = forms.RegistrationForm()
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
            message = render_to_string('account_activation_email.html',
            {
                'user': user,
                'domain': getting_the_site.domain,
                'uid': urlsafe_base64_encode(force_bytes(user.pk)),
                'token': tokens.account_activation_token.make_token(user),
                }
            )
            user.email_user(subject=subject, message=message)
           # context = {
           #     'form': register_form
           # }
           # return render(request, 'test.html', context)

    # else:
    #    register_form=RegistrationForm()
    return render(request, 'test.html',{'form': register_form})

def activate(request, uidb64, token):
    try:
        uid = force_str(urlsafe_base64_decode(uidb64))
        user = User.objects.get(pk=uid)
    except(TypeError, ValueError, OverflowError, User.DoesNotExist):
        user = None
    if user is not None and tokens.account_activation_token.check_token(user, token):
        user.is_active = True
        user.save()
        login(request, user)
        return redirect('register') # should redirect to dashboard not login
    else:
        return render(request, 'account_activation_invalid.html')

