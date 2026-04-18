import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/ui/Button';

export default function LoginPage() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!phone || phone.length < 7) {
      setError('Please enter a valid mobile number');
      return;
    }

    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);

    navigate('/auth/verify-otp', { state: { phone } });
  };

  return (
    <div className="max-w-md">
      <h1
        className="text-3xl sm:text-4xl font-bold text-[var(--color-dark)] mb-2"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        Welcome to PardnaBook
      </h1>
      <p className="text-[var(--color-gray-500)] mb-10">
        Enter your mobile number to continue
      </p>

      <form onSubmit={handleSubmit}>
        <div className="bg-white rounded-2xl p-8 shadow-[var(--shadow-lg)] border border-gray-100">
          <div className="mb-6">
            <label
              htmlFor="phone-input"
              className="block text-sm font-semibold text-[var(--color-dark)] mb-3"
            >
              Mobile Number
            </label>
            <input
              id="phone-input"
              type="tel"
              placeholder="+880 1712-345678"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3.5 rounded-lg border border-[var(--color-gray-200)] bg-white text-[var(--color-dark)] placeholder:text-[var(--color-gray-400)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] hover:border-[var(--color-gray-300)] text-base"
            />
            {error && (
              <p className="mt-2 text-sm text-[var(--color-error)]">{error}</p>
            )}
          </div>

          <Button
            type="submit"
            fullWidth
            size="lg"
            loading={isLoading}
            className="rounded-xl"
          >
            Continue
          </Button>
        </div>
      </form>
    </div>
  );
}
