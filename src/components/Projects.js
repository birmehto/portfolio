"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import styles from "./Projects.module.css";

const projects = [
    {
        title: "FinTech Wallet App",
        description: "A secure, high-performance digital wallet built with Flutter. Features biometric auth, real-time transaction updates via WebSocket, and custom animated charts.",
        tags: ["Flutter", "Bloc", "Clean Architecture", "Firebase"],
        github: "https://github.com/birmehto",
        demo: "#",
        image: "/project-1.jpg", // Placeholder
        color: "#6366f1" // Fallback color
    },
    {
        title: "Native Health Tracker",
        description: "Native Android application using Kotlin and Jetpack Compose. Integrates with Health Connect API to track steps, sleep, and heart rate with beautiful visualizations.",
        tags: ["Kotlin", "Jetpack Compose", "Room DB", "Coroutines"],
        github: "https://github.com/birmehto",
        demo: "#",
        image: "/project-2.jpg",
        color: "#8b5cf6"
    },
    {
        title: "Travel Companion iOS",
        description: "Premium iOS travel planner built with SwiftUI. Features interactive maps, offline mode, and seamless iCloud sync for itinerary management.",
        tags: ["Swift", "SwiftUI", "CoreData", "MapKit"],
        github: "https://github.com/birmehto",
        demo: "#",
        image: "/project-3.jpg",
        color: "#ec4899"
    }
];

export default function Projects() {
    return (
        <section id="projects" className={styles.section}>
            <div className="container">
                <motion.h2
                    className={styles.heading}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Featured Projects
                </motion.h2>

                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={styles.imageWrapper} style={{ backgroundColor: project.color + '20' }}>
                                {/* 
                  User can replace these with real images. 
                  For now, we use a colored placeholder if image fails or just the div.
                  We'll use a simple div with the color for now to ensure it looks good immediately.
                */}
                                <div className={styles.placeholderImage} style={{ background: `linear-gradient(135deg, ${project.color}40, ${project.color}10)` }}>
                                    <span className={styles.placeholderText}>{project.title[0]}</span>
                                </div>
                            </div>

                            <div className={styles.cardContent}>
                                <h3 className={styles.title}>{project.title}</h3>
                                <p className={styles.description}>{project.description}</p>

                                <div className={styles.tags}>
                                    {project.tags.map(tag => (
                                        <span key={tag} className={styles.tag}>{tag}</span>
                                    ))}
                                </div>

                                <div className={styles.links}>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                        <Github size={20} /> Code
                                    </a>
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                        <ExternalLink size={20} /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
