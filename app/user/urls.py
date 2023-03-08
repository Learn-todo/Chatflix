from django.urls import path
from user import views

app_name = 'user'
urlpatterns = [
    path('create/', views.CreateUserView.as_view(), name='create'),
    path('resend_activation/', views.ResendActivationView.as_view(), name='resend_activation'),
    path('token/', views.CreateTokenView.as_view(), name='token'),
    path('profile/', views.ManageUserView.as_view({'get': 'retrieve',
                                                   'put': 'update',
                                                   'patch': 'partial_update'}), name='profile'),
    path('activate/<str:token>/', views.ActivateView.as_view(), name='activate'),
    path('password-reset/', views.PasswordResetView.as_view(), name='password_reset'),
    path('password-reset-confirm/<str:uidb64>/<str:token>/', views.PasswordResetConfirmView.as_view(), name='password_reset_confirm'),
]
