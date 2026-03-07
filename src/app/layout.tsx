import Header from "@/components/header";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Next JS do zero",
  description: "Aprendendo Next JS do zero com o sujeito programador",
  openGraph: {
    title: "Aprendendo Next JS com o sujeito programador no Youtube",
    description: "Aprendendo Next JS do zero com o sujeito programador",
    images: ["https://github.com/noname697.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
