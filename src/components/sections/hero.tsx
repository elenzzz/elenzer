"use client";
import { useParallax } from "@/hooks/use-parallax";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const HeroSection = () => {
  const parallaxOffset = useParallax(0.4);
  const { ref, isVisible } = useScrollAnimation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${"/images/hero-bg.jpg"})`,
          transform: `translateY(${parallaxOffset}px)`,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-blush-light/50 blur-3xl animate-float" />
      <div
        className="absolute bottom-40 right-20 w-48 h-48 rounded-full bg-peach-light/60 blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />

      {/* Content */}
      <div
        ref={ref}
        className={`relative z-10 text-center px-6 max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
          Video Editor & Content Creator
        </p>

        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-medium mb-6 leading-tight">
          Bringing Your <span className="italic text-gradient">Story</span> to
          Life
        </h1>

        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Crafting beautiful, authentic edits for vloggers and lifestyle
          creators who want their content to shine
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection("projects")}
            className="btn-primary"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="btn-outline"
          >
            Let's Connect
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-body text-xs tracking-widest uppercase text-blush">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-blush to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;

