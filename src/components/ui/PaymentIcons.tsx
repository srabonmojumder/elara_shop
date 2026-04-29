interface IconProps {
  className?: string;
}

export function VisaIcon({ className = "w-10 h-6" }: IconProps) {
  return (
    <svg viewBox="0 0 48 32" className={className} fill="none">
      <rect width="48" height="32" rx="4" fill="#1A1F71" />
      <path d="M20.3 21.5h-2.8l1.8-10.9h2.8L20.3 21.5z" fill="#fff" />
      <path d="M30.2 10.8c-.6-.2-1.4-.4-2.5-.4-2.8 0-4.7 1.5-4.7 3.6 0 1.6 1.4 2.4 2.5 3 1.1.5 1.5.9 1.5 1.4 0 .7-.9 1.1-1.7 1.1-1.1 0-1.7-.2-2.7-.6l-.4-.2-.4 2.5c.7.3 1.9.6 3.2.6 2.9 0 4.9-1.5 4.9-3.7 0-1.2-.7-2.2-2.4-3-.9-.5-1.5-.8-1.5-1.3 0-.5.5-.9 1.6-.9.9 0 1.5.2 2 .4l.2.1.4-2.6z" fill="#fff" />
      <path d="M34.6 10.6h-2.2c-.7 0-1.2.2-1.5.9l-4.2 10h2.9l.6-1.6h3.6l.3 1.6h2.6l-2.3-10.9h-.8zm-3.5 7l1.5-4 .8 4h-2.3z" fill="#fff" />
      <path d="M17.3 10.6l-2.7 7.4-.3-1.5c-.5-1.7-2-3.6-3.8-4.5l2.5 9.5h3l4.4-10.9h-3.1z" fill="#fff" />
      <path d="M12.1 10.6H7.7l0 .2c3.5.9 5.8 3.1 6.8 5.7l-1-4.9c-.2-.7-.6-.9-1.4-1z" fill="#F7B600" />
    </svg>
  );
}

export function MastercardIcon({ className = "w-10 h-6" }: IconProps) {
  return (
    <svg viewBox="0 0 48 32" className={className} fill="none">
      <rect width="48" height="32" rx="4" fill="#252525" />
      <circle cx="19" cy="16" r="8" fill="#EB001B" />
      <circle cx="29" cy="16" r="8" fill="#F79E1B" />
      <path d="M24 9.8a8 8 0 0 1 0 12.4 8 8 0 0 1 0-12.4z" fill="#FF5F00" />
    </svg>
  );
}

export function AmexIcon({ className = "w-10 h-6" }: IconProps) {
  return (
    <svg viewBox="0 0 48 32" className={className} fill="none">
      <rect width="48" height="32" rx="4" fill="#2E77BC" />
      <text x="24" y="18" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="sans-serif">AMEX</text>
    </svg>
  );
}

export function PaypalIcon({ className = "w-10 h-6" }: IconProps) {
  return (
    <svg viewBox="0 0 48 32" className={className} fill="none">
      <rect width="48" height="32" rx="4" fill="#fff" stroke="#e5e7eb" />
      <path d="M19.5 8h4.5c2.5 0 4.2 1.7 3.8 4.2-.5 3-3 4.8-5.5 4.8h-1.5c-.4 0-.7.3-.8.7L19.3 22h-3l2.2-14z" fill="#003087" />
      <path d="M22 8h4.5c2.5 0 4.2 1.7 3.8 4.2-.5 3-3 4.8-5.5 4.8h-1.5c-.4 0-.7.3-.8.7L21.8 22h-3L21 8z" fill="#0070E0" opacity=".7" />
      <path d="M30 10.5c-.2 2.8-2.5 4.5-5 4.5h-1.3l-.8 5h-2.5l.5-3h1c2.5 0 4.8-1.8 5.2-4.5.2-1 0-1.5-.3-2h3.2z" fill="#003087" opacity=".5" />
    </svg>
  );
}

export function KlarnaIcon({ className = "w-10 h-6" }: IconProps) {
  return (
    <svg viewBox="0 0 48 32" className={className} fill="none">
      <rect width="48" height="32" rx="4" fill="#FFB3C7" />
      <path d="M14 10h3.2c0 2.5-1 4.7-2.8 6.3l-1.2 1 4.3 4.7h-4l-3.5-3.8v3.8H7V10h3v5.5c1.8-1.5 3-3.8 3-5.5h1zm8.5 0H19v12h3.5V10zm2 9.5a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6z" fill="#0A0B09" />
      <text x="34" y="18" textAnchor="middle" fill="#0A0B09" fontSize="6" fontWeight="bold" fontFamily="sans-serif">.</text>
    </svg>
  );
}

export function ApplePayIcon({ className = "w-10 h-6" }: IconProps) {
  return (
    <svg viewBox="0 0 48 32" className={className} fill="none">
      <rect width="48" height="32" rx="4" fill="#000" />
      <path d="M15.2 11.5c-.6.7-1.5 1.2-2.4 1.1-.1-1 .4-2 .9-2.6.6-.7 1.6-1.2 2.3-1.2.1 1-.3 2-.8 2.7zm.8.6c-1.3-.1-2.5.8-3.1.8s-1.6-.7-2.7-.7a3.9 3.9 0 0 0-3.3 2c-1.4 2.4-.4 6 1 8 .7 1 1.5 2.1 2.6 2.1 1 0 1.4-.7 2.7-.7 1.2 0 1.5.7 2.6.7s1.8-1 2.5-2c.5-.7.8-1.4 1-1.8-2.2-.9-2.5-4.2-.3-5.4a3.2 3.2 0 0 0-2.5-1.4l-.5.4z" fill="#fff" />
      <text x="32" y="19" textAnchor="middle" fill="white" fontSize="8" fontWeight="600" fontFamily="sans-serif">Pay</text>
    </svg>
  );
}

export function GooglePayIcon({ className = "w-10 h-6" }: IconProps) {
  return (
    <svg viewBox="0 0 48 32" className={className} fill="none">
      <rect width="48" height="32" rx="4" fill="#fff" stroke="#e5e7eb" />
      <path d="M24.5 16.3v3.2h-1v-8h2.7a2.5 2.5 0 0 1 1.7.7 2.3 2.3 0 0 1 0 3.4 2.4 2.4 0 0 1-1.7.7h-1.7zm0-3.8v2.8h1.8a1.4 1.4 0 0 0 0-2.8h-1.8z" fill="#5F6368" />
      <path d="M32 15.7c0-.4 0-.7-.1-1H28.5v1.9h2a1.7 1.7 0 0 1-.7 1.1v1h1.1c.7-.6 1.1-1.5 1.1-3z" fill="#4285F4" />
      <path d="M28.5 19.5c.9 0 1.7-.3 2.3-.9l-1.1-1c-.3.2-.7.4-1.2.4a2 2 0 0 1-1.9-1.4h-1.2v.9a3.5 3.5 0 0 0 3.1 2z" fill="#34A853" />
      <path d="M26.6 16.7a2 2 0 0 1 0-1.3v-1h-1.2a3.5 3.5 0 0 0 0 3.2l1.2-.9z" fill="#FBBC04" />
      <path d="M28.5 14a1.9 1.9 0 0 1 1.3.5l1-.9a3.4 3.4 0 0 0-2.3-.9 3.5 3.5 0 0 0-3.1 1.9l1.2.9a2 2 0 0 1 1.9-1.4z" fill="#EA4335" />
      <text x="19" y="19" textAnchor="middle" fill="#5F6368" fontSize="7" fontWeight="500" fontFamily="sans-serif">G</text>
    </svg>
  );
}

export function CreditCardIcon({ className = "w-10 h-6" }: IconProps) {
  return (
    <svg viewBox="0 0 48 32" className={className} fill="none">
      <rect width="48" height="32" rx="4" fill="#6366F1" />
      <rect x="6" y="10" width="36" height="3" rx="1" fill="#fff" opacity=".4" />
      <rect x="6" y="16" width="14" height="2" rx="1" fill="#fff" opacity=".3" />
      <rect x="6" y="20" width="10" height="2" rx="1" fill="#fff" opacity=".3" />
      <rect x="32" y="19" width="10" height="4" rx="1" fill="#FCD34D" />
      <rect x="33" y="20" width="3" height="1" rx=".5" fill="#B45309" opacity=".5" />
      <rect x="37" y="20" width="3" height="1" rx=".5" fill="#B45309" opacity=".5" />
    </svg>
  );
}
