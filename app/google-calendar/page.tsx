import Link from "next/link";
import { ArrowLeft, Target, TrendingUp, CheckCircle2 } from "lucide-react";

export default function GoogleCalendarCaseStudy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight"
              style={{ fontFamily: "var(--font-futura)" }}
            >
              AI Meeting Preparation Assistant
            </h1>
            <p
              className="text-xl md:text-2xl text-muted-foreground mb-8"
              style={{ fontFamily: "var(--font-futura)" }}
            >
              Google Calendar
            </p>

            {/* Meta Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                  Role
                </p>
                <p className="font-medium">Product Manager</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                  Timeline
                </p>
                <p className="font-medium">6 weeks</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                  Tools
                </p>
                <p className="font-medium">Figma, Miro, Google Workspace</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2
              className="text-3xl md:text-4xl font-bold mb-8"
              style={{ fontFamily: "var(--font-futura)" }}
            >
              01 — Overview
            </h2>
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                  Deliverables
                </h3>
                <p className="text-lg leading-relaxed">
                  PRD • UX flows • Wireframes • Metrics Framework • Experiment
                  Plan • Product Strategy • Case Study
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Context Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2
              className="text-3xl md:text-4xl font-bold mb-8"
              style={{ fontFamily: "var(--font-futura)" }}
            >
              02 — Context
            </h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                Google Calendar is the backbone of millions of professionals'
                workflows. Almost every meeting, event, or collaboration starts
                here.
              </p>
              <p className="text-2xl font-semibold">
                But while Google Calendar tells you{" "}
                <span className="italic">when</span> you have a meeting… it
                doesn't help you get ready for one.
              </p>
              <p>
                Through interviews and behavioral research, I discovered a major
                productivity gap:
              </p>
              <p className="text-xl font-semibold text-primary">
                People spend more time preparing for meetings than attending
                them. And many still show up unprepared.
              </p>
              <p>
                Across users — engineers, PMs, executives, students — the same
                problems surfaced:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Searching for old emails before a meeting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Jumping between docs, threads, and files</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Forgetting past decisions or action items</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Missing pre-work shared days before</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Not having the right context when joining</span>
                </li>
              </ul>
              <p className="pt-4">
                This case study covers how I designed{" "}
                <span className="font-semibold">AI Meeting Prep</span>, a
                contextual AI assistant built directly into Google Calendar that
                prepares you for meetings automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2
              className="text-3xl md:text-4xl font-bold mb-12"
              style={{ fontFamily: "var(--font-futura)" }}
            >
              03 — Problem
            </h2>

            <div className="space-y-12">
              {/* Problem 1 */}
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  1. Information Lives Everywhere
                </h3>
                <p className="text-lg leading-relaxed mb-4">
                  Important context is scattered across:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    "Gmail threads",
                    "Google Docs",
                    "Sheets",
                    "Slides",
                    "Slack messages",
                    "Drive folders",
                    "Past calendar notes",
                    "Chat history",
                  ].map((item) => (
                    <div
                      key={item}
                      className="px-4 py-3 bg-muted rounded-lg text-sm font-medium text-center"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <p className="text-lg leading-relaxed mt-4 text-muted-foreground">
                  Users manually dig through all of it before meetings.
                </p>
              </div>

              {/* Problem 2 */}
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  2. Meetings Start Without Proper Context
                </h3>
                <p className="text-lg leading-relaxed mb-4">
                  People join calls unsure of:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>What was discussed last time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Who owns what</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>The latest decisions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>What the meeting is even about</span>
                  </li>
                </ul>
                <p className="text-lg leading-relaxed mt-4 font-semibold">
                  This leads to wasted time and unclear outcomes.
                </p>
              </div>

              {/* Problem 3 */}
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  3. Pre-work Is Missed or Ignored
                </h3>
                <p className="text-lg leading-relaxed">
                  Action items shared before meetings often get buried in email
                  or Slack.
                </p>
              </div>

              {/* Problem 4 */}
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  4. Calendars Don't Help You Prepare
                </h3>
                <p className="text-lg leading-relaxed">
                  Google Calendar alerts users about time, not context. There is
                  no intelligence guiding users toward better preparation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunity Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2
              className="text-3xl md:text-4xl font-bold mb-8"
              style={{ fontFamily: "var(--font-futura)" }}
            >
              04 — Opportunity
            </h2>
            <blockquote className="text-2xl md:text-3xl font-bold mb-8 text-primary leading-tight">
              "How might we transform Google Calendar from a scheduling tool
              into a proactive meeting assistant?"
            </blockquote>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>An AI assistant inside Calendar could:</p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Pull related emails",
                  "Surface docs and past meeting notes",
                  "Summarize the last conversation",
                  "Extract action items",
                  "Provide recommended agenda topics",
                  "Suggest follow-up tasks",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 p-4 bg-background rounded-lg"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="pt-4 text-xl font-semibold">
                This would save users minutes per meeting and improve team
                alignment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hypotheses Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2
              className="text-3xl md:text-4xl font-bold mb-12"
              style={{ fontFamily: "var(--font-futura)" }}
            >
              05 — Hypotheses
            </h2>

            <div className="space-y-6">
              {[
                {
                  if: "users receive automatic meeting prep summaries",
                  then: "they will spend less time searching and more time contributing",
                },
                {
                  if: "Calendar can extract past decisions and action items",
                  then: "meetings will start with clear context",
                },
                {
                  if: "Calendar shows the most relevant documents and emails",
                  then: "users will miss fewer pre-work requirements",
                },
                {
                  if: "users can generate agendas with one click",
                  then: "meeting quality and structure will improve",
                },
              ].map((hypothesis, idx) => (
                <div key={idx} className="p-6 bg-muted/30 rounded-lg">
                  <p className="text-lg leading-relaxed">
                    <span className="font-semibold">If</span> {hypothesis.if},{" "}
                    <span className="font-semibold">then</span>{" "}
                    {hypothesis.then}.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personas Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2
              className="text-3xl md:text-4xl font-bold mb-12"
              style={{ fontFamily: "var(--font-futura)" }}
            >
              06 — Personas
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-background rounded-xl border-2 border-border">
                <h3 className="text-xl font-bold mb-2">Sandra</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Engineering Manager
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Attends 6–10 meetings per day</li>
                  <li>• Needs quick context before each meeting</li>
                  <li>• Often forgets pre-reads shared through email</li>
                </ul>
              </div>

              <div className="p-6 bg-background rounded-xl border-2 border-border">
                <h3 className="text-xl font-bold mb-2">Kevin</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Product Manager
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Joins cross-functional meetings</li>
                  <li>• Juggles docs, threads, and meeting notes</li>
                  <li>• Needs clarity on decisions and action items</li>
                </ul>
              </div>

              <div className="p-6 bg-background rounded-xl border-2 border-border">
                <h3 className="text-xl font-bold mb-2">Maya</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Graduate Student
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Uses Calendar for classes, office hours, group work</li>
                  <li>• Needs summaries & doc linking for study sessions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2
              className="text-3xl md:text-4xl font-bold mb-8"
              style={{ fontFamily: "var(--font-futura)" }}
            >
              08 — Solution Overview
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed font-semibold mb-6">
              I designed <span className="text-primary">AI Meeting Prep</span>,
              an intelligent assistant inside Google Calendar that prepares
              users for meetings automatically.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              It appears directly inside each calendar event.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2
              className="text-3xl md:text-4xl font-bold mb-12"
              style={{ fontFamily: "var(--font-futura)" }}
            >
              09 — Core Features
            </h2>

            <div className="space-y-12">
              {/* Feature 1 */}
              <div className="p-8 bg-background rounded-xl border-2 border-border">
                <div className="flex items-start gap-4 mb-4">
                  <h3 className="text-2xl font-bold">1. Context Summary</h3>
                </div>
                <div className="ml-12 space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-2">
                      AI analyzes:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Previous meeting notes",
                        "Related emails",
                        "Open items",
                        "Attached docs",
                      ].map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 bg-muted rounded-full text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-2">
                      And generates:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Key decisions",
                        "Discussion history",
                        "Open questions",
                        "Stakeholder responsibilities",
                      ].map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="p-8 bg-background rounded-xl border-2 border-border">
                <div className="flex items-start gap-4 mb-4">
                  <h3 className="text-2xl font-bold">
                    2. Task & Action Item Extraction
                  </h3>
                </div>
                <div className="ml-12 space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-2">
                      AI scans across:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Emails", "Docs", "Slides"].map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 bg-muted rounded-full text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-2">
                      And extracts:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Tasks",
                        "Owners",
                        "Due dates",
                        "Pending follow-ups",
                      ].map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Tasks integrate with Google Tasks or Workspace.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="p-8 bg-background rounded-xl border-2 border-border">
                <div className="flex items-start gap-4 mb-4">
                  <h3 className="text-2xl font-bold">
                    3. Relevant Document & Email Surfacing
                  </h3>
                </div>
                <div className="ml-12 space-y-4">
                  <p className="text-lg">
                    Using semantic search, Calendar suggests:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Docs shared before the meeting",
                      "Past attachments",
                      "Slide decks",
                      "Key email threads",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-lg font-semibold text-primary">
                    No more digging.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="p-8 bg-background rounded-xl border-2 border-border">
                <div className="flex items-start gap-4 mb-4">
                  <h3 className="text-2xl font-bold">
                    4. One-Click Agenda Builder
                  </h3>
                </div>
                <div className="ml-12 space-y-4">
                  <p className="text-lg">Users can generate:</p>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "Draft agenda",
                      "Talking points",
                      "Questions to review",
                      "Suggested structure",
                    ].map((item) => (
                      <div
                        key={item}
                        className="px-4 py-3 bg-muted rounded-lg text-sm font-medium"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Editable inside Calendar.
                  </p>
                </div>
              </div>

              {/* Feature 5 */}
              <div className="p-8 bg-background rounded-xl border-2 border-border">
                <div className="flex items-start gap-4 mb-4">
                  <h3 className="text-2xl font-bold">
                    5. Post-Meeting Follow-Up
                  </h3>
                </div>
                <div className="ml-12 space-y-4">
                  <p className="text-lg">After the meeting, AI generates a:</p>
                  <ul className="space-y-2">
                    {[
                      "Summary",
                      "Task list",
                      "Decision record",
                      "Next-steps document",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    Automatically sent to attendees (optional).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2
              className="text-3xl md:text-4xl font-bold mb-12"
              style={{ fontFamily: "var(--font-futura)" }}
            >
              11 — Metrics & Success Criteria
            </h2>

            <div className="space-y-8">
              {/* North Star Metric */}
              <div className="p-8 bg-primary/5 rounded-xl border-2 border-primary">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <Target className="w-6 h-6 text-primary" />
                  North Star Metric
                </h3>
                <p className="text-2xl font-bold text-primary mb-2">
                  "Preparation Time Saved per Meeting"
                </p>
                <p className="text-muted-foreground">Measured through:</p>
                <ul className="mt-3 space-y-2">
                  <li>• Reduction in time spent switching apps</li>
                  <li>
                    • Time spent reviewing summaries vs searching manually
                  </li>
                </ul>
              </div>

              {/* Supporting KPIs */}
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <TrendingUp className="w-6 h-6" />
                  Supporting KPIs
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Feature adoption (% of events using AI Prep)",
                    "7-day retention of feature",
                    "Document open-through rate",
                    "Pre-meeting summary engagement",
                    "Task extraction usage",
                    "Decrease in meeting duration (optional)",
                    "Increase in meeting satisfaction (survey)",
                  ].map((kpi) => (
                    <div
                      key={kpi}
                      className="p-4 bg-muted/30 rounded-lg text-sm"
                    >
                      {kpi}
                    </div>
                  ))}
                </div>
              </div>

              {/* Experimentation */}
              <div>
                <h3 className="text-xl font-bold mb-4">
                  Experimentation (A/B Test)
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-muted/30 rounded-lg">
                    <p className="font-semibold mb-2">Control</p>
                    <p className="text-sm text-muted-foreground">
                      Standard Google Calendar
                    </p>
                  </div>
                  <div className="p-6 bg-primary/5 rounded-lg border-2 border-primary">
                    <p className="font-semibold mb-2">Variant</p>
                    <p className="text-sm text-muted-foreground">
                      AI Prep panel
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="font-semibold mb-2">Measure:</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Engagement",
                      "Task completion",
                      "Pre-read compliance",
                      "Meeting outcomes",
                    ].map((item) => (
                      <span
                        key={item}
                        className="px-3 py-2 bg-background rounded-lg text-sm border border-border"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2
              className="text-3xl md:text-4xl font-bold mb-12"
              style={{ fontFamily: "var(--font-futura)" }}
            >
              12 — Roadmap
            </h2>

            <div className="space-y-6">
              <div className="p-6 bg-background rounded-xl border-2 border-border">
                <h3 className="text-xl font-bold mb-2">
                  V1 — Core Intelligence
                </h3>
                <p className="text-sm text-muted-foreground mb-4">0–3 Months</p>
                <ul className="space-y-2">
                  {[
                    "Pre-meeting summary",
                    "Task extraction",
                    "Related docs surfacing",
                    "Draft agenda builder",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-background rounded-xl border-2 border-border">
                <h3 className="text-xl font-bold mb-2">V2 — Team Workflows</h3>
                <p className="text-sm text-muted-foreground mb-4">3–6 Months</p>
                <ul className="space-y-2">
                  {[
                    "Meeting auto-notes",
                    "Follow-up tasks",
                    "Smart reminders",
                    "Integration into Google Meet",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-background rounded-xl border-2 border-border">
                <h3 className="text-xl font-bold mb-2">
                  V3 — Autonomous Calendar
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  6–12 Months
                </p>
                <ul className="space-y-2">
                  {[
                    "Predictive agenda suggestions",
                    "Meeting duplication detection",
                    'Calendar optimization ("cancel unnecessary meetings")',
                    "Cross-tool integrations (Slack, Notion, Asana)",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2
              className="text-3xl md:text-4xl font-bold mb-8"
              style={{ fontFamily: "var(--font-futura)" }}
            >
              14 — Impact
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed mb-8">
              AI Meeting Prep turns Google Calendar into a proactive partner
              that:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Saves time",
                "Improves meeting quality",
                "Ensures alignment",
                "Increases productivity",
                "Reduces context-switching",
                "Boosts Workspace retention",
              ].map((impact) => (
                <div
                  key={impact}
                  className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="font-medium">{impact}</span>
                </div>
              ))}
            </div>
            <p className="text-xl font-semibold mt-8 text-primary">
              Google Calendar becomes more than a scheduling app—it becomes a
              meeting intelligence hub.
            </p>
          </div>
        </div>
      </section>

      {/* Reflection Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2
              className="text-3xl md:text-4xl font-bold mb-8"
              style={{ fontFamily: "var(--font-futura)" }}
            >
              15 — Reflection
            </h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>This project taught me how to:</p>
              <ul className="space-y-3 ml-6">
                {[
                  "Connect high-level user pain to workflow automation",
                  "Understand breadth and depth of AI augmentation opportunities",
                  "Balance individual vs team needs",
                  "Focus features around measurable productivity gains",
                  "Create an AI architecture grounded in real user behavior",
                  "Blend product strategy with UX simplicity",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xl font-semibold pt-4">
                AI Meeting Prep reflects my approach to building
                assistant-driven products that work invisibly, intuitively, and
                contextually—without overwhelming the user.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
