"""
Views for the user API
"""
from django.shortcuts import redirect
from rest_framework import generics, authentication, permissions, status
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.response import Response
from rest_framework.settings import api_settings
from user.serializers import (UserSerializer, AuthTokenSerializer, )
from core.models import User


class CreateUserView(generics.CreateAPIView):
    """Create a new user in the system."""
    serializer_class = UserSerializer


class CreateTokenView(ObtainAuthToken):
    """Create a new auth token for user."""
    serializer_class = AuthTokenSerializer
    renderer_classes = api_settings.DEFAULT_RENDERER_CLASSES


class ManageUserView(generics.RetrieveUpdateAPIView):
    """Manage the authenticated user and edit data."""
    serializer_class = UserSerializer
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        """Retrieve and return the authenticated user."""
        return self.request.user


class ActivateView(generics.GenericAPIView):
    """
    Activates the user's account using the activation token.
    """
    serializer_class = UserSerializer

    def get(self, request, token):
        # Activate the user's account
        user = User.objects.activate(token)
        if user:
            # Redirect to a success page
            return redirect('https://www.figma.com/file/t6P0xaaKSEVilO6oF5F4V2/Social-movies-website?node-id=12%3A2')
        else:
            # Return an error response
            return Response({'error': 'Invalid activation token'}, status=status.HTTP_400_BAD_REQUEST)
