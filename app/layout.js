
import { Outfit,Ovo } from "next/font/google";
import "./globals.css";


const outfit = Outfit({
  subsets: ["latin"],
  weight:["400","500","600","700"]
});

const ovo = Ovo({
  subsets: ["latin"],
  weight:["400"]
});


export const metadata = {
  title: "My Personal Portfolio",
  description: "My personal portfolio that build using next js tailwind and web3 forms ",
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
