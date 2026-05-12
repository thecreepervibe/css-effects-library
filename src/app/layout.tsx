import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CSS Effects Library — Pure CSS, No Dependencies",
  description: "A curated collection of beautiful CSS effects with live preview & ready-to-use code.",
  keywords: ["CSS", "effects", "animations", "library", "Tailwind CSS", "React"],
  authors: [{ name: "CSS Effects Lab" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "CSS Effects Library",
    description: "A curated collection of beautiful CSS effects with live preview & ready-to-use code.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CSS Effects Library",
    description: "A curated collection of beautiful CSS effects with live preview & ready-to-use code.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevent FOUC: set dark class before paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('css-effects-theme');if(t!=='light'){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}}catch(e){document.documentElement.classList.add('dark')}})()`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground noise-overlay`}
        suppressHydrationWarning
      >
        {/* Morphing blob backgrounds for visual depth */}
        <div className="morphing-blob-1" style={{ top: '10%', left: '5%' }} />
        <div className="morphing-blob-2" style={{ bottom: '20%', right: '5%' }} />
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            className: 'dark:bg-[#1a1a2e] dark:text-[#e5e7eb] dark:border-emerald-500/20 bg-white text-gray-800 border-gray-200',
          }}
        />
      </body>
    </html>
  );
}
