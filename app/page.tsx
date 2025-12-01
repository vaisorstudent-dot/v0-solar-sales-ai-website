"use client"
import { useState, useEffect } from "react"
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
  ArrowRight,
  Eye,
  AlertTriangle,
  Search,
  Rocket,
  TrendingUp,
  Play,
  Pause,
  Volume2,
  PhoneCall,
  Mic,
} from "lucide-react"

export default function LandingPage() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [selectedDemo, setSelectedDemo] = useState<"new-lead" | "dead-lead" | "qualification">("dead-lead")

  // Handle scroll for header effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Demo call data
  const demoCallData = {
    "dead-lead": {
      title: "Dead Lead Revival",
      subtitle: "3-month old lead → Booked appointment",
      duration: 127, // seconds
      transcript: [
        { time: 0, speaker: "AI", text: "Hi Maria, this is Alex from Sunrise Solar. I'm following up on your inquiry from a few months back about solar savings. Do you have a quick minute?" },
        { time: 8, speaker: "Lead", text: "Oh yeah, we got busy but we're still thinking about it actually." },
        { time: 12, speaker: "AI", text: "That's great to hear! Just to make sure we focus on what matters most to you - are you mainly interested in lowering your electric bill, or is the environmental impact more important?" },
        { time: 21, speaker: "Lead", text: "Honestly, the bill. It's getting crazy expensive." },
        { time: 24, speaker: "AI", text: "I totally understand. A lot of folks in your area are seeing 20-30% increases. Our specialist can show you exactly what you'd save based on your actual usage. Would tomorrow at 3pm or Thursday at 11am work better for a quick 15-minute call?" },
        { time: 36, speaker: "Lead", text: "Thursday works." },
        { time: 38, speaker: "AI", text: "Perfect! I'm booking you for Thursday at 11am. You'll get a calendar invite and a text reminder. Sound good?" },
        { time: 44, speaker: "Lead", text: "Yeah, that works." },
        { time: 46, speaker: "AI", text: "Excellent! Our specialist Sarah will call you Thursday at 11. Talk to you then, Maria!" },
      ],
    },
    "new-lead": {
      title: "New Lead Callback",
      subtitle: "Form submission → Qualified in 2 minutes",
      duration: 98,
      transcript: [
        { time: 0, speaker: "AI", text: "Hi David, this is Jordan from SunPower Solutions. You just submitted a request about solar on our website. Did I catch you at a good time?" },
        { time: 7, speaker: "Lead", text: "Yeah, sure. That was fast!" },
        { time: 9, speaker: "AI", text: "We move quick! I see you're in San Diego. Do you own your home?" },
        { time: 13, speaker: "Lead", text: "Yes, we do." },
        { time: 15, speaker: "AI", text: "Great. And just to confirm - is your roof getting good sun exposure, or is it mostly shaded?" },
        { time: 20, speaker: "Lead", text: "It's pretty sunny, we have very little shade." },
        { time: 23, speaker: "AI", text: "Perfect. One last quick question - are you looking to move forward in the next few months, or just exploring?" },
        { time: 29, speaker: "Lead", text: "We want to do it soon, the electricity bills are killing us." },
        { time: 33, speaker: "AI", text: "I completely understand. Let me get you on the calendar with our solar consultant who can give you exact savings numbers. Does tomorrow at 2pm work, or would Thursday morning be better?" },
      ],
    },
    "qualification": {
      title: "Smart Qualification",
      subtitle: "Filters out tire-kickers in under 60 seconds",
      duration: 52,
      transcript: [
        { time: 0, speaker: "AI", text: "Hi Robert, this is Chris from Solar Solutions following up on your inquiry. Quick question - do you own your home or are you renting?" },
        { time: 7, speaker: "Lead", text: "I'm renting right now." },
        { time: 9, speaker: "AI", text: "Got it. Solar installations typically require homeownership since they're permanent modifications. Are you planning to buy a home in the near future?" },
        { time: 16, speaker: "Lead", text: "Not really, maybe in a few years." },
        { time: 19, speaker: "AI", text: "Makes sense. What I can do is keep your information on file, and when you're ready to purchase a home, we can definitely help you explore solar options at that time. Would that work for you?" },
        { time: 28, speaker: "Lead", text: "Yeah, that sounds good." },
        { time: 30, speaker: "AI", text: "Perfect. I'll make a note and we'll circle back when the timing is right. Thanks for your interest, Robert!" },
      ],
    },
  }

  const currentDemo = demoCallData[selectedDemo]

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
    // In a real implementation, this would control actual audio playback
  }

  // Simulate audio progress (in real implementation, this would track actual audio)
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= currentDemo.duration) {
            setIsPlaying(false)
            return 0
          }
          return prev + 0.5
        })
      }, 500)
      return () => clearInterval(interval)
    }
  }, [isPlaying, currentDemo.duration])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

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
      <header
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-300 ${
          isScrolled ? "shadow-lg border-b border-gray-200/80" : "border-b border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-md">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="text-xl font-bold text-gray-900 tracking-tight">SolarSales AI</div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors relative group"
            >
              How It Works
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors relative group"
            >
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#faq"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors relative group"
            >
              FAQ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700 hover:shadow-xl text-white px-6 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 transform hover:scale-105">
            Schedule Audit
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section with Visual Element */}
        <section className="relative py-24 sm:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-[0.04]">
            <div className="absolute top-10 right-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
          </div>

          {/* Decorative grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20"></div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
            {/* Credibility badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-4 py-2 rounded-full mb-8 animate-fade-in-up">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-blue-700">Trusted by U.S. Solar Sales Teams</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-[1.1] tracking-tight animate-fade-in-up animate-delay-100">
              Turn More of Your Paid Leads Into{" "}
              <span className="bg-gradient-to-r from-blue-600 via-blue-600 to-amber-500 bg-clip-text text-transparent">
                Kept Appointments
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 mb-6 leading-relaxed max-w-3xl mx-auto font-medium animate-fade-in-up animate-delay-200">
              A managed intake and revival service for U.S. residential solar companies. We use AI voice + SMS to
              systematically work your new leads, missed calls, and dead CRM leads.
            </p>
            <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto animate-fade-in-up animate-delay-300">
              <span className="font-semibold text-gray-900">Done-for-you service.</span> We run the campaigns, optimize
              the flows, and are measured on appointments that show.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animate-delay-400">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:scale-105 text-white px-10 py-4 text-lg font-bold rounded-xl transition-all duration-200 shadow-2xl hover:shadow-blue-500/50 relative group overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Schedule a Lead Flow Audit
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </Button>
              <Button
                variant="outline"
                className="border-2 border-gray-300 hover:border-blue-600 hover:bg-blue-50 text-gray-700 hover:text-blue-600 px-8 py-4 text-lg font-semibold bg-white/80 backdrop-blur-sm rounded-xl transition-all duration-200 hover:shadow-lg"
                onClick={() => {
                  document.getElementById("problem")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                See how it works
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 justify-center pt-8 border-t border-gray-200 max-w-3xl mx-auto animate-fade-in-up animate-delay-400">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-sm font-semibold text-gray-700">Opt-In Leads Only</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Scale className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-sm font-semibold text-gray-700">TCPA-Safe Practices</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Layers className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-sm font-semibold text-gray-700">Works With Your Stack</span>
              </div>
            </div>

            {/* Social Proof Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-12 border-t border-gray-200 max-w-3xl mx-auto">
              <div className="text-center animate-fade-in-up animate-delay-400">
                <div className="text-4xl font-bold text-blue-600 mb-2">2-5x</div>
                <div className="text-sm font-medium text-gray-600">More Appointments Booked</div>
              </div>
              <div className="text-center animate-fade-in-up animate-delay-400">
                <div className="text-4xl font-bold text-blue-600 mb-2">&lt;5 min</div>
                <div className="text-sm font-medium text-gray-600">Average Response Time</div>
              </div>
              <div className="text-center animate-fade-in-up animate-delay-400">
                <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-sm font-medium text-gray-600">Lead Coverage</div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Voice Demo Section */}
        <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 px-4 py-2 rounded-full mb-4">
                <Volume2 className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-semibold text-purple-700">Hear Our AI in Action</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                This Isn't a Chatbot.
                <br />
                <span className="text-blue-600">It's a Real Conversation.</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Listen to actual AI voice calls that book appointments, qualify leads, and recover dead pipeline - all sounding natural and human.
              </p>
            </div>

            {/* Demo Selector */}
            <div className="flex flex-wrap gap-3 justify-center mb-10">
              <button
                onClick={() => {
                  setSelectedDemo("dead-lead")
                  setCurrentTime(0)
                  setIsPlaying(false)
                }}
                className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  selectedDemo === "dead-lead"
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-300"
                }`}
              >
                Dead Lead Revival
              </button>
              <button
                onClick={() => {
                  setSelectedDemo("new-lead")
                  setCurrentTime(0)
                  setIsPlaying(false)
                }}
                className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  selectedDemo === "new-lead"
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-300"
                }`}
              >
                New Lead Callback
              </button>
              <button
                onClick={() => {
                  setSelectedDemo("qualification")
                  setCurrentTime(0)
                  setIsPlaying(false)
                }}
                className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  selectedDemo === "qualification"
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-300"
                }`}
              >
                Smart Qualification
              </button>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Phone Interface */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

                  {/* Call Header */}
                  <div className="relative z-10 mb-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isPlaying ? "bg-green-500 animate-pulse" : "bg-blue-500"}`}>
                          <PhoneCall className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-bold text-lg">{currentDemo.title}</div>
                          <div className="text-slate-400 text-sm">{currentDemo.subtitle}</div>
                        </div>
                      </div>
                      {isPlaying && (
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                          <span className="text-red-400 text-sm font-semibold">LIVE</span>
                        </div>
                      )}
                    </div>

                    {/* Waveform Visualization */}
                    <div className="flex items-center justify-center gap-1 h-24 mb-6">
                      {[...Array(40)].map((_, i) => {
                        const isActive = isPlaying && i < (currentTime / currentDemo.duration) * 40
                        const height = Math.random() * 60 + 20
                        return (
                          <div
                            key={i}
                            className={`w-1 rounded-full transition-all duration-150 ${
                              isActive ? "bg-blue-400" : "bg-slate-600"
                            }`}
                            style={{
                              height: `${isActive ? height * 1.2 : height * 0.6}px`,
                              opacity: isActive ? 1 : 0.4,
                            }}
                          ></div>
                        )
                      })}
                    </div>

                    {/* Audio Controls */}
                    <div className="space-y-4">
                      {/* Progress Bar */}
                      <div className="space-y-2">
                        <div className="relative h-2 bg-slate-700 rounded-full overflow-hidden cursor-pointer group">
                          <div
                            className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300"
                            style={{ width: `${(currentTime / currentDemo.duration) * 100}%` }}
                          ></div>
                          <div
                            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                            style={{ left: `calc(${(currentTime / currentDemo.duration) * 100}% - 8px)` }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-xs text-slate-400">
                          <span>{formatTime(currentTime)}</span>
                          <span>{formatTime(currentDemo.duration)}</span>
                        </div>
                      </div>

                      {/* Play/Pause Button */}
                      <div className="flex items-center justify-center gap-4">
                        <button
                          onClick={togglePlayPause}
                          className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-200 group"
                        >
                          {isPlaying ? (
                            <Pause className="w-7 h-7 text-white" />
                          ) : (
                            <Play className="w-7 h-7 text-white ml-1" />
                          )}
                        </button>
                      </div>

                      {/* Voice Indicator */}
                      <div className="flex items-center justify-center gap-2 text-slate-400 text-sm">
                        <Mic className="w-4 h-4" />
                        <span>{isPlaying ? "AI Speaking..." : "Click play to hear the call"}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Live Transcript */}
                <div className="bg-white rounded-3xl border-2 border-gray-200 p-8 shadow-xl">
                  <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-200">
                    <MessageSquare className="w-5 h-5 text-blue-600" />
                    <h3 className="text-lg font-bold text-gray-900">Live Transcript</h3>
                  </div>

                  <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                    {currentDemo.transcript.map((line, index) => {
                      const isActive = currentTime >= line.time
                      const isCurrent =
                        currentTime >= line.time &&
                        (index === currentDemo.transcript.length - 1 ||
                          currentTime < currentDemo.transcript[index + 1].time)

                      return (
                        <div
                          key={index}
                          className={`transition-all duration-300 ${
                            isActive ? "opacity-100" : "opacity-30"
                          } ${isCurrent ? "scale-105" : "scale-100"}`}
                        >
                          <div
                            className={`flex items-start gap-3 ${
                              line.speaker === "AI" ? "" : "flex-row-reverse"
                            }`}
                          >
                            <div
                              className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                                line.speaker === "AI"
                                  ? "bg-blue-100 text-blue-700"
                                  : "bg-gray-100 text-gray-700"
                              } ${isCurrent ? "ring-2 ring-blue-400 ring-offset-2" : ""}`}
                            >
                              {line.speaker === "AI" ? "AI" : "L"}
                            </div>
                            <div
                              className={`flex-1 px-4 py-3 rounded-2xl ${
                                line.speaker === "AI"
                                  ? "bg-blue-50 rounded-tl-sm"
                                  : "bg-gray-100 rounded-tr-sm text-right"
                              } ${isCurrent ? "ring-2 ring-blue-400" : ""}`}
                            >
                              <div className="text-xs font-semibold text-gray-500 mb-1">
                                {line.speaker === "AI" ? "SolarSales AI" : "Lead"}
                              </div>
                              <p className="text-sm text-gray-900 leading-relaxed">{line.text}</p>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {/* Key Moments */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="text-xs font-semibold text-gray-500 mb-3">KEY MOMENTS</div>
                    <div className="space-y-2">
                      {selectedDemo === "dead-lead" && (
                        <>
                          <div className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            <span className="text-gray-600">Warm re-engagement (0:08)</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            <span className="text-gray-600">Value-based qualification (0:12)</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            <span className="text-gray-600">Calendar booking (0:36)</span>
                          </div>
                        </>
                      )}
                      {selectedDemo === "new-lead" && (
                        <>
                          <div className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            <span className="text-gray-600">Speed-to-lead response (0:00)</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            <span className="text-gray-600">Ownership verification (0:09)</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            <span className="text-gray-600">Timeline qualification (0:23)</span>
                          </div>
                        </>
                      )}
                      {selectedDemo === "qualification" && (
                        <>
                          <div className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                            <span className="text-gray-600">Ownership disqualifier (0:07)</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                            <span className="text-gray-600">Future nurture setup (0:19)</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            <span className="text-gray-600">Polite exit (0:30)</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-12 text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  Want to hear your own leads getting called like this?
                </p>
                <p className="text-gray-600 mb-6">
                  We'll run a free pilot on a small batch of your leads so you can hear the real results.
                </p>
                <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200">
                  Schedule Your Audit
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 px-4 py-2 rounded-full mb-4">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm font-semibold text-green-700">Real Conversation Example</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                See How We Revive Dead Leads
              </h2>
              <p className="text-lg text-gray-600">
                Watch a 3-month old "dead" lead turn into a confirmed appointment in under 15 minutes
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-3xl shadow-2xl p-8 border-2 border-blue-200/50 hover:shadow-3xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-900">Dead Lead Revival</div>
                  <div className="text-sm text-gray-500 font-medium">3-month old lead → Booked in 11 minutes</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                    <p className="text-sm text-gray-900">
                      Hi Maria, this is Alex from Sunrise Solar following up on your inquiry from a few months back.
                      Still interested in learning about solar savings?
                    </p>
                    <p className="text-xs text-gray-500 mt-1">2:34 PM</p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="bg-blue-600 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%]">
                    <p className="text-sm text-white">Yes actually! We got busy but still thinking about it</p>
                    <p className="text-xs text-blue-200 mt-1">2:41 PM</p>
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                    <p className="text-sm text-gray-900">
                      Great! I can get you on the calendar for a quick 15-min consultation. Does tomorrow at 3pm or
                      Thursday at 11am work better?
                    </p>
                    <p className="text-xs text-gray-500 mt-1">2:42 PM</p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="bg-blue-600 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%]">
                    <p className="text-sm text-white">Thursday works</p>
                    <p className="text-xs text-blue-200 mt-1">2:44 PM</p>
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                    <p className="text-sm text-gray-900">
                      Perfect, you're confirmed for Thursday at 11am. You'll get a calendar invite shortly. Talk soon!
                    </p>
                    <p className="text-xs text-gray-500 mt-1">2:45 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200 text-center">
                <p className="text-sm text-gray-600 italic">
                  A real dead lead revival — 3-month-old 'no response' lead booked in under 15 minutes
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section - now correctly after SMS section */}
        <section id="problem" className="py-24 bg-gradient-to-br from-gray-50 to-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 px-4 py-2 rounded-full mb-4">
                <AlertTriangle className="w-4 h-4 text-red-600" />
                <span className="text-sm font-semibold text-red-700">Revenue Leaks</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Where Your Pipeline Is Leaking Revenue
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                You're spending thousands on Meta, Google LSA, lead vendors, and canvassing. The leads are coming in.
                But between the form submission and the sales calendar, you're losing:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {problemCards.map((card, index) => (
                <div
                  key={index}
                  className="group bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-blue-300 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="mb-5 w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-100 transition-all duration-300">
                      {card.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{card.description}</p>
                  </div>
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

            {/* Visual Comparison Table */}
            <div className="max-w-5xl mx-auto mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-1 bg-gray-200 rounded-lg overflow-hidden">
                {/* Left Column - DIY Toolkit */}
                <div className="bg-red-50">
                  <div className="bg-red-100 px-6 py-4 border-b-2 border-red-200">
                    <h3 className="text-xl font-bold text-gray-900 text-center">DIY Toolkit Approach</h3>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Design the qualification flows</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Write and test the scripts</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Run the campaigns daily</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Analyze what's working</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Tune and optimize constantly</span>
                    </div>
                    <div className="flex items-center gap-2 pt-4 border-t border-red-200">
                      <Clock className="w-5 h-5 text-red-600" />
                      <span className="font-bold text-gray-900">Weeks to launch</span>
                    </div>
                  </div>
                </div>

                {/* Right Column - SolarSales AI */}
                <div className="bg-green-50">
                  <div className="bg-green-100 px-6 py-4 border-b-2 border-green-200">
                    <h3 className="text-xl font-bold text-gray-900 text-center">SolarSales AI</h3>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 font-medium">We design flows based on solar buyer psychology</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 font-medium">We write solar-specific scripts</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 font-medium">We run campaigns on your behalf</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 font-medium">We tune based on your data</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 font-medium">
                        We're measured on kept appointments and recovered revenue
                      </span>
                    </div>
                    <div className="flex items-center gap-2 pt-4 border-t border-green-200">
                      <Zap className="w-5 h-5 text-green-600" />
                      <span className="font-bold text-gray-900">Week 1 operational</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Yellow Highlight Box */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg max-w-3xl mx-auto mb-8 flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-900 font-medium">
                You don't need another tool for your team to figure out. You need someone to actually run your intake
                and dead leads the right way, every day.
              </p>
            </div>

            <div className="text-center max-w-3xl mx-auto">
              <p className="text-gray-700">
                The DIY toolkit approach means weeks of configuration, script testing, and troubleshooting before you
                see results. With us, you're operational in days — not months.
              </p>
            </div>
          </div>
        </section>

        {/* Solution Features Section */}
        <section id="how-it-works" className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 px-4 py-2 rounded-full mb-4">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm font-semibold text-green-700">Our Solution</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                We Run Your Solar Intake and Dead Lead Revival.
                <br />
                <span className="text-blue-600">You Focus on Closing.</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                SolarSales AI is not a tool you have to figure out. We're the solar-specialized team + AI engine that handles everything:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
              {solutionFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 border-2 border-gray-200 hover:shadow-2xl hover:border-blue-400 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="mb-5 w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-100 transition-all duration-300 shadow-md">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-lg text-gray-900 max-w-3xl mx-auto font-medium">
                You get more kept appointments from leads you already paid for. Your setters work warmer prospects. Your
                CAC improves.
              </p>
            </div>
          </div>
        </section>

        {/* Two-Path Offer Section with Visual Journey */}
        <section id="pricing" className="py-24 bg-gradient-to-br from-blue-50 via-white to-slate-50 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-72 h-72 bg-amber-500 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 px-4 py-2 rounded-full mb-4">
                <Rocket className="w-4 h-4 text-amber-600" />
                <span className="text-sm font-semibold text-amber-700">Get Started</span>
              </div>
              <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">Solar Revenue Capture Program</h2>
              <p className="text-2xl font-medium text-gray-600">Two Ways to Start</p>
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
                  <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-5 text-lg font-bold rounded-xl shadow-2xl hover:shadow-amber-500/50 hover:scale-105 transition-all duration-200 relative group overflow-hidden">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Start a Dead Leads Sprint
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
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

            <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-xl p-8 shadow-lg mt-16">
              <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">The Typical Journey</h4>
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-4xl font-bold text-white">1</span>
                  </div>
                  <h5 className="text-lg font-bold text-gray-900 mb-2">Dead Leads Sprint</h5>
                  <p className="text-sm text-gray-600">Prove value with low risk</p>
                </div>
                <ArrowRight className="w-8 h-8 text-gray-400 hidden md:block" />
                <div className="flex-1 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-400 to-gray-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-4xl font-bold text-white">2</span>
                  </div>
                  <h5 className="text-lg font-bold text-gray-900 mb-2">Proof of Value</h5>
                  <p className="text-sm text-gray-600">See appointments & ROI data</p>
                </div>
                <ArrowRight className="w-8 h-8 text-gray-400 hidden md:block" />
                <div className="flex-1 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-4xl font-bold text-white">3</span>
                  </div>
                  <h5 className="text-lg font-bold text-gray-900 mb-2">Ongoing Protection</h5>
                  <p className="text-sm text-gray-600">Scale to full Revenue Protection</p>
                </div>
              </div>
            </div>

            <div className="mt-20">
              <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">How We Work With Your Team</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Step 1 */}
                <div className="bg-white rounded-2xl p-8 border-2 border-blue-200 hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-3xl font-bold text-white">1</span>
                    </div>
                    <Search className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Audit & Setup</h4>
                  <p className="text-gray-600 leading-relaxed">
                    We audit your current lead flow, connect to your CRM/calendar, and configure campaigns tailored to
                    your ICP and qualification criteria
                  </p>
                </div>

                {/* Step 2 - with visual choice structure */}
                <div className="bg-white rounded-2xl p-8 border-2 border-amber-200 hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-700 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-3xl font-bold text-white">2</span>
                    </div>
                    <Rocket className="w-8 h-8 text-amber-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Proof Campaign</h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">Choose Your Proof Campaign:</p>

                  {/* Visual radio-style options */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start gap-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                      <div className="w-5 h-5 rounded-full border-2 border-amber-500 flex items-center justify-center mt-0.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">Dead Leads Sprint</div>
                        <div className="text-xs text-gray-600">We revive your aged leads</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-gray-50 border border-gray-200 rounded-lg">
                      <div className="w-5 h-5 rounded-full border-2 border-gray-300 mt-0.5"></div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">RPS Pilot</div>
                        <div className="text-xs text-gray-600">We handle new + missed leads</div>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600">
                    Both deliver appointments, recordings, and data. Zero disruption to your sales process.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="bg-white rounded-2xl p-8 border-2 border-green-200 hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-3xl font-bold text-white">3</span>
                    </div>
                    <TrendingUp className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Ongoing Partnership</h4>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    If results justify it, we expand to full Revenue Protection System
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Continuous optimization based on your close data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Monthly reporting and strategy sessions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>You can pause or adjust scope at any time</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-center mt-8 text-lg font-semibold text-gray-900">
                We focus on proving ROI before asking for long-term commitment.
              </p>
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

        <section className="py-20 bg-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Built By People Who Understand Your World</h2>
            </div>

            <div className="bg-white rounded-2xl p-10 shadow-xl border border-gray-200">
              <div className="flex justify-center mb-6">
                <Shield className="w-12 h-12 text-blue-600" />
              </div>
              <div className="prose prose-lg mx-auto">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  This isn't a generic AI tool adapted for solar. We built SolarSales AI because we've lived your exact
                  problem.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our team has run solar sales operations—managing setter teams, watching ad spend leak through missed
                  calls, and seeing thousands in pipeline sit dead in CRMs.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We know the difference between a qualified solar lead and a tire-kicker. We understand permitting
                  timelines, financing objections, and HOA concerns. We've dealt with LSA campaigns, lead vendor quality
                  issues, and the chaos of after-hours form submissions.
                </p>
                <p className="text-lg text-gray-900 leading-relaxed font-semibold">
                  That solar-specific knowledge is baked into every qualification flow, every script, and every campaign
                  we run for you.
                </p>
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

        <section className="py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 text-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 px-4 py-2 rounded-full mb-6">
              <Zap className="w-4 h-4 text-blue-300" />
              <span className="text-sm font-semibold text-blue-300">Free Consultation</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Ready to Capture More Revenue
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">
                From Your Leads?
              </span>
            </h2>
            <p className="text-xl sm:text-2xl text-slate-300 mb-6 max-w-3xl mx-auto leading-relaxed">
              Schedule a Lead Flow Audit. We'll look at your current setup, identify leaks, and show you exactly how
              we'd capture more appointments.
            </p>
            <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
              No pressure. No "limited slots" scarcity tactics. Just an honest conversation about whether this makes
              sense for your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-12 py-5 text-xl font-bold rounded-xl shadow-2xl hover:shadow-amber-500/50 hover:scale-105 transition-all duration-200 relative group overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Schedule a Lead Flow Audit
                  <Calendar className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400" />
                <span>30-45 minute audit</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-slate-600 rounded-full"></div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Free summary report</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-slate-600 rounded-full"></div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-amber-400" />
                <span>Zero obligation</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-slate-950 text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-bold text-lg">SolarSales AI</h3>
              </div>
              <p className="text-sm leading-relaxed">Managed intake and revival service for solar companies. Turn more leads into kept appointments.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-base">Services</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#pricing" className="hover:text-blue-400 transition-colors inline-flex items-center gap-1 group">
                    <span>Dead Leads Sprint</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-blue-400 transition-colors inline-flex items-center gap-1 group">
                    <span>Revenue Protection System</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-base">Company</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#about" className="hover:text-blue-400 transition-colors inline-flex items-center gap-1 group">
                    <span>About</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-blue-400 transition-colors inline-flex items-center gap-1 group">
                    <span>FAQ</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-base">Legal</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors inline-flex items-center gap-1 group">
                    <span>Privacy Policy</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors inline-flex items-center gap-1 group">
                    <span>Terms of Service</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-10 text-center">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} SolarSales AI. All rights reserved.</p>
            <p className="text-sm text-gray-600 mt-2 font-medium">Turning solar leads into kept appointments since 2024.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
