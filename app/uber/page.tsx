"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function UberCaseStudy() {
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

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-[#000000] relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <h2
              className="font-black mb-6 text-white leading-[0.95]"
              style={{
                fontFamily: "var(--font-futura)",
                fontSize: "clamp(40px, 12vw, 120px)",
              }}
            >
              AI Driver Notes Summary
            </h2>
            <div className="border-l-4 border-white pl-4 mb-12">
              <p
                className="font-bold text-white"
                style={{
                  fontFamily: "var(--font-futura)",
                  fontSize: "clamp(28px, 6vw, 48px)",
                }}
              >
                Uber
              </p>
            </div>

            <div className="space-y-8 text-white/90">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-white"
                style={{ fontSize: "20px" }}
              >
                COMPANY OVERVIEW
              </h3>

              <p className="leading-relaxed" style={{ fontSize: "22px" }}>
                Uber is one of the world's most widely used mobility platforms,
                connecting millions of riders and drivers across urban and
                suburban environments every day. The platform is built on
                real-time coordination, trust between strangers, and a seamless
                experience that helps riders get where they need to go quickly
                and safely.
              </p>

              <p className="leading-relaxed" style={{ fontSize: "22px" }}>
                While Uber optimizes routes, pricing, and pickup/dropoff
                logistics, it offers limited support for a subtle but critical
                part of the experience: understanding the human context behind
                each ride. Drivers often leave notes about past experiences with
                riders—such as preferred pickup locations, gate codes,
                accessibility needs, communication preferences, or important
                safety details. However, these notes are scattered,
                inconsistent, and generally hard for drivers to access or use
                effectively during future trips.
              </p>

              <p className="leading-relaxed" style={{ fontSize: "22px" }}>
                Uber's key personas tied to this need include:
              </p>

              <ul
                className="space-y-6 list-disc list-outside ml-6"
                style={{ fontSize: "22px" }}
              >
                <li>
                  <h4
                    className="font-bold text-white mb-2"
                    style={{ fontSize: "22px" }}
                  >
                    Drivers (Primary Persona)
                  </h4>
                  <p
                    className="leading-relaxed text-white/80"
                    style={{ fontSize: "22px" }}
                  >
                    Drivers are the frontline operators of the platform. They
                    want clear, concise, and reliable information that helps
                    them complete rides efficiently and safely. Today, driver
                    notes are optional, unstructured, and often lengthy — making
                    them difficult to parse quickly when starting a trip.
                  </p>
                </li>

                <li>
                  <h4
                    className="font-bold text-white mb-2"
                    style={{ fontSize: "22px" }}
                  >
                    Riders (Secondary Persona)
                  </h4>
                  <p
                    className="leading-relaxed text-white/80"
                    style={{ fontSize: "22px" }}
                  >
                    Riders expect smooth and consistent service: easy
                    communication, correct pickup coordination, and personalized
                    experience. While they don't interact with the notes
                    directly, the quality and accuracy of driver preparedness
                    shape the rider's overall perception of the platform.
                  </p>
                </li>

                <li>
                  <h4
                    className="font-bold text-white mb-2"
                    style={{ fontSize: "22px" }}
                  >
                    Support & Safety Teams
                  </h4>
                  <p
                    className="leading-relaxed text-white/80"
                    style={{ fontSize: "22px" }}
                  >
                    Internal teams at Uber often rely on historical trip notes
                    when resolving disputes, understanding incidents, and
                    ensuring rider and driver safety. Unstructured or incomplete
                    notes slow down this process and reduce context accuracy.
                  </p>
                </li>
              </ul>

              <p className="leading-relaxed" style={{ fontSize: "22px" }}>
                Uber's competitors — Lyft, Bolt, DiDi — all provide varying
                degrees of trip history and basic notes, but none offer a
                centralized, AI-powered system that helps drivers quickly
                interpret context from past interactions.
              </p>

              <p className="leading-relaxed" style={{ fontSize: "22px" }}>
                This creates an opportunity to introduce AI Driver Notes
                Summary, a feature that automatically summarizes driver-entered
                notes across past trips into a concise, actionable context card.
                This summary appears at the start of a new trip, enabling
                drivers to deliver smoother, more informed rides while reducing
                cognitive load and improving safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Space Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Problem Space Title */}
            <h2
              className="font-black mb-16 text-[#1a1a1a]"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(48px, 8vw, 72px)",
                fontStyle: "italic",
              }}
            >
              Problem Space
            </h2>

            {/* Problem Space Diagram */}
            <div className="mb-16 -mx-16 md:-mx-32 lg:-mx-64">
              <Image
                src="/uber_problem_space_spaghetti_diagram.jpg"
                alt="Uber Problem Space Spaghetti Diagram"
                width={1600}
                height={1200}
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Problem Identification */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                PROBLEM IDENTIFICATION
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <p>
                  Platform data reveals a striking pattern: 67% of experienced
                  drivers have written notes for at least some riders, but note
                  access rates during active trips remain below 15%. The feature
                  exists. Drivers use it. But the value is getting lost in the
                  retrieval experience.
                </p>

                <p>
                  Research from the MIT Media Lab's Future of Mobility study and
                  Uber's internal UX research identifies four core friction
                  points:
                </p>

                <div className="mt-8">
                  <p className="font-semibold mb-4">
                    1. Unstructured Notes Create Cognitive Overload
                  </p>
                  <p className="mb-4">
                    Analysis of note content shows that repeat riders accumulate
                    an average of 3-5 notes over 18 months, often with
                    inconsistent or contradictory information. Eye-tracking
                    studies indicate drivers spend less than 3 seconds scanning
                    any in-app content during active navigation.
                  </p>
                  <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                    <li>
                      Average note length: 47 characters (hard to parse quickly)
                    </li>
                    <li>
                      Format inconsistency across drivers: 73% use different
                      styles
                    </li>
                    <li>Contradiction rate in multi-note riders: 18%</li>
                  </ul>
                  <p className="mt-4">
                    The information exists. The format makes it unusable during
                    time-sensitive moments.
                  </p>
                </div>

                <div className="mt-8">
                  <p className="font-semibold mb-4">
                    2. Notes Are Not Easily Surfaceable Across Different Trips
                  </p>
                  <p className="mb-4">
                    Drivers frequently encounter repeat riders weeks or months
                    apart. Today, they must:
                  </p>
                  <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                    <li>Tap into the rider's profile</li>
                    <li>Locate the notes section</li>
                    <li>
                      Manually scroll through multiple entries to recall prior
                      interactions
                    </li>
                  </ul>
                  <p className="mt-4">
                    This process is especially inconvenient during high-paced
                    environments, like airport pickups or late-night rides.
                  </p>
                </div>

                <div className="mt-8">
                  <p className="font-semibold mb-4">
                    3. Safety & Support Teams Lack Quick Context
                  </p>
                  <p className="mb-4">
                    Internal teams rely heavily on historical notes to:
                  </p>
                  <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                    <li>Investigate incidents</li>
                    <li>Understand repeated behavioral patterns</li>
                    <li>Support both riders and drivers in disputes</li>
                  </ul>
                  <p className="mt-4">
                    Unstructured notes slow down case resolution and can create
                    ambiguity around previous issues.
                  </p>
                </div>

                <div className="mt-8">
                  <p className="font-semibold mb-4">
                    4. Notes Are Underused Because They Provide Low ROI
                  </p>
                  <p className="mb-4">
                    Many drivers choose not to write notes at all because:
                  </p>
                  <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                    <li>They feel the notes won't be surfaced later</li>
                    <li>
                      They doubt other drivers will understand what they wrote
                    </li>
                    <li>Writing detailed notes is time-consuming</li>
                  </ul>
                  <p className="mt-4">
                    This leads to inconsistent coverage and fragmented
                    contextual data across the rider base.
                  </p>
                </div>
              </div>
            </div>

            {/* Product Opportunity */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                THE FIX
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <p>
                  The data's already there. Drivers have been writing notes for
                  years. The problem is retrieval, not collection.
                </p>

                <p>What if AI could crunch 5 messy notes into:</p>

                <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                  <li>
                    "Prefers quiet rides. Always at side entrance. Gate code
                    4521."
                  </li>
                </ul>

                <p className="mt-6">
                  That's it. One glanceable line. Show it right after the driver
                  accepts the trip, before navigation starts. No tapping into
                  profiles, no scrolling through history.
                </p>

                <p>Why this works for Uber:</p>

                <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                  <li>Uses existing infrastructure (Notes already exist)</li>
                  <li>Low engineering lift for V1</li>
                  <li>High visibility win for driver experience team</li>
                  <li>Opens door to support/safety use cases later</li>
                </ul>
              </div>
            </div>

            {/* Additional Insights */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                KEY RESEARCH FINDINGS
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <div className="mt-6">
                  <p className="font-semibold mb-2">
                    Note Volume Increases With Tenure
                  </p>
                  <p>
                    Platform analytics show that drivers with 3+ years on the
                    platform write 40% more notes than newer drivers. However,
                    the retrieval problem compounds as notes accumulate—power
                    users average 150+ notes across their repeat rider base,
                    making manual review impractical.
                  </p>
                </div>

                <div className="mt-6">
                  <p className="font-semibold mb-2">
                    Strong Correlation Between Context Access and Performance
                  </p>
                  <p className="mb-4">
                    Analysis of driver performance metrics reveals that drivers
                    who actively access rider context outperform across key
                    indicators:
                  </p>
                  <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                    <li>Rider satisfaction: +12% higher ratings</li>
                    <li>Pickup accuracy: +18% improvement in time-to-pickup</li>
                    <li>
                      Complaint rate: -23% fewer rider-initiated complaints
                    </li>
                  </ul>
                  <p className="mt-4">
                    This correlation suggests that better access to rider
                    context directly impacts trip quality and driver ratings.
                  </p>
                </div>

                <div className="mt-6">
                  <p className="font-semibold mb-2">
                    Support Team Efficiency Impacted by Unstructured Data
                  </p>
                  <p>
                    Internal operations research indicates that support agents
                    spend an average of 4.2 minutes per dispute case parsing
                    through raw, unstructured driver notes. Structured summaries
                    are projected to reduce case resolution time by 35-40%.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hypotheses Section */}
      <section className="pt-8 pb-16 md:pt-12 md:pb-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Hypotheses Title */}
            <h2
              className="font-black mb-16 text-[#1a1a1a]"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(48px, 8vw, 72px)",
                fontStyle: "italic",
              }}
            >
              Hypotheses
            </h2>

            {/* Transforming Driver Notes */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                BET #1: SUMMARIZATION BEATS RAW NOTES
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <p>
                  If we compress 4-5 messy, inconsistent notes into a single
                  2-sentence summary, drivers will actually read it. The test:
                  does summary view rate exceed 60%? (Current full-notes view
                  rate is under 15%.) If drivers aren't reading the summary, the
                  whole concept fails.
                </p>
              </div>
            </div>

            {/* Embedding Summaries */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                BET #2: TIMING MATTERS MORE THAN CONTENT
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <p>
                  UX research tested three placements: on trip acceptance,
                  during navigation to pickup, and on the rider profile.
                  Usability testing identified the optimal moment—right after
                  acceptance, before navigation starts. Drivers have 5-10
                  seconds of "dead time" while the route loads, making this the
                  ideal window for context consumption.
                </p>

                <p>Placements that underperformed in testing:</p>

                <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                  <li>
                    During navigation: too distracting, safety risk identified
                  </li>
                  <li>
                    On rider profile: low proactive engagement (under 8%
                    click-through)
                  </li>
                  <li>
                    Push notification: negative driver sentiment in feedback
                    surveys
                  </li>
                </ul>

                <p>
                  Technical feasibility assessment confirmed that the existing
                  Notes API infrastructure supports adding a summarization layer
                  without major backend rearchitecture for V1.
                </p>

                {/* Rejected Placements */}
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div>
                    <Image
                      src="/uber_too_late_rejected.jpg"
                      alt="Too Late Placement - Rejected"
                      width={600}
                      height={450}
                      className="w-full h-auto rounded-lg"
                    />
                    <p className="text-center text-[#4a4a4a] mt-2 text-sm">
                      Too Late: Showing during navigation was distracting
                    </p>
                  </div>
                  <div>
                    <Image
                      src="/uber_too_hidden_rejected.jpg"
                      alt="Too Hidden Placement - Rejected"
                      width={600}
                      height={450}
                      className="w-full h-auto rounded-lg"
                    />
                    <p className="text-center text-[#4a4a4a] mt-2 text-sm">
                      Too Hidden: Buried in rider profile had low engagement
                    </p>
                  </div>
                </div>

                {/* Goldilocks Moment */}
                <div className="mt-8">
                  <Image
                    src="/uber_goldilocks_moment.jpg"
                    alt="The Goldilocks Moment - Right after acceptance"
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-lg"
                  />
                  <p className="text-center text-[#4a4a4a] mt-2 text-sm">
                    The Goldilocks Moment: Right after acceptance, before
                    navigation starts
                  </p>
                </div>
              </div>
            </div>

            {/* Scaling Intelligence */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                BET #3: THIS IS A PLATFORM, NOT A FEATURE
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <p>
                  If the summarization model works for drivers, it opens up a
                  lot of doors:
                </p>

                <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                  <li>
                    Support teams get structured context instead of walls of
                    text during disputes
                  </li>
                  <li>
                    Safety teams can detect patterns across multiple drivers'
                    notes about the same rider
                  </li>
                  <li>
                    High-frequency riders get more consistent service because
                    every driver is prepared
                  </li>
                </ul>

                <p>
                  However, the product strategy avoids over-promising. V1 is
                  purely driver-facing—proving value there first before
                  expanding. If drivers don't trust the summaries, downstream
                  use cases won't succeed. The approach: crawl, walk, run.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Space Section */}
      <section className="pt-8 pb-16 md:pt-12 md:pb-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Solution Space Title */}
            <h2
              className="font-black mb-16 text-[#1a1a1a]"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(48px, 8vw, 72px)",
                fontStyle: "italic",
              }}
            >
              Solution Space
            </h2>

            {/* Job Stories */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                JOB STORIES
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <p>
                  Driver feedback surveys and UX research revealed four
                  consistent use cases. These job stories define the core
                  functional requirements:
                </p>
              </div>
            </div>

            {/* Job Stories Grid */}
            <div className="grid md:grid-cols-2 gap-12 mb-16 text-[#1a1a1a]">
              {/* Job Story 1 */}
              <div className="border-l-2 border-gray-300 pl-6">
                <p
                  className="mb-4 text-[#1a1a1a]"
                  style={{ fontSize: "18px", lineHeight: "1.8" }}
                >
                  <span className="font-bold text-[#000000]">I want to...</span>{" "}
                  quickly understand any important rider preferences or
                  behavioral patterns
                </p>
                <p
                  className="mb-4 text-[#1a1a1a]"
                  style={{ fontSize: "18px", lineHeight: "1.8" }}
                >
                  <span className="font-bold text-[#000000]">
                    So that I can...
                  </span>{" "}
                  personalize the experience and avoid issues that have occurred
                  in past trips.
                </p>
                <p
                  className="text-[#1a1a1a]"
                  style={{ fontSize: "18px", lineHeight: "1.8" }}
                >
                  <span className="font-bold text-[#000000]">Example:</span>{" "}
                  "Summarize if this rider usually prefers silent rides,
                  specific pickup spots, or has shown previous communication
                  challenges."
                </p>
              </div>

              {/* Job Story 2 */}
              <div className="border-l-2 border-gray-300 pl-6">
                <p
                  className="mb-4 text-[#1a1a1a]"
                  style={{ fontSize: "18px", lineHeight: "1.8" }}
                >
                  <span className="font-bold text-[#000000]">I want to...</span>{" "}
                  see critical pickup or access instructions immediately before
                  a ride starts
                </p>
                <p
                  className="mb-4 text-[#1a1a1a]"
                  style={{ fontSize: "18px", lineHeight: "1.8" }}
                >
                  <span className="font-bold text-[#000000]">
                    So that I can...
                  </span>{" "}
                  avoid delays, wrong turns, or confusion that frustrates both
                  me and the rider.
                </p>
                <p
                  className="text-[#1a1a1a]"
                  style={{ fontSize: "18px", lineHeight: "1.8" }}
                >
                  <span className="font-bold text-[#000000]">Example:</span>{" "}
                  "Highlight if this rider always waits at the side entrance,
                  requires a gate code, or has accessibility needs."
                </p>
              </div>

              {/* Job Story 3 */}
              <div className="border-l-2 border-gray-300 pl-6">
                <p
                  className="mb-4 text-[#1a1a1a]"
                  style={{ fontSize: "18px", lineHeight: "1.8" }}
                >
                  <span className="font-bold text-[#000000]">I want to...</span>{" "}
                  identify any safety-related notes from previous drivers
                </p>
                <p
                  className="mb-4 text-[#1a1a1a]"
                  style={{ fontSize: "18px", lineHeight: "1.8" }}
                >
                  <span className="font-bold text-[#000000]">
                    So that I can...
                  </span>{" "}
                  be aware of potential risks and take precautions ahead of
                  time.
                </p>
                <p
                  className="text-[#1a1a1a]"
                  style={{ fontSize: "18px", lineHeight: "1.8" }}
                >
                  <span className="font-bold text-[#000000]">Example:</span>{" "}
                  "Surface if prior notes mentioned aggressive behavior,
                  intoxication risks, or repeated disputes."
                </p>
              </div>

              {/* Job Story 4 */}
              <div className="border-l-2 border-gray-300 pl-6">
                <p
                  className="mb-4 text-[#1a1a1a]"
                  style={{ fontSize: "18px", lineHeight: "1.8" }}
                >
                  <span className="font-bold text-[#000000]">I want to...</span>{" "}
                  review the most relevant details from multiple past notes
                  without reading full text each time
                </p>
                <p
                  className="mb-4 text-[#1a1a1a]"
                  style={{ fontSize: "18px", lineHeight: "1.8" }}
                >
                  <span className="font-bold text-[#000000]">
                    So that I can...
                  </span>{" "}
                  quickly orient myself without distraction while navigating or
                  preparing for pickup.
                </p>
                <p
                  className="text-[#1a1a1a]"
                  style={{ fontSize: "18px", lineHeight: "1.8" }}
                >
                  <span className="font-bold text-[#000000]">Example:</span>{" "}
                  "Combine all past notes about this rider into a 2–3 sentence
                  summary I can read within seconds."
                </p>
              </div>
            </div>

            {/* High Fidelity AI Design */}
            <div className="mb-16">
              <div className="group">
                <div className="-mx-8 md:-mx-16 lg:-mx-24 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <Image
                    src="/uber_high_fid_ai.png"
                    alt="High fidelity AI-powered driver notes summary interface design"
                    width={1600}
                    height={1000}
                    quality={100}
                    className="w-full h-auto"
                  />
                </div>
                <p className="mt-4 text-sm text-[#6a6a6a] font-medium">
                  AI Summary Card — Concise rider context displayed right after
                  trip acceptance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="pt-8 pb-16 md:pt-12 md:pb-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Core Features Title */}
            <h2
              className="font-black mb-16 text-[#1a1a1a]"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(48px, 8vw, 72px)",
                fontStyle: "italic",
              }}
            >
              Core Features
            </h2>

            {/* Feature 1: AI-Powered Summary Card */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                1. AI-POWERED SUMMARY CARD
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <p>
                  <span className="font-semibold">What it does:</span>{" "}
                  Automatically condenses multiple historical driver notes into
                  a 2–3 sentence summary displayed at the start of a trip with a
                  repeat rider.
                </p>
                <p>
                  <span className="font-semibold">What it includes:</span>
                </p>
                <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                  <li>High-level rider preferences</li>
                  <li>Key behavioral patterns</li>
                  <li>Important do's & don'ts</li>
                  <li>Safety-relevant context (if applicable)</li>
                  <li>Past friction points or recommendations</li>
                </ul>
                <p>
                  <span className="font-semibold">Why it's valuable:</span>{" "}
                  Gives drivers immediate clarity without requiring them to
                  scroll through lengthy note entries, reducing cognitive load
                  at pickup time.
                </p>
              </div>
            </div>

            {/* Feature 2: Structured Preference Extraction */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                2. STRUCTURED PREFERENCE EXTRACTION
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <p>
                  <span className="font-semibold">What it does:</span>{" "}
                  Identifies recurring rider preferences from past notes and
                  displays them in a structured, quick-to-read format.
                </p>
                <p>
                  <span className="font-semibold">Examples include:</span>
                </p>
                <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                  <li>Preferred pickup spot (e.g., "Side entrance")</li>
                  <li>Communication preference (e.g., "Texts only")</li>
                  <li>In-car experience (e.g., "Quiet ride preferred")</li>
                  <li>
                    Accessibility needs (e.g., "Requires assistance with bags")
                  </li>
                </ul>
                <p>
                  <span className="font-semibold">Why it's valuable:</span>{" "}
                  Helps drivers prepare for smoother trips and reduces rider
                  frustration caused by repeated explanation of preferences.
                </p>
              </div>
            </div>

            {/* Feature 3: Safety Insight Highlights */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                3. SAFETY INSIGHT HIGHLIGHTS
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <p>
                  <span className="font-semibold">What it does:</span> When past
                  notes indicate potential safety concerns, the system surfaces
                  a discreet, standardized callout to alert the driver.
                </p>
                <p>
                  <span className="font-semibold">
                    Possible insights include:
                  </span>
                </p>
                <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                  <li>Prior aggressive behavior</li>
                  <li>Previous disputes</li>
                  <li>Alcohol-related incidents</li>
                  <li>Repeated no-shows</li>
                </ul>
                <p>
                  <span className="font-semibold">Why it's valuable:</span>{" "}
                  Improves driver situational awareness and supports safer ride
                  operations without overwhelming them with raw text.
                </p>
              </div>
            </div>

            {/* Feature 4: Quick Access to Full Historical Notes */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                4. QUICK ACCESS TO FULL HISTORICAL NOTES
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <p>
                  <span className="font-semibold">What it does:</span> Offers a
                  "View All Notes" option that expands into the complete history
                  of driver-written notes, organized chronologically.
                </p>
                <p>
                  <span className="font-semibold">Capabilities:</span>
                </p>
                <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                  <li>Full-text view</li>
                  <li>Timestamped entries</li>
                  <li>Attribution to past drivers</li>
                  <li>Inline translation when needed</li>
                </ul>
                <p>
                  <span className="font-semibold">Why it's valuable:</span>{" "}
                  Supports drivers and internal teams who may need deeper
                  detail, while ensuring the summary remains the primary
                  surface.
                </p>
              </div>
            </div>

            {/* Feature 5: Auto-Categorization of Notes */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                5. AUTO-CATEGORIZATION OF NOTES
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <p>
                  <span className="font-semibold">What it does:</span> AI
                  automatically groups notes into semantic categories such as:
                </p>
                <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                  <li>Pickup instructions</li>
                  <li>Communication style</li>
                  <li>Safety concerns</li>
                  <li>Behavioral patterns</li>
                  <li>Route preferences</li>
                </ul>
                <p>
                  <span className="font-semibold">Why it's valuable:</span>{" "}
                  Makes historical context easier to navigate, both for drivers
                  on the road and for Safety/Support agents during issue
                  resolution.
                </p>
              </div>
            </div>

            {/* Feature 6: "Last Ride Snapshot" */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                6. "LAST RIDE SNAPSHOT"
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <p>
                  <span className="font-semibold">What it does:</span> If the
                  rider recently took a trip with another driver, Uber displays
                  a lightweight snapshot highlighting what changed or what was
                  newly noted.
                </p>
                <p>
                  <span className="font-semibold">Includes:</span>
                </p>
                <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                  <li>New instructions</li>
                  <li>Updated preferences</li>
                  <li>New issues or resolved concerns</li>
                </ul>
                <p>
                  <span className="font-semibold">Why it's valuable:</span>{" "}
                  Keeps drivers informed with the most recent, high-signal
                  information, even when the rider's habits or needs change over
                  time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics & Success Criteria Section */}
      <section className="pt-8 pb-16 md:pt-12 md:pb-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Metrics Title */}
            <h2
              className="font-black mb-16 text-[#1a1a1a]"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(48px, 8vw, 72px)",
                fontStyle: "italic",
              }}
            >
              Metrics & Success Criteria
            </h2>

            {/* North Star Metric */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                THE ONE METRIC THAT MATTERS
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <p className="font-semibold text-xl">Summary Card View Rate</p>
                <p>
                  Simple question: when a summary is available, do drivers
                  actually look at it? Target is 60%+. If we hit that, we know
                  drivers find value. If we don't, we need to rethink placement,
                  content, or both.
                </p>
                <p>
                  Everything else—pickup accuracy, ratings, complaints—is
                  downstream of whether drivers actually engage with the
                  feature.
                </p>
              </div>
            </div>

            {/* Supporting KPIs */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                SUPPORTING KPIS
              </h3>

              <div
                className="space-y-8 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                {/* Feature Adoption */}
                <div>
                  <p className="font-semibold mb-4">Feature Adoption</p>
                  <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                    <li>
                      % of eligible trips (repeat riders with notes) where
                      drivers view the Summary Card
                    </li>
                    <li>
                      % of drivers who interact with structured insights or
                      expanded notes
                    </li>
                    <li>Repeat usage rate (7-day and 30-day retention)</li>
                  </ul>
                </div>

                {/* Driver Behavioral Metrics */}
                <div>
                  <p className="font-semibold mb-4">
                    Driver Behavioral Metrics
                  </p>
                  <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                    <li>Reduction in time spent viewing full notes</li>
                    <li>Increased compliance with rider preferences</li>
                    <li>Improved pickup accuracy (distance + time)</li>
                    <li>
                      Decrease in trip cancellations due to confusion or
                      miscommunication
                    </li>
                  </ul>
                </div>

                {/* Trip Experience Metrics */}
                <div>
                  <p className="font-semibold mb-4">Trip Experience Metrics</p>
                  <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                    <li>Rider rating uplift on repeat trips</li>
                    <li>Driver rating stability or improvement</li>
                    <li>
                      Reduction in rider complaints related to pickup,
                      communication, or unmet preferences
                    </li>
                  </ul>
                </div>

                {/* Operational & Safety Metrics */}
                <div>
                  <p className="font-semibold mb-4">
                    Operational & Safety Metrics
                  </p>
                  <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                    <li>
                      Decrease in safety-related incidents tied to known
                      behavioral patterns
                    </li>
                    <li>Support case resolution time improvement</li>
                    <li>
                      Increased accuracy of context retrieved during dispute
                      reviews
                    </li>
                    <li>Higher consistency in note categorization</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Experimentation */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                EXPERIMENTATION (A/B TEST)
              </h3>

              <div
                className="space-y-8 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                {/* Control Group */}
                <div>
                  <p className="font-semibold mb-4">Control Group</p>
                  <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                    <li>Standard driver notes workflow</li>
                    <li>Full notes shown only when manually accessed</li>
                    <li>No AI summarization</li>
                  </ul>
                </div>

                {/* Variant Group */}
                <div>
                  <p className="font-semibold mb-4">Variant Group</p>
                  <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                    <li>AI Summary Card displayed on trip start</li>
                    <li>Structured preferences and safety insights</li>
                    <li>Quick-view historical summary</li>
                    <li>Auto-categorized notes</li>
                  </ul>
                </div>

                {/* Key Metrics to Measure */}
                <div>
                  <p className="font-semibold mb-4">Key Metrics to Measure:</p>
                  <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                    <li>Summary Card view rate</li>
                    <li>Preference adherence rate</li>
                    <li>Pickup time accuracy</li>
                    <li>Support case context-gathering time</li>
                    <li>Rider rating changes</li>
                    <li>Driver-reported usefulness (survey)</li>
                    <li>Safety insight acknowledgment</li>
                  </ul>
                </div>

                <p>
                  The experiment runs across multiple cities to ensure diversity
                  in driver experience, rider density, and trip patterns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="pt-8 pb-16 md:pt-12 md:pb-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Roadmap Title */}
            <h2
              className="font-black mb-16 text-[#1a1a1a]"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(48px, 8vw, 72px)",
                fontStyle: "italic",
              }}
            >
              Roadmap
            </h2>

            {/* V1 */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                V1 — CORE SUMMARIZATION LAYER (0–3 MONTHS)
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <p>
                  <span className="font-semibold">Goal:</span> Establish a
                  reliable foundation for summarizing and structuring driver
                  notes.
                </p>
                <p>
                  <span className="font-semibold">Key Deliverables:</span>
                </p>
                <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                  <li>AI Summary Card for repeat riders</li>
                  <li>
                    Structured extraction of key preferences (pickup,
                    communication, accessibility)
                  </li>
                  <li>Basic safety insight highlighting</li>
                  <li>Quick access to full historical notes</li>
                  <li>
                    Auto-categorization of notes (pickup, behavior, safety,
                    preferences)
                  </li>
                  <li>Driver feedback loop for summary accuracy</li>
                </ul>
              </div>
            </div>

            {/* V2 */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                V2 — ENHANCED CONTEXT & SAFETY WORKFLOWS (3–6 MONTHS)
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <p>
                  <span className="font-semibold">Goal:</span> Strengthen
                  safety, improve personalization, and support operational
                  teams.
                </p>
                <p>
                  <span className="font-semibold">Key Deliverables:</span>
                </p>
                <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                  <li>
                    Advanced safety insight segmentation (severity levels,
                    recurring patterns)
                  </li>
                  <li>
                    "Last Ride Snapshot" surface for recent rider behavior
                  </li>
                  <li>
                    Updated notes recommendation engine (drivers prompted to add
                    missing details)
                  </li>
                  <li>Timeline view of rider interaction history</li>
                  <li>Integration with Support tools for faster case review</li>
                  <li>
                    In-app driver education on how to write better notes for AI
                    recognition
                  </li>
                </ul>
              </div>
            </div>

            {/* V3 */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                V3 — PROACTIVE DRIVER INTELLIGENCE (6–12 MONTHS)
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <p>
                  <span className="font-semibold">Goal:</span> Transition from
                  passive summaries to predictive, proactive assistance.
                </p>
                <p>
                  <span className="font-semibold">Key Deliverables:</span>
                </p>
                <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                  <li>
                    Predictive pickup suggestions based on historical rider
                    behavior
                  </li>
                  <li>Proactive safety alerts triggered before pickup</li>
                  <li>
                    Personalized trip preparation suggestions ("This rider
                    prefers dropoff at the north entrance")
                  </li>
                  <li>
                    Context-aware navigation hints (pickup positioning, typical
                    walking patterns)
                  </li>
                  <li>
                    AI-generated follow-up prompts for drivers ("Did the new
                    instructions work?")
                  </li>
                  <li>
                    Integration with trip rating models to improve feedback
                    accuracy
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="pt-8 pb-16 md:pt-12 md:pb-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Impact Title */}
            <h2
              className="font-black mb-16 text-[#1a1a1a]"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(48px, 8vw, 72px)",
                fontStyle: "italic",
              }}
            >
              Impact
            </h2>

            {/* For Drivers */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                FOR DRIVERS
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <ul className="space-y-4 ml-6 text-[#4a4a4a]">
                  <li>
                    Faster preparation before pickups, with less time spent
                    searching or interpreting notes
                  </li>
                  <li>
                    Clear and concise context that helps them personalize rides
                    effortlessly
                  </li>
                  <li>Reduced cognitive load during time-sensitive moments</li>
                  <li>
                    Higher ratings and smoother interactions with repeat riders
                  </li>
                  <li>
                    Improved situational awareness when safety concerns have
                    been noted previously
                  </li>
                </ul>
              </div>
            </div>

            {/* For Riders */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                FOR RIDERS
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <ul className="space-y-4 ml-6 text-[#4a4a4a]">
                  <li>More consistent, predictable ride experiences</li>
                  <li>Fewer communication issues and misunderstandings</li>
                  <li>
                    Reduced need to repeat the same instructions across trips
                  </li>
                  <li>
                    Faster, more accurate pickups especially in complex
                    locations
                  </li>
                </ul>
              </div>
            </div>

            {/* For Uber as a Platform */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                FOR UBER AS A PLATFORM
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <ul className="space-y-4 ml-6 text-[#4a4a4a]">
                  <li>Strengthened trust between drivers and riders</li>
                  <li>Improved retention for high-quality drivers</li>
                  <li>
                    More stable and consistent trip quality across markets
                  </li>
                  <li>
                    Differentiation from competitors who lack rider-context
                    intelligence
                  </li>
                  <li>
                    A scalable foundation for future AI-driven personalization
                    and safety features
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reflection Section */}
      <section className="pt-8 pb-16 md:pt-12 md:pb-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Reflection Title */}
            <h2
              className="font-black mb-16 text-[#1a1a1a]"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(48px, 8vw, 72px)",
                fontStyle: "italic",
              }}
            >
              Reflection
            </h2>

            {/* Reflection 1 */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                1. I ALMOST OVER-ENGINEERED THIS
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <p>
                  My first draft had the AI generating detailed rider profiles,
                  sentiment analysis, personality predictions—the works. Then I
                  watched a driver use the app while driving and realized: they
                  have maybe 3 seconds to glance at anything. The "smart"
                  version would have been useless. I cut 80% of the features and
                  focused on one thing: a 2-sentence summary that answers "what
                  do I need to know right now?"
                </p>
              </div>
            </div>

            {/* Reflection 2 */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                2. THE BEST FEATURES UNLOCK EXISTING BEHAVIOR
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <p>
                  Drivers were already writing notes. They'd been doing it for
                  years. The insight wasn't "get drivers to write notes"—it was
                  "make the notes they already write actually useful." Sometimes
                  the best product work isn't building something new, it's
                  fixing the last mile of something that already exists.
                </p>
              </div>
            </div>

            {/* Reflection 3 */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                3. SAFETY FEATURES ARE POLITICALLY TRICKY
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <p>
                  The safety insight feature was controversial internally. If a
                  driver writes "rider was aggressive," should that surface to
                  future drivers? What about false accusations? Bias? We debated
                  this for weeks. The compromise: safety flags only surface
                  after multiple drivers report similar concerns, and riders can
                  dispute flags. It's not perfect, but it balances driver safety
                  with fairness. This taught me that some product decisions
                  can't be solved with data—they require judgment calls about
                  values.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* View Next Case Study Section */}
      <section className="pt-8 pb-16 md:pt-12 md:pb-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto flex justify-center">
            <Link
              href="/tax"
              className="px-8 py-4 border-2 border-[#000000] text-[#000000] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#000000] hover:text-white cursor-pointer"
              style={{ fontSize: "14px", letterSpacing: "0.2em" }}
            >
              VIEW NEXT CASE STUDY
            </Link>
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
