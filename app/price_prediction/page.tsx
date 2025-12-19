"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

export default function PricePredictionProject() {
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
              Streamlit | Data Analytics Project
            </p>
            <h1
              className="font-black mb-6 text-white leading-[1.1]"
              style={{
                fontFamily: "var(--font-futura)",
                fontSize: "clamp(36px, 8vw, 72px)",
              }}
            >
              Baltimore County Real Estate Price Forecast Dashboard
            </h1>
            <p
              className="text-white/80 mb-8"
              style={{ fontSize: "20px", lineHeight: "1.6" }}
            >
              A Data Analytics and Predictive Modeling Project Using Zillow ZHVI
              Data
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://tobis-baltimore-real-estate-price-forecast.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                View Live Demo
              </a>
              <a
                href="https://github.com/OluwatobilobaOdebo/baltimore-real-estate-price-forecast"
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
                This project delivers a fully reproducible end-to-end data
                analytics and forecasting system that predicts 5-year home price
                trends for Baltimore County, Maryland.
              </p>

              <p>Using Zillow's publicly available ZHVI dataset, I built:</p>

              <ul className="space-y-3 ml-6 text-[#4a4a4a]">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2.5 flex-shrink-0"></span>
                  <span>
                    A clean data pipeline (raw to processed to model-ready)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2.5 flex-shrink-0"></span>
                  <span>A predictive forecasting engine</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2.5 flex-shrink-0"></span>
                  <span>
                    A fully interactive Streamlit dashboard for real-time
                    exploration
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2.5 flex-shrink-0"></span>
                  <span>
                    A clear, repeatable workflow that mirrors production-grade
                    analytics projects
                  </span>
                </li>
              </ul>

              <p className="pt-4">
                This project demonstrates my capabilities across data
                engineering, statistical modeling, visualization, and product
                design, presented through a tool that solves meaningful
                real-estate decision problems.
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
              Problem
            </h2>

            <div
              className="space-y-6 text-[#1a1a1a]"
              style={{ fontSize: "18px", lineHeight: "1.8" }}
            >
              <p>
                Real estate investors, homebuyers, and agents often struggle to
                understand:
              </p>

              <ul className="space-y-3 ml-6 text-[#4a4a4a]">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2.5 flex-shrink-0"></span>
                  <span>How prices have changed historically</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2.5 flex-shrink-0"></span>
                  <span>Which ZIP codes are growing faster than others</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2.5 flex-shrink-0"></span>
                  <span>
                    What home values may look like in the next 5 years
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2.5 flex-shrink-0"></span>
                  <span>Whether a ZIP code is trending upward or downward</span>
                </li>
              </ul>

              <p className="pt-4">
                Baltimore County has dozens of ZIP codes with different market
                dynamics. Without clean historical data and a clear forecasting
                framework, it's difficult to make confident, data-backed
                decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
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
              Solution
            </h2>

            <div
              className="space-y-8 text-[#1a1a1a]"
              style={{ fontSize: "18px", lineHeight: "1.8" }}
            >
              <p>
                I created an interactive 5-year real estate price forecasting
                dashboard that provides:
              </p>

              {/* Solution 1 */}
              <div className="border-l-4 border-cyan-500 pl-6 py-2">
                <h3 className="font-bold text-xl mb-3 text-[#1a1a1a]">
                  1. ZIP Code-Level Historical Trends
                </h3>
                <p className="text-[#4a4a4a] mb-3">
                  Users can select any Baltimore County ZIP to instantly view:
                </p>
                <ul className="space-y-2 ml-4 text-[#4a4a4a]">
                  <li>20+ years of median home value history</li>
                  <li>Seasonally smoothed price curves</li>
                  <li>Growth and decline periods</li>
                </ul>
              </div>

              {/* Solution 2 */}
              <div className="border-l-4 border-cyan-500 pl-6 py-2">
                <h3 className="font-bold text-xl mb-3 text-[#1a1a1a]">
                  2. Predictive Forecasting for the Next 5 Years
                </h3>
                <p className="text-[#4a4a4a] mb-3">Every ZIP code includes:</p>
                <ul className="space-y-2 ml-4 text-[#4a4a4a]">
                  <li>Forecasted median home value</li>
                  <li>Expected 5-year percentage growth</li>
                  <li>Annualized growth rate (CAGR)</li>
                  <li>A combined historical + forecast chart</li>
                </ul>
              </div>

              {/* Solution 3 */}
              <div className="border-l-4 border-cyan-500 pl-6 py-2">
                <h3 className="font-bold text-xl mb-3 text-[#1a1a1a]">
                  3. Clean, Reusable Data Pipeline
                </h3>
                <p className="text-[#4a4a4a] mb-3">The system automatically:</p>
                <ul className="space-y-2 ml-4 text-[#4a4a4a]">
                  <li>
                    Filters the national ZHVI dataset down to Baltimore County
                  </li>
                  <li>Reshapes and normalizes the time series</li>
                  <li>Builds forecast metrics</li>
                  <li>Produces easily exportable, analysis-ready datasets</li>
                </ul>
              </div>

              {/* Solution 4 */}
              <div className="border-l-4 border-cyan-500 pl-6 py-2">
                <h3 className="font-bold text-xl mb-3 text-[#1a1a1a]">
                  4. User-Friendly Streamlit Interface
                </h3>
                <p className="text-[#4a4a4a] mb-3">
                  The dashboard is simple, intuitive, and built for real-world
                  stakeholders:
                </p>
                <ul className="space-y-2 ml-4 text-[#4a4a4a]">
                  <li>Agents can compare ZIP codes</li>
                  <li>Investors can identify growth opportunities</li>
                  <li>Homebuyers can evaluate long-term value trends</li>
                </ul>
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
                Interactive dashboard with ZIP code selector, key metrics,
                historical trends, and 5-year forecasts.
              </p>
              <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="/baltimore_main_dashboard.png"
                  alt="Baltimore Real Estate Dashboard - Main View"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                  quality={100}
                />
              </div>
            </div>

            {/* Data Table */}
            <div className="mb-12">
              <h3 className="text-cyan-400 font-semibold uppercase tracking-wider text-sm mb-4">
                Underlying Data Table
              </h3>
              <p className="text-white/70 mb-6" style={{ fontSize: "16px" }}>
                Detailed time-series data by ZIP code with automated insights
                and forecasting methodology notes.
              </p>
              <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-white">
                <Image
                  src="/baltimore_dashboard_table.png"
                  alt="Baltimore Dashboard - Data Table"
                  width={1200}
                  height={500}
                  className="w-full h-auto"
                  quality={100}
                />
              </div>
            </div>

            {/* Trend Chart */}
            <div className="mb-12">
              <h3 className="text-cyan-400 font-semibold uppercase tracking-wider text-sm mb-4">
                ZIP Code Trend Chart
              </h3>
              <p className="text-white/70 mb-6" style={{ fontSize: "16px" }}>
                Shows market behavior over time, including peaks, dips, and
                long-term appreciation.
              </p>
              <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-white">
                <Image
                  src="/baltimore_dashboard_trend_chart.png"
                  alt="Baltimore Dashboard - Trend Chart"
                  width={1200}
                  height={400}
                  className="w-full h-auto"
                  quality={100}
                />
              </div>
            </div>

            {/* KPIs View */}
            <div>
              <h3 className="text-cyan-400 font-semibold uppercase tracking-wider text-sm mb-4">
                Forecast KPIs View
              </h3>
              <p className="text-white/70 mb-6" style={{ fontSize: "16px" }}>
                Displays projected median value, 5-year growth percentage, and
                annualized return.
              </p>
              <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-white">
                <Image
                  src="/baltimore_dashboard_kpi.png"
                  alt="Baltimore Dashboard - KPI View"
                  width={1200}
                  height={200}
                  className="w-full h-auto"
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modeling Approach Section */}
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
              Modeling Approach
            </h2>

            <div
              className="space-y-6 text-[#1a1a1a]"
              style={{ fontSize: "18px", lineHeight: "1.8" }}
            >
              <p>
                This project focuses on transparent, explainable forecasting -
                not black-box ML.
              </p>

              <p className="font-semibold">Key components:</p>

              <ul className="space-y-3 ml-6 text-[#4a4a4a]">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2.5 flex-shrink-0"></span>
                  <span>Year-over-year median value tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2.5 flex-shrink-0"></span>
                  <span>Rolling trend estimation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2.5 flex-shrink-0"></span>
                  <span>
                    5-year forward projection using baseline + slope extension
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2.5 flex-shrink-0"></span>
                  <span>Computation of future median value</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2.5 flex-shrink-0"></span>
                  <span>CAGR estimation for investment-style returns</span>
                </li>
              </ul>

              <p className="pt-4 bg-gray-50 p-4 rounded-lg border-l-4 border-cyan-500">
                This forecasting method is intentionally interpretable, making
                it ideal for non-technical users.
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

            <div className="grid md:grid-cols-2 gap-8">
              {/* Languages & Tools */}
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
                  <li>Jupyter Notebook</li>
                  <li>Pandas, NumPy</li>
                  <li>Streamlit</li>
                  <li>Matplotlib / Plotly</li>
                </ul>
              </div>

              {/* Data */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3
                  className="font-bold uppercase tracking-[0.15em] text-cyan-600 mb-4"
                  style={{ fontSize: "13px" }}
                >
                  Data
                </h3>
                <ul
                  className="space-y-2 text-[#4a4a4a]"
                  style={{ fontSize: "16px" }}
                >
                  <li>
                    Zillow ZHVI (
                    <a
                      href="https://www.zillow.com/research/data/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-600 hover:underline"
                    >
                      https://www.zillow.com/research/data/
                    </a>
                    )
                  </li>
                  <li>Processed datasets exported for analysis</li>
                  <li>Dashboard-ready data outputs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Impact Section */}
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
              Business Impact
            </h2>

            <div className="space-y-8">
              {/* For Real Estate Agents */}
              <div>
                <h3
                  className="font-bold uppercase tracking-[0.15em] text-[#1a1a1a] mb-4"
                  style={{ fontSize: "14px" }}
                >
                  For Real Estate Agents
                </h3>
                <ul
                  className="space-y-2 ml-6 text-[#4a4a4a]"
                  style={{ fontSize: "17px" }}
                >
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2.5 flex-shrink-0"></span>
                    <span>
                      Educate clients with objective, data-backed insights
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2.5 flex-shrink-0"></span>
                    <span>Demonstrate local market expertise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2.5 flex-shrink-0"></span>
                    <span>
                      Identify ZIP codes with accelerating home values
                    </span>
                  </li>
                </ul>
              </div>

              {/* For Investors */}
              <div>
                <h3
                  className="font-bold uppercase tracking-[0.15em] text-[#1a1a1a] mb-4"
                  style={{ fontSize: "14px" }}
                >
                  For Investors
                </h3>
                <ul
                  className="space-y-2 ml-6 text-[#4a4a4a]"
                  style={{ fontSize: "17px" }}
                >
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2.5 flex-shrink-0"></span>
                    <span>Compare markets for potential deals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2.5 flex-shrink-0"></span>
                    <span>Understand long-term appreciation patterns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2.5 flex-shrink-0"></span>
                    <span>Identify risk-adjusted opportunities</span>
                  </li>
                </ul>
              </div>

              {/* For Homebuyers */}
              <div>
                <h3
                  className="font-bold uppercase tracking-[0.15em] text-[#1a1a1a] mb-4"
                  style={{ fontSize: "14px" }}
                >
                  For Homebuyers
                </h3>
                <ul
                  className="space-y-2 ml-6 text-[#4a4a4a]"
                  style={{ fontSize: "17px" }}
                >
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2.5 flex-shrink-0"></span>
                    <span>
                      Understand whether the ZIP code is trending up or down
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2.5 flex-shrink-0"></span>
                    <span>Make more confident buying decisions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2.5 flex-shrink-0"></span>
                    <span>
                      Evaluate long-term value of specific neighborhoods
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Learned Section */}
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
              What I Learned
            </h2>

            <div
              className="space-y-6 text-[#1a1a1a]"
              style={{ fontSize: "18px", lineHeight: "1.8" }}
            >
              <p>Building this project strengthened my skills in:</p>

              <ul className="space-y-3 ml-6 text-[#4a4a4a]">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2.5 flex-shrink-0"></span>
                  <span>Structuring end-to-end analytics systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2.5 flex-shrink-0"></span>
                  <span>Managing large datasets efficiently</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2.5 flex-shrink-0"></span>
                  <span>Designing user-centered dashboards</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2.5 flex-shrink-0"></span>
                  <span>Communicating insights to non-technical audiences</span>
                </li>
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
              href="https://www.linkedin.com/in/oluwatobiloba-odebo-b025361a4/"
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
