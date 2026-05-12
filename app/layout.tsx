import './globals.css';

export const metadata = {
  title: 'Autoroll — your camera roll, posted automatically',
  description: 'AI picks your best photos, enhances them, writes the caption, posts them to Instagram. Tap once to approve.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
