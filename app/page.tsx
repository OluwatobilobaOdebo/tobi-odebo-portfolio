"use client"

import type React from "react"
import Image from "next/image"
import {
  ArrowUpRight,
  FileText,
  Download,
  ChevronDown,
  Linkedin,
  Github,
  Mail,
  Phone,
  Briefcase,
  GraduationCap,
} from "lucide-react"
import { useState, useEffect } from "react"

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [isSpinning, setIsSpinning] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header")
      if (header) {
        const headerBottom = header.offsetTop + header.offsetHeight
        const isScrolledPast = window.scrollY > headerBottom
        setScrolled(isScrolledPast)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleProfileClick = () => {
    setIsSpinning(true)
    setTimeout(() => setIsSpinning(false), 1000)
  }

  const scrollToSection = (id: string) => {
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="h-6 fixed top-0 z-[60] md:relative hidden md:block w-full bg-amber-700"></div>

      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "top-0 py-3 md:py-4 shadow-lg mb-8" : "top-0 md:top-6 py-4 md:py-6 mb-12 md:mb-16 bg-transparent"
        }`}
        style={scrolled ? { background: "rgba(180, 83, 9, 0.975)" } : {}}
      >
        <div className="w-full px-4 md:px-8 lg:px-12 flex items-center justify-start">
          <div className="flex items-center">
            <button
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("hero")
              }}
              className="kill-link-style cursor-pointer"
            >
              <span
                className={`inline-block rounded-md animate__animated animate__fadeInDown border-4 border-white text-white select-none p-2 text-2xl xl:text-3xl font-extrabold ${
                  isSpinning ? "animate-spin-once" : ""
                }`}
              >
                TO
              </span>
            </button>

            <nav className="flex items-center ml-2 md:ml-6">
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("about")
                }}
                className="inline-block animate__animated animate__fadeInDown kill-link-style delay1 ml-2 md:ml-4 lg:ml-6 mr-1 md:mr-2 lg:mr-3 duration-300 text-sm md:text-xl lg:text-2xl xl:text-3xl cursor-pointer underline--magical font-extrabold !text-white"
              >
                About
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("projects")
                }}
                className="inline-block animate__animated animate__fadeInDown kill-link-style delay2 ml-2 md:ml-4 lg:ml-6 mr-1 md:mr-2 lg:mr-3 duration-300 text-sm md:text-xl lg:text-2xl xl:text-3xl cursor-pointer underline--magical font-extrabold !text-white"
              >
                Projects
              </a>
              <a
                href="#timeline"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("timeline")
                }}
                className="inline-block animate__animated animate__fadeInDown kill-link-style delay3 ml-2 md:ml-4 lg:ml-6 mr-1 md:mr-2 lg:mr-3 duration-300 text-sm md:text-xl lg:text-2xl xl:text-3xl cursor-pointer underline--magical font-extrabold !text-white"
              >
                Experience
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("contact")
                }}
                className="inline-block animate__animated animate__fadeInDown kill-link-style delay4 ml-2 md:ml-4 lg:ml-6 mr-1 md:mr-2 lg:mr-3 duration-300 text-sm md:text-xl lg:text-2xl xl:text-3xl cursor-pointer underline--magical font-extrabold !text-white"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="md:pt-0">
        {/* ===================== HERO SECTION ===================== */}
        <section
          id="hero"
          className="relative min-h-screen flex flex-col items-center justify-center text-center -mt-6 md:mt-0 pt-20 md:pt-40"
          style={{
            backgroundImage: "url('/ai_Me.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative z-10 w-full px-4 md:px-8 lg:px-12 flex items-end md:items-start pb-32 md:pb-0 md:pt-20 min-h-screen">
            <div className="text-left max-w-[280px] md:max-w-sm lg:max-w-md xl:max-w-lg">
              <h1 className="animate__animated animate__fadeInUp text-xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                Hi, I'm Tobi — welcome to my portfolio. I build intuitive, impactful digital solutions.
              </h1>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10">
            <ChevronDown className="w-8 h-8 text-white/80" />
          </div>
        </section>

        {/* Intro text section below hero */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <div className="text-3xl lg:text-5xl font-extrabold text-gray-900">
              Here, you can check out what I'm working on. My interests are product management, programming, analytics,
              and AI. My work lies at the intersection of these subjects.
            </div>
          </div>
        </section>

        {/* ===================== ABOUT SECTION ===================== */}
        <section id="about" className="py-16 md:py-24 px-4 md:px-6 bg-gray-900">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 md:gap-16">
              <div className="md:w-1/4 flex-shrink-0">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">About:</h2>
              </div>
              <div className="md:w-3/4">
                <div className="space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed text-white">
                  <p>
                    I'm Tobi Odebo — a technologist, analyst, and product-minded builder who enjoys turning ideas into
                    practical, high-impact solutions. My experience spans software engineering and data analytics, and
                    I'm drawn to product management because it sits at the intersection of problem-solving, user
                    understanding, and strategic decision-making.
                  </p>
                  <p>
                    Across my engineering work, I've been most energized by figuring out what to build, why it matters,
                    and how it should work. I like breaking down complex challenges, uncovering user needs, and shaping
                    clear product direction supported by data and experimentation. Whether I'm building AI tools,
                    full-stack applications, or analytics systems, I approach each project with the mindset of creating
                    value, not just writing code.
                  </p>
                  <p>
                    I'm also entrepreneurial by nature. I enjoy exploring new venture ideas — from AI-powered tools to
                    remote tax services to future real estate projects — and thinking in terms of long-term vision,
                    execution, and scalability.
                  </p>
                  <p>
                    Outside of work, I focus on fitness, personal development, and building meaningful relationships.
                    I'm driven by growth, consistency, and the belief that every project is an opportunity to learn and
                    create something better than before.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== SKILLS SECTION ===================== */}
        <section id="skills" className="py-16 md:py-24 px-4 md:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-center">Technical Skills</h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {/* Product Management */}
              <div className="p-6 md:p-8 bg-card rounded-2xl border border-border hover:border-primary transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3">Product Management</h3>
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
                  <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3">Frontend & Backend</h3>
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
                  <svg className="w-6 h-6 text-chart-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 12h14M5 12a2 2 0 00-2-2V6a2 2 0 002-2h14a2 2 0 002 2v4a2 2 0 00-2 2h-2a2 2 0 00-2-2m-6 0a2 2 0 012-2h2a2 2 0 012 2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3">DevOps & Tools</h3>
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
                  <svg className="w-6 h-6 text-chart-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3">Data & Analytics</h3>
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
                  <svg className="w-6 h-6 text-chart-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 01-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3">Testing & Quality</h3>
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
                  <svg className="w-6 h-6 text-chart-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3">Cloud & Infrastructure</h3>
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
        <section id="projects" className="py-16 md:py-24 px-4 md:px-6 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-center text-white">Projects</h2>

            {/* Software Engineering Projects */}
            <div className="mb-12 md:mb-16">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 flex items-center gap-2 text-white">
                <span className="w-2 h-6 md:h-8 bg-primary rounded-full"></span>
                Software Engineering
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                <ProjectCard
                  title="Full-Stack E-Commerce Platform"
                  description="Complete e-commerce solution"
                  image="/my-ecommerce-platform-interface.png"
                  isActive={false}
                  onClick={() => {}}
                  link="https://fullstack-ecommerce-site-tawny.vercel.app/"
                />
                <ProjectCard
                  title="SaaS Subscription App Starter"
                  description="SaaS application template"
                  image="/image-coming-soon-placeholder-1.png"
                  isActive={false}
                  onClick={() => {}}
                  comingSoon
                />
                <ProjectCard
                  title="Real-Time Chat App"
                  description="Real-time messaging application"
                  image="/image-coming-soon-placeholder-1.png"
                  isActive={false}
                  onClick={() => {}}
                  comingSoon
                />
              </div>
            </div>

            {/* Product Management Case Studies */}
            <div className="mb-12 md:mb-16">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 flex items-center gap-2 text-white">
                <span className="w-2 h-6 md:h-8 bg-accent rounded-full"></span>
                Product Management
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                <ProjectCard
                  title="AI Meeting Preparation Assistant for Google Calendar"
                  description="AI-powered meeting prep tool"
                  image="/image-coming-soon-placeholder-1.png"
                  isActive={false}
                  onClick={() => {}}
                  link="/google-calendar"
                />
                <ProjectCard
                  title="Marketplace MVP (Two-Sided Platform)"
                  description="Two-sided marketplace platform"
                  image="/image-coming-soon-placeholder-1.png"
                  isActive={false}
                  onClick={() => {}}
                  comingSoon
                />
                <ProjectCard
                  title="Customer Onboarding Redesign for a B2C App"
                  description="Onboarding experience redesign"
                  image="/image-coming-soon-placeholder-1.png"
                  isActive={false}
                  onClick={() => {}}
                  comingSoon
                />
              </div>
            </div>

            {/* Data Analytics Projects */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 flex items-center gap-2 text-white">
                <span className="w-2 h-6 md:h-8 bg-chart-1 rounded-full"></span>
                Data Analytics
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                <ProjectCard
                  title="End-to-End Data Pipeline + Analytics System"
                  description="Complete data pipeline"
                  image="/image-coming-soon-placeholder-1.png"
                  isActive={false}
                  onClick={() => {}}
                  comingSoon
                />
                <ProjectCard
                  title="Sales Forecasting with Time Series"
                  description="Time series forecasting"
                  image="/image-coming-soon-placeholder-1.png"
                  isActive={false}
                  onClick={() => {}}
                  comingSoon
                />
                <ProjectCard
                  title="Fraud Detection Analytics"
                  description="Fraud detection system"
                  image="/image-coming-soon-placeholder-1.png"
                  isActive={false}
                  onClick={() => {}}
                  comingSoon
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===================== CERTIFICATIONS SECTION ===================== */}
        <section id="certifications" className="py-16 md:py-24 px-4 md:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-center">Certifications</h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <CertificationCard
                title="Google Project Management Professional Certificate"
                provider="Google / Coursera"
                status="Issued Nov 2025"
                link="https://www.credly.com/badges/7e9d13c0-7c3f-4536-af4b-b55fae7b4340"
              />
              <CertificationCard
                title="Certified ScrumMaster (CSM)"
                provider="Scrum Alliance"
                status="Issued Nov 2025 · Expires Nov 2027"
                link="https://bcert.me/srmqcmvxr"
              />
              <CertificationCard
                title="Certified Scrum Product Owner (CSPO)"
                provider="Scrum Alliance"
                status="Issued Nov 2025 · Expires Nov 2027"
                link="https://bcert.me/slwdpmycu"
              />
              <CertificationCard
                title="Generative AI for Software Development"
                provider="DeepLearning.AI"
                status="Issued Nov 2025"
                link="https://learn.deeplearning.ai/certificates/ad1b0ef0-4b6c-4ca7-9878-a0c1b0ebb780"
              />
              <CertificationCard
                title="Natural Language Processing Specialization"
                provider="DeepLearning.AI"
                status="In Progress (will complete by Dec 7th)"
              />
              <CertificationCard
                title="Product Management Certification"
                provider="Product School"
                status="Planned Dec 8th - 12th"
              />
              <CertificationCard
                title="IBM AI Product Manager Professional Certificate"
                provider="IBM / Coursera"
                status="After Dec 12th"
              />
            </div>
          </div>
        </section>

        {/* ===================== TIMELINE SECTION ===================== */}
        <section id="timeline" className="py-16 md:py-24 px-4 md:px-6 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                Work Experience & Education Timeline
              </h2>
            </div>

            <div className="relative">
              {/* Vertical timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-700 hidden md:block"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                {/* Associate Software Engineer - Optum */}
                <div className="relative flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/2 md:pr-12">
                    <div className="bg-blue-500 rounded-lg p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/50 hover:border-2 hover:border-white">
                      <h3 className="text-xl font-bold text-white mb-2">Associate Software Engineer</h3>
                      <h4 className="text-lg text-blue-100 mb-3">Optum</h4>
                      <p className="text-sm text-blue-50 mb-4">🔧 Angular, Node.js, TypeScript, SQL, Playwright</p>
                      <p className="text-blue-50 text-sm">
                        Built and maintained OT Fin app with Angular/Node.js/TypeScript, standardizing UI across
                        financial workflows. Led Angular/Material migrations, resolved Elastic APM errors, and built
                        Playwright automation test suites to reduce manual regression effort.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-500 rounded-full border-4 border-gray-900 flex items-center justify-center z-10 hidden md:flex">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div className="md:w-1/2 md:pl-12 text-white text-lg font-medium">July 2023 - October 2025</div>
                </div>

                {/* Technology Development Associate - Optum */}
                <div className="relative flex flex-col md:flex-row-reverse items-center gap-8">
                  <div className="md:w-1/2 md:pl-12">
                    <div className="bg-blue-500 rounded-lg p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/50 hover:border-2 hover:border-white">
                      <h3 className="text-xl font-bold text-white mb-2">Technology Development Associate</h3>
                      <h4 className="text-lg text-blue-100 mb-3">Optum (Rotational Program)</h4>
                      <p className="text-sm text-blue-50 mb-4">🔧 Angular, Pandas, SQL, Postman</p>
                      <p className="text-blue-50 text-sm">
                        Enhanced vendor data accuracy using Pandas and SQL. Designed intuitive UI in Angular for
                        financial forecasting and conducted comprehensive API testing with Postman.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-500 rounded-full border-4 border-gray-900 flex items-center justify-center z-10 hidden md:flex">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div className="md:w-1/2 md:pr-12 md:text-right text-white text-lg font-medium">
                    July 2022 - July 2023
                  </div>
                </div>

                {/* Georgia Institute of Technology */}
                <div className="relative flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/2 md:pr-12">
                    <div className="bg-pink-400 rounded-lg p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/50 hover:border-2 hover:border-white">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Georgia Institute of Technology</h3>
                      <h4 className="text-lg text-gray-800 mb-3">Master of Science in Analytics 🎓</h4>
                      <p className="text-gray-900 text-sm">
                        📜 Currently pursuing advanced analytics education with focus on data science, machine learning,
                        and statistical modeling.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-pink-400 rounded-full border-4 border-gray-900 flex items-center justify-center z-10 hidden md:flex">
                    <GraduationCap className="w-6 h-6 text-gray-900" />
                  </div>
                  <div className="md:w-1/2 md:pl-12 text-white text-lg font-medium">Expected Dec 2026</div>
                </div>

                {/* University of Maryland */}
                <div className="relative flex flex-col md:flex-row-reverse items-center gap-8">
                  <div className="md:w-1/2 md:pl-12">
                    <div className="bg-pink-400 rounded-lg p-6 shadow-lg max-w-none transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/50 hover:border-2 hover:border-white">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">University of Maryland</h3>
                      <h4 className="text-lg text-gray-800 mb-3">
                        Bachelor of Science in Information Science & Economics 🎓
                      </h4>
                      <p className="text-gray-900 text-sm">
                        Minor in Statistics. Built foundation in data analysis, software development, and economic
                        principles.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-pink-400 rounded-full border-4 border-gray-900 flex items-center justify-center z-10 hidden md:flex">
                    <GraduationCap className="w-6 h-6 text-gray-900" />
                  </div>
                  <div className="md:w-1/2 md:pr-12 md:text-right text-white text-lg font-medium">May 2022</div>
                </div>

                {/* T. Rowe Price Intern */}
                <div className="relative flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/2 md:pr-12">
                    <div className="bg-blue-500 rounded-lg p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/50 hover:border-2 hover:border-white">
                      <h3 className="text-xl font-bold text-white mb-2">Global Technology Intern</h3>
                      <h4 className="text-lg text-blue-100 mb-3">T. Rowe Price</h4>
                      <p className="text-sm text-blue-50 mb-4">🔧 Ansible, Infrastructure Automation</p>
                      <p className="text-blue-50 text-sm">
                        Supported building and maintaining automation provisioning environment. Implemented Ansible for
                        Windows remote management and researched frameworks for advancing the Infrastructure Automation
                        Platform.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-500 rounded-full border-4 border-gray-900 flex items-center justify-center z-10 hidden md:flex">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div className="md:w-1/2 md:pl-12 text-white text-lg font-medium">June 2021 - Aug 2021</div>
                </div>

                {/* Community College of Baltimore County */}
                <div className="relative flex flex-col md:flex-row-reverse items-center gap-8">
                  <div className="md:w-1/2 md:pl-12">
                    <div className="bg-pink-400 rounded-lg p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/50 hover:border-2 hover:border-white">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Community College of Baltimore County</h3>
                      <h4 className="text-lg text-gray-800 mb-3">Associate of Science in Computer Science 🎓</h4>
                      <p className="text-gray-900 text-sm">
                        📜 Completed foundational computer science coursework including programming, data structures,
                        and algorithms.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-pink-400 rounded-full border-4 border-gray-900 flex items-center justify-center z-10 hidden md:flex">
                    <GraduationCap className="w-6 h-6 text-gray-900" />
                  </div>
                  <div className="md:w-1/2 md:pr-12 md:text-right text-white text-lg font-medium">May 2019</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== RESUME SECTION ===================== */}
        <section id="resume" className="py-16 md:py-24 px-4 md:px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-center text-gray-900">
              Resume
            </h2>

            <div className="transition-all duration-1000 opacity-100 translate-y-0">
              <div className="bg-card border border-border rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 md:p-4 bg-secondary/50 border-b border-border gap-3">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 md:w-5 h-4 md:h-5 text-primary flex-shrink-0" />
                    <span className="font-medium text-sm md:text-base truncate">Oluwatobiloba_Odebo_Resume.pdf</span>
                  </div>
                  <a
                    href="/Oluwatobiloba_Odebo_Resume.pdf"
                    download
                    className="flex items-center gap-2 px-3 md:px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors text-xs md:text-sm font-medium w-full sm:w-auto justify-center"
                  >
                    <Download className="w-3.5 md:w-4 h-3.5 md:h-4" />
                    Download
                  </a>
                </div>

                <div className="aspect-[8.5/11] relative">
                  <iframe src="/Oluwatobiloba_Odebo_Resume.pdf" className="w-full h-full" title="Resume PDF" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== CONTACT SECTION ===================== */}
        <section id="contact" className="py-16 md:py-24 px-4 md:px-6 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center text-white">
              Contact Me
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-12 md:mb-16 leading-relaxed max-w-3xl mx-auto text-center text-white">
              I'm always open to discussing new opportunities, collaborations, or just chatting about product and
              technology. Feel free to reach out!
            </p>

            <div className="flex justify-center">
              <div className="bg-white rounded-lg p-4 md:p-6 text-gray-900 max-w-2xl w-full">
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-6">
                  <div
                    className="w-24 h-24 md:w-28 md:h-32 rounded-full overflow-hidden flex-shrink-0 mx-auto md:mx-0 md:mt-2"
                    style={{ borderRadius: "50% / 60%" }}
                  >
                    <Image
                      src="/linkedin-tobi.png"
                      alt="Oluwatobiloba Odebo"
                      width={112}
                      height={128}
                      className="w-full h-full object-cover scale-110"
                      quality={100}
                      priority
                      style={{ objectPosition: "center 25%" }}
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold mb-1">Oluwatobiloba Odebo</h3>
                    <p className="text-black text-sm mb-3">Product Management | Analytics</p>
                    <p className="text-sm text-black leading-relaxed mb-2">
                      With 3 years of full stack experience, skilled in Data Analysis, Angular, Node.js, Typescript,
                      SQL, Kubernetes, Docker, Agile/Scrum
                    </p>
                    <p className="text-sm text-black">Product School | Georgia Institute of Technology</p>
                  </div>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-4 flex-wrap">
                  <a
                    href="https://www.linkedin.com/in/oluwatobiloba-odebo-b025361a4/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#0077b5] hover:bg-[#005885] text-white font-bold px-3 py-2 rounded-md transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                    View Profile
                  </a>
                  <a
                    href="mailto:tobiodebo4@gmail.com"
                    className="flex items-center gap-2 text-sm hover:text-blue-400 transition-colors"
                  >
                    <Mail className="h-4 w-4 text-red-400" />
                    <span>tobiodebo4@gmail.com</span>
                  </a>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-green-400" />
                    <span>443-531-8108</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== FOOTER ===================== */}
        <footer className="py-6 md:py-8 px-4 md:px-6 border-t border-border bg-gray-200">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
              {/* Quick Links Section - Left */}
              <div className="flex flex-col items-center">
                <h3 className="font-bold mb-3 text-gray-900 text-center">Quick Links</h3>
                <ul className="flex gap-3 md:gap-6 text-sm md:text-base flex-wrap justify-center">
                  <li>
                    <a href="#about" className="text-gray-700 hover:text-amber-700 transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#skills" className="text-gray-700 hover:text-amber-700 transition-colors">
                      Skills
                    </a>
                  </li>
                  <li>
                    <a href="#projects" className="text-gray-700 hover:text-amber-700 transition-colors">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="#timeline" className="text-gray-700 hover:text-amber-700 transition-colors">
                      Experience
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-gray-700 hover:text-amber-700 transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Inspirational Quote Section - Center */}
              <div className="flex flex-col items-center text-center -ml-0.5">
                <p className="text-gray-700 italic text-lg font-medium">"Imagination is the beginning of creation"</p>
              </div>

              {/* Connect Section - Right */}
              <div className="flex flex-col items-center md:items-end">
                <h3 className="font-bold mb-3 text-gray-900">Connect</h3>
                <div className="flex gap-6">
                  <a
                    href="https://www.linkedin.com/in/oluwatobiloba-odebo-b025361a4/"
                    className="text-gray-700 hover:text-amber-700 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a
                    href="https://github.com/OluwatobilobaOdebo"
                    className="text-gray-700 hover:text-amber-700 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-300 text-center text-gray-700">
              <div>© {new Date().getFullYear()} Oluwatobiloba Odebo.</div>
              <div className="mt-1">All rights reserved.</div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

interface ProjectCardProps {
  title: string
  description: string
  image: string
  isActive: boolean
  onClick: () => void
  comingSoon?: boolean
  link?: string
}

function ProjectCard({ title, description, image, isActive, onClick, comingSoon, link }: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className={`group cursor-pointer rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300 border-2 bg-card flex flex-col ${
        isActive ? "border-primary shadow-xl" : "border-border hover:border-primary/50 hover:shadow-lg"
      }`}
    >
      <div className="aspect-[4/3] relative overflow-hidden bg-white">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 md:p-6 bg-card flex flex-col flex-1">
        <h4 className="text-base md:text-lg font-semibold mb-2 uppercase tracking-wide text-balance">{title}</h4>
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
          <button className="mt-auto px-4 md:px-6 py-2 border-2 border-primary text-primary rounded-lg font-medium hover:underline transition-all">
            Coming Soon
          </button>
        ) : null}
      </div>
    </div>
  )
}

// Certification Card Component
interface CertificationCardProps {
  title: string | React.ReactNode
  provider: string
  status: string
  link?: string
}

function CertificationCard({ title, provider, status, link }: CertificationCardProps) {
  return (
    <div className="p-4 md:p-6 bg-card rounded-xl md:rounded-2xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg group">
      <h4 className="text-lg md:text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{title}</h4>
      <p className="text-sm md:text-base text-muted-foreground mb-3">{provider}</p>
      <p className="text-xs md:text-sm text-muted-foreground mb-4">{status}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm md:text-base text-primary font-medium hover:underline transition-all"
        >
          Show Credential
          <svg
            className="ml-1 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      )}
    </div>
  )
}
