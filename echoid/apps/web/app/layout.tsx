import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const ashley = localFont({
  src: [
    { path: "../fonts/Ashley-Southine.ttf", weight: "100", style: "normal" },
    ],
  variable: "--font-ashley",
  display: "swap",
});

const autography = localFont({
  src: [
    { path: "../fonts/autography.otf", weight: "100", style: "normal" },
    ],
  variable: "--font-autography",
  display: "swap",
});

const flake = localFont({
  src: [
    { path: "../fonts/flake-regular.ttf", weight: "100", style: "normal" },
    ],
  variable: "--font-flake",
  display: "swap",
});

const IsidoraSans = localFont({
  src: [
    { path: "../fonts/Isidorasans-regular.otf", weight: "100", style: "normal" },
    ],
  variable: "--font-isidora-sans",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Echoid - Second Brain App",
  description: "A Second Brain app to keep all your links",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ashley.variable} ${autography.variable} ${flake.variable} ${IsidoraSans.variable} antialiased bg-[#F0F0F0] text-black overflow-x-hidden`}
        >
        {children}
      </body>
    </html>
  );
}
