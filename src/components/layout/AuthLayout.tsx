import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--color-primary-50)] via-white to-purple-50/30 flex flex-col">
      {/* Logo Header */}
      <div className="px-8 py-6">
        <a href="/home" className="flex items-center gap-2 no-underline">
          <svg width="32" height="32" viewBox="0 0 52 52" fill="none">
            <path
              d="M26 4C13.85 4 4 13.85 4 26s9.85 22 22 22"
              stroke="url(#auth-grad)"
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
            />
            <defs>
              <linearGradient id="auth-grad" x1="4" y1="26" x2="26" y2="48">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#6C2BD9" />
              </linearGradient>
            </defs>
          </svg>
          <span className="text-xl font-bold text-[var(--color-dark)]" style={{ fontFamily: 'var(--font-heading)' }}>
            PardnaBook
          </span>
        </a>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-8">
        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Auth Form */}
          <div className="animate-fade-in-up">
            <Outlet />
          </div>

          {/* Right: Illustration */}
          <div className="hidden lg:flex items-center justify-center animate-slide-in-right">
            <div className="relative">
              {/* Decorative blobs */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-200/30 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-violet-200/30 rounded-full blur-3xl" />

              {/* Auth Illustration - Security themed */}
              <div className="relative w-full max-w-md">
                <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                  {/* Background elements */}
                  <rect x="200" y="40" width="250" height="180" rx="12" fill="#E8E0F5" stroke="#C4B5DA" strokeWidth="1.5"/>

                  {/* Screen content */}
                  <rect x="210" y="50" width="230" height="160" rx="8" fill="white"/>
                  <rect x="210" y="50" width="230" height="25" rx="8" fill="#6C2BD9" opacity="0.15"/>
                  <circle cx="222" cy="62" r="4" fill="#EF4444"/>
                  <circle cx="234" cy="62" r="4" fill="#F59E0B"/>
                  <circle cx="246" cy="62" r="4" fill="#10B981"/>

                  {/* Lock icon center */}
                  <rect x="295" y="100" width="50" height="45" rx="8" fill="#7C3AED" opacity="0.1" stroke="#7C3AED" strokeWidth="1.5"/>
                  <path d="M310 100V90a10 10 0 0120 0v10" stroke="#F59E0B" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  <circle cx="320" cy="118" r="5" fill="#F59E0B"/>
                  <rect x="305" y="135" width="30" height="6" rx="3" fill="#7C3AED" opacity="0.3"/>

                  {/* Folder grid */}
                  <g opacity="0.7">
                    <rect x="220" y="85" width="30" height="24" rx="4" fill="#3B82F6" opacity="0.2"/>
                    <rect x="220" y="82" width="15" height="5" rx="2" fill="#3B82F6" opacity="0.3"/>
                    <rect x="260" y="85" width="30" height="24" rx="4" fill="#3B82F6" opacity="0.2"/>
                    <rect x="260" y="82" width="15" height="5" rx="2" fill="#3B82F6" opacity="0.3"/>
                    <rect x="355" y="85" width="30" height="24" rx="4" fill="#3B82F6" opacity="0.2"/>
                    <rect x="355" y="82" width="15" height="5" rx="2" fill="#3B82F6" opacity="0.3"/>
                    <rect x="395" y="85" width="30" height="24" rx="4" fill="#3B82F6" opacity="0.2"/>
                    <rect x="395" y="82" width="15" height="5" rx="2" fill="#3B82F6" opacity="0.3"/>
                    <rect x="220" y="155" width="30" height="24" rx="4" fill="#3B82F6" opacity="0.2"/>
                    <rect x="220" y="152" width="15" height="5" rx="2" fill="#3B82F6" opacity="0.3"/>
                    <rect x="355" y="155" width="30" height="24" rx="4" fill="#3B82F6" opacity="0.2"/>
                    <rect x="355" y="152" width="15" height="5" rx="2" fill="#3B82F6" opacity="0.3"/>
                    <rect x="395" y="155" width="30" height="24" rx="4" fill="#3B82F6" opacity="0.2"/>
                    <rect x="395" y="152" width="15" height="5" rx="2" fill="#3B82F6" opacity="0.3"/>
                  </g>

                  {/* Floating lock icons */}
                  <g opacity="0.4">
                    <circle cx="190" cy="65" r="10" fill="none" stroke="#9CA3AF" strokeWidth="1.5"/>
                    <rect x="186" y="65" width="8" height="6" rx="2" fill="#9CA3AF"/>
                    <path d="M189 65V62a3 3 0 016 0v3" stroke="#9CA3AF" strokeWidth="1.5" fill="none"/>
                    <circle cx="460" cy="95" r="10" fill="none" stroke="#9CA3AF" strokeWidth="1.5"/>
                    <rect x="456" y="95" width="8" height="6" rx="2" fill="#9CA3AF"/>
                    <circle cx="470" cy="195" r="8" fill="none" stroke="#9CA3AF" strokeWidth="1.5"/>
                    <rect x="467" y="195" width="6" height="5" rx="1.5" fill="#9CA3AF"/>
                  </g>

                  {/* Asterisk text */}
                  <g opacity="0.35" fill="#6B7280">
                    <text x="245" y="48" fontSize="8" fontFamily="monospace">✱✱✱✱✱✱✱</text>
                    <text x="375" y="48" fontSize="8" fontFamily="monospace">✱✱✱✱✱✱✱</text>
                    <text x="420" y="180" fontSize="8" fontFamily="monospace">✱✱✱✱✱✱</text>
                    <text x="320" y="195" fontSize="8" fontFamily="monospace">✱✱✱✱✱✱</text>
                  </g>

                  {/* Person sitting at desk */}
                  <g transform="translate(100, 120)">
                    {/* Plant */}
                    <g transform="translate(130, -30)">
                      <rect x="15" y="100" width="8" height="20" rx="4" fill="#8B6F47"/>
                      <ellipse cx="19" cy="99" rx="12" ry="8" fill="#10B981"/>
                      <path d="M12 90 Q19 65 14 50" stroke="#10B981" strokeWidth="2" fill="none"/>
                      <path d="M14 50 Q8 42 2 48" stroke="#10B981" strokeWidth="2" fill="none"/>
                      <ellipse cx="5" cy="50" rx="6" ry="4" fill="#10B981"/>
                      <path d="M22 80 Q28 60 25 45" stroke="#10B981" strokeWidth="2" fill="none"/>
                      <ellipse cx="27" cy="46" rx="5" ry="4" fill="#34D399"/>
                      <path d="M17 85 Q12 70 15 55" stroke="#34D399" strokeWidth="2" fill="none"/>
                      <ellipse cx="14" cy="56" rx="5" ry="3.5" fill="#34D399"/>
                      <path d="M25 90 Q32 75 28 60" stroke="#10B981" strokeWidth="1.5" fill="none"/>
                      <ellipse cx="30" cy="62" rx="4" ry="3" fill="#10B981"/>
                    </g>

                    {/* Desk */}
                    <rect x="150" y="150" width="150" height="8" rx="2" fill="#F59E0B"/>
                    <rect x="155" y="158" width="8" height="50" rx="2" fill="#D97706"/>
                    <rect x="287" y="158" width="8" height="50" rx="2" fill="#D97706"/>
                    <rect x="160" y="195" width="85" height="6" rx="2" fill="#D97706" opacity="0.3"/>

                    {/* Books on shelf */}
                    <rect x="165" y="185" width="8" height="12" rx="1" fill="#3B82F6" opacity="0.6"/>
                    <rect x="175" y="182" width="8" height="15" rx="1" fill="#EF4444" opacity="0.5"/>
                    <rect x="185" y="184" width="6" height="13" rx="1" fill="#F59E0B" opacity="0.5"/>

                    {/* Small plant on desk */}
                    <rect x="280" y="140" width="12" height="10" rx="3" fill="#D97706" opacity="0.6"/>
                    <ellipse cx="286" cy="138" rx="8" ry="6" fill="#10B981" opacity="0.7"/>

                    {/* Laptop */}
                    <rect x="195" y="128" width="65" height="22" rx="3" fill="#1F2937"/>
                    <rect x="198" y="131" width="59" height="16" rx="2" fill="#60A5FA" opacity="0.3"/>
                    <rect x="180" y="150" width="95" height="4" rx="1" fill="#374151"/>

                    {/* Person */}
                    {/* Head */}
                    <circle cx="180" cy="60" r="18" fill="#D4A574"/>
                    {/* Hair */}
                    <path d="M162 52 Q165 35 180 32 Q195 35 198 52" fill="#1F2937"/>
                    {/* Body */}
                    <path d="M162 78 Q170 90 165 130 L195 130 Q190 90 198 78 Q190 72 180 72 Q170 72 162 78Z" fill="#7C3AED"/>
                    {/* Arm reaching to laptop */}
                    <path d="M195 90 Q210 100 215 128" stroke="#D4A574" strokeWidth="8" fill="none" strokeLinecap="round"/>
                    {/* Other arm */}
                    <path d="M165 90 Q155 105 160 125" stroke="#D4A574" strokeWidth="8" fill="none" strokeLinecap="round"/>
                    {/* Chair */}
                    <rect x="158" y="130" width="44" height="6" rx="3" fill="#374151"/>
                    <rect x="155" y="136" width="6" height="25" rx="2" fill="#374151"/>
                    <rect x="195" y="136" width="6" height="25" rx="2" fill="#374151"/>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
