import secrets

from django.contrib.sites.shortcuts import get_current_site
from django.core.mail import EmailMessage
from django.db import models
from django.contrib.auth.models import (AbstractBaseUser, BaseUserManager, PermissionsMixin)
from django.urls import reverse


# Create your models here.


class UserManager(BaseUserManager):
    def create_user(self, request, email, password=None, **extra_fields):
        if not email:
            raise ValueError('User must have an email Address')
        user = self.model(email=self.normalize_email(email), **extra_fields)
        user.set_password(password)
        user.is_active = False
        # Generate a unique activation token
        token = secrets.token_hex(16)

        # Save the token with the user's email address
        user.activation_token = token
        user.save(using=self._db)
        activation_link = reverse('user:activate', kwargs={'token': token})
        email_subject = 'Activate your account'
        current_site = get_current_site(request)
        email_body = f'Please click the following link to activate your account: http://{current_site.domain}{activation_link}'
        email = EmailMessage(subject=email_subject, body=email_body, to=[email],
                             from_email='landingpage@jaromtravels.com')
        print(activation_link)
        email.send()

        return user

    def activate(self, token):
        try:
            user = self.get(activation_token=token)
        except User.DoesNotExist:
            return None

        user.is_active = True
        user.activation_token = None
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password):
        user = self.create_user(email, password)
        user.is_superuser = True
        user.is_active = True
        user.is_staff = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    activation_token = models.CharField(max_length=32, null=True, blank=True)
    is_active = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)

    objects = UserManager()
    USERNAME_FIELD = "email"

    def __str__(self):
        return self.email
