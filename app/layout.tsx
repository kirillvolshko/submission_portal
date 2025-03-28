"use client";

import { geistSans, geistMono } from "@/lib/fonts";
import { metadata } from "@/lib/metadata";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/store";
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-cover bg-center bg-no-repeat h-screen`}
      >
        <Provider store={store}>{children}</Provider>
        <Toaster />
      </body>
    </html>
  );
}
