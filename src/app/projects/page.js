"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import Link from "next/link";
import styles from "./page.module.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const projects = [
    {
        title: "FinTech Wallet App",
        description: "A secure, high-performance digital wallet built with Flutter. Features biometric auth, real-time transaction updates via WebSocket, and custom animated charts.",
        tags: ["Flutter", "Bloc", "Clean Architecture", "Firebase"],
        github: "https://github.com/birmehto",
        demo: "#",
        color: "#6366f1"
    },
    {
        title: "Native Health Tracker",
        description: "Native Android application using Kotlin and Jetpack Compose. Integrates with Health Connect API to track steps, sleep, and heart rate with beautiful visualizations.",
        tags: ["Kotlin", "Jetpack Compose", "Room DB", "Coroutines"],
        github: "https://github.com/birmehto",
        demo: "#",
        color: "#8b5cf6"
    },
    {
        title: "Travel Companion iOS",
        description: "Premium iOS travel planner built with SwiftUI. Features interactive maps, offline mode, and seamless iCloud sync for itinerary management.",
        tags: ["Swift", "SwiftUI", "CoreData", "MapKit"],
        github: "https://github.com/birmehto",
        demo: "#",
        color: "#ec4899"
    }
];

export default function ProjectsPage() {

    return (
        <main className={styles.main}>
            <Navbar />

            <section className={styles.header}>
                <div className="container">
                    <Link href="/" className={styles.backLink}>
                        <ArrowLeft size={20} /> Back to Home
                    </Link>
                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        All Projects
                    </motion.h1>
                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        A collection of my work in mobile development.
                    </motion.p>
                </div>
            </section>

            <section className={styles.gridSection}>
                <div className="container">
                    <div className={styles.grid}>
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                className={styles.card}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className={styles.imageWrapper} style={{ backgroundColor: project.color + '20' }}>
                                    <div className={styles.placeholderImage} style={{ background: `linear-gradient(135deg, ${project.color}40, ${project.color}10)` }}>
                                        <span className={styles.placeholderText}>{project.title[0]}</span>
                                    </div>
                                </div>

                                <div className={styles.cardContent}>
                                    <h3 className={styles.projectTitle}>{project.title}</h3>
                                    <p className={styles.projectDescription}>{project.description}</p>

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

            <Footer />
        </main>
    );
}
