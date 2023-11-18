import { Rowdies } from 'next/font/google';

const rowdies = Rowdies({ subsets: ['latin'], weight: '300' });

export function NotFound() {
  return (
    <div
      className={`flex h-full flex-col items-center justify-center ${rowdies.className}`}
    >
      <h1 className={`text-9xl font-bold`}>404</h1>

      <h2 className={`text-3xl font-bold`}>Page Not Found</h2>
    </div>
  );
}
