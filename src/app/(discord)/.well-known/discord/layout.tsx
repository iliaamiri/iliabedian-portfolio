import { PropsWithChildren } from 'react';

export default function DiscordLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
