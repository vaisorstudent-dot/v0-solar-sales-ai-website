"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Clock,
  Phone,
  Database,
  Moon,
  Zap,
  RefreshCw,
  CheckCircle,
  Calendar,
  BarChart3,
  Shield,
  X,
  Check,
  ChevronDown,
  ShieldCheck,
  Scale,
  Layers,
  Target,
  MessageSquare,
  User,
  ArrowRight,
  Eye,
} from "lucide-react"

export default function Page() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)

  const problemCards = [
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Speed-to-Lead Gaps",
      description: "Leads go cold in the first 5 minutes while your setter is on another call",
    },
    {
      icon: <Phone className="w-8 h-8 text-blue-600" />,
      title: "Missed Call Black Holes",
      description: "Missed calls that never get called back systematically or sit for hours",
    },
    {
      icon: <Database className="w-8 h-8 text-blue-600" />,
      title: "Dead Lead Graveyards",
      description: "Thousands of 'dead' leads sitting in your CRM that you already paid for",
    },
    {
      icon: <Moon className="w-8 h-8 text-blue-600" />,
      title: "After-Hours Leakage",
      description: "After-hours inquiries that wait until tomorrow (when they've talked to three competitors)",
    },
  ]

  const toolkitBurdens = [
    "Design the qualification flows",
    "Write and test the scripts",
    "Run the campaigns daily",
    "Analyze what's working",
    "Tune and optimize constantly",
  ]

  const ourApproach = [
    "We design flows based on solar buyer psychology",
    "We run campaigns on your behalf",
    "We tune based on your data",
    "We're measured on kept appointments and recovered revenue",
  ]

  const solutionFeatures = [
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Rapid Callbacks",
      description: "We call back new leads within minutes using AI voice + SMS",
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-blue-600" />,
      title: "Systematic Follow-Up",
      description: "We follow up on missed calls systematically, not randomly",
    },
    {
      icon: <Database className="w-8 h-8 text-blue-600" />,
      title: "Dead Lead Revival",
      description: "We run time-boxed campaigns on aged/dead leads in your CRM",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
      title: "Solar-Specific Qualification",
      description: "We qualify prospects using solar buyer logic, not generic scripts",
    },
    {
      icon: <Calendar className="w-8 h-8 text-blue-600" />,
      title: "Direct Booking",
      description: "We book appointments directly into your calendar with confirmation",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      title: "Continuous Optimization",
      description: "We tune and optimize based on your actual conversion data",
    },
  ]

  const whatWeAreNot = [
    {
      title: "Not a lead generation company",
      description: "We don't sell leads. We help you capture more from the ones you already buy.",
    },
    {
      title: "Not a replacement for your closers or setters",
      description: "We augment your team by handling intake and follow-up. Your reps focus on closing.",
    },
    {
      title: "Not a cold-calling system",
      description: "We work opt-in leads only. No list scraping, no spam.",
    },
    {
      title: "Not a 'set it and forget it' magic box",
      description: "We actively manage, monitor, and optimize your campaigns daily.",
    },
    {
      title: "Not a generic AI chatbot",
      description: "This is solar-specific intake built by people who ran solar sales teams.",
    },
  ]

  const greatFor = [
    "U.S. residential solar installers and sales orgs with roughly 10–50 people",
    "Teams that spend real money on Facebook/Instagram, Google/LSA, and purchased leads",
    "Companies that care about CAC, follow-up speed, and getting more installs from the same ad spend",
    "Sales leaders looking to protect their pipeline without hiring more setters",
    "Teams that have tried 'AI voice tools' and found them too complex to set up or maintain",
  ]

  const notRightFit = [
    "Very small shops doing only word-of-mouth or a handful of leads per month",
    "Teams that want to replace their closers and setters instead of supporting them",
    "Companies looking for a solution that requires zero human involvement",
    "Organizations seeking guaranteed percentage increases without testing",
  ]

  const compliancePractices = [
    "Reasonable calling hours (you set the windows)",
    "Clear caller identification",
    "Easy opt-out honored immediately",
    "No list scraping or cold databases",
    "Regular compliance reviews included in setup",
  ]

  const faqs = [
    {
      question: "How is this different from hiring more SDRs or setters?",
      answer:
        "Setters are expensive ($40-60K + benefits) and inconsistent. They get sick, take lunch breaks, and can't call 100 leads in an hour. They also vary in quality—some are great, many are mediocre. We handle the high-volume, low-complexity intake work at scale. Your human setters can focus on relationship building, objection handling, and hand-holding for leads that need a personal touch. Most teams don't reduce headcount—they just get 2-3x more output from the same team by letting us handle the grunt work.",
    },
    {
      question: "What if we already have Aloware/Aircall/another tool?",
      answer:
        "Perfect! Those are powerful platforms, and we can layer on top of them. Think of those tools as the infrastructure (like having a phone system), and SolarSales AI as the specialized team that actually runs your campaigns using that infrastructure. We can work with your existing tech stack, or use our own infrastructure—whatever makes sense for your setup. The key is you get a solar-specialized team managing it, not just access to software.",
    },
    {
      question: "Do you work with cold leads or purchased lists?",
      answer:
        "No. We work exclusively with opt-in leads from your web forms, Google LSA campaigns, Facebook/Instagram ads, purchased leads that consented to contact, inbound calls that went to voicemail, and any source where the prospect opted in. We follow TCPA-safe practices and don't touch cold lists, scraped data, or any non-consensual outreach. This keeps you compliant and protects your brand.",
    },
    {
      question: "Can we start with just dead leads?",
      answer:
        "Yes—that's exactly what the Dead Leads Sprint is designed for. It's the perfect low-risk entry point. We run a 2-4 week campaign on leads you've already written off. You see appointments get booked from 'dead' leads, get call recordings, and see conversion data. If the ROI is clear, you can expand to ongoing Revenue Protection. If not, you've at least recovered some value from buried pipeline with minimal disruption. Zero obligation to continue beyond the sprint.",
    },
    {
      question: "What happens to our existing setter team?",
      answer:
        "They become more productive and less burned out. Instead of grinding through unqualified leads, chasing missed callbacks, and doing repetitive qualification calls, they work appointments we've already qualified and scheduled. Most teams report their setters are happier (higher-quality conversations) and more effective (better conversion rates on pre-qualified leads). We've never seen a team reduce setter headcount—they just get dramatically better ROI from the team they have.",
    },
    {
      question: "What CRMs do you work with?",
      answer:
        "We integrate with most major solar CRMs including HubSpot, Salesforce, ServiceTitan, JobNimbus, Podium, and custom or proprietary systems (if you have an API or export capability). During the Lead Flow Audit, we'll assess your current setup and confirm the best integration approach. In most cases, we can be operational within a week regardless of your CRM.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="text-xl font-bold text-gray-900">SolarSales AI</div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              About
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Pricing
            </a>
            <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </a>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 text-sm font-medium rounded-lg transition-all duration-200">
            Schedule Audit
          </Button>
        </div>
      </header>

      <main className="w-full">
        {/* Hero Section with Visual Element */}
        <section className="relative py-20 sm:py-28 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute top-10 right-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Turn More of Your Paid Leads Into Kept Appointments
                </h1>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  A managed intake and revival service for U.S. residential solar companies. We use AI voice + SMS to
                  systematically work your new leads, missed calls, and dead CRM leads—so you capture more value from
                  lead spend you already have.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Done-for-you service. We run the campaigns, optimize the flows, and are measured on appointments that
                  show.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button className="bg-blue-600 hover:bg-blue-700 hover:scale-105 text-white px-8 py-3 text-base font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl">
                    Schedule a Lead Flow Audit
                  </Button>
                  <Button
                    variant="outline"
                    className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 text-base font-medium bg-transparent"
                    onClick={() => {
                      document.getElementById("problem")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    See how it works ↓
                  </Button>
                </div>

                <div className="flex flex-wrap gap-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-medium text-gray-700">Opt-In Leads Only</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Scale className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-medium text-gray-700">TCPA-Safe Practices</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Layers className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-medium text-gray-700">Works With Your Stack</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-200 max-w-md mx-auto">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
                    <MessageSquare className="w-6 h-6 text-blue-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Dead Lead Revival</div>
                      <div className="text-xs text-gray-500">3-month old lead → Booked</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-start">
                      <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]">
                        <p className="text-sm text-gray-900">
                          Hi Maria, this is Alex from Sunrise Solar following up on your inquiry from a few months back.
                          Still interested in learning about solar savings?
                        </p>
                        <p className="text-xs text-gray-500 mt-1">2:34 PM</p>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <div className="bg-blue-600 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%]">
                        <p className="text-sm text-white">Yes actually! We got busy but still thinking about it</p>
                        <p className="text-xs text-blue-200 mt-1">2:41 PM</p>
                      </div>
                    </div>

                    <div className="flex justify-start">
                      <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]">
                        <p className="text-sm text-gray-900">
                          Great! I can get you on the calendar for a quick 15-min consultation. Does tomorrow at 3pm or
                          Thursday at 11am work better?
                        </p>
                        <p className="text-xs text-gray-500 mt-1">2:42 PM</p>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <div className="bg-blue-600 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%]">
                        <p className="text-sm text-white">Thursday works</p>
                        <p className="text-xs text-blue-200 mt-1">2:44 PM</p>
                      </div>
                    </div>

                    <div className="flex justify-start">
                      <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]">
                        <p className="text-sm text-gray-900">
                          Perfect, you're confirmed for Thursday at 11am. You'll get a calendar invite shortly. Talk
                          soon!
                        </p>
                        <p className="text-xs text-gray-500 mt-1">2:45 PM</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-200 text-center">
                    <p className="text-xs text-gray-600">
                      A real dead lead revival — 3-month-old 'no response' lead booked in under 15 minutes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section - Light warm gray background */}
        <section id="problem" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Where Your Pipeline Is Leaking Revenue</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                You're spending thousands on Meta, Google LSA, lead vendors, and canvassing. The leads are coming in.
                But between the form submission and the sales calendar, you're losing:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {problemCards.map((card, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
                >
                  <div className="mb-4">{card.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-gray-600">{card.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12 space-y-4">
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                These aren't problems you can solve by working harder. Your team is already maxed out. You need a
                systematic layer that handles intake perfectly, every time.
              </p>
              <p className="text-lg text-gray-900 font-semibold">That's what we built.</p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Not Just Buy an AI Phone Tool?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Tools like Aloware, Aircall, Air.ai, and others offer powerful AI + telephony platforms. But they're
                toolkits. Someone on your team still has to:
              </p>
            </div>
            <div className="max-w-2xl mx-auto mb-12">
              <ul className="space-y-3">
                {toolkitBurdens.map((burden, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{burden}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-12"></div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SolarSales AI is different</h3>
              <p className="text-lg text-gray-600 mb-8">
                We're the solar-specialized team + playbook that does all of that for you:
              </p>
            </div>
            <div className="max-w-2xl mx-auto mb-12">
              <ul className="space-y-3">
                {ourApproach.map((approach, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{approach}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg max-w-3xl mx-auto mb-8">
              <p className="text-lg text-gray-900 font-medium">
                You don't need another tool for your team to figure out. You need someone to actually run your intake
                and dead leads the right way, every day.
              </p>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-8"></div>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-gray-700">
                The DIY toolkit approach means weeks of configuration, script testing, and troubleshooting before you
                see results. With us, you're operational in days — not months.
              </p>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20 bg-gradient-to-br from-blue-50 via-white to-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-4">Solar Revenue Capture Program</h2>
              <p className="text-xl text-gray-600">Two Ways to Start</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto mb-16">
              {/* DLS - 3 columns, larger */}
              <div className="lg:col-span-3 relative">
                <div className="absolute -top-4 left-8 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-5 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg z-10">
                  <Target className="w-4 h-4" />
                  Recommended Starting Point
                </div>
                <div className="bg-white border-4 border-amber-500 rounded-2xl p-10 h-full shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-200">
                  <div className="flex items-center gap-3 mb-4 mt-2">
                    <Zap className="w-10 h-10 text-amber-500" />
                    <h3 className="text-3xl font-bold text-gray-900">Dead Leads Sprint (DLS)</h3>
                  </div>
                  <p className="text-sm font-semibold text-amber-600 uppercase tracking-wide mb-4">
                    Low-risk entry point
                  </p>
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                    We run a 2–4 week sprint on your aged/dead leads (3+ months old, marked "no response", or stale).
                    You see real appointments booked from leads you'd already written off. No disruption to current
                    operations. No long-term commitment.
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">2–4 week time-boxed sprint</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">We handle list pull, flow design, and campaign execution</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">
                        Weekly reporting (calls made, conversations, appointments booked)
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Zero obligation to continue after sprint ends</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-4 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200">
                    Start a Dead Leads Sprint
                  </Button>
                </div>
              </div>

              {/* RPS - 2 columns, secondary treatment */}
              <div className="lg:col-span-2">
                <div className="bg-white border-2 border-blue-300 rounded-2xl p-8 h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-8 h-8 text-blue-600" />
                    <h3 className="text-2xl font-bold text-gray-900">Revenue Protection System (RPS)</h3>
                  </div>
                  <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-4">
                    Ongoing pipeline protection
                  </p>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Full-service intake for new leads, missed calls, and dead lead revival — running continuously. We
                    become an extension of your sales team, handling all first-touch and follow-up systematically.
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 text-sm">Ongoing campaigns</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 text-sm">Full integration with your CRM and calendar</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 text-sm">Monthly reporting and optimization reviews</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 py-3 text-base font-semibold rounded-xl transition-all duration-200 bg-transparent"
                  >
                    Learn About RPS
                  </Button>
                  <p className="text-sm text-gray-500 mt-4 text-center">When you're ready to scale</p>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-xl p-8 shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">The Typical Journey</h4>
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex-1 text-center">
                  <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <h5 className="font-bold text-gray-900 mb-1">Dead Leads Sprint</h5>
                  <p className="text-sm text-gray-600">Prove value with low risk</p>
                </div>
                <ArrowRight className="w-8 h-8 text-gray-400 hidden md:block" />
                <div className="flex-1 text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <h5 className="font-bold text-gray-900 mb-1">Proof of Value</h5>
                  <p className="text-sm text-gray-600">See appointments & ROI data</p>
                </div>
                <ArrowRight className="w-8 h-8 text-gray-400 hidden md:block" />
                <div className="flex-1 text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h5 className="font-bold text-gray-900 mb-1">Ongoing Protection</h5>
                  <p className="text-sm text-gray-600">Scale to full Revenue Protection</p>
                </div>
              </div>
            </div>

            <div className="mt-16 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">How We Work With Your Team</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-blue-600">1</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Audit & Setup</h4>
                  <p className="text-gray-600 text-sm">
                    We audit your current lead flow, connect to your CRM/calendar, and configure campaigns tailored to
                    your ICP and qualification criteria
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-amber-600">2</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Proof Campaign</h4>
                  <p className="text-gray-600 text-sm">
                    We run a time-boxed sprint or pilot to prove ROI with real data—appointments booked, conversion
                    rates, and revenue influence
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-green-600">3</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Ongoing Optimization</h4>
                  <p className="text-gray-600 text-sm">
                    We monitor daily, optimize weekly, and report monthly. You get better results over time as we learn
                    what converts in your market
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">What SolarSales AI Is Not</h2>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                To be clear about what you're getting (and what you're not):
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {whatWeAreNot.map((item, index) => (
                <div key={index} className="bg-slate-700/50 backdrop-blur rounded-xl p-6 border border-slate-600">
                  <div className="flex items-start gap-3">
                    <X className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-slate-300">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Built By Solar Operators</h2>
            </div>

            <div className="bg-white rounded-2xl p-10 shadow-xl border border-gray-200">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg">
                    <User className="w-16 h-16 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">Joseph [Last Name]</h3>
                  <p className="text-lg text-blue-600 font-semibold mb-6">Founder</p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Joseph spent [X] years in solar sales operations before building SolarSales AI. He's managed setter
                    teams, optimized lead funnels, and watched firsthand as ad spend leaked through missed calls and
                    dead CRM leads.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-4">
                    <p className="text-gray-900 italic">
                      "I built this because I lived the problem. I know what it's like to pay $50 for a lead and watch
                      it die because nobody called back fast enough. Solar companies don't need another tool to figure
                      out — they need someone who actually knows how to run intake the right way."
                    </p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    That solar-specific knowledge — permitting timelines, financing objections, HOA concerns, LSA
                    campaign quirks, lead vendor quality issues — is baked into every qualification flow, every script,
                    and every campaign we run.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who It's For Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Who SolarSales AI Is For (and Not For)</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-xl p-8 hover:shadow-lg transition-all duration-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Great For</h3>
                <ul className="space-y-4">
                  {greatFor.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200 rounded-xl p-8 hover:shadow-lg transition-all duration-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Not the Right Fit</h3>
                <ul className="space-y-4">
                  {notRightFit.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg max-w-4xl mx-auto mt-8">
              <p className="text-lg text-gray-900 font-medium">
                We're not a replacement for your closers—we're a force multiplier. Your reps spend less time chasing
                cold leads and more time having high-value conversations that close deals.
              </p>
            </div>
          </div>
        </section>

        {/* Compliance Section - light blue-gray background */}
        <section className="py-20 bg-blue-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Opt-In Leads Only. TCPA-Safe Practices.</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We work exclusively with leads who have opted in through your forms, LSA campaigns, and paid lead
                sources.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <ul className="space-y-3 mb-8">
                {compliancePractices.map((practice, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{practice}</span>
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition-all duration-200">
                  <ShieldCheck className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-900">TCPA-Safe</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition-all duration-200">
                  <Check className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-900">Opt-In Only</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition-all duration-200">
                  <Eye className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-900">Transparent Operations</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition-all duration-200">
                  <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-900">Client-Controlled Hours</div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg text-center">
                <p className="text-lg text-gray-900 font-medium">
                  We're the safe way to squeeze more appointments from leads you already paid for, without compliance
                  risk.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - white background */}
        <section id="faq" className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all duration-200"
                >
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="text-left font-semibold text-gray-900">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                        expandedFAQ === index ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expandedFAQ === index && (
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 animate-in fade-in slide-in-from-top-2 duration-200">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to Capture More Revenue From Your Leads?</h2>
            <p className="text-xl text-slate-300 mb-4">
              Schedule a Lead Flow Audit. We'll look at your current setup, identify leaks, and show you exactly how
              we'd capture more appointments.
            </p>
            <p className="text-lg text-slate-400 mb-8">
              No pressure. No "limited slots" scarcity tactics. Just an honest conversation about whether this makes
              sense for your business.
            </p>
            <Button className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 text-lg font-bold rounded-xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-200">
              Schedule a Lead Flow Audit
            </Button>
            <p className="text-sm text-slate-400 mt-6">
              Most audits take 30-45 minutes. We'll send you a summary afterward whether you move forward or not.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">SolarSales AI</h3>
              <p className="text-sm">Managed intake and revival service for solar companies</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Dead Leads Sprint
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Revenue Protection System
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© {new Date().getFullYear()} SolarSales AI. All rights reserved.</p>
            <p className="text-gray-500 mt-2">Turning solar leads into kept appointments since 2024.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
