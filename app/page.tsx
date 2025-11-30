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
  Eye,
  Mail,
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
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-white py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Turn More of Your Paid Leads Into Kept Appointments
              </h1>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                SolarSales AI is a managed intake and revival service for U.S. residential solar companies. We use AI
                voice + SMS to systematically work your new leads, missed calls, and dead CRM leads—capturing more value
                from the lead spend you already have.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Done-for-you service. We run the campaigns, optimize the flows, and are measured on appointments that
                show.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button className="bg-blue-600 hover:bg-blue-700 hover:scale-105 text-white px-8 py-3 text-base font-medium rounded-lg transition-all duration-200">
                  Schedule a Lead Flow Audit
                </Button>
                <Button
                  variant="ghost"
                  className="text-blue-600 hover:text-blue-700 text-base font-medium"
                  onClick={() => {
                    document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  See how it works ↓
                </Button>
              </div>

              <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 border border-blue-200 rounded-xl p-6 mt-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center text-center">
                    <ShieldCheck className="w-10 h-10 text-blue-600 mb-3" />
                    <div className="font-semibold text-gray-900">Opt-In Leads Only</div>
                    <div className="text-sm text-gray-600 mt-1">No cold lists, no spam</div>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Scale className="w-10 h-10 text-blue-600 mb-3" />
                    <div className="font-semibold text-gray-900">TCPA-Safe Practices</div>
                    <div className="text-sm text-gray-600 mt-1">Compliant by design</div>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Layers className="w-10 h-10 text-blue-600 mb-3" />
                    <div className="font-semibold text-gray-900">Works With Your Stack</div>
                    <div className="text-sm text-gray-600 mt-1">No rip-and-replace</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 bg-white">
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

        {/* Toolkit Differentiation Section */}
        <section className="py-20 bg-gray-50">
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
                    <span className="text-gray-700 line-through">{burden}</span>
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
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg max-w-3xl mx-auto mb-8">
              <p className="text-lg text-gray-900 font-medium">
                You don't need another tool for your team to figure out. You need someone to actually run your intake
                and dead leads the right way, every day.
              </p>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-8"></div>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-gray-700">
                We've worked with teams who tried the DIY toolkit approach. On average, they spent 40+ hours configuring
                flows, testing scripts, and troubleshooting—before seeing a single qualified lead. With us, you're
                operational in Week 1.
              </p>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                We Run Your Solar Intake and Dead Lead Revival. You Focus on Closing.
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                SolarSales AI is not a tool you have to figure out. We're the solar-specialized team + AI engine that:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {solutionFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-xl text-gray-900 font-medium max-w-3xl mx-auto">
                You get more kept appointments from leads you already paid for. Your setters work warmer prospects. Your
                CAC improves.
              </p>
            </div>
          </div>
        </section>

        {/* Offer Section */}
        <section id="pricing" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Solar Revenue Capture Program</h2>
              <p className="text-lg text-gray-600">Two Ways to Start</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-white border-2 border-transparent bg-gradient-to-br from-blue-600 to-blue-500 p-[2px] rounded-xl relative hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
                <div className="bg-white rounded-xl p-8 h-full">
                  <div className="absolute -top-4 left-8 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    Recommended Starting Point
                  </div>
                  <div className="flex items-center gap-3 mb-2 mt-2">
                    <Zap className="w-8 h-8 text-blue-600" />
                    <h3 className="text-2xl font-bold text-gray-900">Dead Leads Sprint (DLS)</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    One-time, time-boxed revival campaign on the stale or 'dead' opt-in leads already sitting in your
                    CRM.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Typical duration: 2-4 weeks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">We use AI voice + SMS to re-engage and qualify</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Book appointments from leads you'd written off</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Zero disruption to your current workflow</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Clear proof of value before any ongoing commitment</span>
                    </li>
                  </ul>
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <p className="text-sm text-gray-600">
                      <strong>Pricing:</strong> Sprint fee + performance component based on appointments booked
                    </p>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 hover:scale-105 text-white py-3 rounded-lg font-medium transition-all duration-200">
                    Start with Dead Leads Sprint
                  </Button>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="w-8 h-8 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Revenue Protection System (RPS)</h3>
                </div>
                <div className="text-sm text-blue-600 font-semibold mb-4 flex items-center gap-2">
                  <RefreshCw className="w-4 h-4" />
                  Ongoing Pipeline Protection
                </div>
                <p className="text-gray-600 mb-6">
                  Daily management of new leads, missed calls, and continuous dead lead revival.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Rapid outbound callbacks when leads come in</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Systematic missed-call follow-up</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Continuous qualification and appointment booking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Monthly retainer after initial setup</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Scales with your lead volume</span>
                  </li>
                </ul>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <p className="text-sm text-gray-600">
                    <strong>Pricing:</strong> Setup fee + monthly retainer aligned with your lead volume
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-2 border-blue-600 hover:bg-blue-50 hover:scale-105 text-blue-600 py-3 rounded-lg font-medium bg-transparent transition-all duration-200"
                >
                  Discuss RPS Pilot
                </Button>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                Most teams start with a Dead Leads Sprint to see proof, then expand to full Revenue Protection.
              </p>
              <div className="flex items-center justify-center gap-4 text-sm text-gray-600 flex-wrap">
                <span className="font-semibold text-blue-600">DLS</span>
                <span>→</span>
                <span>Proof of Value</span>
                <span>→</span>
                <span className="font-semibold text-blue-600">RPS</span>
                <span>→</span>
                <span>Full Pipeline Protection</span>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Work With Your Team</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Lead Flow Audit</h3>
                <div className="text-sm text-blue-600 font-semibold mb-4">Week 1</div>
                <ul className="space-y-2 mb-4">
                  <li className="text-gray-700">We analyze your current lead sources and CRM</li>
                  <li className="text-gray-700">Identify leakage points (speed-to-lead, missed calls, dead leads)</li>
                  <li className="text-gray-700">Design intake flows and qualification logic specific to your offer</li>
                  <li className="text-gray-700">You approve scripts, calling hours, and qualification criteria</li>
                </ul>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-600">Zero disruption</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-600">Your data secure</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-200 rounded-xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Proof Campaign</h3>
                <div className="text-sm text-purple-600 font-semibold mb-4">2-4 Weeks</div>

                <div className="bg-purple-50 p-4 rounded-lg mb-4">
                  <p className="font-bold text-gray-900 mb-3">Choose Your Proof Campaign:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">
                        <strong>Dead Leads Sprint:</strong> We revive your aged leads
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">
                        <strong>RPS Pilot:</strong> We handle a segment of new + missed leads
                      </span>
                    </li>
                  </ul>
                </div>

                <p className="text-gray-700 mb-4 text-sm">
                  Both campaigns deliver real appointments, call recordings, and conversion data. You choose the
                  approach that proves value for your specific situation.
                </p>

                <ul className="space-y-2 mb-4">
                  <li className="text-gray-700">Weekly reporting and optimization</li>
                  <li className="text-gray-700">Zero disruption to your existing sales process</li>
                </ul>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-600">Transparent metrics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-600">Easy to pause/stop</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white border border-green-200 rounded-xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ongoing Partnership</h3>
                <div className="text-sm text-green-600 font-semibold mb-4">If ROI Is Clear</div>
                <ul className="space-y-2 mb-4">
                  <li className="text-gray-700">If results justify it, we expand to full Revenue Protection System</li>
                  <li className="text-gray-700">Continuous optimization based on your close data</li>
                  <li className="text-gray-700">Monthly reporting and strategy sessions</li>
                  <li className="text-gray-700">You can pause or adjust scope at any time</li>
                </ul>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-600">Scalable ROI</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-600">Dedicated support</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <p className="text-lg text-gray-700 font-medium">
                We focus on proving ROI before asking for long-term commitment.
              </p>
            </div>
          </div>
        </section>

        {/* What We're Not Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What SolarSales AI Is Not</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {whatWeAreNot.map((item, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 flex items-start gap-4">
                  <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-6">
              <div className="inline-block p-3 bg-blue-50 rounded-full mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Built By People Who Understand Your World</h2>
            </div>
            <div className="text-lg text-gray-700 space-y-4 leading-relaxed">
              <p>
                This isn't a generic AI tool adapted for solar. We built SolarSales AI because we've lived your exact
                problem.
              </p>
              <p>
                Our team has run solar sales operations—managing setter teams, watching ad spend leak through missed
                calls, and seeing thousands in pipeline sit dead in CRMs.
              </p>
              <p>
                We know the difference between a qualified solar lead and a tire-kicker. We understand permitting
                timelines, financing objections, and HOA concerns. We've dealt with LSA campaigns, lead vendor quality
                issues, and the chaos of after-hours form submissions.
              </p>
              <p className="font-semibold text-gray-900">
                That solar-specific knowledge is baked into every qualification flow, every script, and every campaign
                we run for you.
              </p>
            </div>
          </div>
        </section>

        {/* Who This Is For Section */}
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

        {/* Compliance Section */}
        <section className="py-20 bg-white">
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

        {/* FAQ Section */}
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

        <section id="contact" className="py-20 bg-gradient-to-br from-white via-blue-50 to-blue-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Schedule a Lead Flow Audit</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Let's have a diagnostic conversation about where your pipeline is leaking and whether a Dead Leads Sprint
              or Revenue Protection pilot makes sense for your team.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              No pressure. No 'limited slots' scarcity tactics. Just an honest assessment of whether we can help you
              capture more value from the leads you already pay for.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button className="bg-blue-600 hover:bg-blue-700 hover:scale-105 text-white px-10 py-4 text-lg font-medium rounded-lg shadow-lg transition-all duration-200">
                Schedule 20-Minute Audit Call
              </Button>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600 mb-6">
              <Mail className="w-5 h-5" />
              <span>
                Or email us at{" "}
                <a href="mailto:contact@solarsalesai.com" className="text-blue-600 hover:underline">
                  contact@solarsalesai.com
                </a>
              </span>
            </div>
            <div className="bg-white/80 border border-gray-200 rounded-lg p-4 inline-block">
              <p className="text-sm text-gray-700 font-medium">
                No commitment required. No sales pitch. Just an honest diagnostic conversation.
              </p>
            </div>
          </div>
        </section>

        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <p className="text-gray-400 italic">Turning solar leads into kept appointments since 2024</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4">Product</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                      Dead Leads Sprint
                    </a>
                  </li>
                  <li>
                    <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                      Revenue Protection System
                    </a>
                  </li>
                  <li>
                    <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Contact</h3>
                <ul className="space-y-2">
                  <li className="text-gray-400">Email: contact@solarsalesai.com</li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
              <p>© {new Date().getFullYear()} SolarSales AI. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
