"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  return <section className="dark min-h-screen"></section>;
}
