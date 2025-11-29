import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <p className={styles.text}>
                    © {new Date().getFullYear()} Bir Mehto. All rights reserved.
                </p>
                <p className={styles.subtext}>
                    Built with Next.js, Framer Motion & Love.
                </p>
            </div>
        </footer>
    );
}
