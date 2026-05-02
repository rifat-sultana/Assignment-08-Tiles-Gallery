import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from './components/navbar';
import Footer from "./components/Footer";
;

const OutfitFont = Outfit({
  subsets: ["latin"],
});


export const metadata = {
  title: "Tiles Gallery",
  description: "Tiles Gallery Website",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${OutfitFont.className} h-full antialiased`}
    >
      <body>
        <Navbar/>
        <main className=" container mx-auto"> {children} </main>    
        <Footer/>
        </body>
    </html>
  );
}
