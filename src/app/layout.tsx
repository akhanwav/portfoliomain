import type { Metadata } from "next";
import { Libre_Franklin } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

const libreFranklin = Libre_Franklin({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-libre-franklin',
});

export const metadata: Metadata = {
  title: "Arbob Khan - Sound Editor and Re-Recording Mixer",
  description: "Professional sound editor and re-recording mixer specializing in film, games, and multimedia audio production. Creating immersive soundscapes and high-quality audio experiences.",
  keywords: "sound editing, re-recording mixing, film audio, game audio, sound effects, mixing, mastering",
  authors: [{ name: "Arbob Khan" }],
  creator: "Arbob Khan",
  openGraph: {
    title: "Arbob Khan - Sound Editor and Re-Recording Mixer",
    description: "Professional sound editor and re-recording mixer specializing in film, games, and multimedia audio production.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arbob Khan - Sound Editor and Re-Recording Mixer",
    description: "Professional sound editor and re-recording mixer specializing in film, games, and multimedia audio production.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`antialiased bg-black text-white min-h-screen font-sans ${libreFranklin.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}