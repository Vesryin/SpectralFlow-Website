import type { HTMLAttributes } from 'react';

export function Logo(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="flex items-center gap-2" {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
      >
        <path
          d="M3 12C3 12 5 4 12 4C19 4 21 12 21 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 12C3 12 5 20 12 20C19 20 21 12 21 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
         <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="font-headline text-lg font-bold tracking-wider">
        Spectral Flow
      </span>
    </div>
  );
}
