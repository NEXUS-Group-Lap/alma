export function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function PoshmarkIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.5 0C6.15 0 1 5.15 1 11.5c0 3.08 1.22 5.87 3.2 7.93L12.5 24l8.3-4.57C22.78 17.37 24 14.58 24 11.5 24 5.15 18.85 0 12.5 0zm3.37 15.54c-1.17 1.18-2.87 1.54-4.44 1.54H8.78l-.63 2.93H5.87l2.57-12.06h3.74c1.52 0 2.78.36 3.57 1.14.8.79 1.05 1.9.76 3.24-.18.82-.54 1.56-1.01 2.17-.28.35-.59.68-.63.72v.32zm-2.3-5.38h-1.68l-.99 4.62h1.31c1.08 0 1.87-.27 2.42-.97.39-.49.65-1.12.77-1.77.24-1.18-.32-1.88-1.83-1.88z" />
    </svg>
  );
}

export function EbayIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M5.88 8.84c-2.64 0-4.2 1.32-4.2 3.48 0 2.52 1.92 3.48 4.08 3.48 2.76 0 3.96-1.44 3.96-1.44l-.12.6v.6h2.04s-.24-1.2-.24-1.92V10.8c0-2.28-1.56-3.12-3.84-3.12-2.16 0-3.96.96-3.96.96l.84 1.56s1.56-.84 3-.84c1.32 0 1.92.6 1.92 1.56v.24H8.04c-1.08 0-2.16.36-2.16.36v1.32s1.08-.36 2.16-.36h1.32v1.08c0 .72-.96 1.56-2.52 1.56-1.44 0-2.4-.72-2.4-1.8s.84-1.8 2.4-1.8h1.08V8.84H5.88zM18 7.68c-2.76 0-4.56 1.68-4.56 4.08s1.8 4.08 4.56 4.08c1.92 0 3.12-.84 3.12-.84l-.84-1.44s-1.08.72-2.16.72c-1.44 0-2.4-.96-2.52-2.16h5.88c.12-.36.12-.72.12-1.08 0-1.8-1.2-3.36-3.6-3.36zm-1.92 3.24c.24-1.08 1.08-1.8 2.04-1.8.96 0 1.56.72 1.56 1.8h-3.6z" />
    </svg>
  );
}

export function MercariIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14h-2v-4.5L12 15l-2.5-3.5V16h-2V8h2l2.5 3.5L14.5 8h2v8z" />
    </svg>
  );
}
