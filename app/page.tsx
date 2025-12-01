"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  ShieldCheck,
  Calendar,
  Target,
  MessageSquare,
  PhoneCall,
  Database,
  Clock,
  Check,
  TrendingUp,
  Zap,
  RefreshCw,
  CheckCircle,
  BarChart3,
  Shield,
  Phone,
  FileCheck,
  Eye,
  Search,
  Settings,
  Rocket,
  Users,
  ChevronDown,
  XCircle,
} from "@/components/icons"

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
        {
          time: 0,
          speaker: "AI",
          text: "Hi Maria, this is Alex from Sunrise Solar. I'm following up on your inquiry from a few months back about solar savings. Do you have a quick minute?",
        },
        { time: 8, speaker: "Lead", text: "Oh yeah, we got busy but we're still thinking about it actually." },
        {
          time: 12,
          speaker: "AI",
          text: "That's great to hear! Just to make sure we focus on what matters most to you - are you mainly interested in lowering your electric bill, or is the environmental impact more important?",
        },
        { time: 21, speaker: "Lead", text: "Honestly, the bill. It's getting crazy expensive." },
        {
          time: 24,
          speaker: "AI",
          text: "I totally understand. A lot of folks in your area are seeing 20-30% increases. Our specialist can show you exactly what you'd save based on your actual usage. Would tomorrow at 3pm or Thursday at 11am work better for a quick 15-minute call?",
        },
        { time: 36, speaker: "Lead", text: "Thursday works." },
        {
          time: 38,
          speaker: "AI",
          text: "Perfect! I'm booking you for Thursday at 11am. You'll get a calendar invite and a text reminder. Sound good?",
        },
        { time: 44, speaker: "Lead", text: "Yeah, that works." },
        {
          time: 46,
          speaker: "AI",
          text: "Excellent! Our specialist Sarah will call you Thursday at 11. Talk to you then, Maria!",
        },
      ],
    },
    "new-lead": {
      title: "New Lead Callback",
      subtitle: "Form submission → Qualified in 2 minutes",
      duration: 98,
      transcript: [
        {
          time: 0,
          speaker: "AI",
          text: "Hi David, this is Jordan from SunPower Solutions. You just submitted a request about solar on our website. Did I catch you at a good time?",
        },
        { time: 7, speaker: "Lead", text: "Yeah, sure. That was fast!" },
        { time: 9, speaker: "AI", text: "We move quick! I see you're in San Diego. Do you own your home?" },
        { time: 13, speaker: "Lead", text: "Yes, we do." },
        {
          time: 15,
          speaker: "AI",
          text: "Great. And just to confirm - is your roof getting good sun exposure, or is it mostly shaded?",
        },
        { time: 20, speaker: "Lead", text: "It's pretty sunny, we have very little shade." },
        {
          time: 23,
          speaker: "AI",
          text: "Perfect. One last quick question - are you looking to move forward in the next few months, or just exploring?",
        },
        { time: 29, speaker: "Lead", text: "We want to do it soon, the electricity bills are killing us." },
        {
          time: 33,
          speaker: "AI",
          text: "I completely understand. Let me get you on the calendar with our solar consultant who can give you exact savings numbers. Does tomorrow at 2pm work, or would Thursday morning be better?",
        },
      ],
    },
    qualification: {
      title: "Smart Qualification",
      subtitle: "Filters out tire-kickers in under 60 seconds",
      duration: 52,
      transcript: [
        {
          time: 0,
          speaker: "AI",
          text: "Hi Robert, this is Chris from Solar Solutions following up on your inquiry. Quick question - do you own your home or are you renting?",
        },
        { time: 7, speaker: "Lead", text: "I'm renting right now." },
        {
          time: 9,
          speaker: "AI",
          text: "Got it. Solar installations typically require homeownership since they're permanent modifications. Are you planning to buy a home in the near future?",
        },
        { time: 16, speaker: "Lead", text: "Not really, maybe in a few years." },
        {
          time: 19,
          speaker: "AI",
          text: "Makes sense. What I can do is keep your information on file, and when you're ready to purchase a home, we can definitely help you explore solar options at that time. Would that work for you?",
        },
        { time: 28, speaker: "Lead", text: "Yeah, that sounds good." },
        {
          time: 30,
          speaker: "AI",
          text: "Perfect. I'll make a note and we'll circle back when the timing is right. Thanks for your interest, Robert!",
        },
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
      icon: <Clock className="w-12 h-12 text-[#d4a574]" />,
      title: "Speed-to-Lead Gaps",
      description: "Leads go cold in the first 5 minutes while your setter is on another call",
    },
    {
      icon: <Phone className="w-12 h-12 text-[#d4a574]" />,
      title: "Missed Call Black Holes",
      description: "Missed calls that never get called back systematically or sit for hours",
    },
    {
      icon: <Database className="w-12 h-12 text-[#d4a574]" />,
      title: "Dead Lead Graveyards",
      description: "Thousands of 'dead' leads sitting in your CRM that you already paid for",
    },
    {
      icon: <Users className="w-12 h-12 text-[#d4a574]" />,
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
    {
      question: "How does the handoff to your closers work? What do they see?",
      answer:
        'We book appointments directly into your existing calendar system (Google Calendar, Outlook, Calendly, Salesforce, HubSpot, or any calendar with API access). Integration happens during Week 1 setup.\n\nWhat your closer sees when an appointment is booked:\n\nCalendar Event with Full Context:\n• Lead name, phone, email\n• Appointment time (in your closer\'s local time zone)\n• Source tag: "New Lead – AI Qualified" / "Missed Call Follow-Up" / "Dead Lead Revival"\n• Best time to call if they need to reschedule\n• Key qualification notes: homeowner status, electric bill range, timeline, HOA status, financing interest\n\nConversation Transcript (attached or linked):\n• Complete record of AI conversation (voice + SMS)\n• Objections addressed during qualification\n• Questions the lead asked\n• Any scheduling constraints or preferences\n\nConfirmation to Lead:\n• Lead receives calendar invite via email\n• Confirmation SMS: "You\'re confirmed for [day/time] with [Closer Name] from [Your Company]. You\'ll get a reminder 24 hours before. Looking forward to showing you your solar savings!"\n• 24-hour reminder SMS sent automatically\n\nYour closer treats it like any other booked appointment — they call at the scheduled time with full context on what the lead cares about. We don\'t replace your closers; we make sure they\'re spending time on qualified, expecting-the-call leads instead of chasing cold prospects.\n\nIf the lead no-shows, we can handle re-engagement via AI (part of RPS) or your team can follow up manually — your choice.\n',
    },
  ]

  return (
    <div className="min-h-screen bg-[#faf8f5] font-body">
      {/* Header */}
      <header
        className={`sticky top-0 z-50 bg-[#faf8f5]/95 backdrop-blur-md transition-all duration-300 ${
          isScrolled ? "shadow-sm border-b border-[#d4a574]/20" : "border-b border-[#d4a574]/20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#1a2332] to-[#2d3748] rounded-lg flex items-center justify-center shadow-sm">
              <Zap className="w-6 h-6 text-[#faf8f5]" />
            </div>
            <div className="text-xl font-bold text-[#1a2332] tracking-tight">SolarSales AI</div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="text-sm font-medium text-[#4a5568] hover:text-[#1a2332] transition-colors relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1a2332] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-[#4a5568] hover:text-[#1a2332] transition-colors relative group"
            >
              How It Works
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1a2332] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-[#4a5568] hover:text-[#1a2332] transition-colors relative group"
            >
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1a2332] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#faq"
              className="text-sm font-medium text-[#4a5568] hover:text-[#1a2332] transition-colors relative group"
            >
              FAQ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1a2332] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
          <Button className="bg-[#1a2332] hover:bg-[#2d3748] hover:shadow-md text-[#faf8f5] px-6 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200">
            Schedule Audit
          </Button>
        </div>
      </header>

      <main>
        <section className="relative py-32 bg-[#faf8f5] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
              {/* Left Column - 60% - 3 columns */}
              <div className="lg:col-span-3 text-left">
                <p className="uppercase tracking-wider text-sm font-semibold text-[#d4a574] mb-4">
                  Managed Solar Lead Intake
                </p>

                <h1 className="font-display text-[60px] leading-[1.1] font-semibold text-[#1a2332] mb-8 tracking-tight">
                  Turn More of Your Paid Leads Into Kept Appointments
                </h1>

                <p className="font-body text-[20px] leading-[1.7] text-[#4a5568] mb-8">
                  A managed intake and revival service for U.S. residential solar companies. We use AI voice + SMS to
                  systematically work your new leads, missed calls, and dead CRM leads.
                </p>

                <p className="font-body text-[18px] leading-[1.6] text-[#1a2332] font-semibold mb-12">
                  Done-for-you service. We run the campaigns, optimize the flows, and are measured on appointments that
                  show.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-[#1a2332] hover:bg-[#2d3748] text-[#faf8f5] border-2 border-[#1a2332] px-8 py-4 text-lg font-semibold rounded-lg">
                    Schedule Lead Flow Audit
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button className="bg-white hover:bg-[#f5f2ed] text-[#1a2332] border-2 border-[#1a2332] px-8 py-4 text-lg font-semibold rounded-lg">
                    See How It Works
                  </Button>
                </div>
              </div>

              {/* Right Column - 40% - 2 columns */}
              <div className="lg:col-span-2">
                <div className="space-y-6">
                  <div className="bg-[#f5f2ed] border border-[#d4a574]/20 p-6 rounded-lg shadow-sm">
                    <div className="flex items-center gap-4">
                      <Shield className="w-8 h-8 text-[#d4a574]" />
                      <p className="font-body text-[16px] text-[#1a2332] font-medium">TCPA-Safe Practices</p>
                    </div>
                  </div>
                  <div className="bg-[#f5f2ed] border border-[#d4a574]/20 p-6 rounded-lg shadow-sm">
                    <div className="flex items-center gap-4">
                      <Calendar className="w-8 h-8 text-[#d4a574]" />
                      <p className="font-body text-[16px] text-[#1a2332] font-medium">CRM Integration</p>
                    </div>
                  </div>
                  <div className="bg-[#f5f2ed] border border-[#d4a574]/20 p-6 rounded-lg shadow-sm">
                    <div className="flex items-center gap-4">
                      <Target className="w-8 h-8 text-[#d4a574]" />
                      <p className="font-body text-[16px] text-[#1a2332] font-medium">Solar-Specific</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SMS Conversation Mockup Section */}
        <section className="py-32 bg-[#f5f2ed]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="uppercase tracking-wider text-sm font-semibold text-[#d4a574] mb-4 text-center">
              Real Results
            </p>

            <h2 className="font-display text-[48px] leading-[1.2] font-semibold text-[#1a2332] text-center mb-4">
              Dead Lead Revival in Action
            </h2>

            <p className="font-body text-[18px] leading-[1.7] text-[#4a5568] text-center mb-12">
              Real SMS conversation: 3-month-old "dead" lead → Booked appointment in 90 seconds
            </p>

            {/* Phone mockup with SMS conversation */}
            <div className="relative mx-auto max-w-md">
              <div className="bg-[#faf8f5] rounded-[3rem] shadow-md p-4 border-8 border-[#1a2332]">
                <div className="bg-[#1a2332] rounded-[2.5rem] overflow-hidden">
                  {/* Phone UI header */}
                  <div className="bg-[#1a2332] px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#d4a574]/20 rounded-full flex items-center justify-center">
                        <MessageSquare className="w-5 h-5 text-[#d4a574]" />
                      </div>
                      <div>
                        <div className="font-body text-sm font-semibold text-[#faf8f5]">Maria Rodriguez</div>
                        <div className="font-body text-xs text-[#faf8f5]/70">Lead from 3 months ago</div>
                      </div>
                    </div>
                    <PhoneCall className="w-5 h-5 text-[#d4a574]" />
                  </div>

                  {/* Messages */}
                  <div className="bg-[#faf8f5] p-6 space-y-4 min-h-[500px]">
                    {/* AI Message */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-[#d4a574] rounded-full flex items-center justify-center flex-shrink-0">
                        <Zap className="w-4 h-4 text-[#faf8f5]" />
                      </div>
                      <div className="flex-1">
                        <div className="bg-[#f5f2ed] rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                          <p className="font-body text-sm text-[#1a2332]">
                            Hi Maria, this is Alex from Sunrise Solar. Following up on your inquiry about solar savings.
                            Do you have a quick minute?
                          </p>
                        </div>
                        <div className="font-body text-xs text-[#6b7280] mt-1 ml-2">3:45 PM</div>
                      </div>
                    </div>

                    {/* Lead Response */}
                    <div className="flex gap-3 justify-end">
                      <div className="flex-1">
                        <div className="bg-[#1a2332] rounded-2xl rounded-tr-sm px-4 py-3 shadow-sm ml-auto max-w-[85%]">
                          <p className="font-body text-sm text-[#faf8f5]">
                            Oh yeah, we got busy but we're still thinking about it actually
                          </p>
                        </div>
                        <div className="font-body text-xs text-[#6b7280] mt-1 mr-2 text-right">3:46 PM</div>
                      </div>
                      <div className="w-8 h-8 bg-[#d4a574]/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-body text-xs font-semibold text-[#d4a574]">MR</span>
                      </div>
                    </div>

                    {/* AI Follow-up */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-[#d4a574] rounded-full flex items-center justify-center flex-shrink-0">
                        <Zap className="w-4 h-4 text-[#faf8f5]" />
                      </div>
                      <div className="flex-1">
                        <div className="bg-[#f5f2ed] rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                          <p className="font-body text-sm text-[#1a2332]">
                            Great! Our specialist can show you exact savings based on your usage. Would tomorrow at 3pm
                            or Thursday at 11am work for a quick 15-min call?
                          </p>
                        </div>
                        <div className="font-body text-xs text-[#6b7280] mt-1 ml-2">3:47 PM</div>
                      </div>
                    </div>

                    {/* Lead Confirmation */}
                    <div className="flex gap-3 justify-end">
                      <div className="flex-1">
                        <div className="bg-[#1a2332] rounded-2xl rounded-tr-sm px-4 py-3 shadow-sm ml-auto max-w-[85%]">
                          <p className="font-body text-sm text-[#faf8f5]">Thursday works</p>
                        </div>
                        <div className="font-body text-xs text-[#6b7280] mt-1 mr-2 text-right">3:48 PM</div>
                      </div>
                      <div className="w-8 h-8 bg-[#d4a574]/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-body text-xs font-semibold text-[#d4a574]">MR</span>
                      </div>
                    </div>

                    {/* Booking Confirmation */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-[#d4a574] rounded-full flex items-center justify-center flex-shrink-0">
                        <Zap className="w-4 h-4 text-[#faf8f5]" />
                      </div>
                      <div className="flex-1">
                        <div className="bg-[#f5f2ed] rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                          <p className="font-body text-sm text-[#1a2332]">
                            Perfect! You're booked for Thursday at 11am. You'll get a calendar invite and reminder. ✓
                          </p>
                        </div>
                        <div className="font-body text-xs text-[#6b7280] mt-1 ml-2">3:49 PM</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Credibility badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#2d5f4f] text-[#faf8f5] px-6 py-2 rounded-full shadow-md border-2 border-[#faf8f5]">
                <p className="font-body text-sm font-semibold">Real conversation from March 2024</p>
              </div>
            </div>
          </div>
        </section>

        {/* Where Your Pipeline Is Leaking */}
        <section className="py-32 bg-[#faf8f5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="uppercase tracking-wider text-sm font-semibold text-[#d4a574] mb-4 text-center">
              The Challenge
            </p>

            <h2 className="font-display text-[48px] leading-[1.2] font-semibold text-[#1a2332] text-center mb-4">
              Where Your Pipeline Is Leaking
            </h2>

            <p className="font-body text-[18px] leading-[1.7] text-[#4a5568] text-center mb-16 max-w-3xl mx-auto">
              Solar teams spend $10K–$50K/month on paid leads, then lose 30–50% of potential appointments to preventable
              gaps
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Card 1 - standard position */}
              <div className="bg-[#faf8f5] border-t-4 border-[#d4a574] p-10 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                {problemCards[0].icon}
                <h3 className="font-display text-[28px] font-medium text-[#1a2332] mb-4 mt-6">
                  {problemCards[0].title}
                </h3>
                <p className="font-body text-[16px] leading-[1.6] text-[#4a5568]">{problemCards[0].description}</p>
              </div>

              {/* Card 2 - offset down 20px */}
              <div className="bg-[#faf8f5] border-t-4 border-[#d4a574] p-10 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 md:mt-20">
                {problemCards[1].icon}
                <h3 className="font-display text-[28px] font-medium text-[#1a2332] mb-4 mt-6">
                  {problemCards[1].title}
                </h3>
                <p className="font-body text-[16px] leading-[1.6] text-[#4a5568]">{problemCards[1].description}</p>
              </div>

              {/* Card 3 - offset down 20px */}
              <div className="bg-[#faf8f5] border-t-4 border-[#d4a574] p-10 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 md:mt-20">
                {problemCards[2].icon}
                <h3 className="font-display text-[28px] font-medium text-[#1a2332] mb-4 mt-6">
                  {problemCards[2].title}
                </h3>
                <p className="font-body text-[16px] leading-[1.6] text-[#4a5568]">{problemCards[2].description}</p>
              </div>

              {/* Card 4 - standard position */}
              <div className="bg-[#faf8f5] border-t-4 border-[#d4a574] p-10 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                {problemCards[3].icon}
                <h3 className="font-display text-[28px] font-medium text-[#1a2332] mb-4 mt-6">
                  {problemCards[3].title}
                </h3>
                <p className="font-body text-[16px] leading-[1.6] text-[#4a5568]">{problemCards[3].description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* DIY AI Toolkits vs. SolarSales AI Toolkit Comparison - Refined with border-left accent */}
        <section className="py-32 bg-[#f5f2ed]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-[48px] leading-[1.2] font-semibold text-[#1a2332] text-center mb-4">
              DIY AI Toolkits vs. SolarSales AI
            </h2>
            <p className="font-body text-[18px] leading-[1.7] text-[#4a5568] text-center mb-16 max-w-3xl mx-auto">
              Most AI voice/SMS platforms give you the tools but expect you to become the operator. We're the opposite:
              you get results without the operational burden.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* DIY Toolkit Card */}
              <div className="bg-[#faf8f5] border-l-4 border-[#ef4444] p-12 rounded-lg shadow-sm">
                <h3 className="font-display text-[32px] font-semibold text-[#1a2332] mb-8 text-center">
                  With AI Phone Tools
                </h3>

                <div className="space-y-4 mb-8">
                  {toolkitBurdens.map((burden, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <span className="text-[#ef4444] text-xl font-bold">—</span>
                      <span className="font-body text-[16px] text-[#4a5568]">{burden}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-8 border-t border-[#ef4444]/20">
                  <Clock className="w-6 h-6 text-[#ef4444]" />
                  <span className="font-body text-[18px] font-semibold text-[#1a2332]">Weeks to launch</span>
                </div>
              </div>

              {/* SolarSales AI Card */}
              <div className="bg-[#faf8f5] border-l-4 border-[#d4a574] p-12 rounded-lg shadow-sm">
                <h3 className="font-display text-[32px] font-semibold text-[#1a2332] mb-8 text-center">
                  With SolarSales AI
                </h3>

                <div className="space-y-4 mb-8">
                  {ourApproach.map((approach, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <Check className="w-6 h-6 text-[#2d5f4f] flex-shrink-0 mt-1" />
                      <span className="font-body text-[16px] text-[#1a2332] font-medium">{approach}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-8 border-t border-[#d4a574]/20">
                  <Zap className="w-6 h-6 text-[#d4a574]" />
                  <span className="font-body text-[18px] font-semibold text-[#1a2332]">Week 1 operational</span>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-[#2d5f4f]/10 border-2 border-[#2d5f4f]/20 rounded-lg px-8 py-6 max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <TrendingUp className="w-8 h-8 text-[#2d5f4f] flex-shrink-0" />
                <p className="font-body text-[18px] leading-[1.7] text-[#1a2332] font-medium">
                  <strong>Bottom line:</strong> You don't become an AI operations team. We handle setup, campaigns,
                  optimization, and troubleshooting. You get appointments and conversion data.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Features - 6 Cards */}
        <section className="py-32 bg-[#faf8f5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="uppercase tracking-wider text-sm font-semibold text-[#d4a574] mb-4 text-center">
              Our Approach
            </p>

            <h2 className="font-display text-[48px] leading-[1.2] font-semibold text-[#1a2332] text-center mb-4">
              What We Actually Do For You
            </h2>
            <p className="font-body text-[18px] leading-[1.7] text-[#4a5568] text-center mb-16 max-w-3xl mx-auto">
              Think of us as your offshore team, but specialized for solar intake and revival
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutionFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-[#faf8f5] border-2 border-[#1a2332]/10 p-10 rounded hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-16 h-16 bg-[#d4a574]/10 rounded-full flex items-center justify-center mb-6">
                    <div className="text-[#1a2332]">{feature.icon}</div>
                  </div>
                  <h3 className="font-display text-[28px] leading-[1.3] font-medium text-[#1a2332] mb-3">
                    {feature.title}
                  </h3>
                  <p className="font-body text-[16px] leading-[1.6] text-[#4a5568]">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Teams Typically See Section */}
        <section className="py-32 bg-[#f5f2ed]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-[48px] leading-[1.2] font-semibold text-[#1a2332] text-center mb-4">
              What Teams Typically See
            </h2>
            <p className="font-body text-[18px] leading-[1.7] text-[#4a5568] text-center mb-16 max-w-3xl mx-auto">
              Based on results across 10–50 person residential solar teams using SolarSales AI:
            </p>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              {/* DLS Results */}
              <div className="bg-[#faf8f5] border-2 border-[#d4a574]/30 p-10 rounded shadow-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-[#d4a574]/20 to-[#d4a574]/10 rounded-full flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-[#d4a574]" />
                </div>
                <h3 className="font-display text-[36px] leading-[1.2] font-medium text-[#1a2332] mb-4">
                  Dead Leads Sprint (2–4 weeks)
                </h3>
                <ul className="space-y-4">
                  <li className="font-body text-[16px] leading-[1.6] text-[#4a5568]">
                    <strong className="text-[#1a2332]">30–50%</strong> of "dead" leads re-engage when contacted
                    systematically with AI voice + SMS
                  </li>
                  <li className="font-body text-[16px] leading-[1.6] text-[#4a5568]">
                    <strong className="text-[#1a2332]">15–25%</strong> of re-engaged leads book appointments after
                    qualification
                  </li>
                  <li className="font-body text-[16px] leading-[1.6] text-[#4a5568]">
                    <strong className="text-[#1a2332]">Example:</strong> Team with 1,000 dead leads typically books
                    150–250 new appointments from previously written-off pipeline
                  </li>
                </ul>
              </div>

              {/* RPS Results */}
              <div className="bg-[#faf8f5] border-2 border-[#1a2332]/20 p-10 rounded shadow-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1a2332]/20 to-[#1a2332]/10 rounded-full flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-[#1a2332]" />
                </div>
                <h3 className="font-display text-[36px] leading-[1.2] font-medium text-[#1a2332] mb-4">
                  Revenue Protection System (ongoing)
                </h3>
                <ul className="space-y-4">
                  <li className="font-body text-[16px] leading-[1.6] text-[#4a5568]">
                    <strong className="text-[#1a2332]">40–60%</strong> reduction in speed-to-lead gaps (from hours to
                    minutes)
                  </li>
                  <li className="font-body text-[16px] leading-[1.6] text-[#4a5568]">
                    <strong className="text-[#1a2332]">3–5x</strong> improvement in missed call follow-up rates vs.
                    manual processes
                  </li>
                  <li className="font-body text-[16px] leading-[1.6] text-[#4a5568]">
                    <strong className="text-[#1a2332]">20–35%</strong> increase in total qualified appointments compared
                    to pre-RPS baseline
                  </li>
                </ul>
              </div>
            </div>

            {/* Disclaimer and Callout */}
            <p className="font-body text-[16px] leading-[1.6] text-[#6b7280] text-center italic mb-8">
              *Results vary based on lead quality, market conditions, and offer specifics. Ranges shown reflect actual
              outcomes from solar teams spending $10K–$50K/month on paid leads.
            </p>

            <div className="bg-[#2d5f4f]/10 border-2 border-[#2d5f4f]/20 rounded-lg px-8 py-6 max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <TrendingUp className="w-8 h-8 text-[#2d5f4f] flex-shrink-0" />
                <p className="font-body text-[18px] leading-[1.7] text-[#1a2332]">
                  <strong>The common pattern:</strong> Teams see immediate value from DLS (proof that systematic AI
                  follow-up works), then expand to RPS when they realize the same logic applies to new leads and missed
                  calls.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solar Revenue Capture Program - Changed to STACKED full-width cards */}
        <section id="pricing" className="py-32 bg-[#faf8f5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="uppercase tracking-wider text-sm font-semibold text-[#d4a574] mb-4 text-center">
              Get Started
            </p>

            <h2 className="font-display text-[48px] leading-[1.2] font-semibold text-[#1a2332] text-center mb-4">
              Solar Revenue Capture Program
            </h2>
            <p className="font-body text-[18px] leading-[1.7] text-[#4a5568] text-center mb-16 max-w-3xl mx-auto">
              Two starting points, both designed to prove ROI before asking for long-term commitment
            </p>

            <div className="max-w-4xl mx-auto space-y-8">
              {/* DLS Card - Full Width, Dominant */}
              <div className="relative">
                {/* Badge positioned absolute */}
                <div className="absolute -top-4 left-8 bg-[#d4a574] text-[#1a2332] px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg z-10">
                  <Target className="w-4 h-4" />
                  Recommended Starting Point
                </div>

                <div className="bg-[#faf8f5] border-2 border-[#d4a574] rounded-lg p-12 shadow-md">
                  <div className="flex items-center gap-4 mb-6 mt-2">
                    <Zap className="w-12 h-12 text-[#d4a574]" />
                    <h3 className="font-display text-[36px] font-semibold text-[#1a2332]">Dead Leads Sprint (DLS)</h3>
                  </div>

                  <p className="uppercase tracking-wider text-sm font-semibold text-[#d4a574] mb-4">
                    Low-risk entry point
                  </p>

                  <p className="font-body text-[18px] leading-[1.7] text-[#4a5568] mb-8">
                    <strong className="text-[#1a2332]">What we do:</strong> We run a 2–4 week AI voice + SMS campaign on
                    your aged/dead leads. We call, qualify, and book appointments with prospects you've already paid for
                    but written off.
                  </p>

                  {/* Feature list */}
                  <div className="space-y-4 mb-12">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[#2d5f4f] flex-shrink-0 mt-1" />
                      <p className="font-body text-[16px] leading-[1.6] text-[#4a5568]">
                        <strong className="text-[#1a2332]">Low-risk entry:</strong> No CRM overhaul. We work from CSV
                        exports or API pulls.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[#2d5f4f] flex-shrink-0 mt-1" />
                      <p className="font-body text-[16px] leading-[1.6] text-[#4a5568]">
                        <strong className="text-[#1a2332]">Time-boxed:</strong> Fixed 2–4 week sprint. No ongoing
                        commitment.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[#2d5f4f] flex-shrink-0 mt-1" />
                      <p className="font-body text-[16px] leading-[1.6] text-[#4a5568]">
                        <strong className="text-[#1a2332]">Full visibility:</strong> Call recordings, transcripts, and
                        conversion data included.
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#f5f2ed] rounded-lg p-6 mb-8">
                    <p className="font-body text-[16px] leading-[1.6] text-[#1a2332]">
                      <strong>Typical outcome:</strong> Teams with 500–2,000 dead leads book 50–300 new appointments
                      from leads they already paid for. Even at 10% show rate, that's 5–30 kept appointments from buried
                      pipeline.
                    </p>
                  </div>

                  {/* CTA - full width */}
                  <Button className="w-full bg-[#1a2332] hover:bg-[#2d3748] text-[#faf8f5] py-6 text-lg font-semibold rounded-lg">
                    Start a Dead Leads Sprint
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>

                  <p className="font-body text-sm text-[#6b7280] text-center mt-4">
                    No obligation to continue after the sprint
                  </p>
                </div>
              </div>

              {/* RPS Card - Full Width, Secondary */}
              <div className="bg-[#faf8f5] border border-[#1a2332]/30 rounded-lg p-10 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <Shield className="w-10 h-10 text-[#1a2332]" />
                  <h3 className="font-display text-[32px] font-semibold text-[#1a2332]">
                    Revenue Protection System (RPS)
                  </h3>
                </div>

                <p className="uppercase tracking-wider text-sm font-semibold text-[#1a2332]/70 mb-4">
                  Ongoing pipeline protection
                </p>

                <p className="font-body text-[16px] leading-[1.7] text-[#4a5568] mb-8">
                  <strong className="text-[#1a2332]">What we do:</strong> We plug systematic AI follow-up into your
                  ongoing lead flow—new leads, missed calls, and after-hours inquiries.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#2d5f4f] flex-shrink-0 mt-1" />
                    <p className="font-body text-sm text-[#4a5568]">
                      <strong className="text-[#1a2332]">Rapid callbacks:</strong> New leads contacted within minutes
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#2d5f4f] flex-shrink-0 mt-1" />
                    <p className="font-body text-sm text-[#4a5568]">
                      <strong className="text-[#1a2332]">Missed call recovery:</strong> Systematic follow-up, not random
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#2d5f4f] flex-shrink-0 mt-1" />
                    <p className="font-body text-sm text-[#4a5568]">
                      <strong className="text-[#1a2332]">After-hours coverage:</strong> No more leads going cold
                      overnight
                    </p>
                  </div>
                </div>

                <div className="bg-[#f5f2ed] rounded-lg p-5 mb-8">
                  <p className="font-body text-sm text-[#1a2332]">
                    <strong>Typical outcome:</strong> 20–35% more qualified appointments from the same ad spend
                  </p>
                </div>

                {/* CTA - outlined */}
                <Button className="w-full bg-transparent border-2 border-[#1a2332] text-[#1a2332] hover:bg-[#1a2332]/5 py-6 text-lg font-semibold rounded-lg">
                  Learn About RPS
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>

                <p className="font-body text-xs text-[#6b7280] text-center mt-4">
                  Recommended after DLS validates the approach
                </p>
              </div>
            </div>

            {/* Bottom guidance */}
            <div className="mt-16 text-center">
              <p className="font-body text-[18px] leading-[1.7] text-[#4a5568] max-w-3xl mx-auto">
                <strong className="text-[#1a2332]">Not sure which to choose?</strong> Start with Dead Leads Sprint. It
                proves the concept with minimal risk. If it works, expanding to RPS is straightforward.
              </p>
            </div>
          </div>
        </section>

        {/* How We Work With Your Team */}
        <section className="py-32 bg-[#f5f2ed]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-[48px] leading-[1.2] font-semibold text-[#1a2332] text-center mb-4">
              How We Work With Your Team
            </h2>
            <p className="font-body text-[18px] leading-[1.7] text-[#4a5568] text-center mb-16 max-w-3xl mx-auto">
              Three-step integration that doesn't disrupt your current operations
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="relative bg-[#faf8f5] border-2 border-[#1a2332]/10 p-10 rounded shadow-sm">
                <div className="absolute -top-4 left-8">
                  <div className="w-16 h-16 bg-[#1a2332] text-[#faf8f5] rounded-full flex items-center justify-center font-display text-2xl font-semibold shadow-md">
                    1
                  </div>
                </div>
                <div className="pt-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#1a2332]/10 rounded-full flex items-center justify-center">
                      <Search className="w-6 h-6 text-[#1a2332]" />
                    </div>
                    <h3 className="font-display text-[28px] leading-[1.3] font-medium text-[#1a2332]">
                      Lead Flow Audit
                    </h3>
                  </div>
                  <p className="font-body text-[16px] leading-[1.6] text-[#4a5568]">
                    We audit your current lead sources, CRM, and appointment flow. We identify where leads are leaking
                    and how to plug those gaps without overhauling your tech stack.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative bg-[#faf8f5] border-2 border-[#1a2332]/10 p-10 rounded shadow-sm">
                <div className="absolute -top-4 left-8">
                  <div className="w-16 h-16 bg-[#1a2332] text-[#faf8f5] rounded-full flex items-center justify-center font-display text-2xl font-semibold shadow-md">
                    2
                  </div>
                </div>
                <div className="pt-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#1a2332]/10 rounded-full flex items-center justify-center">
                      <Settings className="w-6 h-6 text-[#1a2332]" />
                    </div>
                    <h3 className="font-display text-[28px] leading-[1.3] font-medium text-[#1a2332]">
                      Setup & Integration
                    </h3>
                  </div>
                  <p className="font-body text-[16px] leading-[1.6] text-[#4a5568] mb-6">
                    We connect to your CRM, calendar, and lead sources. We configure qualification scripts, calling
                    hours, and appointment booking logic based on your ICP and offer.
                  </p>

                  {/* Choice Structure */}
                  <div className="space-y-3">
                    <div className="bg-[#d4a574]/10 border-2 border-[#d4a574]/30 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-5 h-5 border-2 border-[#d4a574] rounded-full flex items-center justify-center">
                          <div className="w-2.5 h-2.5 bg-[#d4a574] rounded-full"></div>
                        </div>
                        <p className="font-body text-sm font-semibold text-[#1a2332]">Dead Leads Sprint</p>
                      </div>
                      <p className="font-body text-xs text-[#4a5568] ml-8">CSV export or API pull of aged leads</p>
                    </div>

                    <div className="bg-[#1a2332]/5 border-2 border-[#1a2332]/20 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-5 h-5 border-2 border-[#1a2332] rounded-full"></div>
                        <p className="font-body text-sm font-semibold text-[#1a2332]">Revenue Protection System</p>
                      </div>
                      <p className="font-body text-xs text-[#4a5568] ml-8">Real-time integration with lead flow</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative bg-[#faf8f5] border-2 border-[#1a2332]/10 p-10 rounded shadow-sm">
                <div className="absolute -top-4 left-8">
                  <div className="w-16 h-16 bg-[#1a2332] text-[#faf8f5] rounded-full flex items-center justify-center font-display text-2xl font-semibold shadow-md">
                    3
                  </div>
                </div>
                <div className="pt-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#1a2332]/10 rounded-full flex items-center justify-center">
                      <Rocket className="w-6 h-6 text-[#1a2332]" />
                    </div>
                    <h3 className="font-display text-[28px] leading-[1.3] font-medium text-[#1a2332]">
                      Campaign Launch
                    </h3>
                  </div>
                  <p className="font-body text-[16px] leading-[1.6] text-[#4a5568]">
                    We run your campaigns, monitor performance, and optimize based on conversion data. You get weekly
                    reporting, call recordings, and appointment confirmations flowing into your calendar.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="font-body text-[18px] leading-[1.7] text-[#1a2332]">
                <strong>Timeline:</strong> Most teams are operational within 7–10 days from kickoff to first campaign
                launch.
              </p>
            </div>
          </div>
        </section>

        {/* Your First 30 Days Timeline Section - Converted to HORIZONTAL with connecting lines */}
        <section className="py-32 bg-[#faf8f5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-[48px] leading-[1.2] font-semibold text-[#1a2332] text-center mb-4">
              Your First 30 Days with SolarSales AI
            </h2>
            <p className="font-body text-[18px] leading-[1.7] text-[#4a5568] text-center mb-16">
              Here's exactly what happens from Lead Flow Audit to seeing appointments on your calendar:
            </p>

            <div className="relative">
              {/* Connecting line (desktop only) */}
              <div className="hidden lg:block absolute top-8 left-0 right-0 h-1 bg-[#d4a574]/20" />

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                {/* Week 1 */}
                <div className="relative">
                  <div className="relative z-10 w-16 h-16 bg-[#d4a574] rounded-full flex items-center justify-center mb-6 shadow-lg mx-auto lg:mx-0">
                    <span className="font-display text-[24px] font-bold text-[#1a2332]">1</span>
                  </div>

                  <div className="bg-[#faf8f5] border border-[#d4a574]/20 p-8 rounded-lg shadow-sm">
                    <h3 className="font-display text-[24px] font-semibold text-[#1a2332] mb-4 text-center lg:text-left">
                      Week 1: Audit & Setup
                    </h3>
                    <p className="font-body text-[16px] leading-[1.6] text-[#4a5568] mb-6">
                      Lead Flow Audit Call to identify leakage points. Script & criteria approval. Integration scoping.
                    </p>
                    <ul className="space-y-2">
                      <li className="font-body text-sm text-[#4a5568]">• CRM & calendar analysis</li>
                      <li className="font-body text-sm text-[#4a5568]">• Script approval</li>
                      <li className="font-body text-sm text-[#4a5568]">• Branding configuration</li>
                    </ul>
                  </div>
                </div>

                {/* Week 2 */}
                <div className="relative">
                  <div className="relative z-10 w-16 h-16 bg-[#d4a574] rounded-full flex items-center justify-center mb-6 shadow-lg mx-auto lg:mx-0">
                    <span className="font-display text-[24px] font-bold text-[#1a2332]">2</span>
                  </div>

                  <div className="bg-[#faf8f5] border border-[#d4a574]/20 p-8 rounded-lg shadow-sm">
                    <h3 className="font-display text-[24px] font-semibold text-[#1a2332] mb-4 text-center lg:text-left">
                      Week 2: Integration
                    </h3>
                    <p className="font-body text-[16px] leading-[1.6] text-[#4a5568] mb-6">
                      Technical integration completed. Test campaign conducted with your feedback.
                    </p>
                    <ul className="space-y-2">
                      <li className="font-body text-sm text-[#4a5568]">• CRM connection live</li>
                      <li className="font-body text-sm text-[#4a5568]">• 10–20 test calls</li>
                      <li className="font-body text-sm text-[#4a5568]">• Script refinement</li>
                    </ul>
                  </div>
                </div>

                {/* Week 3-4 */}
                <div className="relative">
                  <div className="relative z-10 w-16 h-16 bg-[#d4a574] rounded-full flex items-center justify-center mb-6 shadow-lg mx-auto lg:mx-0">
                    <span className="font-display text-[20px] font-bold text-[#1a2332]">3–4</span>
                  </div>

                  <div className="bg-[#faf8f5] border border-[#d4a574]/20 p-8 rounded-lg shadow-sm">
                    <h3 className="font-display text-[24px] font-semibold text-[#1a2332] mb-4 text-center lg:text-left">
                      Weeks 3–4: Launch
                    </h3>
                    <p className="font-body text-[16px] leading-[1.6] text-[#4a5568] mb-6">
                      Campaign goes live. Daily monitoring and weekly reporting begins.
                    </p>
                    <ul className="space-y-2">
                      <li className="font-body text-sm text-[#4a5568]">• DLS or RPS pilot starts</li>
                      <li className="font-body text-sm text-[#4a5568]">• Daily optimization</li>
                      <li className="font-body text-sm text-[#4a5568]">• Weekly reports</li>
                    </ul>
                  </div>
                </div>

                {/* Week 5+ */}
                <div className="relative">
                  <div className="relative z-10 w-16 h-16 bg-[#2d5f4f] rounded-full flex items-center justify-center mb-6 shadow-lg mx-auto lg:mx-0">
                    <span className="font-display text-[20px] font-bold text-[#faf8f5]">5+</span>
                  </div>

                  <div className="bg-[#faf8f5] border border-[#2d5f4f]/20 p-8 rounded-lg shadow-sm">
                    <h3 className="font-display text-[24px] font-semibold text-[#1a2332] mb-4 text-center lg:text-left">
                      Week 5+: Results
                    </h3>
                    <p className="font-body text-[16px] leading-[1.6] text-[#4a5568] mb-6">
                      Review data and decide: expand, continue, or pause. Zero obligation.
                    </p>
                    <ul className="space-y-2">
                      <li className="font-body text-sm text-[#4a5568]">• Appointments booked</li>
                      <li className="font-body text-sm text-[#4a5568]">• Show rate analysis</li>
                      <li className="font-body text-sm text-[#4a5568]">• Expansion decision</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <p className="font-body text-[20px] leading-[1.7] text-[#1a2332] font-semibold max-w-3xl mx-auto">
                We focus on proving ROI in the first 30 days before asking for long-term commitment.
              </p>
            </div>
          </div>
        </section>

        <section className="py-32 bg-[#1a2332]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#d4a574] rounded-full mb-6">
                <Shield className="w-10 h-10 text-[#1a2332]" />
              </div>

              <h2 className="font-display text-[48px] font-semibold text-[#faf8f5] mb-4">
                Compliance-First Contact Strategy
              </h2>

              <p className="font-body text-[20px] leading-[1.7] text-[#faf8f5]/80 max-w-3xl mx-auto">
                We work exclusively with leads who have opted in through your forms, LSA campaigns, and paid lead
                sources.
              </p>
            </div>

            {/* 6 compliance points - 2x3 grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {/* Opt-In Verification */}
              <div className="bg-[#2d3748] p-8 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <CheckCircle className="w-8 h-8 text-[#d4a574]" />
                  <h4 className="font-display text-[20px] font-medium text-[#faf8f5]">Opt-In Verification</h4>
                </div>
                <p className="font-body text-[16px] leading-[1.6] text-[#faf8f5]/70">
                  We only contact leads who submitted your forms, called your LSA numbers, or came through verified lead
                  vendors with explicit consent documented. No cold lists, no scraped data.
                </p>
              </div>

              {/* Call Window Controls */}
              <div className="bg-[#2d3748] p-8 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <Clock className="w-8 h-8 text-[#d4a574]" />
                  <h4 className="font-display text-[20px] font-medium text-[#faf8f5]">Call Window Controls</h4>
                </div>
                <p className="font-body text-[16px] leading-[1.6] text-[#faf8f5]/70">
                  You set the calling hours (typically 9am–7pm in the lead's local time zone). We never call outside
                  your approved windows. After-hours leads get queued for next-day contact.
                </p>
              </div>

              {/* Instant Opt-Out */}
              <div className="bg-[#2d3748] p-8 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <XCircle className="w-8 h-8 text-[#d4a574]" />
                  <h4 className="font-display text-[20px] font-medium text-[#faf8f5]">Instant Opt-Out</h4>
                </div>
                <p className="font-body text-[16px] leading-[1.6] text-[#faf8f5]/70">
                  Every call includes clear opt-out language. SMS replies with "STOP" are honored immediately and
                  permanently. DNC requests are synced to your CRM within minutes.
                </p>
              </div>

              {/* Clear Caller Identification */}
              <div className="bg-[#2d3748] p-8 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <Phone className="w-8 h-8 text-[#d4a574]" />
                  <h4 className="font-display text-[20px] font-medium text-[#faf8f5]">Clear Caller Identification</h4>
                </div>
                <p className="font-body text-[16px] leading-[1.6] text-[#faf8f5]/70">
                  All calls identify your company name, purpose of contact, and callback number. No spoofed numbers, no
                  misleading caller IDs.
                </p>
              </div>

              {/* Regular Compliance Audits */}
              <div className="bg-[#2d3748] p-8 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <FileCheck className="w-8 h-8 text-[#d4a574]" />
                  <h4 className="font-display text-[20px] font-medium text-[#faf8f5]">Regular Compliance Audits</h4>
                </div>
                <p className="font-body text-[16px] leading-[1.6] text-[#faf8f5]/70">
                  Monthly compliance reviews are included in setup. We monitor call recordings, check opt-out handling,
                  and verify consent documentation.
                </p>
              </div>

              {/* Transparent Operations */}
              <div className="bg-[#2d3748] p-8 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <Eye className="w-8 h-8 text-[#d4a574]" />
                  <h4 className="font-display text-[20px] font-medium text-[#faf8f5]">Transparent Operations</h4>
                </div>
                <p className="font-body text-[16px] leading-[1.6] text-[#faf8f5]/70">
                  You have full access to call recordings, transcripts, and campaign logs. Nothing happens behind the
                  scenes.
                </p>
              </div>
            </div>

            {/* Trust badges - horizontal row */}
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="bg-[#2d3748] px-6 py-4 rounded-lg flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-[#d4a574]" />
                <span className="font-body text-sm font-semibold text-[#faf8f5]">TCPA-Safe</span>
              </div>
              <div className="bg-[#2d3748] px-6 py-4 rounded-lg flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-[#d4a574]" />
                <span className="font-body text-sm font-semibold text-[#faf8f5]">Opt-In Only</span>
              </div>
              <div className="bg-[#2d3748] px-6 py-4 rounded-lg flex items-center gap-3">
                <Clock className="w-6 h-6 text-[#d4a574]" />
                <span className="font-body text-sm font-semibold text-[#faf8f5]">Client-Controlled</span>
              </div>
              <div className="bg-[#2d3748] px-6 py-4 rounded-lg flex items-center gap-3">
                <Eye className="w-6 h-6 text-[#d4a574]" />
                <span className="font-body text-sm font-semibold text-[#faf8f5]">Full Transparency</span>
              </div>
            </div>
          </div>
        </section>

        {/* Built By Operators Section */}
        <section className="py-32 bg-[#faf8f5]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#f5f2ed] border-2 border-[#d4a574]/30 rounded-lg p-12 shadow-sm">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#d4a574]/20 to-[#d4a574]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="w-8 h-8 text-[#d4a574]" />
                </div>
                <div>
                  <h2 className="font-display text-[48px] leading-[1.2] font-semibold text-[#1a2332] mb-4">
                    Built By Solar Operators
                  </h2>
                  <p className="font-body text-[18px] leading-[1.7] text-[#4a5568]">
                    SolarSales AI was built by people who have run residential solar sales teams, managed lead flow,
                    dealt with CRMs that don't talk to each other, and know exactly how painful it is to watch leads go
                    cold because your setters are swamped.
                  </p>
                </div>
              </div>

              <p className="font-body text-[18px] leading-[1.7] text-[#4a5568] mb-6">
                We're not a generic AI voice platform trying to serve every industry. We built this specifically for
                solar operators who know the difference between a tire-kicker and a qualified homeowner, who understand
                why speed-to-lead matters in this space, and who are tired of watching their CAC climb while their
                appointment show rates drop.
              </p>

              <p className="font-body text-[18px] leading-[1.7] text-[#4a5568]">
                This is operator-to-operator. We know your pain points because we've lived them. That's why we focus on
                results (kept appointments, recovered revenue) instead of selling you software and walking away.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-32 bg-[#f5f2ed]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-[48px] leading-[1.2] font-semibold text-[#1a2332] text-center mb-4">
              Frequently Asked Questions
            </h2>
            <p className="font-body text-[18px] leading-[1.7] text-[#4a5568] text-center mb-16">
              Common questions from solar sales leaders
            </p>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-[#faf8f5] border-2 border-[#1a2332]/10 rounded-lg shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-[#f5f2ed] transition-colors duration-200"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-10 h-10 bg-[#1a2332]/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="w-5 h-5 text-[#1a2332]" />
                      </div>
                      <h3 className="font-display text-[28px] leading-[1.3] font-medium text-[#1a2332] pr-4">
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 text-[#1a2332] flex-shrink-0 transition-transform duration-200 ${
                        expandedFAQ === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      expandedFAQ === idx ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                    } overflow-hidden`}
                  >
                    <div className="px-8 pb-6 pl-22">
                      <p className="font-body text-[16px] leading-[1.6] text-[#4a5568] whitespace-pre-line">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 bg-[#1a2332] relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
            <h2 className="font-display text-[60px] leading-[1.1] font-semibold text-[#faf8f5] mb-6">
              Stop Losing Revenue on Leads You Already Paid For
            </h2>
            <p className="font-body text-[18px] leading-[1.7] text-[#faf8f5]/90 mb-12 max-w-2xl mx-auto">
              Schedule a Lead Flow Audit and we'll show you exactly where your pipeline is leaking—and how to plug those
              gaps without overhauling your tech stack.
            </p>
            <Button className="bg-[#d4a574] hover:bg-[#c49564] text-[#faf8f5] px-10 py-5 text-xl font-semibold rounded-lg transition-all duration-200 hover:shadow-md">
              Schedule Your Lead Audit
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
            <p className="font-body text-sm text-[#faf8f5]/70 mt-6">
              45-minute call. Zero obligation. We'll show you the gaps.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1a2332] border-t border-[#faf8f5]/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#d4a574] to-[#c49564] rounded-lg flex items-center justify-center shadow-sm">
                <Zap className="w-7 h-7 text-[#faf8f5]" />
              </div>
              <div className="text-2xl font-bold text-[#faf8f5] tracking-tight">SolarSales AI</div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 text-[#faf8f5]/70">
              <a href="#about" className="font-body text-sm hover:text-[#faf8f5] transition-colors">
                About
              </a>
              <a href="#how-it-works" className="font-body text-sm hover:text-[#faf8f5] transition-colors">
                How It Works
              </a>
              <a href="#pricing" className="font-body text-sm hover:text-[#faf8f5] transition-colors">
                Pricing
              </a>
              <a href="#faq" className="font-body text-sm hover:text-[#faf8f5] transition-colors">
                FAQ
              </a>
            </div>
            <div className="font-body text-sm text-[#faf8f5]/70">
              © {new Date().getFullYear()} SolarSales AI. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
