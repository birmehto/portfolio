"use client";

import { motion } from "framer-motion";
import { SKILL_CATEGORIES } from "@/lib/constants/skills";
import { fadeUp } from "@/lib/utils/animations";
import styles from "./Skills.module.css";

function SkillProgress({ skill, index }) {
    return (
        <motion.div
            className={styles.skillItem}
            variants={fadeUp}
            custom={index}
            initial="initial"
            whileInView="enter"
            viewport={{ once: true }}
        >
            <div className={styles.skillName}>{skill.name}</div>

            <div className={styles.progressBar}>
                <motion.div
                    className={styles.progressFill}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 + index * 0.1 }}
                />
            </div>
        </motion.div>
    );
}

export default function Skills() {
    return (
        <section id="skills" className={styles.section}>
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className={styles.heading}>Skills & Expertise</h2>
                    <p className={styles.subheading}>
                        A peek into the technologies and tools I work with every day.
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {SKILL_CATEGORIES.map((cat, index) => {
                        const Icon = cat.icon;

                        return (
                            <motion.div
                                key={cat.title}
                                className={styles.card}
                                variants={fadeUp}
                                custom={index}
                                initial="initial"
                                whileInView="enter"
                                viewport={{ once: true }}
                            >
                                <div className={styles.cardHeader}>
                                    <div className={styles.iconWrapper}>
                                        <Icon size={24} />
                                    </div>
                                    <h3 className={styles.categoryTitle}>{cat.title}</h3>
                                </div>

                                <div className={styles.skillList}>
                                    {cat.skills.map((skill, i) => (
                                        <SkillProgress key={skill.name} skill={skill} index={i} />
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
