from django.shortcuts import render
from .forms import RegistrationForm
from django.contrib.auth.models import User
from django.contrib.sites.shortcuts import get_current_site
from django.template.loader import render_to_string
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes

# Create your views here.
def register(request):
    register_form = RegistrationForm()
    context = {
        'form': register_form
    }
    if request.method == 'POST':
        register_form = RegistrationForm(request.POST)
        if register_form.is_valid():
            user=register_form.save(commit=False)
            user.username=user.username.lower()
            user.email=register_form.cleaned_data['email']
            user.set_password(register_form.cleaned_data['password'])
            user.is_active = False
            user.save()
            getting_the_site = get_current_site(request)
            subject = 'Email Activation'
            message = render_to_string('test.html',
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
    return render(request, 'test.html', context)

