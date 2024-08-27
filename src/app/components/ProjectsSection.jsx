"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Beauty and Cosmetic Web Application",
    description: "LADYSTYLE  ",
    image: "/images/LADYSTYLE.webp",
    tag: ["All", "Web"],
    gitUrl: "https://www.lady-style.ch/en",
    previewUrl: "https://www.lady-style.ch/en",
  },
  {
    id: 2,
    title: " B2B Web Application",
    description: "POLYCOLOR ",
    image: "/images/POLYCOLOR.png",
    tag: ["All", "Web"],
    gitUrl: "https://polycolor.vercel.app/en",
    previewUrl: "https://polycolor.vercel.app/en",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "BAMBLY",
    image: "/images/BAMBLY.png",
    tag: ["All", "Web"],
    gitUrl: "https://bambily.ch/en",
    previewUrl: "https://bambily.ch/en",
  },
  {
    id: 4,
    title: "Home Services Application",
    description: "COMPLETELY",
    image: "/images/COMPLETELY.webp",
    tag: ["All", "Mobile"],
    gitUrl: "https://www.completely.ch/en",
    previewUrl: "https://www.completely.ch/en",
  },
  {
    id: 5,
    title: "Education EdTech Platform",
    description: "ZAINI.COM",
    image: "/images/ZAINI.png",
    tag: ["All", "Web"],
    gitUrl: "https://zainii.com/",
    previewUrl: "https://zainii.com/",
  },
  {
    id: 6,
    title: "AI Educator Web Application",
    description: "ZAINI.AI",
    image: "/images/ZAINIAIII.png",
    tag: ["All", "Web"],
    gitUrl: "https://www.zainii.ai/",
    previewUrl: "https://www.zainii.ai/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-5xl font-bold text-white mt-4 mb-8 md:mb-12">
        Featured Work
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
