"use client";

import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  return (
    <section className="dark min-h-screen">
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </section>
  );
}
