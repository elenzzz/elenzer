"use client";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  provider: "drive" | "youtube" | "vimeo";
  videoId: string;
  clipStart: number;
  clipEnd: number;
}

const projects: Project[] = [
  {
    id: 1,
    title: "The Creative Process",
    category: "YouTube",
    description: "Project highlight video.",
    provider: "youtube",
    videoId: "cLLMMCDdgaM",
    clipStart: 0,
    clipEnd: 5,
  },
  {
    id: 3,
    title: "Creative Block (short-film)",
    category: "YouTube",
    description: "Project highlight video.",
    provider: "youtube",
    videoId: "p4Xz2Fe5f2Q?si=VggOLGx-_cmn1S1o",
    clipStart: 0,
    clipEnd: 5,
  },
  {
    id: 2,
    title: "Deep Clean With Me - Tea Renee",
    category: "YouTube",
    description: "Project highlight video.",
    provider: "youtube",
    videoId: "57LETOQy5UY",
    clipStart: 0,
    clipEnd: 5,
  },
  {
    id: 4,
    title: "dobochobo - pack with me for europe (Re-edit)",
    category: "Vimeo",
    description: "Project highlight video.",
    provider: "vimeo",
    videoId: "1162864470",
    clipStart: 0,
    clipEnd: 5,
  },
];

const buildVideoUrl = (project: Project) => {
  if (project.provider === "youtube") {
    const videoId = project.videoId.split("?")[0];
    const params = new URLSearchParams({
      autoplay: "1",
      mute: "1",
      loop: "1",
      playsinline: "1",
      playlist: videoId,
      controls: "0",
    });
    return `https://www.youtube.com/embed/${videoId}?${params}`;
  }
  if (project.provider === "vimeo") {
    const params = new URLSearchParams({
      autoplay: "1",
      muted: "1",
      loop: "1",
    });
    return `https://player.vimeo.com/video/${project.videoId}?${params}`;
  }
};

const buildVideoLink = (project: Project) => {
  if (project.provider === "youtube") {
    const videoId = project.videoId.split("?")[0];
    return `https://youtu.be/${videoId}`;
  }
  if (project.provider === "vimeo") {
    return `https://vimeo.com/${project.videoId}`;
  }
};

const ProjectCard = ({
  project,
  index,
  className = "",
  mediaClassName = "",
}: {
  project: Project;
  index: number;
  className?: string;
  mediaClassName?: string;
}) => {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.15,
  });

  return (
    <a
      ref={ref as any}
      className={`group/project project-card bg-card transition-all duration-700 flex h-full flex-col ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      } ${className}`}
      style={{ transitionDelay: `${index * 150}ms` }}
      href={buildVideoLink(project)}
      aria-label={`Open ${project.title}`}
      target="_blank"
      rel="noreferrer"
    >
      <div
        className={`relative w-full overflow-hidden bg-muted ${mediaClassName}`}
      >
        <iframe
          src={buildVideoUrl(project)}
          title={project.title}
          className="absolute inset-0 h-full w-full pointer-events-none"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover/project:opacity-100 group-focus-visible/project:opacity-100">
          <div className="w-full px-4 pb-4">
            <p className="font-heading text-sm sm:text-base text-white">
              {project.title}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

const ProjectsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-24 md:py-32 bg-background">
      <div className="container max-w-7xl mx-auto px-6">
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
            My Work
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-medium mb-6">
            Featured <span className="italic text-gradient">Projects</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto mb-6">
            A glimpse into the content I've helped create for amazing creators
            just like you
          </p>
          <div className="section-divider" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              mediaClassName="aspect-video"
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="font-body text-muted-foreground mb-6">
            Want to see more? Let's chat about your next project!
          </p>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-primary"
          >
            Work With Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
