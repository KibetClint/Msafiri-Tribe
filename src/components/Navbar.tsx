import { useState, useRef, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  ChevronDown,
} from "lucide-react";
import { destinations, tripTypes } from "@/lib/data";

const TopBar = () => (
  <div className="bg-safari-green text-primary-foreground text-sm py-2">
    <div className="container flex justify-between items-center">
      <div className="flex items-center gap-4">
        <a
          href="https://facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary-foreground/70 transition-colors">
          <Facebook size={14} />
        </a>
        <a
          href="https://x.com/MsafiriTribe"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary-foreground/70 transition-colors">
          <Twitter size={14} />
        </a>
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary-foreground/70 transition-colors">
          <Instagram size={14} />
        </a>
      </div>
      <a
        href="mailto:contact@msafari-tribe.com"
        className="flex items-center gap-2 hover:text-primary-foreground/70 transition-colors">
        <Mail size={14} />
        contact@msafari-tribe.com
      </a>
    </div>
  </div>
);

// Group destinations by country
const destinationsByCountry = destinations.reduce(
  (acc, d) => {
    if (!acc[d.country]) acc[d.country] = [];
    acc[d.country].push(d);
    return acc;
  },
  {} as Record<string, typeof destinations>,
);

const DropdownMenu = ({
  children,
  items,
  isOpen,
  onToggle,
  onClose,
}: {
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
      <button
        onClick={onToggle}
        className="flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium transition-colors text-foreground hover:bg-muted">
        {children}
        <ChevronDown
          size={14}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
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
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const inactivityTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { pathname } = useLocation();

  const toggleDropdown = (key: string) =>
    setActiveDropdown((prev) => (prev === key ? null : key));

  const closeDropdowns = () => setActiveDropdown(null);
  const isActive = (path: string) => pathname === path;

  const simpleLinks = [
    { label: "Home", path: "/" },
    { label: "Custom Travels", path: "/customtravels" },
    { label: "Book", path: "/book" },
    { label: "Contact", path: "/contact" },
    { label: "FAQs", path: "/faqs" },
  ];

  const resetInactivityTimer = useCallback(() => {
    setIsHeaderVisible(true);

    if (inactivityTimer.current) {
      clearTimeout(inactivityTimer.current);
    }

    inactivityTimer.current = setTimeout(() => {
      // keep header visible while menus are open
      if (!open && !activeDropdown) {
        setIsHeaderVisible(false);
      }
    }, 5000);
  }, [open, activeDropdown]);

  useEffect(() => {
    resetInactivityTimer();

    const activityEvents: (keyof WindowEventMap)[] = [
      "mousemove",
      "mousedown",
      "keydown",
      "scroll",
      "touchstart",
      "click",
    ];

    activityEvents.forEach((event) => {
      window.addEventListener(event, resetInactivityTimer, { passive: true });
    });

    return () => {
      activityEvents.forEach((event) => {
        window.removeEventListener(event, resetInactivityTimer);
      });

      if (inactivityTimer.current) {
        clearTimeout(inactivityTimer.current);
      }
    };
  }, [resetInactivityTimer]);

  useEffect(() => {
    resetInactivityTimer();
  }, [pathname, open, activeDropdown, resetInactivityTimer]);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${
          isHeaderVisible ? "translate-y-0" : "-translate-y-full"
        }`}>
        <TopBar />

        <nav className="bg-safari-cream backdrop-blur-md border-b border-safari-green/20">
          <div className="container flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center overflow-hidden">
                <img
                  src="/logo.png"
                  alt="Msafiri Tribe logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-display text-xl font-bold text-foreground">
                Msafiri-Tribe
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              <Link
                to="/"
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive("/")
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}>
                Home
              </Link>

              <DropdownMenu
                isOpen={activeDropdown === "about"}
                onToggle={() => toggleDropdown("about")}
                onClose={closeDropdowns}
                items={
                  <>
                    <Link
                      to="/about"
                      onClick={closeDropdowns}
                      className="block px-4 py-2.5 text-sm hover:bg-muted transition-colors font-medium">
                      About Us
                    </Link>
                    <Link
                      to="/about#our-team"
                      onClick={closeDropdowns}
                      className="block px-4 py-2.5 text-sm hover:bg-muted transition-colors">
                      Our Team
                    </Link>
                    <Link
                      to="/about#why-us"
                      onClick={closeDropdowns}
                      className="block px-4 py-2.5 text-sm hover:bg-muted transition-colors">
                      Why Choose Us
                    </Link>
                  </>
                }>
                About
              </DropdownMenu>

              <DropdownMenu
                isOpen={activeDropdown === "destinations"}
                onToggle={() => toggleDropdown("destinations")}
                onClose={closeDropdowns}
                items={
                  <>
                    <Link
                      to="/destinations"
                      onClick={closeDropdowns}
                      className="block px-4 py-2.5 text-sm hover:bg-muted transition-colors font-semibold border-b mb-1 pb-2">
                      All Destinations
                    </Link>
                    {Object.entries(destinationsByCountry).map(
                      ([country, dests]) => (
                        <div key={country}>
                          <div className="px-4 py-1.5 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                            {country}
                          </div>
                          {dests.map((d) => (
                            <Link
                              key={d.slug}
                              to={`/destinations/${d.slug}`}
                              onClick={closeDropdowns}
                              className="block px-6 py-1.5 text-sm hover:bg-muted transition-colors">
                              {d.name}
                            </Link>
                          ))}
                        </div>
                      ),
                    )}
                  </>
                }>
                Destinations
              </DropdownMenu>

              <DropdownMenu
                isOpen={activeDropdown === "trip-types"}
                onToggle={() => toggleDropdown("trip-types")}
                onClose={closeDropdowns}
                items={
                  <>
                    {tripTypes.map((t) => (
                      <Link
                        key={t.key}
                        to={`/destinations?tripType=${t.key}`}
                        onClick={closeDropdowns}
                        className="block px-4 py-2.5 hover:bg-muted transition-colors">
                        <div className="text-sm font-medium">{t.label}</div>
                        <div className="text-xs text-muted-foreground">
                          {t.description}
                        </div>
                      </Link>
                    ))}
                  </>
                }>
                Trip Types
              </DropdownMenu>

              {simpleLinks
                .filter((l) => l.label !== "Home")
                .map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(link.path)
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-muted"
                    }`}>
                    {link.label}
                  </Link>
                ))}
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 text-foreground">
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {open && (
            <div className="lg:hidden border-t bg-background max-h-[80vh] overflow-y-auto">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className={`block px-6 py-3 text-sm font-medium ${
                  isActive("/")
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}>
                Home
              </Link>

              <button
                onClick={() =>
                  setMobileExpanded((prev) =>
                    prev === "about" ? null : "about",
                  )
                }
                className="w-full flex items-center justify-between px-6 py-3 text-sm font-medium text-foreground hover:bg-muted">
                About
                <ChevronDown
                  size={14}
                  className={`transition-transform ${
                    mobileExpanded === "about" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileExpanded === "about" && (
                <div className="bg-muted/50">
                  <Link
                    to="/about"
                    onClick={() => setOpen(false)}
                    className="block px-10 py-2 text-sm">
                    About Us
                  </Link>
                  <Link
                    to="/about#our-team"
                    onClick={() => setOpen(false)}
                    className="block px-10 py-2 text-sm">
                    Our Team
                  </Link>
                  <Link
                    to="/about#why-us"
                    onClick={() => setOpen(false)}
                    className="block px-10 py-2 text-sm">
                    Why Choose Us
                  </Link>
                </div>
              )}

              <button
                onClick={() =>
                  setMobileExpanded((prev) => (prev === "dest" ? null : "dest"))
                }
                className="w-full flex items-center justify-between px-6 py-3 text-sm font-medium text-foreground hover:bg-muted">
                Destinations
                <ChevronDown
                  size={14}
                  className={`transition-transform ${
                    mobileExpanded === "dest" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileExpanded === "dest" && (
                <div className="bg-muted/50">
                  <Link
                    to="/destinations"
                    onClick={() => setOpen(false)}
                    className="block px-10 py-2 text-sm font-semibold">
                    All Destinations
                  </Link>
                  {Object.entries(destinationsByCountry).map(
                    ([country, dests]) => (
                      <div key={country}>
                        <div className="px-10 py-1 text-xs font-bold text-muted-foreground uppercase">
                          {country}
                        </div>
                        {dests.map((d) => (
                          <Link
                            key={d.slug}
                            to={`/destinations/${d.slug}`}
                            onClick={() => setOpen(false)}
                            className="block px-12 py-1.5 text-sm">
                            {d.name}
                          </Link>
                        ))}
                      </div>
                    ),
                  )}
                </div>
              )}

              <button
                onClick={() =>
                  setMobileExpanded((prev) => (prev === "trip" ? null : "trip"))
                }
                className="w-full flex items-center justify-between px-6 py-3 text-sm font-medium text-foreground hover:bg-muted">
                Trip Types
                <ChevronDown
                  size={14}
                  className={`transition-transform ${
                    mobileExpanded === "trip" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileExpanded === "trip" && (
                <div className="bg-muted/50">
                  {tripTypes.map((t) => (
                    <Link
                      key={t.key}
                      to={`/destinations?tripType=${t.key}`}
                      onClick={() => setOpen(false)}
                      className="block px-10 py-2 text-sm">
                      {t.label}
                    </Link>
                  ))}
                </div>
              )}

              {simpleLinks
                .filter((l) => l.label !== "Home")
                .map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={`block px-6 py-3 text-sm font-medium ${
                      isActive(link.path)
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-muted"
                    }`}>
                    {link.label}
                  </Link>
                ))}
            </div>
          )}
        </nav>
      </div>

      {/* spacer so page content does not go under fixed header */}
      <div className="h-[104px] md:h-[104px]" />
    </>
  );
};

export default Navbar;
