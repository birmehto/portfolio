import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import styles from "./ProjectCard.module.css";

const isGitHubLink = (url) => url?.includes("github.com");
const isPlayStoreLink = (url) => url?.includes("play.google.com");

export default function ProjectCard({ project, index }) {
  const [imageError, setImageError] = React.useState(false);
  const showGitHub = project.github && isGitHubLink(project.github);
  const showDemo = project.demo && (isPlayStoreLink(project.demo) || isGitHubLink(project.demo));
  
  const demoLabel = isPlayStoreLink(project.demo) 
    ? "Play Store" 
    : isGitHubLink(project.demo) 
    ? "View on GitHub" 
    : "Live Demo";
  
  const showPlaceholder = !project.image || imageError;

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <div 
        className={styles.imageWrapper} 
        style={{ backgroundColor: `${project.color}20` }}
      >
        {showPlaceholder ? (
          <div 
            className={styles.placeholderImage} 
            style={{ 
              background: `linear-gradient(135deg, ${project.color}40, ${project.color}10)` 
            }}
          >
            <span className={styles.placeholderText}>
              {project.title.charAt(0)}
            </span>
          </div>
        ) : (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className={styles.projectImage}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImageError(true)}
          />
        )}
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectDescription}>{project.description}</p>

        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>

        {(showGitHub || showDemo) && (
          <div className={styles.links}>
            {showDemo && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.link}
                aria-label={`View ${project.title} demo`}
              >
                <ExternalLink size={20} /> {demoLabel}
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
