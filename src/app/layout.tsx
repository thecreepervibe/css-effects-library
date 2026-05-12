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
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster
          theme="dark"
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#1a1a2e',
              border: '1px solid rgba(16, 185, 129, 0.2)',
              color: '#e5e7eb',
            },
          }}
        />
      </body>
    </html>
  );
}
