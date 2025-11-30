"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { PROFILE } from "@/lib/constants/profile";
import styles from "./Hero.module.css";

const animateUp = (delay) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay }
});

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className="container">
                <motion.div
                    {...animateUp(0)}
                    transition={{ duration: 0.5 }}
                    className={styles.content}
                >
                    <motion.span className={styles.greeting} {...animateUp(0.2)}>
                        Hi, I'm
                    </motion.span>

                    <motion.h1 className={styles.title} {...animateUp(0.3)}>
                        {PROFILE.name}
                    </motion.h1>

                    <motion.h2 className={styles.role} {...animateUp(0.4)}>
                        {PROFILE.role} <span className={styles.highlight}>{PROFILE.roleHighlight}</span>
                    </motion.h2>

                    <motion.p className={styles.description} {...animateUp(0.5)}>
                        {PROFILE.description}
                    </motion.p>

                    <motion.div className={styles.actions} {...animateUp(0.6)}>
                        <Link href="/projects" className={styles.primaryBtn}>
                            View Projects <ArrowRight size={20} />
                        </Link>
                    </motion.div>

                    <motion.div className={styles.socials} {...animateUp(0.8)}>
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
            </div>
        </section>
    );
}
