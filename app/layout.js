import { Inter } from "next/font/google";
import "./globals.css";
import HeaderPc1 from "@/src/components/headerPc";
import { AppProvider, MobileProvider } from "@/src/components/context";
import FooterPc1 from "@/src/components/footer";

export const metadata = {
  title: "Portifolio",
  description: "Made by Henrique De Freitas Serra",
};

export default function RootLayout({ children }) {
  return (
    <AppProvider>
      <html lang="en">
        <head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Jersey+10&display=swap"
            rel="stylesheet"
          />  
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Jersey+10&family=Squada+One&display=swap"
            rel="stylesheet"
          />
        </head>
        <body>
          <div>
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
          <FooterPc1 />
        </body>
      </html>
    </AppProvider>
  );
}
