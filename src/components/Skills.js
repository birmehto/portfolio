"use client";

import { motion } from "framer-motion";
import { Code, Database, Smartphone, Terminal } from "lucide-react";
import styles from "./Skills.module.css";

const skillCategories = [
    {
        title: "Mobile Engineering",
        icon: <Smartphone size={24} />,
        skills: ["Flutter & Dart", "Kotlin (Jetpack Compose)", "Swift (SwiftUI)", "Clean Architecture", "Method Channels"]
    },
    {
        title: "State Management",
        icon: <Database size={24} />,
        skills: ["Bloc / Cubit", "Riverpod", "Provider", "GetX", "Redux"]
    },
    {
        title: "Backend & Cloud",
        icon: <Code size={24} />,
        skills: ["Firebase", "Supabase", "Node.js", "REST APIs", "GraphQL"]
    },
    {
        title: "DevOps & Tools",
        icon: <Terminal size={24} />,
        skills: ["CI/CD (Codemagic)", "Git & GitHub", "Fastlane", "XCode", "Android Studio"]
    }
];

export default function Skills() {
    return (
        <section id="skills" className={styles.section}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.header}
                >
                    <h2 className={styles.heading}>Skills & Expertise</h2>
                    <p className={styles.subheading}>
                        A comprehensive look at my technical toolkit and capabilities.
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={styles.cardHeader}>
                                <div className={styles.iconWrapper}>{category.icon}</div>
                                <h3 className={styles.categoryTitle}>{category.title}</h3>
                            </div>

                            <div className={styles.skillList}>
                                {category.skills.map((skill, i) => (
                                    <div key={i} className={styles.skillItem}>
                                        <div className={styles.skillName}>{skill}</div>
                                        <div className={styles.progressBar}>
                                            <motion.div
                                                className={styles.progressFill}
                                                initial={{ width: 0 }}
                                                whileInView={{ width: "85%" }} // Fixed progress for consistency
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
