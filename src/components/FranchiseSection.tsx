import { useState } from "react";
import { Check, Building2, Users, TrendingUp, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const highlights = [
  { icon: Building2, text: "80+ Outlets Across India" },
  { icon: Users, text: "Complete Training & Support" },
  { icon: TrendingUp, text: "High Profit Business Model" },
  { icon: Award, text: "Strong Established Brand" },
];

export function FranchiseSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    budget: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Application Submitted!",
      description: "Our franchise team will contact you within 24 hours.",
    });

    setFormData({ name: "", phone: "", city: "", budget: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="franchise" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Join Us</span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mt-4 mb-6">
            START YOUR <span className="text-primary">CHICAGO DELIGHTS</span> FRANCHISE
          </h2>
          <p className="text-muted-foreground text-lg">
            Fill out the form and our franchise team will contact you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-elevated">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name *
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background border-border focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number *
                </label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-background border-border focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium text-foreground mb-2">
                  City *
                </label>
                <Input
                  id="city"
                  type="text"
                  required
                  placeholder="Enter your city"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="bg-background border-border focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                  Investment Budget
                </label>
                <Input
                  id="budget"
                  type="text"
                  placeholder="e.g., ₹15-20 Lakhs"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="bg-background border-border focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about yourself and your interest in the franchise"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background border-border focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6 shadow-glow"
              >
                {isSubmitting ? "Submitting..." : "Request Franchise Details"}
              </Button>
            </form>
          </div>

          {/* Highlights */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-primary/20 to-secondary/10 border border-primary/30 rounded-2xl p-8">
              <h3 className="font-display text-3xl text-foreground mb-6">
                WHY <span className="text-primary">CHICAGO DELIGHTS?</span>
              </h3>
              <div className="space-y-6">
                {highlights.map((item) => (
                  <div key={item.text} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="font-display text-4xl text-secondary mb-2">₹15L+</div>
                <div className="text-muted-foreground text-sm">Starting Investment</div>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="font-display text-4xl text-secondary mb-2">2 Years</div>
                <div className="text-muted-foreground text-sm">Average ROI Period</div>
              </div>
            </div>

            {/* Checklist */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h4 className="font-display text-xl text-foreground mb-4">What You Get</h4>
              <ul className="space-y-3">
                {[
                  "Complete brand licensing",
                  "Location selection support",
                  "Interior design assistance",
                  "Staff training program",
                  "Marketing launch kit",
                  "Ongoing operational support",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-muted-foreground">
                    <Check className="w-5 h-5 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}