from logging import PlaceHolder
from django import forms                                # django forms
from django.contrib.auth.models import User             # django user model
from django.core.exceptions import ValidationError      # for validation error

class RegistrationForm(forms.ModelForm):
    first_name = forms.CharField(max_length=50, min_length=7, required=True)
    username = forms.CharField(max_length=50, min_length=7, required=True)
    email = forms.EmailField(required=True)
    password = forms.CharField(max_length=16, min_length=8, widget=forms.PasswordInput, required=True)
    password2 = forms.CharField(max_length=50, min_length=7, widget=forms.PasswordInput, required=True)
    
    class Meta:
        model = User
        fields = ('first_name', 'username', 'email')

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['username'].widget.attrs.update({
            'placeholder': 'Username', 'class': 'form-control'
        })
        self.fields['first_name'].widget.attrs.update({
            'placeholder': 'Full name', 'class': 'form-control'
        })
        self.fields['email'].widget.attrs.update({
            'placeholder': 'Email', 'class': 'form-control'
        })
        self.fields['password'].widget.attrs.update({
            'placeholder': 'Password', 'class': 'form-control'
        })
        self.fields['password2'].widget.attrs.update({
            'placeholder': 'Confirm Password', 'class': 'form-control'
        })

    def clean_username(self):
        clean = self.cleaned_data['username'].lower()
        whiten = User.objects.filter(username=clean)
        if whiten.count():
            raise ValidationError('Username must be a valid username')
        return clean

    def clean_password2(self):
        clean = self.cleaned_data
        if clean['password'] != clean['password2']:
            raise ValidationError('Password must be a valid password')
        return clean['password2']

    def clean_email(self):
        clean = self.cleaned_data['email']
        if User.objects.filter(email=clean).exists():
            raise ValidationError('Email Error')
        return clean
    