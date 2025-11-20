"use client";

import type React from "react";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  FileText,
  Download,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [resumeVisible, setResumeVisible] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);

  const handleProfileClick = () => {
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 600);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const resumeSection = document.getElementById("resume");
      if (resumeSection) {
        const rect = resumeSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        if (isVisible && !resumeVisible) {
          setResumeVisible(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [resumeVisible]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-background text-foreground">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 md:py-4 bg-background/80 backdrop-blur-lg shadow-sm"
            : "py-4 md:py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link
            href="/"
            onClick={handleProfileClick}
            className={`w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-border hover:border-primary transition-colors cursor-pointer ${
              isSpinning ? "animate-spin-once" : ""
            }`}
          >
            <Image
              src="/Me.jpeg"
              alt="Tobi Odebo"
              width={48}
              height={48}
              className="object-cover w-full h-full"
            />
          </Link>

          <nav className="flex items-center gap-1 bg-card/50 backdrop-blur-sm rounded-full px-1 md:px-2 py-1.5 md:py-2 border border-border">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-3 md:px-5 py-1.5 md:py-2 rounded-full hover:bg-secondary transition-colors text-xs md:text-sm font-medium"
            >
              Work
            </button>
            <Link
              href="/about"
              className="px-3 md:px-5 py-1.5 md:py-2 rounded-full hover:bg-secondary transition-colors text-xs md:text-sm font-medium"
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

      {/* ===================== HERO SECTION ===================== */}
      <section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center text-center px-4 md:px-6 relative pt-20"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 text-balance">
            Hey, I'm Tobi Odebo
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-3 md:mb-4 leading-relaxed">
            Product Manager • Software Engineer • Data Analytics Enthusiast
          </p>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I build products that solve real problems and create delightful user
            experiences. From AI-powered tools to full-stack applications, I'm
            passionate about turning ideas into reality.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 mt-8 md:mt-10 justify-center">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-6 md:px-8 py-2.5 md:py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors cursor-pointer"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 md:px-8 py-2.5 md:py-3 bg-secondary text-secondary-foreground border border-border rounded-lg font-medium hover:bg-secondary/80 transition-colors cursor-pointer"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center p-2">
            <div className="w-1.5 h-3 bg-muted-foreground rounded-full"></div>
          </div>
        </div>
      </section>

      {/* ===================== SKILLS SECTION ===================== */}
      <section
        id="skills"
        className="py-16 md:py-24 px-4 md:px-6 bg-secondary/30"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-center">
            Technical Skills
          </h2>
          <p className="text-base md:text-lg text-muted-foreground text-center mb-12 md:mb-16 max-w-2xl mx-auto px-4">
            A versatile toolkit spanning product management, software
            engineering, and data analytics
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {/* Product Management */}
            <div className="p-6 md:p-8 bg-card rounded-2xl border border-border hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3">
                Product Management
              </h3>
              <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                <li>• Product Strategy & Roadmapping</li>
                <li>• User Research & Analysis</li>
                <li>• Agile & Scrum Methodologies</li>
                <li>• Stakeholder Management</li>
                <li>• Market & Competitive Analysis</li>
              </ul>
            </div>

            {/* Frontend & Backend */}
            <div className="p-6 md:p-8 bg-card rounded-2xl border border-border hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3">
                Frontend & Backend
              </h3>
              <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                <li>• Angular</li>
                <li>• TypeScript</li>
                <li>• React & Next.js</li>
                <li>• Node.js & Express</li>
                <li>• Python & Java</li>
              </ul>
            </div>

            {/* DevOps & Tools */}
            <div className="p-6 md:p-8 bg-card rounded-2xl border border-border hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-chart-2/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-chart-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M5 12a2 2 0 00-2-2V6a2 2 0 002-2h14a2 2 0 002 2v4a2 2 0 00-2 2M5 12a2 2 0 00-2-2v10m-6 0a2 2 0 012-2h2a2 2 0 012 2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2m-2-4h.01M17 16h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3">
                DevOps & Tools
              </h3>
              <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                <li>• Docker & Kubernetes</li>
                <li>• Git & GitHub</li>
                <li>• Jenkins & CI/CD</li>
                <li>• Jira & Confluence</li>
                <li>• SonarQube & Testing</li>
              </ul>
            </div>

            {/* Data & Analytics */}
            <div className="p-6 md:p-8 bg-card rounded-2xl border border-border hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-chart-1/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-chart-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3">
                Data & Analytics
              </h3>
              <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                <li>• SQL & Database Design</li>
                <li>• Python (Pandas, NumPy)</li>
                <li>• R & Statistical Analysis</li>
                <li>• Excel (VBAs, etc.)</li>
                <li>• Data Visualization</li>
              </ul>
            </div>

            {/* Testing & Quality */}
            <div className="p-6 md:p-8 bg-card rounded-2xl border border-border hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-chart-3/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-chart-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 01-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3">
                Testing & Quality
              </h3>
              <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                <li>• Playwright & Cypress</li>
                <li>• Jasmine & Karma</li>
                <li>• Unit & Integration Testing</li>
                <li>• API Testing (Postman)</li>
                <li>• Code Quality (SonarQube)</li>
              </ul>
            </div>

            {/* Cloud & Infrastructure */}
            <div className="p-6 md:p-8 bg-card rounded-2xl border border-border hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-chart-4/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-chart-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3">
                Cloud & Infrastructure
              </h3>
              <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                <li>• RESTful APIs</li>
                <li>• Microservices Architecture</li>
                <li>• Podman & Containers</li>
                <li>• JFrog Artifactory</li>
                <li>• Infrastructure as Code</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PROJECTS SECTION ===================== */}
      <section
        id="projects"
        className="py-16 md:py-24 px-4 md:px-6 bg-background"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-center">
            Projects
          </h2>
          <p className="text-base md:text-lg text-muted-foreground text-center mb-12 md:mb-16 max-w-2xl mx-auto px-4">
            A selection of work across software engineering, product management,
            and data analytics
          </p>

          {/* Software Engineering Projects */}
          <div className="mb-12 md:mb-16">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 flex items-center gap-2">
              <span className="w-2 h-6 md:h-8 bg-primary rounded-full"></span>
              Software Engineering
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <ProjectCard
                title="Full-Stack E-Commerce Platform"
                description="Complete e-commerce solution"
                image="/my-ecommerce-platform-interface.png"
                isActive={activeProject === "ecommerce"}
                onClick={() => setActiveProject("ecommerce")}
                link="https://fullstack-ecommerce-site-tawny.vercel.app/"
              />
              <ProjectCard
                title="SaaS Subscription App Starter"
                description="SaaS application template"
                image="/modern-saas-dashboard.png"
                isActive={activeProject === "saas"}
                onClick={() => setActiveProject("saas")}
                comingSoon
              />
              <ProjectCard
                title="Real-Time Chat App"
                description="Real-time messaging application"
                image="/chat-messaging-interface.jpg"
                isActive={activeProject === "chat"}
                onClick={() => setActiveProject("chat")}
                comingSoon
              />
            </div>
          </div>

          {/* Product Management Case Studies */}
          <div className="mb-12 md:mb-16">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 flex items-center gap-2">
              <span className="w-2 h-6 md:h-8 bg-accent rounded-full"></span>
              Product Management
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <ProjectCard
                title="Customer Onboarding Redesign for a B2C App"
                description="Onboarding experience redesign"
                image="/mobile-onboarding-screens.jpg"
                isActive={activeProject === "onboarding"}
                onClick={() => setActiveProject("onboarding")}
                comingSoon
              />
              <ProjectCard
                title="Mobile App Feature Redesign (End-to-End Case Study)"
                description="Feature redesign case study"
                image="/mobile-app-redesign-mockups.jpg"
                isActive={activeProject === "mobile-redesign"}
                onClick={() => setActiveProject("mobile-redesign")}
                comingSoon
              />
              <ProjectCard
                title="Product Strategy for a New AI Productivity Tool"
                description="AI tool product strategy"
                image="/ai-productivity-dashboard.jpg"
                isActive={activeProject === "ai-strategy"}
                onClick={() => setActiveProject("ai-strategy")}
                comingSoon
              />
            </div>
          </div>

          {/* Data Analytics Projects */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 flex items-center gap-2">
              <span className="w-2 h-6 md:h-8 bg-chart-1 rounded-full"></span>
              Data Analytics
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <ProjectCard
                title="End-to-End Data Pipeline + Analytics System"
                description="Complete data pipeline"
                image="/data-pipeline-architecture.png"
                isActive={activeProject === "pipeline"}
                onClick={() => setActiveProject("pipeline")}
                comingSoon
              />
              <ProjectCard
                title="Sales Forecasting with Time Series"
                description="Time series forecasting"
                image="/sales-forecasting-charts.jpg"
                isActive={activeProject === "forecasting"}
                onClick={() => setActiveProject("forecasting")}
                comingSoon
              />
              <ProjectCard
                title="Fraud Detection Analytics"
                description="Fraud detection system"
                image="/fraud-detection-dashboard.png"
                isActive={activeProject === "fraud"}
                onClick={() => setActiveProject("fraud")}
                comingSoon
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CERTIFICATIONS SECTION ===================== */}
      <section
        id="certifications"
        className="py-16 md:py-24 px-4 md:px-6 bg-secondary/30"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-center">
            Certifications
          </h2>
          <p className="text-base md:text-lg text-muted-foreground text-center mb-12 md:mb-16 max-w-2xl mx-auto px-4">
            Continuous learning and professional development in product
            management, agile methodologies, and data analytics
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <CertificationCard
              title="Google Project Management Professional Certificate"
              provider="Google / Coursera"
              status="In Progress"
              icon="📋"
            />
            <CertificationCard
              title={
                <>
                  Certified ScrumMaster
                  <br />
                  (CSM)
                </>
              }
              provider="Scrum Alliance"
              status="Scheduled: Nov 22-23"
              icon="🎯"
            />
            <CertificationCard
              title="Certified Scrum Product Owner (CSPO)"
              provider="Scrum Alliance"
              status="Scheduled: Nov 24-25"
              icon="📊"
            />
            <CertificationCard
              title="IBM AI Product Manager Professional Certificate"
              provider="IBM / Coursera"
              status="Planned"
              icon="🤖"
            />
            <CertificationCard
              title="Google Data Analytics Professional Certificate"
              provider="Google / Coursera"
              status="Planned"
              icon="📈"
            />
          </div>
        </div>
      </section>

      {/* ===================== RESUME SECTION ===================== */}
      <section
        id="resume"
        className="py-16 md:py-24 px-4 md:px-6 bg-background"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-center">
            Resume
          </h2>
          <p className="text-base md:text-lg text-muted-foreground text-center mb-8 md:mb-12 max-w-2xl mx-auto px-4">
            View or download my complete professional resume
          </p>

          <div
            className={`transition-all duration-1000 ${
              resumeVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-card border border-border rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 md:p-4 bg-secondary/50 border-b border-border gap-3">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 md:w-5 h-4 md:h-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-sm md:text-base truncate">
                    Oluwatobiloba_Odebo_Resume.pdf
                  </span>
                </div>
                <a
                  href="/Oluwatobiloba_Odebo_Resume.pdf"
                  download
                  className="flex items-center gap-2 px-3 md:px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-xs md:text-sm font-medium w-full sm:w-auto justify-center"
                >
                  <Download className="w-3.5 md:w-4 h-3.5 md:h-4" />
                  Download
                </a>
              </div>

              <div className="aspect-[8.5/11] relative">
                <iframe
                  src="/Oluwatobiloba_Odebo_Resume.pdf"
                  className="w-full h-full"
                  title="Resume PDF"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CONTACT SECTION ===================== */}
      <section
        id="contact"
        className="py-16 md:py-24 px-4 md:px-6 bg-background"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            Let's Build Something Great
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 md:mb-12 leading-relaxed max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or
            just chatting about product and technology. Feel free to reach out!
          </p>

          {/* Email button */}
          <div className="flex justify-center">
            <a
              href="mailto:tobiodebo4@gmail.com"
              className="px-6 md:px-8 py-3 md:py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors inline-flex items-center gap-2 text-base md:text-lg"
            >
              <Mail className="w-4 md:w-5 h-4 md:h-5" />
              <span className="hidden sm:inline">tobiodebo4@gmail.com</span>
              <span className="sm:hidden">Email Me</span>
            </a>
          </div>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className="py-12 md:py-16 px-4 md:px-6 border-t border-border bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 md:mb-12 text-center px-4">
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground italic">
              "The biggest adventure you can ever take is to live the life of
              your dreams."
            </p>
            <p className="text-base md:text-lg text-muted-foreground mt-2">
              — Mark Twain
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 md:gap-12 mb-8 md:mb-12">
            {/* Quick Links */}
            <div className="text-center">
              <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">
                Quick Links
              </h3>
              <div className="flex flex-wrap gap-x-4 md:gap-x-6 gap-y-2 justify-center text-sm md:text-base">
                <a
                  href="#skills"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Skills
                </a>
                <a
                  href="#projects"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Projects
                </a>
                <a
                  href="#certifications"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Certifications
                </a>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Connect */}
            <div className="text-center">
              <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">
                Connect
              </h3>
              <div className="flex gap-3 md:gap-4 justify-center">
                <a
                  href="https://github.com/OluwatobilobaOdebo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/oluwatobiloba-odebo-b025361a4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-6 md:pt-8 border-t border-border text-center text-muted-foreground text-sm md:text-base">
            <p>© 2025 Tobi Odebo.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  isActive: boolean;
  onClick: () => void;
  comingSoon?: boolean;
  link?: string;
}

function ProjectCard({
  title,
  description,
  image,
  isActive,
  onClick,
  comingSoon,
  link,
}: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className={`group cursor-pointer rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300 border-2 bg-card flex flex-col ${
        isActive
          ? "border-primary shadow-xl"
          : "border-border hover:border-primary/50 hover:shadow-lg"
      }`}
    >
      <div className="aspect-[4/3] relative overflow-hidden bg-secondary">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 md:p-6 bg-card flex flex-col flex-1">
        <h4 className="text-base md:text-lg font-semibold mb-2 uppercase tracking-wide text-balance">
          {title}
        </h4>
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto px-4 md:px-6 py-2 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors uppercase text-xs md:text-sm tracking-wide inline-flex items-center justify-center gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            View Project
            <ArrowUpRight className="w-4 h-4" />
          </a>
        ) : comingSoon ? (
          <button className="mt-auto px-4 md:px-6 py-2 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors uppercase text-xs md:text-sm tracking-wide">
            Coming Soon
          </button>
        ) : null}
      </div>
    </div>
  );
}

// Certification Card Component
interface CertificationCardProps {
  title: string | React.ReactNode;
  provider: string;
  status: string;
  icon: string;
}

function CertificationCard({
  title,
  provider,
  status,
  icon,
}: CertificationCardProps) {
  return (
    <div className="p-4 md:p-6 bg-card rounded-xl md:rounded-2xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg group">
      <div className="text-3xl md:text-4xl mb-3 md:mb-4">{icon}</div>
      <h4 className="text-lg md:text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
        {title}
      </h4>
      <p className="text-sm md:text-base text-muted-foreground mb-2">
        {provider}
      </p>
      <p className="text-xs md:text-sm text-primary font-medium">{status}</p>
    </div>
  );
}
