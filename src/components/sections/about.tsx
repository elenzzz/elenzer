"use client";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const AboutSection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation({
    threshold: 0.2,
  });
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation({
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-24 md:py-32 bg-gradient-soft">
      <div className="container max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-700 ${
            sectionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
            About Me
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-medium mb-6">
            Hey, I'm <span className="italic text-gradient">Elyana</span>
          </h2>
          <div className="section-divider" />
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div
            ref={imageRef}
            className={`relative transition-all duration-700 delay-200 ${
              imageVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-blush/30" />
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl bg-blush-light/50" />

              {/* Image */}
              <img
                src={"/images/about-portrait-2.jpeg"}
                alt="Portrait of video editor"
                className="relative rounded-2xl shadow-elevated w-full object-cover aspect-[4/5]"
              />
            </div>
          </div>

          {/* Text Content */}
          <div
            ref={textRef}
            className={`space-y-6 transition-all duration-700 delay-300 ${
              textVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <p className="font-body text-lg leading-relaxed text-foreground">
              I’m a 24-year-old video editor from Venezuela, graduated in
              Audiovisual Sciences and Photography. Over the last six years,
              I’ve dedicated myself to mastering the art of video editing and
              motion graphics.
            </p>

            <p className="font-body text-muted-foreground leading-relaxed">
              I genuinely love the process of taking raw footage and
              transforming it into something polished, visually beautiful, and
              engaging. For me, it’s all about finding the right rhythm and
              aesthetic to help a story truly resonate with its audience.
            </p>

            <p className="font-body text-muted-foreground leading-relaxed">
              I have a real soft spot for lifestyle and vlogging content—I love
              the challenge of taking everyday moments and turning them into
              something visually beautiful and engaging. I’m excited to bring
              that same eye for detail and creativity to your stories!
            </p>

            <p className="font-body text-muted-foreground leading-relaxed">
              My favorites hobbies are: crochet, watching TV and movies, and
              baking🧁
            </p>

            {/* Skills/Tags */}
            <div className="pt-4">
              <p className="font-body text-sm tracking-widest uppercase text-primary mb-4">
                What I Do
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Vlogs",
                  "Travel Content",
                  "Day-in-my-Life",
                  "Get Ready With Me",
                  "Reels & Shorts",
                  "Aesthetic Edits",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-blush text-peach-light text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
