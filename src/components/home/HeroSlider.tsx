import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import heroSafari from "@/assets/hero-safari.jpg";
import heroBeach from "@/assets/hero-beach.jpg";
import heroAdventure from "@/assets/hero-adventure.jpg";
import { useNavbarVisibility } from "@/context/NavbarVisibilityContext";

const heroSlides = [
  {
    image: heroSafari,
    eyebrow: "East Africa",
    title: "Where the Wild\nCalls Your Name",
    subtitle: "Bespoke safari experiences crafted for the fearless traveller.",
    cta: "Explore Safaris",
    link: "/destinations?category=local",
    accent: "#C8965A",
  },
  {
    image: heroBeach,
    eyebrow: "Coastal Escapes",
    title: "Endless Blue,\nEndless Calm",
    subtitle: "Pristine shores and turquoise waters awaiting your arrival.",
    cta: "Beach Holidays",
    link: "/destinations?category=beach",
    accent: "#5A9EC8",
  },
  {
    image: heroAdventure,
    eyebrow: "International",
    title: "The World Is\nYours to Claim",
    subtitle: "Dubai. Maldives. Egypt. Turkey. Cape Town. Your next chapter.",
    cta: "Go International",
    link: "/destinations?category=international",
    accent: "#8BC85A",
  },
];

const HeroSlider = () => {
  const { isHeaderVisible } = useNavbarVisibility();
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = (next: number) => {
    if (animating) return;
    setAnimating(true);
    setCurrent(next);
    setTimeout(() => setAnimating(false), 900);
  };

  const prev = () => go((current - 1 + heroSlides.length) % heroSlides.length);
  const next = () => go((current + 1) % heroSlides.length);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % heroSlides.length);
    }, 7000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const slide = heroSlides[current];

  return (
    <section
      className={`relative overflow-hidden transition-all duration-500 ${
        isHeaderVisible ? "h-[92vh]" : "h-screen"
      }`}
      style={{ minHeight: 560 }}>
      {/* Slides */}
      {heroSlides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            opacity: i === current ? 1 : 0,
            zIndex: i === current ? 1 : 0,
          }}>
          <img
            src={s.image}
            alt={s.title}
            className="w-full h-full object-cover"
            style={{
              transform: i === current ? "scale(1.03)" : "scale(1.08)",
              transition: "transform 8s ease-out",
            }}
            width={1920}
            height={1080}
          />
        </div>
      ))}
      {/* Overlays */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.1) 100%)",
        }}
      />
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%)",
        }}
      />
      {/* Text content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-5xl">
        <div
          key={`eyebrow-${current}`}
          className="flex items-center gap-3 mb-5"
          style={{ animation: "slideUp 0.7s ease both" }}>
          <span className="h-px w-10" style={{ background: slide.accent }} />
          <span
            className="text-xs font-bold tracking-[0.25em] uppercase"
            style={{ color: slide.accent }}>
            {slide.eyebrow}
          </span>
        </div>

        <h1
          key={`title-${current}`}
          className="font-display font-black text-white leading-[1.05] mb-6"
          style={{
            fontSize: "clamp(2.8rem, 7vw, 6rem)",
            animation: "slideUp 0.8s 0.1s ease both",
            whiteSpace: "pre-line",
          }}>
          {slide.title}
        </h1>

        <p
          key={`sub-${current}`}
          className="text-white/70 text-lg md:text-xl max-w-lg mb-10 leading-relaxed"
          style={{ animation: "slideUp 0.8s 0.2s ease both" }}>
          {slide.subtitle}
        </p>

        <div
          key={`cta-${current}`}
          className="flex items-center gap-5"
          style={{ animation: "slideUp 0.8s 0.3s ease both" }}>
          <Link to={slide.link}>
            <button
              className="group flex items-center gap-3 px-8 py-4 font-bold text-sm tracking-widest uppercase text-white transition-all duration-300 hover:opacity-90"
              style={{ background: slide.accent, borderRadius: 2 }}>
              {slide.cta}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </Link>
          <Link
            to="/destinations"
            className="text-white/60 hover:text-white text-sm font-medium tracking-wide transition-colors underline-offset-4 hover:underline">
            View all destinations
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
