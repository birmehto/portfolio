import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";

import Skills from "@/components/sections/Skills";
import Footer from "@/components/layout/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <Skills />
      <Footer />
    </main>
  );
}
