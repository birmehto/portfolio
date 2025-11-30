"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectCard from "@/components/ui/ProjectCard";
import { PROJECTS } from "@/lib/constants/projects";
import styles from "./page.module.css";

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
            {PROJECTS.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
