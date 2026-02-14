import { Link } from "react-router-dom";
import { Globe, ChevronRight, TrendingUp, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import businessCanada from "@/assets/business-canada.jpg";

export function BusinessSection() {
  return (
    <section id="business" className="py-20 pb-40 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Global Growth</span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mt-4 mb-6">
            BUSINESS <span className="text-gradient-gold">EXPANSION</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Chicago Delights is going international — starting with Canada and expanding across North America.
          </p>
        </div>

        {/* Banner Card */}
        <Link to="/business" className="block group">
          <div className="relative rounded-3xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 shadow-elevated hover:shadow-glow">
            {/* Background Image */}
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${businessCanada})` }} />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />

            {/* Content */}
            <div className="relative p-8 md:p-12 lg:p-16 min-h-[350px] flex items-center">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6">
                  <Globe className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-primary">Now Expanding to Canada</span>
                </div>

                <h3 className="font-display text-3xl md:text-5xl text-foreground mb-4">
                  EXPANDING THE <span className="text-primary">BUSINESS</span> IN CANADA
                </h3>
                <p className="text-muted-foreground text-lg mb-8 max-w-lg">
                  Partnering with Younge Group to bring premium pizza experiences to North America. Explore our global vision.
                </p>

                {/* Mini Stats */}
                <div className="flex flex-wrap gap-6 mb-8">
                  {[
                    { icon: TrendingUp, label: "Growth-Driven" },
                    { icon: Handshake, label: "Strategic Partnership" },
                    { icon: Globe, label: "North America Focus" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-2 text-muted-foreground">
                      <item.icon className="w-5 h-5 text-secondary" />
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>

                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 shadow-glow group-hover:animate-pulse-glow">
                  Explore Business Expansion
                  <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}