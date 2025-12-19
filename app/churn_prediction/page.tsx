"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

export default function ChurnPredictionProject() {
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
              Customer Churn Prediction
            </h1>
            <p
              className="text-white/80 mb-8"
              style={{ fontSize: "20px", lineHeight: "1.6" }}
            >
              Predicting Customer Attrition Using Machine Learning & Analytics
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://tobis-customer-churn-prediction.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                View Live Demo
              </a>
              <a
                href="https://github.com/OluwatobilobaOdebo/customer-churn-prediction"
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
                Customer churn is one of the most important metrics for
                subscription-based businesses. Retaining a customer is
                significantly cheaper than acquiring a new one, and
                understanding why customers leave can directly improve revenue
                and long-term growth.
              </p>

              <p>
                In this project, I built a complete end-to-end churn prediction
                system using the Telco Customer Churn Dataset. The project
                includes exploratory data analysis, feature engineering, model
                development, and an interactive Streamlit dashboard that allows
                users to explore churn patterns and predict the churn
                probability for any customer profile.
              </p>

              <p>This project demonstrates my ability to:</p>

              <ul className="space-y-3 ml-6 text-[#4a4a4a]">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2.5 flex-shrink-0"></span>
                  <span>Analyze complex customer behavior data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2.5 flex-shrink-0"></span>
                  <span>
                    Build predictive models that support business decisions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2.5 flex-shrink-0"></span>
                  <span>
                    Design dashboards that communicate insights clearly
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2.5 flex-shrink-0"></span>
                  <span>Deploy analytical applications for real-world use</span>
                </li>
              </ul>
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
                Telecom companies lose substantial revenue every year due to
                customer churn. Understanding what factors contribute to
                customer attrition—and which customers are most likely to
                churn—enables companies to take proactive action.
              </p>

              <p className="font-semibold">The key business questions:</p>

              <ul className="space-y-3 ml-6 text-[#4a4a4a]">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2.5 flex-shrink-0"></span>
                  <span>
                    What patterns differentiate customers who churn from those
                    who stay?
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2.5 flex-shrink-0"></span>
                  <span>
                    Which customer characteristics are the strongest predictors
                    of churn?
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2.5 flex-shrink-0"></span>
                  <span>
                    Can we build a model that accurately predicts whether a
                    customer is at risk?
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2.5 flex-shrink-0"></span>
                  <span>
                    How can insights be visualized and used to support
                    decision-making?
                  </span>
                </li>
              </ul>
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
              {/* Step 1 */}
              <div className="border-l-4 border-cyan-500 pl-6 py-2">
                <h3 className="font-bold text-xl mb-3 text-[#1a1a1a]">
                  1. Exploratory Data Analysis
                </h3>
                <p className="text-[#4a4a4a] mb-3">
                  I analyzed customer demographics, contract types, billing
                  information, tenure, internet service types, and more to
                  uncover patterns related to churn.
                </p>
                <p className="text-[#4a4a4a] mb-2">Key insights included:</p>
                <ul className="space-y-2 ml-4 text-[#4a4a4a]">
                  <li>Month-to-month customers churn at much higher rates</li>
                  <li>Customers with fiber-optic internet show higher churn</li>
                  <li>Short-tenure customers are the most vulnerable</li>
                  <li>
                    Electronic check users churn more than users with automatic
                    payment methods
                  </li>
                </ul>
                <p className="text-[#4a4a4a] mt-3">
                  Charts were used throughout to visualize churn distribution
                  and segment-level differences.
                </p>
              </div>

              {/* Step 2 */}
              <div className="border-l-4 border-cyan-500 pl-6 py-2">
                <h3 className="font-bold text-xl mb-3 text-[#1a1a1a]">
                  2. Feature Engineering
                </h3>
                <p className="text-[#4a4a4a] mb-3">
                  To improve model performance and interpretability:
                </p>
                <ul className="space-y-2 ml-4 text-[#4a4a4a]">
                  <li>
                    Created tenure groups ("0–12", "13–24", "25–48", "49+")
                  </li>
                  <li>Encoded categorical variables</li>
                  <li>Cleaned and imputed missing values</li>
                  <li>
                    Generated additional features related to billing behavior
                  </li>
                </ul>
              </div>

              {/* Step 3 */}
              <div className="border-l-4 border-cyan-500 pl-6 py-2">
                <h3 className="font-bold text-xl mb-3 text-[#1a1a1a]">
                  3. Model Development
                </h3>
                <p className="text-[#4a4a4a] mb-3">
                  I built and compared multiple machine learning models,
                  including:
                </p>
                <ul className="space-y-2 ml-4 text-[#4a4a4a]">
                  <li>Logistic Regression</li>
                  <li>Random Forest Classifier</li>
                </ul>
                <p className="text-[#4a4a4a] mt-3">
                  The models were evaluated using accuracy, recall, F1 score,
                  and ROC-AUC. Logistic Regression performed the best overall
                  and offered strong interpretability—critical for business
                  stakeholders.
                </p>
              </div>

              {/* Step 4 */}
              <div className="border-l-4 border-cyan-500 pl-6 py-2">
                <h3 className="font-bold text-xl mb-3 text-[#1a1a1a]">
                  4. Interactive Dashboard
                </h3>
                <p className="text-[#4a4a4a] mb-3">
                  I developed a Streamlit application with four main sections:
                </p>
                <div className="ml-4 space-y-4 text-[#4a4a4a]">
                  <div>
                    <h4 className="font-semibold text-[#1a1a1a]">Overview</h4>
                    <ul className="space-y-1 ml-4 mt-1">
                      <li>• Overall churn rate</li>
                      <li>• Month-to-month contract churn rate</li>
                      <li>• Average monthly charges</li>
                      <li>• Churn distribution</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a1a1a]">
                      Segment Analysis
                    </h4>
                    <ul className="space-y-1 ml-4 mt-1">
                      <li>• Churn by tenure group</li>
                      <li>• Churn by internet service</li>
                      <li>• Churn by payment method</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a1a1a]">
                      Model Insights
                    </h4>
                    <ul className="space-y-1 ml-4 mt-1">
                      <li>
                        • Performance comparison between Logistic Regression and
                        Random Forest
                      </li>
                      <li>• Explanation of high-impact churn drivers</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a1a1a]">
                      Predict Churn
                    </h4>
                    <ul className="space-y-1 ml-4 mt-1">
                      <li>
                        • A live prediction tool where users can input customer
                        details and instantly receive a churn probability.
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="text-[#4a4a4a] mt-3">
                  This makes the project hands-on and business-ready.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
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
              Results
            </h2>

            <div
              className="space-y-6 text-[#1a1a1a]"
              style={{ fontSize: "18px", lineHeight: "1.8" }}
            >
              <p>
                The models revealed significant drivers of churn, including:
              </p>

              <ul className="space-y-3 ml-6 text-[#4a4a4a]">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2.5 flex-shrink-0"></span>
                  <span>
                    Contract type (month-to-month customers are most likely to
                    churn)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2.5 flex-shrink-0"></span>
                  <span>
                    Tenure (lower tenure strongly correlates with churn)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2.5 flex-shrink-0"></span>
                  <span>Internet service type</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2.5 flex-shrink-0"></span>
                  <span>Monthly charges and billing preferences</span>
                </li>
              </ul>

              <div className="mt-8">
                <h3 className="font-bold text-xl mb-4 text-[#1a1a1a]">
                  Performance Summary
                </h3>
                <ul className="space-y-3 ml-6 text-[#4a4a4a]">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2.5 flex-shrink-0"></span>
                    <span>
                      Logistic Regression achieved ~79% accuracy and 0.83
                      ROC-AUC
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2.5 flex-shrink-0"></span>
                    <span>
                      Random Forest achieved ~78% accuracy and 0.82 ROC-AUC
                    </span>
                  </li>
                </ul>
              </div>

              <p className="pt-4 bg-white p-4 rounded-lg border-l-4 border-cyan-500">
                The deployed app enables real-time churn risk scoring, dynamic
                exploration of customer segments, and clear insight into
                retention opportunities.
              </p>
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
                Overview Dashboard
              </h3>
              <p className="text-white/70 mb-6" style={{ fontSize: "16px" }}>
                High-level view of key churn metrics including overall churn
                rate, month-to-month churn rate, average charges comparison, and
                churn distribution visualization.
              </p>
              <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="/customer_churn_main_dashboard.png"
                  alt="Customer Churn Dashboard - Overview"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                  quality={100}
                />
              </div>
            </div>

            {/* Segment Analysis */}
            <div className="mb-12">
              <h3 className="text-cyan-400 font-semibold uppercase tracking-wider text-sm mb-4">
                Segment Analysis
              </h3>
              <p className="text-white/70 mb-6" style={{ fontSize: "16px" }}>
                Deep dive into churn patterns by customer segments including
                tenure groups, internet service type, and payment methods.
              </p>
              <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-white">
                <Image
                  src="/customer_churn_analysis.png"
                  alt="Customer Churn Dashboard - Segment Analysis"
                  width={1200}
                  height={500}
                  className="w-full h-auto"
                  quality={100}
                />
              </div>
            </div>

            {/* Model Insights */}
            <div className="mb-12">
              <h3 className="text-cyan-400 font-semibold uppercase tracking-wider text-sm mb-4">
                Model Insights
              </h3>
              <p className="text-white/70 mb-6" style={{ fontSize: "16px" }}>
                Side-by-side comparison of machine learning model performance
                with metrics including accuracy, recall, F1 score, and ROC-AUC.
              </p>
              <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-white">
                <Image
                  src="/customer_churn_insights.png"
                  alt="Customer Churn Dashboard - Model Insights"
                  width={1200}
                  height={500}
                  className="w-full h-auto"
                  quality={100}
                />
              </div>
            </div>

            {/* Churn Prediction Calculator */}
            <div className="mb-12">
              <h3 className="text-cyan-400 font-semibold uppercase tracking-wider text-sm mb-4">
                Churn Risk Calculator
              </h3>
              <p className="text-white/70 mb-6" style={{ fontSize: "16px" }}>
                Interactive tool allowing users to input customer
                characteristics and instantly calculate churn probability based
                on the trained model.
              </p>
              <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-white">
                <Image
                  src="/customer_churn_calculator.png"
                  alt="Customer Churn Dashboard - Churn Calculator"
                  width={1200}
                  height={500}
                  className="w-full h-auto"
                  quality={100}
                />
              </div>
            </div>

            {/* Prediction Output */}
            <div>
              <h3 className="text-cyan-400 font-semibold uppercase tracking-wider text-sm mb-4">
                Prediction Output
              </h3>
              <p className="text-white/70 mb-6" style={{ fontSize: "16px" }}>
                Real-time churn probability result displayed after submitting
                customer details, enabling immediate risk assessment.
              </p>
              <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-white">
                <Image
                  src="/customer_churn_predict-output.png"
                  alt="Customer Churn Dashboard - Prediction Output"
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

      {/* Tech Stack Section */}
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
              Tech Stack
            </h2>

            <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
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
                <li>Pandas, NumPy, Scikit-Learn</li>
                <li>Streamlit</li>
                <li>Matplotlib, Seaborn</li>
                <li>Jupyter Notebook</li>
                <li>Joblib</li>
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
