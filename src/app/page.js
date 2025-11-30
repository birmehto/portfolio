import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--background)', color: 'var(--foreground)' }}>
      <Navbar />
      <Hero />
      <Skills />
      <Footer />
    </main>
  );
}
