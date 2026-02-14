import { Link } from "react-router-dom";
import { ArrowLeft, Globe, Handshake, TrendingUp, MapPin, Phone, Mail, ChevronRight, Building2, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import businessCanada from "@/assets/business-canada.jpg";
import partnerKamal from "@/assets/partner-kamal.jpg";

const expansionHighlights = [
  { icon: Globe, title: "Global Vision", desc: "Bringing India's premium pizza brand to international markets, starting with Canada." },
  { icon: Handshake, title: "Strategic Partnerships", desc: "Collaborating with trusted local partners to ensure quality and brand consistency." },
  { icon: TrendingUp, title: "Proven Growth Model", desc: "Leveraging 80+ successful outlets in India to replicate success globally." },
  { icon: Building2, title: "Premium Standards", desc: "Maintaining world-class quality, hygiene, and customer experience across borders." },
];

export default function Business() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-bottom bg-no-repeat" style={{ backgroundImage: `url(${businessCanada})` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
          <div className="relative container mx-auto px-4 pt-36 pb-16">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
                <Globe className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">International Expansion</span>
              </div>
              <h1 className="font-display text-5xl md:text-7xl text-foreground mb-6 animate-slide-up">
                EXPANDING THE <span className="text-primary">BUSINESS</span>
                <br />
                <span className="text-gradient-gold">IN CANADA</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
                Chicago Delights is officially expanding its operations to Canada, bringing India's beloved premium pizza experience to North America.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 shadow-glow animate-pulse-glow">
                <a href="tel:+16478357410">
                  Contact Our Partner
                  <ChevronRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Expansion Overview */}
        <section className="py-24 bg-background relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/5 to-transparent pointer-events-none" />
          <div className="container mx-auto px-4 relative">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Vision</span>
              <h2 className="font-display text-4xl md:text-6xl text-foreground mt-4 mb-6">
                GLOBAL <span className="text-primary">EXPANSION</span> STRATEGY
              </h2>
              <p className="text-muted-foreground text-lg">
                With a proven track record of 80+ successful outlets across India, Chicago Delights is now poised to bring its premium pizza and grill experience to the Canadian market and beyond.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {expansionHighlights.map((item, i) => (
                <div
                  key={item.title}
                  className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-glow transition-all duration-300 group animate-slide-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Channel Partner Section */}
        <section className="py-24 bg-card relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
          <div className="container mx-auto px-4 relative">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Channel Partner – Canada</span>
              <h2 className="font-display text-4xl md:text-6xl text-foreground mt-4 mb-6">
                PARTNER <span className="text-gradient-gold">IN ACTION</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Our expansion in Canada is being driven in partnership with <strong className="text-foreground">Younge Group</strong> — a trusted collaborator committed to bringing Chicago Delights' premium experience to Canadian communities.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-background border border-border rounded-2xl overflow-hidden shadow-elevated">
                <div className="grid md:grid-cols-5 gap-0">
                  {/* Partner Image */}
                  <div className="md:col-span-2 relative">
                    <img
                      src={partnerKamal}
                      alt="Kamal Singh - Channel Partner Canada"
                      className="w-full h-full object-cover min-h-[300px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent md:bg-gradient-to-r md:from-transparent md:to-background/20" />
                  </div>

                  {/* Partner Info */}
                  <div className="md:col-span-3 p-8 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 rounded-full px-3 py-1 mb-4 w-fit">
                      <Star className="w-4 h-4 text-secondary" />
                      <span className="text-xs font-medium text-secondary">Official Channel Partner</span>
                    </div>
                    <h3 className="font-display text-4xl text-foreground mb-1">KAMAL SINGH</h3>
                    <p className="text-primary font-medium text-lg mb-4">Channel Partner – Canada</p>
                    <p className="text-muted-foreground mb-6">
                      Representing Chicago Delights in Canada through Younge Group, Kamal leads our North American expansion with a focus on quality, trust, and long-term strategic growth.
                    </p>

                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Phone className="w-5 h-5 text-primary" />
                        <a href="tel:+16478357410" className="hover:text-primary transition-colors">+1 647 835 7410</a>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Building2 className="w-5 h-5 text-primary" />
                        <span>Younge Group</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <MapPin className="w-5 h-5 text-primary" />
                        <span>Canada</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow">
                        <a href="tel:+16478357410">
                          <Phone className="w-4 h-4 mr-2" />
                          Call Now
                        </a>
                      </Button>
                      <Button asChild size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                        <a href={`https://wa.me/16478357410?text=${encodeURIComponent("Hi, I'm interested in Chicago Delights business expansion in Canada.")}`} target="_blank" rel="noopener noreferrer">
                          <Mail className="w-4 h-4 mr-2" />
                          Enquire
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
              {[
                { label: "Years in India", value: "9+" },
                { label: "Outlets in India", value: "80+" },
                { label: "Expansion Market", value: "Canada" },
                { label: "Partnership Model", value: "Younge Group" },
              ].map((stat) => (
                <div key={stat.label} className="bg-background border border-border rounded-xl p-5 text-center hover:border-primary/30 transition-colors">
                  <div className="font-display text-3xl text-secondary mb-1">{stat.value}</div>
                  <div className="text-muted-foreground text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* North America Expansion Banner */}
        <section className="py-24 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 pointer-events-none" />
          <div className="container mx-auto px-4 relative">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Join Our Journey</span>
              <h2 className="font-display text-4xl md:text-6xl text-foreground mt-4 mb-6">
                WHY <span className="text-primary">PARTNER</span> WITH US?
              </h2>
              <p className="text-muted-foreground text-lg">
                Chicago Delights offers a battle-tested franchise model, a loved brand, and a clear roadmap for North American growth.
              </p>
            </div>

            {/* Value Proposition Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {[
                { icon: Users, title: "Massive Market", desc: "North America's $46B pizza industry is ripe for a premium Indian-origin brand with a unique flavour profile.", stat: "$46B+" },
                { icon: TrendingUp, title: "Proven Unit Economics", desc: "Our outlets in India average strong ROI within 12–18 months, backed by lean operations and high repeat customers.", stat: "80+" },
                { icon: Star, title: "Full-Stack Support", desc: "From site selection to staff training, marketing launch to tech integration — we set you up for success.", stat: "360°" },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-glow transition-all duration-300 group relative overflow-hidden animate-slide-up"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <div className="absolute top-4 right-4 font-display text-5xl text-primary/10 group-hover:text-primary/20 transition-colors">{item.stat}</div>
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/30 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA Banner */}
            <div className="relative rounded-3xl overflow-hidden border border-primary/30 shadow-elevated">
              {/* Background layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-card via-card to-primary/10" />
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/10 to-transparent" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
              <div className="absolute top-0 right-0 w-56 h-56 bg-secondary/5 rounded-full blur-3xl" />

              <div className="relative grid md:grid-cols-2 gap-8 p-10 md:p-16 items-center">
                {/* Left Content */}
                <div>
                  <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6">
                    <Globe className="w-4 h-4 text-primary animate-float" />
                    <span className="text-sm font-medium text-primary">Now Accepting Partners</span>
                  </div>
                  <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
                    WE ARE <span className="text-primary">LOOKING FOR</span>
                    <br />
                    <span className="text-gradient-gold">EXPANSION</span>
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 max-w-md">
                    across all of <span className="text-foreground font-bold">North America</span>. If you have the vision and resources to bring a premium pizza brand to your city, let's talk.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 shadow-glow animate-pulse-glow">
                      <a href="tel:+16478357410">
                        <Phone className="w-5 h-5 mr-2" />
                        Get in Touch
                      </a>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground text-lg px-8 py-6">
                      <Link to="/#franchise">
                        Franchise Enquiry
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Right - Key Highlights */}
                <div className="space-y-4">
                  {[
                    { label: "Ideal Markets", value: "Toronto, Vancouver, Calgary, New York, Chicago" },
                    { label: "Investment Range", value: "Flexible models for different market sizes" },
                    { label: "What We Provide", value: "Brand license, setup guidance, training, marketing" },
                    { label: "Who We Seek", value: "Entrepreneurs, restaurant operators, investors" },
                  ].map((item) => (
                    <div key={item.label} className="bg-background/50 border border-border rounded-xl p-5 hover:border-primary/30 transition-colors">
                      <div className="text-xs text-primary font-medium uppercase tracking-wider mb-1">{item.label}</div>
                      <div className="text-foreground text-sm font-medium">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}