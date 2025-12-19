"use client";

import Link from "next/link";
import Image from "next/image";
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
                Google Calendar is everywhere. Nearly everyone I know uses it —
                for work, personal life, or both. It's the backbone of how teams
                coordinate across Google Workspace.
              </p>

              <p className="leading-relaxed" style={{ fontSize: "22px" }}>
                But here's the thing: Calendar tells you <em>when</em> something
                is happening, not <em>what</em> it&apos;s actually about. You
                get a title, maybe a link, and that's it. I kept noticing that
                before any meeting, I'd spend 5-10 minutes scrambling through
                Gmail and Drive trying to remember what we discussed last time.
                That friction felt like a problem worth solving.
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
                Everyone I talked to had the same workflow: check Calendar, jump
                to Gmail, search Drive, skim old notes, try to remember what was
                decided last time. Rinse and repeat for every meeting. It's a
                lot of tab-switching for something that should be simple.
              </p>

              <p className="leading-relaxed" style={{ fontSize: "22px" }}>
                I looked at competitors — Outlook, Calendly, Motion, Reclaim.ai
                — and while they're good at scheduling, none of them actually
                help you <em>prepare</em>. That gap felt significant.
              </p>

              <p className="leading-relaxed" style={{ fontSize: "22px" }}>
                So I started exploring: what if Calendar could pull together
                context for you? Summarize what happened last time, surface the
                right docs, remind you of open action items — all before you
                even click "Join."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Space Section */}
      <section className="py-10 md:py-14 bg-white">
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

            {/* Problem Space Spaghetti Diagram */}
            <div className="mb-16 -mx-12 md:-mx-32 lg:-mx-64 xl:-mx-80">
              <Image
                src="/google_problem_space_spaghetti_diagram.jpg"
                alt="Problem Space Spaghetti Diagram showing the fragmented meeting preparation workflow"
                width={2400}
                height={1800}
                quality={100}
                className="w-full h-auto rounded-lg shadow-xl"
                priority
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
                  I started by looking at where the pain actually shows up.
                  Calendar is great at scheduling — but when it comes to
                  actually knowing what a meeting is <em>about</em>, you&apos;re
                  on your own. People spend way too much time hunting for
                  context.
                </p>

                <p>Three things kept coming up:</p>

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
                  Meeting prep is something everyone does, but no tool actually
                  helps with it. You do the same thing before every meeting —
                  dig through emails, find the doc, remember what was said. It's
                  tedious.
                </p>

                <p>
                  What if Calendar did that for you? Imagine opening an event
                  and seeing:
                </p>

                <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                  <li>A quick summary of what happened last time</li>
                  <li>The docs and emails that are actually relevant</li>
                  <li>Action items that are still open</li>
                  <li>A draft agenda you can edit or use as-is</li>
                </ul>

                <p className="mt-6">
                  That's the shift: Calendar goes from "when is the meeting?" to
                  "here's what you need to know."
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
                <p>A few other things stood out as I dug deeper:</p>

                <div className="mt-6">
                  <p className="font-semibold mb-2">
                    People are already asking for this
                  </p>
                  <p>
                    I found dozens of feature requests across Workspace forums
                    and support channels — people asking for agenda templates,
                    meeting recaps, ways to see "what happened last time." This
                    wasn't a solution looking for a problem.
                  </p>
                </div>

                <div className="mt-6">
                  <p className="font-semibold mb-2">The prep time adds up</p>
                  <p>
                    Most people I talked to estimated spending 5-15 minutes
                    getting ready for each meeting. With 4-6 meetings a day,
                    that's potentially an hour lost to context-gathering. Not
                    huge per meeting, but it compounds.
                  </p>
                </div>

                <div className="mt-6">
                  <p className="font-semibold mb-2">
                    No one else is doing this well
                  </p>
                  <p>
                    I checked Outlook, Motion, Reclaim, and a few others.
                    They're focused on scheduling optimization — finding the
                    best time, blocking focus hours. None of them actually help
                    you show up prepared for the meeting itself.
                  </p>
                </div>

                <p className="mt-6">
                  The more I looked, the more it felt like a real gap — not just
                  a nice-to-have, but something that would actually change how
                  people experience their calendars.
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
      <section className="py-10 md:py-14 bg-white">
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
                  My bet was simple: if Calendar could pull context together
                  automatically — summarizing what happened before, surfacing
                  relevant docs, flagging open action items — people would
                  actually feel prepared instead of scrambling. The goal wasn't
                  to add more features, but to remove the friction that's
                  already there.
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
                  I considered a few places this could live — a separate app, a
                  sidebar, push notifications. But the event view made the most
                  sense. That's where people already go when they want to know
                  "what is this meeting?" It's the natural moment.
                </p>

                <p>Starting there also meant:</p>

                <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                  <li>
                    We could ship something useful without redesigning Calendar
                  </li>
                  <li>It's easy to test — did people use it? Did it help?</li>
                  <li>
                    If it worked, we could expand to notifications or Meet later
                  </li>
                </ul>

                <p>
                  Talking to engineers confirmed it was technically doable — we
                  could layer this on top of existing Calendar and Drive APIs
                  without breaking anything. Low risk, clear signal.
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
                  If the event view worked, the next steps were obvious: smart
                  notifications before meetings, integration with Meet for
                  in-meeting context, auto-generated follow-ups afterward. The
                  whole workflow could feel connected.
                </p>

                <p>
                  But I didn't want to get ahead of myself. AI summaries can be
                  wrong. Surfaced docs might be irrelevant. The first priority
                  was making sure the basics worked reliably before pushing it
                  everywhere.
                </p>

                <p>
                  These guardrails helped keep the scope focused: start small,
                  prove value, then expand.
                </p>
              </div>
            </div>

            {/* Design Concepts Showcase */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-8"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                DESIGN EXPLORATIONS
              </h3>

              <div className="space-y-12">
                {/* Permanent Sidebar */}
                <div className="group">
                  <div className="-mx-8 md:-mx-16 lg:-mx-24 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <Image
                      src="/google_permanent_sidebar.jpg"
                      alt="Permanent Sidebar design concept for meeting preparation assistant"
                      width={1600}
                      height={1000}
                      quality={100}
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="mt-4 text-sm text-[#6a6a6a] font-medium">
                    Permanent Sidebar — Always-visible context panel
                  </p>
                </div>

                {/* Pop-up Modal */}
                <div className="group">
                  <div className="-mx-8 md:-mx-16 lg:-mx-24 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <Image
                      src="/google_pop_up_modal.jpg"
                      alt="Pop-up Modal design concept for meeting preparation assistant"
                      width={1600}
                      height={1000}
                      quality={100}
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="mt-4 text-sm text-[#6a6a6a] font-medium">
                    Pop-up Modal — Quick access without leaving the calendar
                    view
                  </p>
                </div>

                {/* Embedded Assistant */}
                <div className="group">
                  <div className="-mx-8 md:-mx-16 lg:-mx-24 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <Image
                      src="/google_embedded_assistant.jpg"
                      alt="Embedded Assistant design concept integrated within the event view"
                      width={1600}
                      height={1000}
                      quality={100}
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="mt-4 text-sm text-[#6a6a6a] font-medium">
                    Embedded Assistant — Integrated directly within the event
                    view
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Space Section */}
      <section className="py-10 md:py-14 bg-white">
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
                  From interviews and watching how people actually prep for
                  meetings, four use cases kept coming up. These became the
                  foundation for what we'd build first.
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

            {/* Event View Design */}
            <div className="mb-16">
              <div className="group">
                <div className="-mx-8 md:-mx-16 lg:-mx-24 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <Image
                    src="/google_event_view.jpg"
                    alt="Event View design showing the AI meeting preparation assistant integrated into Google Calendar"
                    width={1600}
                    height={1000}
                    quality={100}
                    className="w-full h-auto"
                  />
                </div>
                <p className="mt-4 text-sm text-[#6a6a6a] font-medium">
                  Event View — AI-powered meeting preparation context integrated
                  directly into the calendar event
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-10 md:py-14 bg-white">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics & Success Criteria Section */}
      <section className="py-10 md:py-14 bg-white">
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
      <section className="py-10 md:py-14 bg-white">
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
      <section className="py-10 md:py-14 bg-white">
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
                If this works, people stop dreading the "what did we talk about
                last time?" scramble. They show up knowing what's happening,
                what's expected of them, and what was left unfinished.
              </p>
              <p>
                For Google, it's a way to make Calendar indispensable — not just
                for scheduling, but for actually being ready. That's a different
                kind of product.
              </p>
              <p className="font-semibold pt-4">
                The shift is simple: Calendar stops being a list of times and
                starts being a tool that helps you do the meeting well.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reflection Section */}
      <section className="py-10 md:py-14 bg-white">
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
              <p>A few things stuck with me from this project:</p>
              <p>
                <span className="font-semibold">
                  Start with real behavior, not features.
                </span>{" "}
                The best signal came from watching people actually prepare for
                meetings — the tab-switching, the frantic searching. That's
                where the insight was, not in a feature request list.
              </p>
              <p>
                <span className="font-semibold">AI can be invisible.</span> The
                goal wasn't to make people interact with an AI assistant. It was
                to make the context just... appear. The less "AI-feeling" it is,
                the better.
              </p>
              <p>
                <span className="font-semibold">Scope creep is tempting.</span>{" "}
                I had to resist the urge to design the whole system upfront. The
                event view was enough to test the idea. Everything else could
                wait.
              </p>
              <p className="font-semibold pt-4">
                This project shaped how I think about AI features in general:
                they should remove friction, not add a new thing to learn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* View Next Case Study Section */}
      <section className="py-10 md:py-14 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto flex justify-center">
            <Link
              href="/uber"
              className="px-8 py-4 border-2 border-[#5b4fcf] text-[#5b4fcf] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#5b4fcf] hover:text-white cursor-pointer"
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
