"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

export default function FailurePredictionProject() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="bg-[#1a1a1a] sticky top-0 z-50">
        <div className="relative flex items-center justify-center py-6">
          {/* Back Button */}
          <Link
            href="/#projects"
            className="absolute left-6 flex items-center gap-2 text-white text-sm font-medium hover:opacity-80 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>

          {/* Center Content */}
          <div className="flex flex-col items-center">
            {/* Logo */}
            <Link href="/" className="mb-4 hover:opacity-80 transition-opacity">
              <div className="border-2 border-white px-3 py-1.5 rounded-sm">
                <span
                  className="text-white font-black text-2xl tracking-widest"
                  style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
                >
                  TO
                </span>
              </div>
            </Link>
            {/* Navigation Links */}
            <nav className="flex items-center gap-8">
              <Link
                href="/#about"
                className="text-white text-sm font-medium tracking-wide hover:opacity-80 transition-opacity"
              >
                ABOUT
              </Link>
              <Link
                href="/#projects"
                className="text-white text-sm font-medium tracking-wide hover:opacity-80 transition-opacity"
              >
                PROJECTS
              </Link>
              <Link
                href="/#contact"
                className="text-white text-sm font-medium tracking-wide hover:opacity-80 transition-opacity"
              >
                CONTACT
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section with Analytics Background */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/analytics.jpg"
            alt="Analytics background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f]/95 via-[#0a192f]/90 to-[#0a192f]/95" />
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <p
              className="font-semibold text-cyan-400 uppercase tracking-[0.2em] mb-4"
              style={{ fontSize: "14px" }}
            >
              Streamlit | Machine Learning Project
            </p>
            <h1
              className="font-black mb-6 text-white leading-[1.1]"
              style={{
                fontFamily: "var(--font-futura)",
                fontSize: "clamp(36px, 8vw, 72px)",
              }}
            >
              AI Startup Failure Prediction Dashboard
            </h1>
            <p
              className="text-white/80 mb-8"
              style={{ fontSize: "20px", lineHeight: "1.6" }}
            >
              A Machine Learning System for Predicting Startup Failure Risk
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://oluwatobilobaodebo-ai-startup-failure-p-appstreamlit-app-uvvlo0.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                View Live Demo
              </a>
              <a
                href="https://github.com/OluwatobilobaOdebo/ai-startup-failure-prediction"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/30 hover:border-white/60 text-white font-semibold rounded-lg transition-colors"
              >
                <Github className="w-5 h-5" />
                View Source Code
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2
              className="font-black mb-8 text-[#1a1a1a]"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(36px, 6vw, 56px)",
                fontStyle: "italic",
              }}
            >
              Overview
            </h2>

            <div
              className="space-y-6 text-[#1a1a1a]"
              style={{ fontSize: "18px", lineHeight: "1.8" }}
            >
              <p>
                Startup failure rates are notoriously high, and investors often
                struggle to identify which companies are most at risk early on.
              </p>

              <p>
                To solve this, I built an end-to-end machine learning system
                that predicts the probability that a startup will fail (close)
                based on its funding, milestones, relationships, and company
                characteristics.
              </p>

              <p>This project showcases:</p>

              <ul className="space-y-3 ml-6 text-[#4a4a4a]">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2.5 flex-shrink-0"></span>
                  <span>Full data analysis & feature engineering</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2.5 flex-shrink-0"></span>
                  <span>A trained machine learning model (Random Forest)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2.5 flex-shrink-0"></span>
                  <span>
                    Portfolio-level insights & startup-level diagnostics
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2.5 flex-shrink-0"></span>
                  <span>An interactive Streamlit web dashboard</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2.5 flex-shrink-0"></span>
                  <span>Clean production-ready code & documentation</span>
                </li>
              </ul>

              <p className="pt-4">
                The result is a VC-style analytics tool that helps investors
                understand which startups are most likely to experience failure
                in the near future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2
              className="font-black mb-8 text-[#1a1a1a]"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(36px, 6vw, 56px)",
                fontStyle: "italic",
              }}
            >
              The Problem
            </h2>

            <div
              className="space-y-6 text-[#1a1a1a]"
              style={{ fontSize: "18px", lineHeight: "1.8" }}
            >
              <p>
                Over 90% of startups fail, but the warning signs are rarely
                clear until it's too late.
              </p>

              <p>
                Investors often rely on intuition, limited signals, or
                incomplete data.
              </p>

              <div className="bg-white p-6 rounded-lg border-l-4 border-cyan-500 shadow-sm">
                <p className="font-semibold text-lg mb-2">Key Question:</p>
                <p className="text-[#4a4a4a]">
                  Can historical company characteristics predict the likelihood
                  of startup failure?
                </p>
              </div>

              <p className="pt-4">
                If we can identify key predictors early, founders, accelerators,
                and VCs can take action before failure occurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2
              className="font-black mb-8 text-[#1a1a1a]"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(36px, 6vw, 56px)",
                fontStyle: "italic",
              }}
            >
              My Approach
            </h2>

            <div
              className="space-y-8 text-[#1a1a1a]"
              style={{ fontSize: "18px", lineHeight: "1.8" }}
            >
              <p>I created a complete analytics pipeline consisting of:</p>

              {/* Step 1 */}
              <div className="border-l-4 border-cyan-500 pl-6 py-2">
                <h3 className="font-bold text-xl mb-3 text-[#1a1a1a]">
                  1. Data Exploration & Preparation
                </h3>
                <p className="text-[#4a4a4a] mb-3">
                  I cleaned and prepared historical startup datasets, including:
                </p>
                <ul className="space-y-2 ml-4 text-[#4a4a4a]">
                  <li>Funding rounds</li>
                  <li>Total capital raised</li>
                  <li>Founder & company relationships</li>
                  <li>Milestones achieved</li>
                  <li>Top-500 status</li>
                  <li>Final outcome (success vs failure)</li>
                </ul>
                <p className="text-[#4a4a4a] mt-3">
                  I handled missing values, engineered new features, and built a
                  modeling-ready dataset.
                </p>
              </div>

              {/* Step 2 */}
              <div className="border-l-4 border-cyan-500 pl-6 py-2">
                <h3 className="font-bold text-xl mb-3 text-[#1a1a1a]">
                  2. Machine Learning Modeling
                </h3>
                <p className="text-[#4a4a4a] mb-3">
                  I tested several classification models, selecting Random
                  Forest for its strong performance and interpretability.
                </p>
                <p className="text-[#4a4a4a] mb-2">Key outputs generated:</p>
                <ul className="space-y-2 ml-4 text-[#4a4a4a]">
                  <li>Predicted probability of failure</li>
                  <li>Feature importance rankings</li>
                  <li>Startup risk segmentation (Low / Medium / High)</li>
                </ul>
              </div>

              {/* Step 3 */}
              <div className="border-l-4 border-cyan-500 pl-6 py-2">
                <h3 className="font-bold text-xl mb-3 text-[#1a1a1a]">
                  3. Interactive Streamlit Dashboard
                </h3>
                <p className="text-[#4a4a4a] mb-3">
                  I designed and developed a fully-interactive dashboard that
                  allows users to:
                </p>
                <ul className="space-y-2 ml-4 text-[#4a4a4a]">
                  <li>Analyze portfolio-level failure risk</li>
                  <li>Compare predicted vs actual failure rates</li>
                  <li>View distribution charts and risk clusters</li>
                  <li>Filter startups by state, region, or risk bucket</li>
                  <li>
                    Inspect individual startup profiles, including:
                    <ul className="ml-6 mt-2 space-y-1">
                      <li>• Funding history</li>
                      <li>• Milestones</li>
                      <li>• Predicted failure probability</li>
                      <li>• Risk classification</li>
                      <li>• Company relationships</li>
                    </ul>
                  </li>
                </ul>
                <p className="text-[#4a4a4a] mt-3">
                  This turns a static ML model into a decision-support product.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2
              className="font-black mb-8 text-[#1a1a1a]"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(36px, 6vw, 56px)",
                fontStyle: "italic",
              }}
            >
              Features
            </h2>

            <div className="grid gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg mb-2 text-[#1a1a1a]">
                  Portfolio Risk Overview
                </h3>
                <p className="text-[#4a4a4a]">
                  High-level summary of startup risk across the entire dataset.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg mb-2 text-[#1a1a1a]">
                  Risk Distribution Chart
                </h3>
                <p className="text-[#4a4a4a]">
                  Visualizes predicted failure probabilities.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg mb-2 text-[#1a1a1a]">
                  Funding vs Risk Scatter Plot
                </h3>
                <p className="text-[#4a4a4a]">
                  Shows how capital raised correlates with failure risk.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg mb-2 text-[#1a1a1a]">
                  Startup-Level Risk Explorer
                </h3>
                <p className="text-[#4a4a4a]">
                  Drill into any company and see its model-generated insights.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg mb-2 text-[#1a1a1a]">
                  Full Data Transparency
                </h3>
                <p className="text-[#4a4a4a]">
                  Filtered, underlying data table included directly in the
                  dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-16 md:py-20 bg-[#0a192f]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2
              className="font-black mb-12 text-white text-center"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(36px, 6vw, 56px)",
                fontStyle: "italic",
              }}
            >
              Dashboard Preview
            </h2>

            {/* Main Dashboard View */}
            <div className="mb-12">
              <h3 className="text-cyan-400 font-semibold uppercase tracking-wider text-sm mb-4">
                Main Dashboard View
              </h3>
              <p className="text-white/70 mb-6" style={{ fontSize: "16px" }}>
                Interactive dashboard with portfolio risk overview, key metrics,
                and startup risk analysis.
              </p>
              <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="/ai_startup_main_dashboard.png"
                  alt="AI Startup Failure Prediction Dashboard - Main View"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                  quality={100}
                />
              </div>
            </div>

            {/* Risk Distribution Chart */}
            <div className="mb-12">
              <h3 className="text-cyan-400 font-semibold uppercase tracking-wider text-sm mb-4">
                Risk Distribution Chart
              </h3>
              <p className="text-white/70 mb-6" style={{ fontSize: "16px" }}>
                Visualizes the distribution of predicted failure probabilities
                across all startups.
              </p>
              <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-white">
                <Image
                  src="/ai_startup_dashboard_risk_chart.png"
                  alt="AI Startup Dashboard - Risk Distribution Chart"
                  width={1200}
                  height={500}
                  className="w-full h-auto"
                  quality={100}
                />
              </div>
            </div>

            {/* Scatter Plot */}
            <div className="mb-12">
              <h3 className="text-cyan-400 font-semibold uppercase tracking-wider text-sm mb-4">
                Funding vs Risk Scatter Plot
              </h3>
              <p className="text-white/70 mb-6" style={{ fontSize: "16px" }}>
                Shows the relationship between capital raised and predicted
                failure risk.
              </p>
              <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-white">
                <Image
                  src="/ai_startup_dashboard_scatter_plot.png"
                  alt="AI Startup Dashboard - Funding vs Risk Scatter Plot"
                  width={1200}
                  height={500}
                  className="w-full h-auto"
                  quality={100}
                />
              </div>
            </div>

            {/* Risk Filter */}
            <div className="mb-12">
              <h3 className="text-cyan-400 font-semibold uppercase tracking-wider text-sm mb-4">
                Risk Filter
              </h3>
              <p className="text-white/70 mb-6" style={{ fontSize: "16px" }}>
                Filter startups by risk bucket (Low / Medium / High) for
                targeted analysis.
              </p>
              <div className="max-w-xs rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-white">
                <Image
                  src="/ai_startup_dashboard_risk_filter.png"
                  alt="AI Startup Dashboard - Risk Filter"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                  quality={100}
                />
              </div>
            </div>

            {/* State Filter */}
            <div className="mb-12">
              <h3 className="text-cyan-400 font-semibold uppercase tracking-wider text-sm mb-4">
                State Filter
              </h3>
              <p className="text-white/70 mb-6" style={{ fontSize: "16px" }}>
                Filter startups by geographic location to analyze regional
                patterns.
              </p>
              <div className="max-w-xs rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-white">
                <Image
                  src="/ai_startup_dashboard_state_filter.png"
                  alt="AI Startup Dashboard - State Filter"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                  quality={100}
                />
              </div>
            </div>

            {/* Startup View */}
            <div className="mb-12">
              <h3 className="text-cyan-400 font-semibold uppercase tracking-wider text-sm mb-4">
                Individual Startup View
              </h3>
              <p className="text-white/70 mb-6" style={{ fontSize: "16px" }}>
                Drill into any company to see detailed risk analysis and
                model-generated insights.
              </p>
              <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-white">
                <Image
                  src="/ai_startup_dashboard_startup_view.png"
                  alt="AI Startup Dashboard - Individual Startup View"
                  width={1200}
                  height={500}
                  className="w-full h-auto"
                  quality={100}
                />
              </div>
            </div>

            {/* Startup Data */}
            <div className="mb-12">
              <h3 className="text-cyan-400 font-semibold uppercase tracking-wider text-sm mb-4">
                Startup Data Details
              </h3>
              <p className="text-white/70 mb-6" style={{ fontSize: "16px" }}>
                View detailed funding history, milestones, and company
                characteristics.
              </p>
              <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-white">
                <Image
                  src="/ai_startup_dashboard_startup_data.png"
                  alt="AI Startup Dashboard - Startup Data Details"
                  width={1200}
                  height={500}
                  className="w-full h-auto"
                  quality={100}
                />
              </div>
            </div>

            {/* Data Table */}
            <div>
              <h3 className="text-cyan-400 font-semibold uppercase tracking-wider text-sm mb-4">
                Underlying Data Table
              </h3>
              <p className="text-white/70 mb-6" style={{ fontSize: "16px" }}>
                Full transparency with the underlying dataset, filterable and
                exportable.
              </p>
              <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-white">
                <Image
                  src="/ai_startup_dashboard_table.png"
                  alt="AI Startup Dashboard - Data Table"
                  width={1200}
                  height={500}
                  className="w-full h-auto"
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2
              className="font-black mb-8 text-[#1a1a1a]"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(36px, 6vw, 56px)",
                fontStyle: "italic",
              }}
            >
              Results
            </h2>

            <div
              className="space-y-6 text-[#1a1a1a]"
              style={{ fontSize: "18px", lineHeight: "1.8" }}
            >
              <p>
                The model identified meaningful patterns in startup failure. For
                example:
              </p>

              <ul className="space-y-3 ml-6 text-[#4a4a4a]">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2.5 flex-shrink-0"></span>
                  <span>
                    Startups with fewer milestones and low investor
                    relationships showed significantly higher failure rates.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2.5 flex-shrink-0"></span>
                  <span>
                    Higher funding did not always correlate with lower
                    risk—several well-funded companies still exhibited high
                    predicted failure probability.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2.5 flex-shrink-0"></span>
                  <span>
                    Risk distribution revealed a concentrated cluster of
                    medium-risk companies that investors may overlook.
                  </span>
                </li>
              </ul>

              <p className="pt-4 bg-gray-50 p-4 rounded-lg border-l-4 border-cyan-500">
                These findings demonstrate how predictive analytics can
                supplement traditional due-diligence methods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2
              className="font-black mb-8 text-[#1a1a1a]"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(36px, 6vw, 56px)",
                fontStyle: "italic",
              }}
            >
              Tech Stack
            </h2>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3
                className="font-bold uppercase tracking-[0.15em] text-cyan-600 mb-4"
                style={{ fontSize: "13px" }}
              >
                Languages and Tools
              </h3>
              <ul
                className="space-y-2 text-[#4a4a4a]"
                style={{ fontSize: "16px" }}
              >
                <li>Python</li>
                <li>Pandas, NumPy</li>
                <li>Scikit-learn (Random Forest)</li>
                <li>Matplotlib, Seaborn</li>
                <li>Streamlit (Dashboard)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2a2a2a] py-12">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center">
            <a
              href="https://www.linkedin.com/in/oluwatobiloba-odebo-csm%C2%AE-cspo%C2%AE-b025361a4/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a8a8a8] text-sm font-medium tracking-[0.3em] hover:text-white transition-colors mb-6"
            >
              LINKEDIN
            </a>
            <p className="text-[#a8a8a8] text-sm">
              Copyright © 2025 Oluwatobiloba Odebo. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
