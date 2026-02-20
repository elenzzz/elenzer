"use client";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Tiktok } from "@boxicons/react";
import { Instagram, Youtube, Mail } from "lucide-react";

const socialLinks = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:elyana@elenzervisuals.com",
    handle: "elyana@elenzervisuals.com",
    color: "hover:bg-primary",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/elenzer",
    handle: "@elenzer",
    color:
      "hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-500",
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "https://youtube.com/elenzer",
    handle: "@elenzer",
    color: "hover:bg-red-500",
  },
  {
    name: "TikTok",
    icon: Tiktok,
    href: "https://tiktok.com/elenzer",
    handle: "@elenzer",
    color: "hover:bg-black",
  },
];

const ContactSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({
    threshold: 0.2,
  });

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-gradient-hero relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-blush-light/40 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-peach-light/50 blur-3xl" />

      <div className="container max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Get In Touch
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-medium mb-6">
            Let's Create <span className="italic text-gradient">Together</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto mb-6">
            Ready to elevate your content? Reach out through my email and let's
            chat about bringing your vision to life!
          </p>
          <div className="section-divider" />
        </div>

        {/* Social Links */}
        <div
          ref={contentRef}
          className={`transition-all duration-700 delay-200 ${
            contentVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {socialLinks.map((social, index) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group glass-card p-6 rounded-2xl flex items-center gap-4 transition-all duration-300 hover-lift hover:border-primary/30`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`social-link group-hover:scale-110 ${social.color}`}
                >
                  <social.icon className="w-5 h-5 transition-colors" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-medium text-foreground">
                    {social.name}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {social.handle}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Additional CTA */}
          <div className="text-center mt-16">
            <p className="font-heading text-2xl md:text-3xl italic text-foreground mb-4">
              "Every story deserves to be told beautifully"
            </p>
            <p className="font-body text-muted-foreground">
              Can't wait to hear from you! ✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
