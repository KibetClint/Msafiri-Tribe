import { useState } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroAdventure from "@/assets/hero-adventure.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll respond within 24 hours." });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Layout>
      <section className="relative h-[40vh] overflow-hidden">
        <img src={heroAdventure} alt="Contact us" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 hero-overlay flex items-center justify-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">Contact Us</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="space-y-6">
              {[
                { icon: Mail, title: "Email", value: "contact@msafari-tribe.com" },
                { icon: Phone, title: "Phone", value: "+254 700 000 000" },
                { icon: MapPin, title: "Location", value: "Nairobi, Kenya" },
              ].map(({ icon: Icon, title, value }, i) => (
                <AnimatedSection key={title} delay={i * 100}>
                  <Card className="border-none bg-safari-cream">
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">{title}</p>
                        <p className="text-sm text-muted-foreground">{value}</p>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={150} className="lg:col-span-2">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <h2 className="font-display text-2xl font-bold mb-6">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required placeholder="Your Name" />
                      <Input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required placeholder="Your Email" />
                    </div>
                    <Input value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} placeholder="Subject" />
                    <Textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Your Message" rows={6} required />
                    <Button type="submit" size="lg" className="bg-secondary text-secondary-foreground hover:bg-safari-warm">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
