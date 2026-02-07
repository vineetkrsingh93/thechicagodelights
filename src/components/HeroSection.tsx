import { ChevronRight, Pizza } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroPizza from "@/assets/hero-pizza.jpg";
export function HeroSection() {
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroPizza})`
    }} />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Pizza className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Serving, Since 2015</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 animate-slide-up">
            OWN A <span className="text-primary">PROFITABLE</span>
            <br />
            <span className="text-gradient-gold">PIZZA FRANCHISE</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 animate-slide-up" style={{
          animationDelay: "0.2s"
        }}>Join 80+ Chicago Delights outlets across India and start your entrepreneurial journey in the premium pizza industry.</p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-slide-up" style={{
          animationDelay: "0.4s"
        }}>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 shadow-glow animate-pulse-glow">
              <a href="#franchise">
                Apply for Franchise
                <ChevronRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground text-lg px-8 py-6">
              <a href="#products">
                View Menu
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t border-border/50 animate-fade-in" style={{
          animationDelay: "0.6s"
        }}>
            <div>
              <div className="font-display text-4xl md:text-5xl text-secondary">80+</div>
              <div className="text-muted-foreground text-sm">Outlets (Across PAN India)</div>
            </div>
            <div>
              <div className="font-display text-4xl md:text-5xl text-secondary">9+</div>
              <div className="text-muted-foreground text-sm">Years Experience</div>
            </div>
            <div>
              <div className="font-display text-4xl md:text-5xl text-secondary">100%</div>
              <div className="text-muted-foreground text-sm">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>;
}