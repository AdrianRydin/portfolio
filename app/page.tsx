"use client";

import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  return (
    <section className="dark min-h-screen">
      <Header />
      <main></main>
      <Footer />
    </section>
  );
}
