import { Link } from "react-router-dom";
import {
  Compass,
  Heart,
  Umbrella,
  Binoculars,
  Mountain,
  Landmark,
  Crown,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { themedHolidays } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Heart,
  Umbrella,
  Binoculars,
  Mountain,
  Landmark,
  Crown,
};

const getThemeSlug = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "-")
    .replace(/-+/g, "-");

const ThemedHolidaysSection = () => (
  <section className="py-12 bg-safari-cream relative overflow-hidden">
    <div
      className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10 pointer-events-none"
      style={{
        background: "radial-gradient(circle, #6B8C3E 0%, transparent 70%)",
      }}
    />
    <div className="container relative z-10">
      <AnimatedSection>
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-safari-warm mb-2 text-center">
          Curated Experiences
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-black text-center mb-3">
          Travel Your Way
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-lg mx-auto">
          Every traveller is different. Pick your vibe and we'll craft the
          perfect escape.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {themedHolidays.map((theme, i) => {
          const Icon = iconMap[theme.icon] || Compass;
          return (
            <AnimatedSection key={theme.title} delay={i * 70}>
              <Link
                to={`/destinations?theme=${getThemeSlug(theme.title)}`}
                className="group block">
                <div className="text-center p-5 rounded-2xl bg-background border border-transparent hover:border-safari-green/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-safari-green/10 group-hover:bg-safari-green group-hover:text-white flex items-center justify-center mx-auto mb-3 transition-all duration-300">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display font-bold text-sm mb-1">
                    {theme.title}
                  </h3>
                  <p className="text-[11px] text-muted-foreground leading-snug">
                    {theme.description}
                  </p>
                </div>
              </Link>
            </AnimatedSection>
          );
        })}
      </div>
    </div>
  </section>
);

export default ThemedHolidaysSection;
