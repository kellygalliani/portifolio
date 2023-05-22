import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "@/styles/Global";
import { Home } from "@/pages/home";
import { NavBar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "./providers/languageContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LanguageProvider>
      <GlobalStyle>
        <NavBar />
        <Home />
        <Footer />
      </GlobalStyle>
    </LanguageProvider>
  </React.StrictMode>
);
