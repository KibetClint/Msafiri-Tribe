import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/lib/data";
import heroSafari from "@/assets/hero-safari.jpg";

const FAQs = () => {
  return (
    <Layout>
      <section className="relative h-[40vh] overflow-hidden">
        <img src={heroSafari} alt="FAQs" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 hero-overlay flex items-center justify-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">Frequently Asked Questions</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <AccordionItem value={`faq-${i}`} className="bg-safari-cream rounded-lg px-6 border-none">
                  <AccordionTrigger className="font-display text-lg font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </AnimatedSection>
            ))}
          </Accordion>
        </div>
      </section>
    </Layout>
  );
};

export default FAQs;
