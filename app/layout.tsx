import Providers from "./provider";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/layout/Navbar";

const roboto = Roboto({ 
  subsets: ["latin"], 
  weight: ["400", "500", "700"] 
});

export const metadata: Metadata = {
  title: "Dinotopia - Explore the World of Dinosaurs",
  description: "Discover the ultimate dinosaur encyclopedia with Dinotopia. Explore over 700 species of prehistoric life, from the mighty Tyrannosaurus to the gentle Triceratops. Accurate, beautifully illustrated, and easy to navigate - your go-to resource for all things dinosaur.",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html
      lang="en"
      className={roboto.className}
      >
      <body className="min-h-full flex flex-col">
      <Navbar />
      <Providers>
        {children}
      </Providers>
      </body>
    </html>
  );
}
