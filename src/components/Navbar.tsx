<<<<<<< HEAD
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
=======
import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Mail, Facebook, Twitter, Instagram, ChevronDown } from "lucide-react";
import { destinations, tripTypes } from "@/lib/data";

const TopBar = () => (
  <div className="bg-safari-green text-primary-foreground text-sm py-2">
    <div className="container flex justify-between items-center">
      <div className="flex items-center gap-4">
        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground/70 transition-colors">
          <Facebook size={14} />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground/70 transition-colors">
          <Twitter size={14} />
        </a>
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground/70 transition-colors">
          <Instagram size={14} />
        </a>
      </div>
      <a href="mailto:contact@msafari-tribe.com" className="flex items-center gap-2 hover:text-primary-foreground/70 transition-colors">
>>>>>>> 3478804c (update project)
        <Mail size={14} />
        contact@msafari-tribe.com
      </a>
    </div>
  </div>
);

<<<<<<< HEAD
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      <TopBar />
      <nav className="sticky top-0 z-50 bg-safari-cream backdrop-blur-md border-b border-safari-gold/30">
=======
// Group destinations by country
const destinationsByCountry = destinations.reduce((acc, d) => {
  if (!acc[d.country]) acc[d.country] = [];
  acc[d.country].push(d);
  return acc;
}, {} as Record<string, typeof destinations>);

const DropdownMenu = ({ children, items, isOpen, onToggle, onClose }: {
  children: React.ReactNode;
  items: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    if (isOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen, onClose]);

  return (
    <div ref={ref} className="relative">
      <button onClick={onToggle} className="flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium transition-colors text-foreground hover:bg-muted">
        {children}
        <ChevronDown size={14} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-background border rounded-lg shadow-xl z-50 min-w-[280px] py-2 animate-fade-in max-h-[70vh] overflow-y-auto">
          {items}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const { pathname } = useLocation();

  const toggleDropdown = (key: string) => setActiveDropdown(prev => prev === key ? null : key);
  const closeDropdowns = () => setActiveDropdown(null);

  const isActive = (path: string) => pathname === path;

  const simpleLinks = [
    { label: "Home", path: "/" },
    { label: "Membership", path: "/membership" },
    { label: "Book", path: "/book" },
    { label: "Contact", path: "/contact" },
    { label: "FAQs", path: "/faqs" },
  ];

  return (
    <>
      <TopBar />
      <nav className="sticky top-0 z-50 bg-safari-cream backdrop-blur-md border-b border-safari-green/20">
>>>>>>> 3478804c (update project)
        <div className="container flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-display font-bold text-lg">
              M
            </div>
<<<<<<< HEAD
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
=======
            <span className="font-display text-xl font-bold text-foreground">Msafari-Tribe</span>
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-1">
            <Link to="/" className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${isActive("/") ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"}`}>
              Home
            </Link>

            {/* About Dropdown */}
            <DropdownMenu
              isOpen={activeDropdown === "about"}
              onToggle={() => toggleDropdown("about")}
              onClose={closeDropdowns}
              items={
                <>
                  <Link to="/about" onClick={closeDropdowns} className="block px-4 py-2.5 text-sm hover:bg-muted transition-colors font-medium">About Us</Link>
                  <Link to="/about#our-team" onClick={closeDropdowns} className="block px-4 py-2.5 text-sm hover:bg-muted transition-colors">Our Team</Link>
                  <Link to="/about#why-us" onClick={closeDropdowns} className="block px-4 py-2.5 text-sm hover:bg-muted transition-colors">Why Choose Us</Link>
                </>
              }
            >
              About
            </DropdownMenu>

            {/* Destinations Dropdown by Country */}
            <DropdownMenu
              isOpen={activeDropdown === "destinations"}
              onToggle={() => toggleDropdown("destinations")}
              onClose={closeDropdowns}
              items={
                <>
                  <Link to="/destinations" onClick={closeDropdowns} className="block px-4 py-2.5 text-sm hover:bg-muted transition-colors font-semibold border-b mb-1 pb-2">
                    All Destinations
                  </Link>
                  {Object.entries(destinationsByCountry).map(([country, dests]) => (
                    <div key={country}>
                      <div className="px-4 py-1.5 text-xs font-bold text-muted-foreground uppercase tracking-wider">{country}</div>
                      {dests.map(d => (
                        <Link
                          key={d.slug}
                          to={`/destinations/${d.slug}`}
                          onClick={closeDropdowns}
                          className="block px-6 py-1.5 text-sm hover:bg-muted transition-colors"
                        >
                          {d.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </>
              }
            >
              Destinations
            </DropdownMenu>

            {/* Trip Types Dropdown */}
            <DropdownMenu
              isOpen={activeDropdown === "trip-types"}
              onToggle={() => toggleDropdown("trip-types")}
              onClose={closeDropdowns}
              items={
                <>
                  {tripTypes.map(t => (
                    <Link
                      key={t.key}
                      to={`/destinations?tripType=${t.key}`}
                      onClick={closeDropdowns}
                      className="block px-4 py-2.5 hover:bg-muted transition-colors"
                    >
                      <div className="text-sm font-medium">{t.label}</div>
                      <div className="text-xs text-muted-foreground">{t.description}</div>
                    </Link>
                  ))}
                </>
              }
            >
              Trip Types
            </DropdownMenu>

            {simpleLinks.filter(l => l.label !== "Home").map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${isActive(link.path) ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"}`}
              >
>>>>>>> 3478804c (update project)
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
<<<<<<< HEAD
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-foreground">
=======
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-foreground">
>>>>>>> 3478804c (update project)
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
<<<<<<< HEAD
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
=======
          <div className="lg:hidden border-t bg-background max-h-[80vh] overflow-y-auto">
            <Link to="/" onClick={() => setOpen(false)} className={`block px-6 py-3 text-sm font-medium ${isActive("/") ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"}`}>Home</Link>
            
            {/* Mobile About */}
            <button onClick={() => setMobileExpanded(prev => prev === "about" ? null : "about")} className="w-full flex items-center justify-between px-6 py-3 text-sm font-medium text-foreground hover:bg-muted">
              About <ChevronDown size={14} className={`transition-transform ${mobileExpanded === "about" ? "rotate-180" : ""}`} />
            </button>
            {mobileExpanded === "about" && (
              <div className="bg-muted/50">
                <Link to="/about" onClick={() => setOpen(false)} className="block px-10 py-2 text-sm">About Us</Link>
                <Link to="/about#our-team" onClick={() => setOpen(false)} className="block px-10 py-2 text-sm">Our Team</Link>
                <Link to="/about#why-us" onClick={() => setOpen(false)} className="block px-10 py-2 text-sm">Why Choose Us</Link>
              </div>
            )}

            {/* Mobile Destinations */}
            <button onClick={() => setMobileExpanded(prev => prev === "dest" ? null : "dest")} className="w-full flex items-center justify-between px-6 py-3 text-sm font-medium text-foreground hover:bg-muted">
              Destinations <ChevronDown size={14} className={`transition-transform ${mobileExpanded === "dest" ? "rotate-180" : ""}`} />
            </button>
            {mobileExpanded === "dest" && (
              <div className="bg-muted/50">
                <Link to="/destinations" onClick={() => setOpen(false)} className="block px-10 py-2 text-sm font-semibold">All Destinations</Link>
                {Object.entries(destinationsByCountry).map(([country, dests]) => (
                  <div key={country}>
                    <div className="px-10 py-1 text-xs font-bold text-muted-foreground uppercase">{country}</div>
                    {dests.map(d => (
                      <Link key={d.slug} to={`/destinations/${d.slug}`} onClick={() => setOpen(false)} className="block px-12 py-1.5 text-sm">{d.name}</Link>
                    ))}
                  </div>
                ))}
              </div>
            )}

            {/* Mobile Trip Types */}
            <button onClick={() => setMobileExpanded(prev => prev === "trip" ? null : "trip")} className="w-full flex items-center justify-between px-6 py-3 text-sm font-medium text-foreground hover:bg-muted">
              Trip Types <ChevronDown size={14} className={`transition-transform ${mobileExpanded === "trip" ? "rotate-180" : ""}`} />
            </button>
            {mobileExpanded === "trip" && (
              <div className="bg-muted/50">
                {tripTypes.map(t => (
                  <Link key={t.key} to={`/destinations?tripType=${t.key}`} onClick={() => setOpen(false)} className="block px-10 py-2 text-sm">{t.label}</Link>
                ))}
              </div>
            )}

            {simpleLinks.filter(l => l.label !== "Home").map(link => (
              <Link key={link.path} to={link.path} onClick={() => setOpen(false)} className={`block px-6 py-3 text-sm font-medium ${isActive(link.path) ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"}`}>
>>>>>>> 3478804c (update project)
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
