import { MapPin, Phone, Mail, Instagram } from "lucide-react";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Franchise", href: "#franchise" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <span className="font-display text-3xl text-primary">CHICAGO</span>
              <span className="font-display text-3xl text-secondary">DELIGHTS</span>
            </a>
            <p className="text-muted-foreground mb-4 max-w-md">
              Pizza & Grillz — India's premium pizza franchise since 2015. 
              Join our family of 50+ successful outlets across the nation.
            </p>
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Chicago Delights. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl text-foreground mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Booths, 61, 35C, Sector 35, Chandigarh, 160022
                </span>
              </li>
              <li>
                <a
                  href="tel:+919996553545"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  +91 9996553545
                </a>
              </li>
              <li>
                <a
                  href="mailto:chicagodelightskkr@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  chicagodelightskkr@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/chicagodelights/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram className="w-5 h-5 text-primary" />
                  @chicagodelights
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 rounded-xl overflow-hidden border border-border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.0447878234386!2d76.77!3d30.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQzJzEyLjAiTiA3NsKwNDYnMTIuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Chicago Delights Location"
          />
        </div>
      </div>
    </footer>
  );
}