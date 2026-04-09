import { useState } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { destinations } from "@/lib/data";
import heroBeach from "@/assets/hero-beach.jpg";

const Book = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", destination: "", travelers: "", date: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Booking Request Sent!", description: "We'll get back to you within 24 hours." });
    setFormData({ name: "", email: "", phone: "", destination: "", travelers: "", date: "", message: "" });
  };

  return (
    <Layout>
      <section className="relative h-[40vh] overflow-hidden">
        <img src={heroBeach} alt="Book a tour" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 hero-overlay flex items-center justify-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">Book Your Safari</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-2xl">
          <AnimatedSection>
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name</label>
                      <Input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <Input value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+254 700 000 000" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Number of Travelers</label>
                      <Input type="number" min="1" value={formData.travelers} onChange={(e) => setFormData({ ...formData, travelers: e.target.value })} placeholder="2" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Destination</label>
                    <Select value={formData.destination} onValueChange={(v) => setFormData({ ...formData, destination: v })}>
                      <SelectTrigger><SelectValue placeholder="Choose a destination" /></SelectTrigger>
                      <SelectContent>
                        {destinations.map((d) => (
                          <SelectItem key={d.id} value={d.name}>{d.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Preferred Date</label>
                    <Input type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Special Requests</label>
                    <Textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Any special requirements or preferences..." rows={4} />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-secondary text-secondary-foreground hover:bg-safari-warm">
                    Submit Booking Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Book;
