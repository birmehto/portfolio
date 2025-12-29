"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import Link from "next/link";
import { PROFILE } from "@/lib/constants";
import styles from "./Hero.module.css";

const fadeIn = (delay) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: {
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1] // Custom ease-out
    }
});

const float = {
    animate: {
        y: [0, -10, 0],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.meshGradient}>
                <div className={styles.glow1} />
                <div className={styles.glow2} />
                <div className={styles.glow3} />
            </div>

            <div className="container">
                <motion.div
                    variants={float}
                    animate="animate"
                    className={styles.content}
                >
                    <motion.div
                        variants={fadeIn(0)}
                        initial="initial"
                        animate="animate"
                        className={styles.textWrapper}
                    >
                        <motion.span
                            className={styles.greeting}
                            variants={fadeIn(0.2)}
                        >
                            Hi, I&apos;m
                        </motion.span>

                        <motion.h1
                            className={styles.title}
                            variants={fadeIn(0.3)}
                        >
                            {PROFILE.name}
                        </motion.h1>

                        <motion.h2
                            className={styles.role}
                            variants={fadeIn(0.4)}
                        >
                            {PROFILE.role} <span className={styles.highlight}>{PROFILE.roleHighlight}</span>
                        </motion.h2>

                        <motion.p
                            className={styles.description}
                            variants={fadeIn(0.5)}
                        >
                            {PROFILE.description}
                        </motion.p>

                        <motion.div
                            className={styles.actions}
                            variants={fadeIn(0.6)}
                        >
                            <Link href="/projects" className={styles.primaryBtn}>
                                Explore Portfolio <ArrowRight size={20} className={styles.arrow} />
                            </Link>

                            <a
                                href={PROFILE.resumeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.secondaryBtn}
                            >
                                <Download size={20} /> Resume
                            </a>
                        </motion.div>

                        <motion.div
                            className={styles.socials}
                            variants={fadeIn(0.8)}
                        >
                            <a href={PROFILE.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <Github size={24} />
                            </a>
                            <a href={PROFILE.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <Linkedin size={24} />
                            </a>
                            <a href={`mailto:${PROFILE.email}`} aria-label="Email">
                                <Mail size={24} />
                            </a>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
