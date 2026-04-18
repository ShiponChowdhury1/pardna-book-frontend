import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import Button from '@/components/ui/Button';
import loginImage from '@/assets/login.png';

export default function LoginPage() {
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ identifier?: string; password?: string }>({});

  const validate = () => {
    const e: { identifier?: string; password?: string } = {};
    if (!identifier.trim()) e.identifier = 'Email or phone is required';
    if (!password) e.password = 'Password is required';
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setIsLoading(false);
    navigate('/auth/verify-otp', { state: { phone: identifier } });
  };

  const inputClass =
    'w-full px-4 py-3.5 rounded-xl border border-[var(--color-gray-200)] bg-white text-[var(--color-dark)] placeholder:text-[var(--color-gray-400)] text-sm transition-all duration-200 focus:outline-none focus:border-[var(--color-primary)] hover:border-[var(--color-gray-300)]';


  return (
    <div className="w-full">
      {/* Mobile illustration — hidden on lg+ where AuthLayout shows it */}
      <div className="lg:hidden flex justify-center mb-6">
        <img
          src={loginImage}
          alt="PardnaBook"
          className="w-36 h-36 sm:w-44 sm:h-44 object-contain"
        />
      </div>

      {/* Header */}
      <div className="text-center mb-8">
        <h1
          className="text-3xl sm:text-4xl font-bold text-[var(--color-dark)] mb-2 leading-tight"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Welcome back
        </h1>
        <p className="text-[var(--color-gray-500)] text-sm">
          Log in to manage your pardnas
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-[var(--shadow-lg)] border border-gray-100 space-y-7">

          {/* Email or phone */}
          <div>
            <label
              htmlFor="login-identifier"
              className="block text-sm font-semibold text-[var(--color-dark)] mb-3"
            >
              Email or phone
            </label>
            <input
              id="login-identifier"
              type="text"
              autoComplete="username"
              placeholder="you@example.com"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              className={`${inputClass} ${errors.identifier ? 'border-[var(--color-error)]' : ''}`}
            />
            {errors.identifier && (
              <p className="mt-2 text-xs text-[var(--color-error)]">{errors.identifier}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <div className="flex items-baseline justify-between mb-3">
              <label 
                htmlFor="login-password"
                className="text-sm font-semibold text-[var(--color-dark)]"
              >
                Password
              </label>
              <Link
                to="/auth/forgot-password"
                className="text-xs font-medium text-[var(--color-primary)] hover:underline no-underline opacity-80"
              >
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <input
               id="login-password"
               type={showPassword ? 'text' : 'password'}
               autoComplete="current-password"
               placeholder="••••••••"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               className={`${inputClass} pr-12 ${errors.password ? 'border-[var(--color-error)]' : ''}`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-gray-400)] hover:text-[var(--color-dark)] transition-colors cursor-pointer border-none bg-transparent p-1"
                tabIndex={-1}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-xs text-[var(--color-error)]">{errors.password}</p>
            )}
          </div>

          {/* Submit */}
          <Button
            type="submit"
            fullWidth
            size="lg"
            loading={isLoading}
            className="rounded-xl mt-1"
          >
            Log in
          </Button>
        </div>
      </form>

      {/* Sign up link */}
      <p className="text-center text-sm text-[var(--color-gray-400)] mt-6">
        Don't have an account?{' '}
        <Link
          to="/auth/register"
          className="text-[var(--color-primary)] font-semibold hover:underline no-underline"
        >
          Sign up as a banker
        </Link>
      </p>
    </div>
  );
}
