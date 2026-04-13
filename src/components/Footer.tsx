import { Link } from "react-router-dom";
<<<<<<< HEAD
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-safari-green text-white">
=======
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-safari-green text-primary-foreground">
>>>>>>> 3478804c (update project)
      <div className="container py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {/* About */}
          <div>
<<<<<<< HEAD
            <h3 className="font-display text-base font-bold mb-2">
              About Msafiri-Tribe
            </h3>
            <p className="text-xs text-foreground/70 leading-relaxed">
=======
            <h3 className="font-display text-base font-bold mb-2">About Travel Agency</h3>
            <p className="text-xs text-primary-foreground/70 leading-relaxed">
>>>>>>> 3478804c (update project)
              Top-notch travel and touring services across Africa and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
<<<<<<< HEAD
            <h3 className="font-display text-base font-bold mb-2">
              Quick Links
            </h3>
            <ul className="space-y-1 text-xs">
              {["Home", "About", "Destinations", "Book", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="text-foreground/70 hover:text-foreground transition-colors">
                      {item}
                    </Link>
                  </li>
                ),
              )}
=======
            <h3 className="font-display text-base font-bold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-xs">
              {["Home", "About", "Destinations", "Book", "Contact"].map((item) => (
                <li key={item}>
                  <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
>>>>>>> 3478804c (update project)
            </ul>
          </div>

          {/* Contact */}
          <div>
<<<<<<< HEAD
            <h3 className="font-display text-base font-bold mb-2">
              Contact Us
            </h3>
            <ul className="space-y-2 text-xs text-foreground/70">
              <li className="flex items-center gap-2">
                <Mail size={12} className="text-foreground" />
                contact@msafari-tribe.com
              </li>
              <li className="flex items-center gap-2">
                <Phone size={12} className="text-foreground" />
                +254 700 000 000
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={12} className="text-foreground" />
=======
            <h3 className="font-display text-base font-bold mb-2">Contact Us</h3>
            <ul className="space-y-2 text-xs text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Mail size={12} className="text-primary-foreground" />
                contact@msafari-tribe.com
              </li>
              <li className="flex items-center gap-2">
                <Phone size={12} className="text-primary-foreground" />
                +254 700 000 000
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={12} className="text-primary-foreground" />
>>>>>>> 3478804c (update project)
                Nairobi, Kenya
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-display text-base font-bold mb-2">Follow Us</h3>
            <div className="flex gap-2">
              {[
                { icon: Facebook, href: "https://facebook.com/" },
                { icon: Twitter, href: "https://twitter.com/" },
                { icon: Instagram, href: "https://instagram.com/" },
                { icon: Youtube, href: "https://youtube.com/" },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
<<<<<<< HEAD
                  className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-foreground/20 transition-all">
=======
                  className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-all"
                >
>>>>>>> 3478804c (update project)
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
      <div className="border-t border-foreground/10 py-3">
        <p className="text-center text-xs text-foreground/50">
=======
      <div className="border-t border-primary-foreground/10 py-3">
        <p className="text-center text-xs text-primary-foreground/50">
>>>>>>> 3478804c (update project)
          © {new Date().getFullYear()} Msafari-Tribe. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
