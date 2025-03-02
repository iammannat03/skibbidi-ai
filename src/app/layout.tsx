import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Skibbidi.AI",
  description: "A fine-tuned model of Gemini named Jignes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`brutal-font antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
