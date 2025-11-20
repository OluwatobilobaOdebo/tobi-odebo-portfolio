"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function About() {
  const [isSpinning, setIsSpinning] = useState(false);

  const handleProfileClick = () => {
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 600);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 py-3 md:py-4 bg-background/80 backdrop-blur-lg shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link 
            href="/" 
            onClick={handleProfileClick} 
            className={`w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-border hover:border-primary transition-colors ${isSpinning ? 'animate-spin-once' : ''}`}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Me-PMHdaPanPkCSPaEvN9ME6GlB0FrYaC.jpeg"
              alt="Tobi Odebo"
              width={48}
              height={48}
              className="object-cover w-full h-full"
            />
          </Link>

          <nav className="flex items-center gap-1 bg-card/50 backdrop-blur-sm rounded-full px-1 md:px-2 py-1.5 md:py-2 border border-border">
            <Link
              href="/#projects"
              className="px-3 md:px-5 py-1.5 md:py-2 rounded-full hover:bg-secondary transition-colors text-xs md:text-sm font-medium"
            >
              Work
            </Link>
            <Link
              href="/about"
              className="px-3 md:px-5 py-1.5 md:py-2 rounded-full bg-secondary transition-colors text-xs md:text-sm font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="px-3 md:px-5 py-1.5 md:py-2 rounded-full hover:bg-secondary transition-colors text-xs md:text-sm font-medium"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <div className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 md:gap-16">
            <div className="md:w-1/4 flex-shrink-0">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">About:</h1>
            </div>
            <div className="md:w-3/4">
              <div className="space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground">
                <p>
                  I'm Tobi Odebo — a technologist, analyst, and product-minded builder who enjoys turning ideas into practical, high-impact solutions. My experience spans software engineering and data analytics, and I'm drawn to product management because it sits at the intersection of problem-solving, user understanding, and strategic decision-making.
                </p>
                <p>
                  Across my engineering work, I've been most energized by figuring out what to build, why it matters, and how it should work. I like breaking down complex challenges, uncovering user needs, and shaping clear product direction supported by data and experimentation. Whether I'm building AI tools, full-stack applications, or analytics systems, I approach each project with the mindset of creating value, not just writing code.
                </p>
                <p>
                  I'm also entrepreneurial by nature. I enjoy exploring new venture ideas — from AI-powered tools to remote tax services to future real estate projects — and thinking in terms of long-term vision, execution, and scalability.
                </p>
                <p>
                  Outside of work, I focus on fitness, personal development, and building meaningful relationships. I'm driven by growth, consistency, and the belief that every project is an opportunity to learn and create something better than before.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
