import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import OtpInput from '@/components/ui/OtpInput';
import Button from '@/components/ui/Button';
import { useCountdown } from '@/hooks/useCountdown';

export default function VerifyOtpPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { phone, type } = (location.state as { phone?: string; type?: string }) || {};
  const displayPhone = phone || '+8801700000000';
  const isForgotPassword = type === 'forgot-password';
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { display, isActive, restart } = useCountdown(120);

  const handleOtpComplete = (value: string) => {
    setOtp(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (otp.length !== 6) {
      setError('Please enter all 6 digits');
      return;
    }

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));

    if (otp === '123456') {
      if (isForgotPassword) {
        navigate('/auth/new-password', { replace: true });
      } else {
        navigate('/admin', { replace: true });
      }
    } else {
      setError('Invalid OTP. Please try again.');
      setIsLoading(false);
    }
  };

  const handleResend = () => {
    restart();
    setError('');
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-6">
        <h1
          className="text-2xl sm:text-3xl font-bold text-[var(--color-dark)] mb-2 leading-tight"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {isForgotPassword ? 'Reset password' : 'Verify OTP'}
        </h1>
        <p className="text-[var(--color-gray-500)] text-sm">
          Enter the 6-digit code sent to
        </p>
        <p className="text-[var(--color-dark)] font-semibold text-sm mt-1">
          {displayPhone}
        </p>
      </div>

      {/* Card */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-[var(--shadow-lg)] border border-gray-100">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <OtpInput length={6} onComplete={handleOtpComplete} />
          </div>

          {error && (
            <p className="text-sm text-[var(--color-error)] text-center mb-4">{error}</p>
          )}

          {/* Countdown / Resend */}
          <div className="text-center mb-6">
            {isActive ? (
              <p className="text-sm text-[var(--color-gray-500)]">
                Resend code in <span className="font-bold text-[var(--color-dark)]">{display}</span>
              </p>
            ) : (
              <button
                type="button"
                onClick={handleResend}
                className="text-sm font-medium text-[var(--color-primary)] hover:underline cursor-pointer bg-transparent border-none"
              >
                Resend OTP
              </button>
            )}
          </div>

          <Button
            type="submit"
            fullWidth
            size="lg"
            loading={isLoading}
            className="rounded-xl"
          >
            Verify & Continue
          </Button>

          <p className="text-xs text-center text-[var(--color-gray-400)] mt-5">
            For demo: Use OTP <span className="font-bold text-[var(--color-dark)]">123456</span>
          </p>
        </form>
      </div>
    </div>
  );
}
