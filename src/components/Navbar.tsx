import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Mail, Facebook, Twitter, Instagram } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Destinations", path: "/destinations" },
  { label: "Membership", path: "/membership" },
  { label: "Book", path: "/book" },
  { label: "Contact", path: "/contact" },
  { label: "FAQs", path: "/faqs" },
];

const TopBar = () => (
  <div className="bg-safari-green text-foreground text-sm py-2">
    <div className="container flex justify-between items-center">
      <div className="flex items-center gap-4">
        <a
          href="https://facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground/70 transition-colors">
          <Facebook size={14} />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground/70 transition-colors">
          <Twitter size={14} />
        </a>
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground/70 transition-colors">
          <Instagram size={14} />
        </a>
      </div>
      <a
        href="mailto:contact@msafari-tribe.com"
        className="flex items-center gap-2 hover:text-foreground/70 transition-colors">
        <Mail size={14} />
        contact@msafari-tribe.com
      </a>
    </div>
  </div>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      <TopBar />
      <nav className="sticky top-0 z-50 bg-safari-cream backdrop-blur-md border-b border-safari-gold/30">
        <div className="container flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-display font-bold text-lg">
              M
            </div>
            <span className="font-display text-xl font-bold text-foreground">
              Msafari-Tribe
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === link.path
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-foreground">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t bg-background">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`block px-6 py-3 text-sm font-medium transition-colors ${
                  pathname === link.path
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}>
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
