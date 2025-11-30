"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "../ui/ThemeToggle";
import { useScrolled } from "@/lib/hooks/useScrolled";
import { slideDown } from "@/lib/utils/animations";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const scrolled = useScrolled(50);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
            {...slideDown}
            transition={{ duration: 0.5 }}
        >
            <div className="container">
                <div className={styles.inner}>
                    <Link href="/" className={styles.logo}>
                        Bir<span className={styles.dot}>.</span>
                    </Link>

                    <div className={`${styles.links} ${isOpen ? styles.open : ""}`}>
                        <Link href="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
                        <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
                        <ThemeToggle />
                    </div>

                    <button
                        className={styles.menuBtn}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </motion.nav>
    );
}
