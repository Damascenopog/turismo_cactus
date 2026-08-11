import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tour Rocinha | Immersive Favela Tour - Cactus Turismo",
  description: "Descubra a Rocinha com moradores locais. Uma experiência autêntica, cultural e segura na maior favela da América Latina.",
  keywords: ["Tour Rocinha", "Favela Tour Rio", "Cactus Turismo", "Turismo Rio de Janeiro", "Rocinha Guide"],
  authors: [{ name: "Cactus Turismo" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" suppressHydrationWarning className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="antialiased min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
