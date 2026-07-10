export default function ToothLogo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <circle cx="32" cy="32" r="32" className="fill-primary-500" />
      <path
        d="M32 14c-5.2 0-8 2.6-10.4 2.6-2.6 0-4.6-2-7-2-3.6 0-6.4 3.4-6.4 9.2 0 8 3.4 15.6 6 20.4 1.6 3 3 5.2 5.2 5.2 2.6 0 3-5.4 4.6-9.6 1-2.6 2-4.4 3.8-4.4s2.8 1.8 3.8 4.4c1.6 4.2 2 9.6 4.6 9.6 2.2 0 3.6-2.2 5.2-5.2 2.6-4.8 6-12.4 6-20.4 0-5.8-2.8-9.2-6.4-9.2-2.4 0-4.4 2-7 2-1.2 0-2.2-.4-3.4-1-1.1-.6-2.5-1.6-4.6-1.6z"
        className="fill-white"
      />
    </svg>
  );
}
