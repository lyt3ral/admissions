import "@/styles/globals.css";

import { Inter } from "next/font/google";
import { Ubuntu } from "next/font/google";
import Navbar from "@/components/navigation/navbar";
import { TRPCReactProvider } from "@/trpc/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const ubuntu = Ubuntu({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "700",
});

export const metadata = {
  title: "Admissions",
  description: "Student Data Interface",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${ubuntu.variable} ${inter.variable} scroll-smooth`}>
        <TRPCReactProvider>
          <>
            <Navbar />
            {children}
          </>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
