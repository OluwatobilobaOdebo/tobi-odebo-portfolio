"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TaxCaseStudy() {
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

      {/* Overview Section - Green/Money Theme */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-800 via-green-700 to-teal-800 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <h2
              className="font-black mb-6 text-white leading-[0.95]"
              style={{
                fontFamily: "var(--font-futura)",
                fontSize: "clamp(40px, 12vw, 120px)",
              }}
            >
              AI Tax Assistant
            </h2>
            <div className="border-l-4 border-white pl-4 mb-12">
              <p
                className="font-bold text-white"
                style={{
                  fontFamily: "var(--font-futura)",
                  fontSize: "clamp(28px, 6vw, 48px)",
                }}
              >
                Zero-to-One Concept
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
                I've watched friends panic every April. They stare at TurboTax
                screens asking "What's Box 12?" and Google frantically, never
                quite sure if they're doing it right. The anxiety isn't about
                the tax itself — it's the fear of messing up something important
                and not knowing until it's too late.
              </p>

              <p className="leading-relaxed" style={{ fontSize: "22px" }}>
                Current tax software hasn't solved this. It just digitized the
                same confusing forms. You still need to know what to enter and
                where. If you miss a deduction, too bad — the software won't
                catch it for you.
              </p>

              <p className="leading-relaxed" style={{ fontSize: "22px" }}>
                This concept explores what tax prep could look like with AI that
                actually understands your documents, asks follow-up questions
                like a good accountant would, and explains things in plain
                English. Not a smarter form — a genuine assistant.
              </p>

              <p className="leading-relaxed" style={{ fontSize: "22px" }}>
                I designed this for three types of people:
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
                    Everyday Filers (Primary Persona)
                  </h4>
                  <p
                    className="leading-relaxed text-white/80"
                    style={{ fontSize: "22px" }}
                  >
                    Individuals filing a standard W-2 return who often feel
                    intimidated by tax terminology. They want a simple,
                    trustworthy assistant that reduces confusion and increases
                    confidence in the accuracy of their return.
                  </p>
                </li>

                <li>
                  <h4
                    className="font-bold text-white mb-2"
                    style={{ fontSize: "22px" }}
                  >
                    Self-Employed & Independent Contractors
                  </h4>
                  <p
                    className="leading-relaxed text-white/80"
                    style={{ fontSize: "22px" }}
                  >
                    Gig workers, freelancers, and sole proprietors who manage
                    varied income sources, deductions, and expenses. They need
                    automated categorization, real-time deduction suggestions,
                    and help keeping records throughout the year — not just at
                    filing time.
                  </p>
                </li>

                <li>
                  <h4
                    className="font-bold text-white mb-2"
                    style={{ fontSize: "22px" }}
                  >
                    Small Business Owners
                  </h4>
                  <p
                    className="leading-relaxed text-white/80"
                    style={{ fontSize: "22px" }}
                  >
                    Owners who manage payroll, receipts, business expenses,
                    depreciation, and quarterly payments. They need a
                    centralized, intelligent system that reduces complexity,
                    minimizes mistakes, and helps improve tax outcomes.
                  </p>
                </li>
              </ul>

              <p className="leading-relaxed" style={{ fontSize: "22px" }}>
                TurboTax and H&R Block dominate the market, but they're still
                just fancy form-fillers. They ask you questions — they don't
                figure things out for you. There's a gap here for something that
                feels less like software and more like having a friend who
                happens to be a CPA.
              </p>

              <p className="leading-relaxed" style={{ fontSize: "22px" }}>
                The goal: make tax season feel like a 20-minute task instead of
                a weekend-long anxiety spiral.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunity Canvas Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Opportunity Canvas Title */}
            <h2
              className="font-black mb-16 text-[#1a1a1a]"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(48px, 8vw, 72px)",
                fontStyle: "italic",
              }}
            >
              Opportunity Canvas
            </h2>

            {/* 1. Problem Statement */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                1. PROBLEM STATEMENT
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <p>
                  Most people don't procrastinate on taxes because they're lazy.
                  They procrastinate because the process feels like a trap — one
                  wrong number and you might get audited, or miss out on money
                  you're owed.
                </p>

                <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                  <li>"What does Box 14 mean?"</li>
                  <li>"Am I supposed to have a 1099 from that side gig?"</li>
                  <li>"Can I write off my home office or not?"</li>
                  <li>"Why is my refund less than last year?"</li>
                </ul>

                <p>
                  Today's tax software expects you to already know the answers.
                  It doesn't help you figure things out — it just asks you to
                  fill in blanks.
                </p>

                <p className="font-semibold">
                  What if the software could actually read your W-2, understand
                  what it says, and explain what it means for you?
                </p>
              </div>
            </div>

            {/* 2. Target Users & Customers */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                2. TARGET USERS & CUSTOMERS
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <div>
                  <p className="font-semibold mb-2">Primary Users</p>
                  <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                    <li>Individuals filing simple W-2 returns</li>
                    <li>
                      Self-employed workers (freelancers, ride-share drivers,
                      gig workers)
                    </li>
                    <li>
                      Small business owners managing multiple expenses and
                      documents
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-2">Secondary Users</p>
                  <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                    <li>Bookkeepers</li>
                    <li>Financial coaches</li>
                    <li>
                      Tax professionals using the product for client intake
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3. User Goals & Needs */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                3. USER GOALS & NEEDS
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <p>What people actually say they want:</p>
                <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                  <li>"Just tell me what I owe or what I'm getting back"</li>
                  <li>"Don't make me Google every other question"</li>
                  <li>
                    "I took a photo of the receipt — why do I have to type it
                    in?"
                  </li>
                  <li>"Am I missing something? How would I even know?"</li>
                </ul>

                <p className="font-semibold mt-6 text-center text-lg">
                  The real ask: "I want to feel like someone who knows what
                  they're doing checked my work."
                </p>
              </div>
            </div>

            {/* 4. Value Proposition */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                4. VALUE PROPOSITION
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <p>What this does differently:</p>
                <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                  <li>
                    You upload a W-2, it reads the numbers for you — no typing
                  </li>
                  <li>
                    You ask "can I write this off?" and get a straight answer,
                    not a link to an IRS page
                  </li>
                  <li>
                    It notices patterns ("you drove 8,000 miles for work —
                    that's a $4,800 deduction")
                  </li>
                  <li>It tells you what things mean, not just what to enter</li>
                </ul>

                <p className="font-semibold mt-6 text-center text-lg">
                  The goal: finish your taxes feeling like you understood what
                  happened.
                </p>
              </div>
            </div>

            {/* 5. Business Opportunity */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                5. BUSINESS OPPORTUNITY
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <div>
                  <p className="font-semibold mb-2">Market Size</p>
                  <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                    <li>~160M U.S. taxpayers file returns annually</li>
                    <li>57M+ are self-employed</li>
                    <li>
                      Tax software is a $12B market, growing with the rise of
                      gig work
                    </li>
                    <li>
                      The audit-support and compliance markets add additional
                      revenue potential
                    </li>
                  </ul>
                </div>

                <div className="mt-6">
                  <p className="font-semibold mb-2">Revenue Models</p>
                  <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                    <li>
                      Freemium: Simple returns free, advanced features paid
                    </li>
                    <li>
                      Subscription for year-round financial & tax coaching
                    </li>
                    <li>Transaction fee for filing</li>
                    <li>B2B licensing for tax preparers and fintechs</li>
                  </ul>
                </div>

                <div className="mt-6">
                  <p className="font-semibold mb-2">Strategic Advantages</p>
                  <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                    <li>AI reduces reliance on human agents</li>
                    <li>Year-round usage increases retention</li>
                    <li>Strong differentiation from legacy tax tools</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Key Statistics */}
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
                  160M
                </span>
                <span
                  className="text-[#1a1a1a] font-semibold"
                  style={{ fontSize: "16px", maxWidth: "200px" }}
                >
                  U.S. taxpayers file returns annually
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
                  $12B
                </span>
                <span
                  className="text-[#1a1a1a] font-semibold"
                  style={{ fontSize: "16px", maxWidth: "200px" }}
                >
                  tax software market size
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
                  57M+
                </span>
                <span
                  className="text-[#1a1a1a] font-semibold"
                  style={{ fontSize: "16px", maxWidth: "200px" }}
                >
                  self-employed workers in the U.S.
                </span>
              </div>
            </div>

            {/* 6. Assumptions & Risks */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                6. ASSUMPTIONS & RISKS
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <div>
                  <p className="font-semibold mb-2">Key Assumptions</p>
                  <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                    <li>
                      Users will trust an AI with sensitive financial data
                    </li>
                    <li>
                      AI summarization and categorization will be accurate
                      enough to reduce manual work
                    </li>
                    <li>
                      Tax rules can be reliably encoded, validated, and updated
                    </li>
                    <li>
                      Users prefer conversational interfaces over traditional
                      form-based flows
                    </li>
                  </ul>
                </div>

                <div className="mt-6">
                  <p className="font-semibold mb-2">Risks</p>
                  <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                    <li>Incorrect AI guidance could create liability</li>
                    <li>Trust and safety concerns around data privacy</li>
                    <li>
                      Regulatory complexity across states and business types
                    </li>
                    <li>Need for rigorous auditability and transparency</li>
                  </ul>
                </div>

                <p className="mt-6">
                  Risk mitigation requires human verification flows, clear
                  disclaimers, and grounding AI outputs in verified tax rules.
                </p>
              </div>
            </div>

            {/* 7. Success Indicators */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                7. SUCCESS INDICATORS
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <p>How we'd know it's working:</p>
                <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                  <li>
                    Average filing time under 25 minutes (vs. 3+ hours industry
                    avg)
                  </li>
                  <li>80%+ of users upload at least one document</li>
                  <li>Users find $200+ more in deductions vs. DIY</li>
                  <li>NPS above 50 (TurboTax is around 20)</li>
                  <li>People come back next year without a promo code</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Use Cases Title */}
            <h2
              className="font-black mb-16 text-[#1a1a1a]"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(48px, 8vw, 72px)",
                fontStyle: "italic",
              }}
            >
              Use Cases
            </h2>

            {/* Use Case 1 */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                1. "I GOT MY W-2, NOW WHAT?"
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <p>
                  User snaps a photo of their W-2. The AI reads it, pulls out
                  the numbers, and says: "Got it — you earned $67,400 at Acme
                  Corp, and they withheld $8,200 in federal taxes. Looking good
                  so far."
                </p>
                <p>
                  No typing. No squinting at Box 12 codes. If something's
                  missing, the AI asks for it specifically: "I don't see state
                  income here — did you work in a state with no income tax, or
                  is there another page?"
                </p>
              </div>
            </div>

            {/* Use Case 2 */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                2. "WHERE DID ALL MY MONEY GO?"
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <p>
                  Freelancer connects their bank account. The AI scans
                  transactions and starts sorting: "Looks like you spent $340 at
                  Staples and $89 at Best Buy — office supplies? And these 47
                  Uber rides... were those for work or personal?"
                </p>
                <p>
                  Instead of digging through 12 months of statements in April,
                  everything's already organized. The AI even catches things you
                  forgot: "You paid $1,200 for that online course in March —
                  that's probably deductible as professional development."
                </p>
              </div>
            </div>

            {/* Use Case 3 */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                3. "CAN I WRITE THIS OFF?"
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <p>
                  User asks: "I bought a laptop for work but sometimes my kids
                  use it. Can I still deduct it?"
                </p>
                <p>
                  AI responds: "Yes, but only the portion used for work. If you
                  use it 70% for business, you can deduct 70% of the cost. Based
                  on the $1,400 you spent at Apple in September, that'd be about
                  $980."
                </p>
                <p>
                  No more Googling "laptop tax deduction reddit" at midnight.
                </p>
              </div>
            </div>

            {/* Use Case 4 */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                4. "AM I MISSING ANYTHING?"
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <p>
                  Before you file, the AI does a final check: "I noticed you
                  work from home but didn't claim a home office deduction. Your
                  apartment is 850 sq ft and your desk area is about 100 sq ft —
                  that's a $600 deduction you're leaving on the table. Want to
                  add it?"
                </p>
                <p>
                  It's not just filling in forms. It's actively looking out for
                  you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personas Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Personas Title */}
            <h2
              className="font-black mb-16 text-[#1a1a1a]"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(48px, 8vw, 72px)",
                fontStyle: "italic",
              }}
            >
              Personas
            </h2>

            {/* Persona 1: Melissa */}
            <div className="mb-16 p-8 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-emerald-800 mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                1. "MELISSA" — EVERYDAY FILER
              </h3>

              <div
                className="space-y-4 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <p>
                    <span className="font-semibold">Age:</span> 29
                  </p>
                  <p>
                    <span className="font-semibold">Occupation:</span> Customer
                    support representative
                  </p>
                  <p>
                    <span className="font-semibold">Income Type:</span> W-2
                    employee
                  </p>
                  <p>
                    <span className="font-semibold">Tech Comfort:</span>{" "}
                    Moderate
                  </p>
                  <p>
                    <span className="font-semibold">Tax Complexity:</span> Low
                  </p>
                </div>

                <div>
                  <p className="font-semibold mb-2">Motivations</p>
                  <ul className="space-y-1 ml-6 text-[#4a4a4a]">
                    <li>File quickly and accurately</li>
                    <li>Avoid stressful tax jargon</li>
                    <li>Understand why certain values matter</li>
                    <li>Minimize the risk of making a mistake</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-2">Pain Points</p>
                  <ul className="space-y-1 ml-6 text-[#4a4a4a]">
                    <li>Confusion around basic tax terminology</li>
                    <li>Fear of missing important fields</li>
                    <li>Overwhelmed by long, form-based interfaces</li>
                    <li>Distrust in generic "wizard" flows</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-2">Needs</p>
                  <ul className="space-y-1 ml-6 text-[#4a4a4a]">
                    <li>Conversational explanations in plain English</li>
                    <li>Automatic extraction of W-2 information</li>
                    <li>Confidence that the return is correct</li>
                    <li>Clear guidance on refund expectations</li>
                  </ul>
                </div>

                <p className="italic text-emerald-700 mt-6 text-lg font-medium">
                  "I clicked 'not sure' like five times. That can't be good,
                  right?"
                </p>
              </div>
            </div>

            {/* Persona 2: Derrick */}
            <div className="mb-16 p-8 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-emerald-800 mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                2. "DERRICK" — GIG WORKER / SELF-EMPLOYED
              </h3>

              <div
                className="space-y-4 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <p>
                    <span className="font-semibold">Age:</span> 34
                  </p>
                  <p>
                    <span className="font-semibold">Occupation:</span>{" "}
                    Freelancer & rideshare driver
                  </p>
                  <p>
                    <span className="font-semibold">Income Type:</span> 1099s +
                    multiple expense categories
                  </p>
                  <p>
                    <span className="font-semibold">Tech Comfort:</span> High
                  </p>
                  <p>
                    <span className="font-semibold">Tax Complexity:</span>{" "}
                    Medium–High
                  </p>
                </div>

                <div>
                  <p className="font-semibold mb-2">Motivations</p>
                  <ul className="space-y-1 ml-6 text-[#4a4a4a]">
                    <li>Maximize deductions</li>
                    <li>Reduce manual bookkeeping</li>
                    <li>Avoid surprises at tax time</li>
                    <li>Simplify quarterly payments</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-2">Pain Points</p>
                  <ul className="space-y-1 ml-6 text-[#4a4a4a]">
                    <li>Difficult tracking expenses year-round</li>
                    <li>Unsure which items qualify as write-offs</li>
                    <li>Manual categorization takes too much time</li>
                    <li>
                      Often pays more tax than necessary due to missed
                      deductions
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-2">Needs</p>
                  <ul className="space-y-1 ml-6 text-[#4a4a4a]">
                    <li>Automatic expense categorization</li>
                    <li>Receipt scanning and OCR</li>
                    <li>Smart deduction recommendations</li>
                    <li>Estimated tax calculations throughout the year</li>
                  </ul>
                </div>

                <p className="italic text-emerald-700 mt-6 text-lg font-medium">
                  "I have receipts everywhere — my email, my photos, a shoebox.
                  Come tax time, I just guess."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRD Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* PRD Title */}
            <h2
              className="font-black mb-16 text-[#1a1a1a]"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(48px, 8vw, 72px)",
                fontStyle: "italic",
              }}
            >
              PRD
            </h2>

            {/* 1. Problem Statement */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                1. PROBLEM STATEMENT
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <p>
                  People dread tax season not because taxes are hard, but
                  because the tools make them feel stupid. You upload a W-2 and
                  still have to manually type in every number. You're asked
                  about deductions you've never heard of. One wrong checkbox and
                  you're scared of an audit.
                </p>
                <p>
                  The core problem: tax software treats users like data entry
                  clerks, not people who need help understanding what's
                  happening with their money.
                </p>
              </div>
            </div>

            {/* 2. Goals */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                2. GOALS
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                  <li>Cut filing time from hours to under 30 minutes</li>
                  <li>
                    Eliminate "I don't know" clicks — the AI should figure it
                    out
                  </li>
                  <li>
                    Catch deductions users typically miss (home office, mileage,
                    equipment)
                  </li>
                  <li>
                    Make users feel confident, not anxious, when they hit submit
                  </li>
                </ul>
              </div>
            </div>

            {/* 4. Key Features */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                3. KEY FEATURES
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                  <li>
                    Document Upload + Auto-Extraction (W-2, 1099, receipts)
                  </li>
                  <li>
                    Smart Expense Categorization for gig workers and small
                    businesses
                  </li>
                  <li>
                    Conversational Tax Guidance with plain-language explanations
                  </li>
                  <li>
                    Personalized Deduction Suggestions based on user profile
                  </li>
                  <li>Error Checking & Audit Risk Alerts</li>
                  <li>Full Return Generation for federal & state filing</li>
                </ul>
              </div>
            </div>

            {/* 5. User Stories */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                4. USER STORIES
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <div className="border-l-2 border-emerald-500 pl-6 mb-6">
                  <p className="font-semibold text-emerald-700 mb-2">
                    Everyday Filer
                  </p>
                  <p className="text-[#4a4a4a]">
                    As a W-2 employee, I want to upload my forms and have them
                    filled in automatically so I don't make mistakes.
                  </p>
                </div>

                <div className="border-l-2 border-emerald-500 pl-6 mb-6">
                  <p className="font-semibold text-emerald-700 mb-2">
                    Gig Worker
                  </p>
                  <p className="text-[#4a4a4a]">
                    As a freelancer, I want my expenses categorized
                    automatically so I can maximize deductions without manual
                    sorting.
                  </p>
                </div>

                <div className="border-l-2 border-emerald-500 pl-6">
                  <p className="font-semibold text-emerald-700 mb-2">
                    Small Business Owner
                  </p>
                  <p className="text-[#4a4a4a]">
                    As a business owner, I want clear guidance on what qualifies
                    as a deduction so I can file confidently.
                  </p>
                </div>
              </div>
            </div>

            {/* 6. Acceptance Criteria */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                5. ACCEPTANCE CRITERIA
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                  <li>OCR extraction accuracy ≥ 95% for standard tax forms</li>
                  <li>Expense categorization accuracy ≥ 85% in V1</li>
                  <li>AI guidance must cite rules or explain reasoning</li>
                  <li>No hallucinated tax advice (grounding required)</li>
                  <li>Filing output must pass IRS validation checks</li>
                </ul>
              </div>
            </div>

            {/* 7. Dependencies */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                6. DEPENDENCIES
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                  <li>OCR engine & document parsing</li>
                  <li>Secure data storage + encryption</li>
                  <li>IRS form libraries & schema updates</li>
                  <li>
                    Bank transaction API integrations (Plaid, Stripe, etc.)
                  </li>
                </ul>
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
                V1 — CORE FILING ASSISTANT (0–3 MONTHS)
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                  <li>Document upload + OCR extraction (W-2, 1099)</li>
                  <li>Conversational Q&A for simple returns</li>
                  <li>Basic deduction suggestions</li>
                  <li>Error checking + audit warnings</li>
                  <li>Federal return generation</li>
                </ul>
                <p className="font-semibold mt-4">
                  Goal: A W-2 employee finishes their return in under 20
                  minutes.
                </p>
              </div>
            </div>

            {/* V2 */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                V2 — SELF-EMPLOYED & GIG WORKER EXPANSION (3–6 MONTHS)
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                  <li>
                    Bank account integration + auto-expense categorization
                  </li>
                  <li>Receipt capture + year-round tracking</li>
                  <li>Quarterly tax estimation + reminders</li>
                  <li>Personalized deduction profiles</li>
                </ul>
                <p className="font-semibold mt-4">
                  Goal: A freelancer stops dreading tax season.
                </p>
              </div>
            </div>

            {/* V3 */}
            <div className="mb-16">
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#1a1a1a] mb-6"
                style={{ fontSize: "14px", letterSpacing: "0.2em" }}
              >
                V3 — SMALL BUSINESS & PRO-LEVEL FEATURES (6–12 MONTHS)
              </h3>

              <div
                className="space-y-6 text-[#1a1a1a]"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                <ul className="space-y-2 ml-6 text-[#4a4a4a]">
                  <li>
                    Multi-document ingestion (contracts, payroll, depreciation)
                  </li>
                  <li>Smart entity classification</li>
                  <li>Scenario planning ("What if I buy equipment?")</li>
                  <li>State returns + multi-state support</li>
                  <li>Export for accountants</li>
                </ul>
                <p className="font-semibold mt-4">
                  Goal: A small business owner files without needing an
                  accountant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* View Next Case Study Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto flex justify-center">
            <Link
              href="/google-calendar"
              className="px-8 py-4 border-2 border-emerald-700 text-emerald-700 font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-emerald-700 hover:text-white cursor-pointer"
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
