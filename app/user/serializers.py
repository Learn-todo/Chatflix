"""
Serializers for the user API View.
"""
from django.contrib.auth import (
    get_user_model,
    authenticate,
)
from core.models import User
from django.utils.translation import gettext as _
from core.models import User
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    """Serializer for the user object."""

    class Meta:
        model = User
        fields = ['email', 'password', 'name', 'profile_picture']
        extra_kwargs = {'password': {'write_only': True, 'min_length': 5},
                        'profile_picture': {'allow_null': True},}

    def create(self, validated_data):
        """Create and return a user with encrypted password."""
        request = self.context.get('request')
        return User.objects.create_user(**validated_data) #not so relevant

    def update(self, instance, validated_data):
        """Update and return user."""
        password = validated_data.pop('password', None)
        profile_picture = validated_data.pop('profile_picture', None)
        email = validated_data.pop("email",None)
        user = super().update(instance, validated_data)

        if password:
            user.set_password(password)
            user.save()
        return user


class AuthTokenSerializer(serializers.Serializer):
    """Serializer for the user auth token."""
    email = serializers.EmailField()
    password = serializers.CharField(
        style={'input_type': 'password'},
        trim_whitespace=False,
    )

    def validate(self, attrs):
        """Validate and authenticate the user."""
        email = attrs.get('email')
        password = attrs.get('password')
        user = authenticate(
            request=self.context.get('request'),
            username=email,
            password=password,
        )
        if not user:
            msg = _('Unable to authenticate with provided credentials.')
            raise serializers.ValidationError(msg, code='authorization')

        attrs['user'] = user
        return attrs


class UserImageSerializer(serializers.ModelSerializer):
    """Serializer for uploading images to recipes"""
    # the reason a separate api was created for uploading pictures is because its best practice to upload only one
    # kind of data at a time to an api to keep the data structures clean
    model = User
    fields = ['id', 'image']
    read_only_fields = ['id']
    extra_kwargs = {'image': {'required': 'True'}}


class PasswordResetSerializer(serializers.Serializer):
    email = serializers.EmailField()

    def validate(self, data):
        """
        Validate that the provided email belongs to an existing user.
        """
        if not isinstance(data, dict):
            raise serializers.ValidationError("Invalid data format")

        email = data.get('email')
        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            raise serializers.ValidationError("No account exists with this email address.")

        data['user'] = user
        return data

    def get_user(self, email):
        """
        Get the user with the provided email.
        """
        return User.objects.get(email=email)


class PasswordResetConfirmSerializer(serializers.Serializer):
    password = serializers.CharField(
        max_length=128,
        write_only=True,
        required=True,
        help_text='New password'
    )
    password_confirm = serializers.CharField(
        max_length=128,
        write_only=True,
        required=True,
        help_text='New password confirmation'
    )

    def validate(self, attrs):
        if attrs['password'] != attrs['password_confirm']:
            raise serializers.ValidationError("Passwords do not match")
        return attrs


class ResendActivationSerializer(serializers.Serializer):
    email = serializers.EmailField()

    def validate(self, attrs):
        email = attrs.get('email')

        # Check if user with the given email exists
        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            raise serializers.ValidationError('User with this email does not exist.', code='not_found')

        # Check if user is already activated
        if user.is_active:
            raise serializers.ValidationError('User is already activated.', code='already_activated')

        return attrs
