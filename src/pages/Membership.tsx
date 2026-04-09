import { useState } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { destinations } from "@/lib/data";
import { CheckCircle, CreditCard, Shield, Clock, Users, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const installmentPlans = [
  { months: 3, label: "3 Months", discount: 0 },
  { months: 6, label: "6 Months", discount: 0 },
  { months: 12, label: "12 Months", discount: 5 },
];

const memberBenefits = [
  { icon: CreditCard, title: "Flexible Payments", desc: "Split your trip cost into easy monthly installments." },
  { icon: Shield, title: "Price Lock Guarantee", desc: "Lock today's price even if rates go up before your trip." },
  { icon: Clock, title: "Early Access", desc: "Get priority booking on new destinations and seasonal deals." },
  { icon: Users, title: "Group Discounts", desc: "Bring friends and family and enjoy group rate savings." },
  { icon: Star, title: "Loyalty Rewards", desc: "Earn points on every trip toward free upgrades and add-ons." },
];

const Membership = () => {
  const { toast } = useToast();
  const [selectedDest, setSelectedDest] = useState("");
  const [selectedTier, setSelectedTier] = useState<"basic" | "silver" | "premium">("basic");
  const [selectedPlan, setSelectedPlan] = useState(6);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const dest = destinations.find((d) => d.slug === selectedDest);
  const pkg = dest?.packages[selectedTier];
  const plan = installmentPlans.find((p) => p.months === selectedPlan)!;
  const totalPrice = pkg ? Math.round(pkg.price * (1 - plan.discount / 100)) : 0;
  const monthlyPayment = pkg ? Math.round(totalPrice / plan.months) : 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDest || !name || !email || !phone) {
      toast({ title: "Please fill all fields", variant: "destructive" });
      return;
    }
    toast({
      title: "Application Submitted!",
      description: `We'll contact you shortly to set up your ${plan.label} installment plan for ${dest?.name}.`,
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-safari-cream">
        <div className="container text-center">
          <AnimatedSection>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Become a Member</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-6">
              Travel now, pay later. Split the cost of your dream trip into affordable monthly installments — no interest, no hidden fees.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-center mb-12">Member Benefits</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {memberBenefits.map((b, i) => (
              <AnimatedSection key={b.title} delay={i * 80}>
                <Card className="text-center border-none shadow-sm hover:shadow-md transition-shadow h-full">
                  <CardContent className="pt-8 pb-6">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <b.icon size={24} className="text-primary" />
                    </div>
                    <h3 className="font-display font-semibold mb-2">{b.title}</h3>
                    <p className="text-sm text-muted-foreground">{b.desc}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator & Form */}
      <section className="py-16 bg-safari-cream">
        <div className="container">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-center mb-4">Plan Your Installments</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
              Choose your destination, package tier, and payment plan to see your monthly cost.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <AnimatedSection delay={100}>
              <Card className="border-none shadow-md">
                <CardContent className="p-8 space-y-6">
                  <div>
                    <Label className="mb-2 block font-semibold">Destination</Label>
                    <Select value={selectedDest} onValueChange={setSelectedDest}>
                      <SelectTrigger><SelectValue placeholder="Choose a destination" /></SelectTrigger>
                      <SelectContent>
                        {destinations.map((d) => (
                          <SelectItem key={d.slug} value={d.slug}>{d.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="mb-2 block font-semibold">Package Tier</Label>
                    <div className="grid grid-cols-3 gap-3">
                      {(["basic", "silver", "premium"] as const).map((tier) => (
                        <button
                          key={tier}
                          onClick={() => setSelectedTier(tier)}
                          className={`py-2.5 rounded-lg text-sm font-medium capitalize transition-all ${
                            selectedTier === tier
                              ? "bg-primary text-primary-foreground shadow-md"
                              : "bg-muted text-muted-foreground hover:bg-accent"
                          }`}
                        >
                          {tier}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="mb-2 block font-semibold">Installment Plan</Label>
                    <div className="grid grid-cols-3 gap-3">
                      {installmentPlans.map((p) => (
                        <button
                          key={p.months}
                          onClick={() => setSelectedPlan(p.months)}
                          className={`py-2.5 rounded-lg text-sm font-medium transition-all ${
                            selectedPlan === p.months
                              ? "bg-secondary text-secondary-foreground shadow-md"
                              : "bg-muted text-muted-foreground hover:bg-accent"
                          }`}
                        >
                          {p.label}
                          {p.discount > 0 && <span className="block text-[10px] mt-0.5">({p.discount}% off)</span>}
                        </button>
                      ))}
                    </div>
                  </div>

                  {pkg && (
                    <div className="bg-primary/5 rounded-xl p-6 text-center">
                      <p className="text-sm text-muted-foreground mb-1">{dest?.name} — {pkg.name}</p>
                      <p className="text-4xl font-bold text-primary mb-1">${monthlyPayment}<span className="text-base font-normal text-muted-foreground">/mo</span></p>
                      <p className="text-sm text-muted-foreground">Total: ${totalPrice} over {plan.months} months</p>
                      {plan.discount > 0 && (
                        <p className="text-xs text-primary mt-1 font-semibold">You save ${pkg.price - totalPrice}!</p>
                      )}
                      <div className="mt-4 text-left space-y-1">
                        {pkg.includes.slice(0, 4).map((item) => (
                          <div key={item} className="flex items-center gap-2 text-sm">
                            <CheckCircle size={12} className="text-primary flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <Card className="border-none shadow-md">
                <CardContent className="p-8">
                  <h3 className="font-display text-xl font-bold mb-6">Apply for Installment Plan</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone (WhatsApp)</Label>
                      <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+254 700 000 000" />
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4 text-sm text-muted-foreground">
                      <p className="font-semibold text-foreground mb-1">How it works:</p>
                      <ol className="list-decimal list-inside space-y-1">
                        <li>Submit your application</li>
                        <li>Our team contacts you within 24 hours</li>
                        <li>Sign a simple agreement & pay your first installment</li>
                        <li>Travel when you've completed your payments!</li>
                      </ol>
                    </div>
                    <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-safari-green-light" size="lg">
                      Submit Application
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container max-w-3xl">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-center mb-10">Installment Plan FAQs</h2>
          </AnimatedSection>
          <div className="space-y-6">
            {[
              { q: "Is there any interest on installments?", a: "No! Our installment plans are completely interest-free. You only pay the trip cost." },
              { q: "When do I travel?", a: "You travel once your installment plan is fully paid. We lock in your chosen travel dates at sign-up." },
              { q: "Can I pay off early?", a: "Absolutely! You can pay off your balance at any time with no penalties." },
              { q: "What if I need to cancel?", a: "Cancellations are handled per our policy. A small admin fee may apply, but most of your payments are refundable." },
              { q: "Can I bring a group?", a: "Yes! Group installment plans are available with additional discounts for 4+ travelers." },
            ].map((faq, i) => (
              <AnimatedSection key={faq.q} delay={i * 80}>
                <div className="border-b pb-4">
                  <h4 className="font-display font-semibold mb-2">{faq.q}</h4>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Membership;
