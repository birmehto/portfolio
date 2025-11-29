"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={styles.content}
                >
                    <motion.span
                        className={styles.greeting}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Hi, I'm
                    </motion.span>

                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        Bir Mehto
                    </motion.h1>

                    <motion.h2
                        className={styles.role}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        Mobile Engineer <span className={styles.highlight}>Flutter & Native</span>
                    </motion.h2>

                    <motion.p
                        className={styles.description}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        Crafting high-performance mobile experiences with Flutter, Kotlin, and Swift.
                        Specialized in building scalable, pixel-perfect applications for iOS and Android.
                    </motion.p>

                    <motion.div
                        className={styles.actions}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <Link href="/projects" className={styles.primaryBtn}>
                            View Projects <ArrowRight size={20} />
                        </Link>
                    </motion.div>

                    <motion.div
                        className={styles.socials}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <a href="https://github.com/birmehto" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <Github size={24} />
                        </a>
                        <a href="https://linkedin.com/in/birmehto" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:birmehto@gmail.com" aria-label="Email">
                            <Mail size={24} />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
