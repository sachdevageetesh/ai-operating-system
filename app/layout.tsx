import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Geetesh's AI Operating System",
  description:
    "A compact operating system for matching AI tools to thinking, research, building, testing, observability, and deployment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
