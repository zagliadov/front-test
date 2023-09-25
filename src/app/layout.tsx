import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StepsBullets from "../components/Navigation/StepsBullets";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <div className="bg-gray-100 p-6 h-screen">
          <div className="flex bg-white h-full rounded-md shadow-xl">
            <div className="w-[25%] border-r">
              <StepsBullets />
            </div>
            <div className="w-[75%]">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
