import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import OtpInput from '@/components/ui/OtpInput';
import Button from '@/components/ui/Button';
import { useCountdown } from '@/hooks/useCountdown';
import loginImage from '@/assets/login.png';

export default function VerifyOtpPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const phone = (location.state as { phone?: string })?.phone || '+8801700000000';
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
      navigate('/admin', { replace: true });
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
    <div className="w-full text-center lg:text-left">
      <div className="lg:hidden flex items-center justify-center mb-8">
        <img
          src={loginImage}
          alt="OTP verification"
          className="w-40 h-40 sm:w-48 sm:h-48 object-contain"
        />
      </div>
      <h1
        className="text-3xl sm:text-4xl font-bold text-(--color-dark) mb-3 text-center"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        Verify OTP
      </h1>
      <p className="text-gray-500 max-w-sm mx-auto lg:mx-0 mb-2">
       Enter the 6-digit code sent to
      </p>
      <p className="text-(--color-dark) font-semibold mb-10">
        {phone}
      </p>

      <form onSubmit={handleSubmit}>
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-(--shadow-lg) border border-gray-100 text-left">
          <div className="mb-6">
            <OtpInput length={6} onComplete={handleOtpComplete} />
          </div>

          {error && (
            <p className="text-sm text-(--color-error) text-center mb-4">{error}</p>
          )}

          {/* Countdown / Resend */}
          <div className="text-center mb-6">
            {isActive ? (
              <p className="text-sm text-gray-500">
                Resend code in <span className="font-bold text-(--color-dark)">{display}</span>
              </p>
            ) : (
              <button
                type="button"
                onClick={handleResend}
                className="text-sm font-medium text-(--color-primary) hover:underline cursor-pointer bg-transparent border-none"
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

          <p className="text-xs text-center text-gray-400 mt-5">
            For demo: Use OTP <span className="font-bold text-(--color-dark)">123456</span>
          </p>
        </div>
      </form>
    </div>
  );
}
