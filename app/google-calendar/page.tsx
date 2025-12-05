"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function GoogleCalendarCaseStudy() {
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
      <section className="py-16 md:py-24 bg-[#5b4fcf] relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <h2
              className="font-black mb-6 text-white leading-[0.95]"
              style={{
                fontFamily: "var(--font-futura)",
                fontSize: "clamp(40px, 12vw, 120px)",
              }}
            >
              AI Meeting Preparation Assistant
            </h2>
            <div className="border-l-4 border-white pl-4 mb-12">
              <p
                className="font-bold text-white"
                style={{
                  fontFamily: "var(--font-futura)",
                  fontSize: "clamp(28px, 6vw, 48px)",
                }}
              >
                Google Calendar
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
                Google Calendar is one of the most widely used scheduling tools
                in the world, serving individuals, teams, and entire
                organizations across both personal and professional contexts. As
                part of the broader Google Workspace ecosystem, Calendar acts as
                the central hub for how people allocate time, coordinate
                meetings, and organize collaborative work.
              </p>

              <p className="leading-relaxed" style={{ fontSize: "22px" }}>
                Despite its ubiquity, Calendar functions primarily as a
                logistical tool: it tells users when something is happening, but
                it does not help them understand what the meeting is about or
                how to prepare. This gap creates friction for professionals who
                juggle multiple meetings, projects, and stakeholders each day.
              </p>

              <p className="leading-relaxed" style={{ fontSize: "22px" }}>
                The core personas who rely heavily on Google Calendar include:
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
                    Knowledge Workers & Team Contributors
                  </h4>
                  <p
                    className="leading-relaxed text-white/80"
                    style={{ fontSize: "22px" }}
                  >
                    Employees who attend recurring meetings, syncs, and
                    cross-functional discussions. Their primary need is to
                    quickly understand the context of each meeting — relevant
                    emails, documents, decisions, and action items — without
                    manual searching.
                  </p>
                </li>

                <li>
                  <h4
                    className="font-bold text-white mb-2"
                    style={{ fontSize: "22px" }}
                  >
                    Managers & Team Leads
                  </h4>
                  <p
                    className="leading-relaxed text-white/80"
                    style={{ fontSize: "22px" }}
                  >
                    Individuals responsible for running structured meetings,
                    driving alignment, and ensuring follow-through. They need a
                    reliable way to prepare agendas, surface past decisions, and
                    assess the readiness of participants.
                  </p>
                </li>

                <li>
                  <h4
                    className="font-bold text-white mb-2"
                    style={{ fontSize: "22px" }}
                  >
                    Executives & Decision Makers
                  </h4>
                  <p
                    className="leading-relaxed text-white/80"
                    style={{ fontSize: "22px" }}
                  >
                    Users with dense calendars who depend on fast, high-level
                    summaries to stay informed. They often enter discussions
                    with limited time and require concise, accurate context.
                  </p>
                </li>
              </ul>

              <p className="leading-relaxed" style={{ fontSize: "22px" }}>
                These personas rely on Google Calendar daily, but the
                preparation process typically spans multiple tools — Gmail,
                Drive, Docs, Sheets, Slides, and third-party communication
                channels. The absence of an integrated preparation assistant
                leads to unnecessary context switching and wasted time.
              </p>

              <p className="leading-relaxed" style={{ fontSize: "22px" }}>
                Calendar's core competitors include Microsoft Outlook/Teams
                Calendar, Calendly, Motion, and emerging AI-driven scheduling
                tools such as Reclaim.ai. While these tools streamline
                logistics, none provide a comprehensive, integrated meeting
                preparation layer within the calendar experience.
              </p>

              <p className="leading-relaxed" style={{ fontSize: "22px" }}>
                This created a strong opportunity to explore an AI-powered
                solution that proactively prepares users for upcoming meetings
                by summarizing context, extracting action items, surfacing
                relevant documents, and enabling structured agendas — all
                directly within Google Calendar.
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
                  Over the past several years, user feedback across Google
                  Workspace channels has highlighted a recurring pain point:
                  users consistently struggle to prepare effectively for
                  meetings. While Google Calendar excels at scheduling, it
                  provides little intelligence around meeting context, forcing
                  users to manually search across multiple tools before
                  attending a discussion.
                </p>

                <p>
                  Signals indicating this unmet need show up in three major
                  areas:
                </p>

                <div className="mt-8">
                  <p className="font-semibold mb-4">
                    1. Workspace Search Logs & Support Inquiries
                  </p>
                  <p className="mb-4">
                    Internal search data and user queries repeatedly reveal that
                    users look for features like:
                  </p>
                  <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                    <li>"Meeting summaries"</li>
                    <li>"Agenda templates"</li>
                    <li>"Previous meeting recap"</li>
                    <li>"Documents for this meeting"</li>
                    <li>"Action items from last meeting"</li>
                  </ul>
                  <p className="mt-4">
                    These recurring searches indicate users expect Calendar to
                    help them prepare — yet the product provides no such
                    capability.
                  </p>
                </div>

                <div className="mt-8">
                  <p className="font-semibold mb-4">
                    2. Context Fragmentation Across Apps
                  </p>
                  <p className="mb-4">
                    User interviews and observational research show that
                    preparation behavior often looks like this:
                  </p>
                  <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                    <li>Jump into Gmail to find relevant threads</li>
                    <li>Search Google Drive for Docs, Sheets, or Slides</li>
                    <li>Skim notes from previous meetings</li>
                    <li>Look for attachments from calendar invites</li>
                    <li>Try to recall decisions made last time</li>
                  </ul>
                  <p className="mt-4">
                    This workflow is repeated before almost every meeting and
                    leads to lost time, confusion, and inconsistent preparation.
                  </p>
                </div>

                <div className="mt-8">
                  <p className="font-semibold mb-4">
                    3. Meeting Quality Scores Across Organizations
                  </p>
                  <p className="mb-4">
                    Teams report that meetings frequently start late, context
                    must be re-established each time, and critical information
                    is often missed.
                  </p>
                  <p className="mb-4">
                    A recent Google Workspace study showed that:
                  </p>
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className="flex flex-col items-center gap-12 my-16">
              <div className="flex items-center gap-8">
                <span
                  className="font-black text-[#1a1a1a]"
                  style={{
                    fontSize: "clamp(80px, 15vw, 120px)",
                    fontFamily: "Arial Black, sans-serif",
                    lineHeight: "1",
                  }}
                >
                  48%
                </span>
                <span
                  className="text-[#1a1a1a] font-semibold"
                  style={{ fontSize: "16px", maxWidth: "200px" }}
                >
                  of users felt unprepared for at least one meeting per week
                </span>
              </div>
              <div className="flex items-center gap-8">
                <span
                  className="font-black text-[#1a1a1a]"
                  style={{
                    fontSize: "clamp(80px, 15vw, 120px)",
                    fontFamily: "Arial Black, sans-serif",
                    lineHeight: "1",
                  }}
                >
                  38%
                </span>
                <span
                  className="text-[#1a1a1a] font-semibold"
                  style={{ fontSize: "16px", maxWidth: "200px" }}
                >
                  of meeting time is spent "rediscovering" prior information
                </span>
              </div>
              <div className="flex items-center gap-8">
                <span
                  className="font-black text-[#1a1a1a]"
                  style={{
                    fontSize: "clamp(80px, 15vw, 120px)",
                    fontFamily: "Arial Black, sans-serif",
                    lineHeight: "1",
                  }}
                >
                  61%
                </span>
                <span
                  className="text-[#1a1a1a] font-semibold"
                  style={{ fontSize: "16px", maxWidth: "200px" }}
                >
                  of participants say it's hard to keep track of decisions from
                  recurring meetings
                </span>
              </div>
            </div>

            <p
              className="text-[#1a1a1a] mb-16"
              style={{ fontSize: "18px", lineHeight: "1.8" }}
            >
              These signals pointed clearly toward a systemic preparation gap
              across Calendar users.
            </p>

            {/* Product Opportunity */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                PRODUCT OPPORTUNITY
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <p>
                  Preparing for meetings is one of the most common and
                  time-consuming knowledge worker activities, yet it remains
                  largely manual and repetitive.
                </p>

                <p>
                  There is a significant opportunity to turn Google Calendar
                  into an intelligent preparation hub.
                </p>

                <p>An AI-powered assistant inside Calendar could:</p>

                <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                  <li>
                    Automatically summarize key emails related to a meeting
                  </li>
                  <li>Surface the most relevant documents from Google Drive</li>
                  <li>Extract decisions and action items from past notes</li>
                  <li>Pull context from recurring meetings</li>
                  <li>Generate structured agendas in one click</li>
                </ul>

                <p className="mt-6">
                  This unlocks a new category of value for Calendar, shifting it
                  from:
                </p>

                <p className="text-center font-semibold my-6">
                  A passive scheduling tool → to → an active preparation and
                  decision-support platform.
                </p>

                <p>
                  By addressing this gap, Google Calendar can improve meeting
                  readiness, reduce cognitive load, and strengthen the overall
                  Workspace ecosystem.
                </p>
              </div>
            </div>

            {/* Additional Insights */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                ADDITIONAL INSIGHTS
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <p>
                  During early exploration, several additional patterns
                  strengthened the case for this feature:
                </p>

                <div className="mt-6">
                  <p className="font-semibold mb-2">
                    Strong User Demand Across Segments
                  </p>
                  <p>
                    Across Workspace admin feedback, Product Forums, and
                    enterprise customer interviews, we identified 65+ unique
                    requests for better meeting preparation tooling, making it
                    one of the highest unmet workflow needs tied to Calendar.
                  </p>
                </div>

                <div className="mt-6">
                  <p className="font-semibold mb-2">
                    High Retention Impact for Workspace
                  </p>
                  <p>
                    Meetings are the backbone of enterprise communication.
                    Providing intelligence in Calendar could influence adoption
                    and retention across multiple Workspace products (Gmail,
                    Drive, Docs, Meet).
                  </p>
                </div>

                <div className="mt-6">
                  <p className="font-semibold mb-2">Clear Productivity Gains</p>
                  <p>
                    Preliminary time studies showed that knowledge workers spend
                    6–12 minutes preparing for each meeting, repeated multiple
                    times per day. Even modest efficiency improvements here
                    yield major aggregate time savings.
                  </p>
                </div>

                <div className="mt-6">
                  <p className="font-semibold mb-2">Competitive Gaps</p>
                  <p>
                    While Outlook, Motion, and AI-first scheduling apps offer
                    improvements in automation or task syncing, no mainstream
                    calendar platform offers a complete, contextual meeting
                    preparation assistant integrated directly into the calendar
                    interface.
                  </p>
                </div>

                <p className="mt-6">
                  These insights collectively indicate a meaningful opportunity:
                  improving meeting preparation is not only a high-value user
                  need but also a strategic play for long-term Workspace
                  engagement.
                </p>
              </div>
            </div>

            {/* Key Statistics at Bottom */}
            <div className="flex flex-col items-center gap-12 my-16">
              <div className="flex items-center gap-8">
                <span
                  className="font-black text-[#1a1a1a]"
                  style={{
                    fontSize: "clamp(80px, 15vw, 120px)",
                    fontFamily: "Arial Black, sans-serif",
                    lineHeight: "1",
                  }}
                >
                  65
                </span>
                <span
                  className="text-[#1a1a1a] font-semibold"
                  style={{ fontSize: "16px", maxWidth: "200px" }}
                >
                  + unique requests for better meeting preparation tooling
                </span>
              </div>
              <div className="flex items-center gap-8">
                <span
                  className="font-black text-[#1a1a1a]"
                  style={{
                    fontSize: "clamp(80px, 15vw, 120px)",
                    fontFamily: "Arial Black, sans-serif",
                    lineHeight: "1",
                  }}
                >
                  6-12
                </span>
                <span
                  className="text-[#1a1a1a] font-semibold"
                  style={{ fontSize: "16px", maxWidth: "200px" }}
                >
                  minutes spent preparing for each meeting
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hypotheses Section */}
      <section className="py-16 md:py-24 bg-white">
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

            {/* Building an Intelligent Meeting Prep Assistant */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                BUILDING AN INTELLIGENT MEETING PREP ASSISTANT
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <p>
                  Equipping Google Calendar with an AI-powered preparation
                  assistant is foundational to improving how users engage with
                  their meetings. By consolidating context, summarizing
                  information, and reducing time spent searching across Gmail
                  and Drive, we believe Calendar can meaningfully enhance
                  meeting readiness and overall productivity. This intelligence
                  layer is required in order to help users understand what
                  they're walking into and what actions they need to take next —
                  ultimately elevating the role of Calendar within the Workspace
                  ecosystem.
                </p>
              </div>
            </div>

            {/* Introducing Pre-Meeting Intelligence */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                INTRODUCING PRE-MEETING INTELLIGENCE INSIDE THE EVENT VIEW
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <p>
                  We hypothesize that introducing this functionality directly
                  within the calendar event layout is the lowest-risk,
                  highest-impact entry point. Placing AI Meeting Prep at the
                  event level allows users to access summaries, related
                  documents, and extracted action items at the exact moment they
                  need them — without navigating to new surfaces.
                </p>

                <p>This approach provides:</p>

                <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                  <li>
                    Immediate value to users preparing for upcoming meetings
                  </li>
                  <li>
                    A safe, contained boundary for experimentation and iteration
                  </li>
                  <li>
                    A clear path to evaluate adoption, accuracy, and usability
                    before expanding elsewhere
                  </li>
                </ul>

                <p>
                  Based on input from engineers and Workspace SMEs, embedding
                  the AI assistant within the event view offers a technically
                  feasible way to layer intelligence on top of existing Calendar
                  and Drive APIs. Once this foundation is validated, expansion
                  to other contexts such as notifications, Google Meet, or
                  recurring meeting threads becomes significantly easier.
                </p>
              </div>
            </div>

            {/* Expansion Potential */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                EXPANSION POTENTIAL ACROSS THE WORKSPACE ECOSYSTEM
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <p>
                  After establishing reliable access to historical meeting
                  context — including emails, docs, and prior notes — we believe
                  the system can scale naturally to additional surfaces. This
                  includes preparing users before they open Calendar (via smart
                  notifications), supporting in-meeting workflows (via Google
                  Meet), and reinforcing outcomes after the meeting (via
                  follow-up summaries and action item extraction).
                </p>

                <p>
                  However, removing or restructuring existing Calendar
                  components without first proving the value and correctness of
                  AI-driven context is risky. Ensuring that the assistant
                  performs reliably in the event view must come before deeper
                  structural changes or more proactive system-wide behaviors.
                </p>

                <p>
                  These hypotheses provide guardrails around where to start,
                  what to build first, and how the feature should scale as
                  confidence and accuracy improve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Space Section */}
      <section className="py-16 md:py-24 bg-white">
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
                  Below are the four primary use cases that emerged consistently
                  through early discovery interviews, workflow observation, and
                  competitive analysis. These job stories helped clarify what
                  our solution must address in both the initial release and
                  future iterations. They also provided alignment across Design,
                  Engineering, and Product regarding where AI could deliver the
                  most meaningful impact.
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
                  <span className="font-bold text-[#5b4fcf]">I want to...</span>{" "}
                  quickly understand the most important context for an upcoming
                  meeting
                </p>
                <p
                  className="mb-4 text-[#1a1a1a]"
                  style={{ fontSize: "18px", lineHeight: "1.8" }}
                >
                  <span className="font-bold text-[#5b4fcf]">
                    So that I can...
                  </span>{" "}
                  enter the discussion prepared without searching across Gmail,
                  Drive, and past notes.
                </p>
                <p
                  className="text-[#1a1a1a]"
                  style={{ fontSize: "18px", lineHeight: "1.8" }}
                >
                  <span className="font-bold text-[#5b4fcf]">Example:</span>{" "}
                  "Show me a concise summary of the last meeting's decisions,
                  open questions, and top priorities for the next call."
                </p>
              </div>

              {/* Job Story 2 */}
              <div className="border-l-2 border-gray-300 pl-6">
                <p
                  className="mb-4 text-[#1a1a1a]"
                  style={{ fontSize: "18px", lineHeight: "1.8" }}
                >
                  <span className="font-bold text-[#5b4fcf]">I want to...</span>{" "}
                  automatically surface the documents and emails most relevant
                  to a meeting
                </p>
                <p
                  className="mb-4 text-[#1a1a1a]"
                  style={{ fontSize: "18px", lineHeight: "1.8" }}
                >
                  <span className="font-bold text-[#5b4fcf]">
                    So that I can...
                  </span>{" "}
                  review everything I need in one place instead of manually
                  hunting for attachments or threads.
                </p>
                <p
                  className="text-[#1a1a1a]"
                  style={{ fontSize: "18px", lineHeight: "1.8" }}
                >
                  <span className="font-bold text-[#5b4fcf]">Example:</span>{" "}
                  "Pull up the design doc that was shared last week and the
                  email thread where the final deadline was discussed."
                </p>
              </div>

              {/* Job Story 3 */}
              <div className="border-l-2 border-gray-300 pl-6">
                <p
                  className="mb-4 text-[#1a1a1a]"
                  style={{ fontSize: "18px", lineHeight: "1.8" }}
                >
                  <span className="font-bold text-[#5b4fcf]">I want to...</span>{" "}
                  extract action items and assigned owners from previous
                  interactions
                </p>
                <p
                  className="mb-4 text-[#1a1a1a]"
                  style={{ fontSize: "18px", lineHeight: "1.8" }}
                >
                  <span className="font-bold text-[#5b4fcf]">
                    So that I can...
                  </span>{" "}
                  ensure follow-through and accountability before entering the
                  meeting.
                </p>
                <p
                  className="text-[#1a1a1a]"
                  style={{ fontSize: "18px", lineHeight: "1.8" }}
                >
                  <span className="font-bold text-[#5b4fcf]">Example:</span>{" "}
                  "Show me a list of tasks from last Thursday's sync, who owns
                  them, and any overdue items I should bring up."
                </p>
              </div>

              {/* Job Story 4 */}
              <div className="border-l-2 border-gray-300 pl-6">
                <p
                  className="mb-4 text-[#1a1a1a]"
                  style={{ fontSize: "18px", lineHeight: "1.8" }}
                >
                  <span className="font-bold text-[#5b4fcf]">I want to...</span>{" "}
                  generate a structured agenda based on meeting history and
                  shared documents
                </p>
                <p
                  className="mb-4 text-[#1a1a1a]"
                  style={{ fontSize: "18px", lineHeight: "1.8" }}
                >
                  <span className="font-bold text-[#5b4fcf]">
                    So that I can...
                  </span>{" "}
                  run a more focused, organized meeting without starting the
                  planning process from scratch.
                </p>
                <p
                  className="text-[#1a1a1a]"
                  style={{ fontSize: "18px", lineHeight: "1.8" }}
                >
                  <span className="font-bold text-[#5b4fcf]">Example:</span>{" "}
                  "Propose a draft agenda with sections for updates, decisions,
                  blockers, and next steps."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-16 md:py-24 bg-white">
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

            {/* Feature 1: Context Summary */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                1. CONTEXT SUMMARY
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <p>
                  <span className="font-semibold">AI analyzes:</span> Previous
                  meeting notes, related emails, open items, and attached docs.
                </p>
                <p>
                  <span className="font-semibold">And generates:</span> Key
                  decisions, discussion history, open questions, and stakeholder
                  responsibilities.
                </p>
              </div>
            </div>

            {/* Feature 2: Task & Action Item Extraction */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                2. TASK & ACTION ITEM EXTRACTION
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <p>
                  <span className="font-semibold">AI scans across:</span>{" "}
                  Emails, Docs, and Slides.
                </p>
                <p>
                  <span className="font-semibold">And extracts:</span> Tasks,
                  owners, due dates, and pending follow-ups.
                </p>
                <p className="text-[#4a4a4a]">
                  Tasks integrate with Google Tasks or Workspace.
                </p>
              </div>
            </div>

            {/* Feature 3: Relevant Document & Email Surfacing */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                3. RELEVANT DOCUMENT & EMAIL SURFACING
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <p>Using semantic search, Calendar suggests:</p>
                <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                  <li>Docs shared before the meeting</li>
                  <li>Past attachments</li>
                  <li>Slide decks</li>
                  <li>Key email threads</li>
                </ul>
                <p className="font-semibold">No more digging.</p>
              </div>
            </div>

            {/* Feature 4: One-Click Agenda Builder */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                4. ONE-CLICK AGENDA BUILDER
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <p>Users can generate:</p>
                <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                  <li>Draft agenda</li>
                  <li>Talking points</li>
                  <li>Questions to review</li>
                  <li>Suggested structure</li>
                </ul>
                <p className="text-[#4a4a4a]">Editable inside Calendar.</p>
              </div>
            </div>

            {/* Feature 5: Post-Meeting Follow-Up */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                5. POST-MEETING FOLLOW-UP
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <p>After the meeting, AI generates a:</p>
                <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                  <li>Summary</li>
                  <li>Task list</li>
                  <li>Decision record</li>
                  <li>Next-steps document</li>
                </ul>
                <p className="text-[#4a4a4a]">
                  Automatically sent to attendees (optional).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics & Success Criteria Section */}
      <section className="py-16 md:py-24 bg-white">
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
                NORTH STAR METRIC
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <p className="font-semibold text-2xl">
                  "Preparation Time Saved per Meeting"
                </p>
                <p>Measured through:</p>
                <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                  <li>Reduction in time spent switching apps</li>
                  <li>Time spent reviewing summaries vs searching manually</li>
                </ul>
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
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                  <li>Feature adoption (% of events using AI Prep)</li>
                  <li>7-day retention of feature</li>
                  <li>Document open-through rate</li>
                  <li>Pre-meeting summary engagement</li>
                  <li>Task extraction usage</li>
                  <li>Decrease in meeting duration (optional)</li>
                  <li>Increase in meeting satisfaction (survey)</li>
                </ul>
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
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <p>
                  <span className="font-semibold">Control:</span> Standard
                  Google Calendar
                </p>
                <p>
                  <span className="font-semibold">Variant:</span> AI Prep panel
                </p>
                <p>
                  <span className="font-semibold">Measure:</span> Engagement,
                  task completion, pre-read compliance, and meeting outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-16 md:py-24 bg-white">
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
                V1 — CORE INTELLIGENCE (0–3 MONTHS)
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                  <li>Pre-meeting summary</li>
                  <li>Task extraction</li>
                  <li>Related docs surfacing</li>
                  <li>Draft agenda builder</li>
                </ul>
              </div>
            </div>

            {/* V2 */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                V2 — TEAM WORKFLOWS (3–6 MONTHS)
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                  <li>Meeting auto-notes</li>
                  <li>Follow-up tasks</li>
                  <li>Smart reminders</li>
                  <li>Integration into Google Meet</li>
                </ul>
              </div>
            </div>

            {/* V3 */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                V3 — AUTONOMOUS CALENDAR (6–12 MONTHS)
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                  <li>Predictive agenda suggestions</li>
                  <li>Meeting duplication detection</li>
                  <li>Calendar optimization ("cancel unnecessary meetings")</li>
                  <li>Cross-tool integrations (Slack, Notion, Asana)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 md:py-24 bg-white">
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

            <div
              className="space-y-6 text-[#1a1a1a]"
              style={{ fontSize: "18px", lineHeight: "1.8" }}
            >
              <p>
                AI Meeting Prep turns Google Calendar into a proactive partner
                that:
              </p>
              <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                <li>Saves time</li>
                <li>Improves meeting quality</li>
                <li>Ensures alignment</li>
                <li>Increases productivity</li>
                <li>Reduces context-switching</li>
                <li>Boosts Workspace retention</li>
              </ul>
              <p className="font-semibold pt-4">
                Google Calendar becomes more than a scheduling app—it becomes a
                meeting intelligence hub.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reflection Section */}
      <section className="py-16 md:py-24 bg-white">
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

            <div
              className="space-y-6 text-[#1a1a1a]"
              style={{ fontSize: "18px", lineHeight: "1.8" }}
            >
              <p>This project taught me how to:</p>
              <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                <li>Connect high-level user pain to workflow automation</li>
                <li>
                  Understand breadth and depth of AI augmentation opportunities
                </li>
                <li>Balance individual vs team needs</li>
                <li>Focus features around measurable productivity gains</li>
                <li>
                  Create an AI architecture grounded in real user behavior
                </li>
                <li>Blend product strategy with UX simplicity</li>
              </ul>
              <p className="font-semibold pt-4">
                AI Meeting Prep reflects my approach to building
                assistant-driven products that work invisibly, intuitively, and
                contextually—without overwhelming the user.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* View Next Case Study Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto flex justify-center">
            <button
              onClick={() => {
                // Check if there's a next available case study
                // Currently, the next PM case study is "Coming Soon", so refresh the page
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="px-8 py-4 border-2 border-[#5b4fcf] text-[#5b4fcf] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#5b4fcf] hover:text-white cursor-pointer"
              style={{ fontSize: "14px", letterSpacing: "0.2em" }}
            >
              VIEW NEXT CASE STUDY
            </button>
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
