import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import PageTransition from "./PageTransition";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-1">
      <PageTransition>{children}</PageTransition>
    </main>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Layout;
