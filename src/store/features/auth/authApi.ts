import { baseApi } from '../../api/baseApi';

/* ── Request / Response Types ── */

interface SignupRequest {
  name: string;
  phone: string;
  password: string;
}

interface LoginRequest {
  phone: string;
  password: string;
}

interface OtpVerifyRequest {
  phone: string;
  otp: string;
  type: 'account-verify' | 'forgot-password';
}

interface ForgotPasswordRequest {
  phone: string;
}

interface ResetPasswordRequest {
  phone: string;
  otp: string;
  newPassword: string;
}

interface ResendOtpRequest {
  phone: string;
}

interface RefreshTokenRequest {
  refreshToken: string;
}

interface AuthResponse {
  success: boolean;
  message: string;
  data: {
    user: {
      id: string;
      name: string;
      phone: string;
      role: 'admin' | 'banker' | 'participant';
      avatar?: string;
    };
    accessToken: string;
    refreshToken: string;
  };
}

interface MessageResponse {
  success: boolean;
  message: string;
}

interface RefreshTokenResponse {
  success: boolean;
  data: {
    accessToken: string;
    refreshToken: string;
  };
}

/* ── Auth API ── */

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // POST /signup-banker
    signupBanker: builder.mutation<AuthResponse, SignupRequest>({
      query: (body) => ({
        url: '/signup-banker',
        method: 'POST',
        body,
      }),
    }),

    // POST /login
    login: builder.mutation<AuthResponse, LoginRequest>({
      query: (body) => ({
        url: '/login',
        method: 'POST',
        body,
      }),
    }),

    // POST /otp-verify
    otpVerify: builder.mutation<MessageResponse, OtpVerifyRequest>({
      query: (body) => ({
        url: '/otp-verify',
        method: 'POST',
        body,
      }),
    }),

    // POST /resend-otp
    resendOtp: builder.mutation<MessageResponse, ResendOtpRequest>({
      query: (body) => ({
        url: '/resend-otp',
        method: 'POST',
        body,
      }),
    }),

    // POST /forgot-password
    forgotPassword: builder.mutation<MessageResponse, ForgotPasswordRequest>({
      query: (body) => ({
        url: '/forgot-password',
        method: 'POST',
        body,
      }),
    }),

    // POST /reset-password
    resetPassword: builder.mutation<MessageResponse, ResetPasswordRequest>({
      query: (body) => ({
        url: '/reset-password',
        method: 'POST',
        body,
      }),
    }),

    // POST /refresh-token
    refreshToken: builder.mutation<RefreshTokenResponse, RefreshTokenRequest>({
      query: (body) => ({
        url: '/refresh-token',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useSignupBankerMutation,
  useLoginMutation,
  useOtpVerifyMutation,
  useResendOtpMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useRefreshTokenMutation,
} = authApi;
