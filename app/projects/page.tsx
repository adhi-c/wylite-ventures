import type { Metadata } from "next";
import Image from "next/image";
import StaticPageShell from "@/components/StaticPageShell";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected construction and electrical project work from WYLITE VENTURES.",
};

const projects = [
  {
    image: "/projects/project1.jpg",
  },
  {
    image: "/projects/project2.jpg",
  },
  {
    image: "/projects/project3.jpg",
  },
  {
    image: "/projects/project4.jpg",
  },
  {
    image: "/projects/project5.jpg",
  },
  {
    image: "/projects/project6.jpg",
  },
  {
    image: "/projects/project7.jpg",
  }, 
  {
    image: "/projects/project8.jpg",
  }, 
  {
    image: "/projects/project9.jpg",
  }, 
  {
    image: "/projects/project10.jpg",
  }, 
  {
    image: "/projects/project11.jpg",
  }, 
  {
    image: "/projects/project12.jpg",
  }, 
  {
    image: "/projects/project13.jpg",
  }, 
  {
    image: "/projects/project14.jpg",
  },
  {
    image: "/projects/project15.jpg",
  }, 
  {
    image: "/projects/project16.jpg",
  },        
];

export default function ProjectsPage() {
  return (
    <StaticPageShell
      eyebrow="Projects"
      title="Work that is built to be seen, used and trusted."
      description="This section will showcase completed work, site photos and delivery outcomes as the portfolio grows."
    >
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl border border-white/10"
          >
            <Image
              src={project.image}
              alt=""
              width={600}
              height={400}
              className="h-64 w-full object-cover"
            />
          </div>
        ))}
      </div>
    </StaticPageShell>
  );
}