import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
      <title>NextJS Dashboard</title>
      <meta name="description" content="Wakusay NextJS Training DashBoard" />
    </html>
  );
}
