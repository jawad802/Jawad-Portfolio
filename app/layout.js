
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";


const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"]
});


export const metadata = {
  title: "Syed Jawad | Full-Stack & Next.js Developer",
  description: "Portfolio of Syed Jawad, a Full-Stack Web Developer specializing in Next.js, React, Node.js, and custom web applications.",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased bg-white text-black dark:bg-gray-900 dark:text-white`}
      >

        {children}

        {/* {children} */}
      </body>
    </html>
  );
}
