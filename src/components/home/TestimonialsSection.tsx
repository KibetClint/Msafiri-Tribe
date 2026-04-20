import { Quote, Star } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { testimonials } from "@/lib/data";

const TestimonialsSection = () => (
  <section className="py-24 bg-background">
    <div className="container">
      <AnimatedSection>
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-safari-warm mb-2 text-center">
          Testimonials
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-black text-center mb-14">
          Voices from the Trail
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.slice(0, 3).map((t, i) => (
          <AnimatedSection key={i} delay={i * 100}>
            <div className="relative rounded-2xl p-8 bg-safari-cream border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Quote size={36} className="text-safari-green/20 mb-4" />
              <p className="text-foreground/80 leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-safari-green/15 flex items-center justify-center text-safari-green font-black text-sm shrink-0">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="font-display font-bold text-sm">{t.author}</p>
                  <div className="flex gap-0.5 mt-0.5">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} size={10} className="fill-safari-warm text-safari-warm" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
