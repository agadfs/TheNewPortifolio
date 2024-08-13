import { Inter } from "next/font/google";
import "./globals.css";
import HeaderPc1 from "@/src/components/headerPc";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portifolio",
  description: "Made by Henrique De Freitas Serra",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div >
          <HeaderPc1
            texts={["Home", "Skills", "Projects", "About"]}
            links={["", "skills", "projects", "about"]}
            colorBorder={"#031211"}
            colorText={"#0B0C10"}
            colorBackground={"#66FCF1"}
            textOnHovers={[
              "The Main Page",
              "All my knoledge gathered",
              "My latests projects",
              "A bit of my story",
            ]}
          />
        </div>
        {children}
      </body>
    </html>
  );
}
