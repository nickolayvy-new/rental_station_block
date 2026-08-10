import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Станция аренды Rentmotors — Шереметьево",
  description:
    "Информация о станции аренды автомобилей Rentmotors в аэропорту Шереметьево (SVO): адрес, режим работы, контакты и инструкции по получению и возврату авто.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="bg-background">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
