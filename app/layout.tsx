import type { Metadata } from 'next';
import { Crimson_Text, Source_Sans_3 } from 'next/font/google';
import './globals.css';
const serif = Crimson_Text({ variable: '--font-serif', subsets: ['latin'], weight: ['400', '600'], style: ['normal', 'italic'] });
const sans = Source_Sans_3({ variable: '--font-sans', subsets: ['latin'], weight: ['400', '600', '700'] });
export const metadata: Metadata = { title: 'Hanyuan Zhang', description: 'Hanyuan Zhang — Medical AI and clinical NLP researcher.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={`${serif.variable} ${sans.variable}`}>{children}</body></html>; }
