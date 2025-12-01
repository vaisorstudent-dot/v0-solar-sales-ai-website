"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  ShieldCheck,
  Calendar,
  Target,
  MessageSquare,
  PhoneCall,
  AlertTriangle,
  Database,
  Clock,
  X,
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
      // Adjusted scroll threshold for header
      setIsScrolled(window.scrollY > 50)
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
      icon: <Users className="w-8 h-8 text-blue-600" />,
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
      answer: `We book appointments directly into your existing calendar system (Google Calendar, Outlook, Calendly, Salesforce, HubSpot, or any calendar with API access). Integration happens during Week 1 setup.

What your closer sees when an appointment is booked:

Calendar Event with Full Context:
• Lead name, phone, email
• Appointment time (in your closer's local time zone)
• Source tag: "New Lead – AI Qualified" / "Missed Call Follow-Up" / "Dead Lead Revival"
• Best time to call if they need to reschedule
• Key qualification notes: homeowner status, electric bill range, timeline, HOA status, financing interest

Conversation Transcript (attached or linked):
• Complete record of AI conversation (voice + SMS)
• Objections addressed during qualification
• Questions the lead asked
• Any scheduling constraints or preferences

Confirmation to Lead:
• Lead receives calendar invite via email
• Confirmation SMS: "You're confirmed for [day/time] with [Closer Name] from [Your Company]. You'll get a reminder 24 hours before. Looking forward to showing you your solar savings!"
• 24-hour reminder SMS sent automatically

Your closer treats it like any other booked appointment — they call at the scheduled time with full context on what the lead cares about. We don't replace your closers; we make sure they're spending time on qualified, expecting-the-call leads instead of chasing cold prospects.

If the lead no-shows, we can handle re-engagement via AI (part of RPS) or your team can follow up manually — your choice.`,
    },
  ]

  return (
    <div className="min-h-screen bg-white font-body">
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ease-out ${
          isScrolled
            ? "bg-[#faf8f5]/95 backdrop-blur-lg shadow-md border-b border-[#d4a574]/20"
            : "bg-[#faf8f5] border-b border-transparent"
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
        {/* Hero Section */}
        <section className="relative py-32 bg-[#faf8f5] overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="uppercase tracking-wider text-sm font-semibold text-[#d4a574] mb-4"
            >
              Managed Solar Lead Intake
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 bg-[#d4a574]/10 border border-[#d4a574]/30 px-4 py-2 rounded-full mb-8"
            >
              <div className="w-2 h-2 bg-[#d4a574] rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-[#d4a574]">Trusted by U.S. Solar Sales Teams</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="font-display text-[60px] leading-[1.05] font-semibold text-[#1a2332] mb-8 tracking-tight"
            >
              Turn More of Your Paid Leads Into <span className="text-[#d4a574]">Kept Appointments</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="font-body text-[18px] leading-[1.7] text-[#4a5568] mb-12 max-w-3xl mx-auto"
            >
              We run a managed AI voice + SMS service that handles rapid callbacks, systematic follow-up, and dead lead
              revival—so your team can focus on closing instead of chasing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Button className="bg-[#1a2332] hover:bg-[#2d3748] active:bg-[#1a1f2e] text-[#faf8f5] border-2 border-[#1a2332] px-8 py-4 text-lg font-semibold transition-all duration-200 ease-out active:scale-[0.98] shadow-sm hover:shadow-md">
                Schedule a Lead Audit
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button className="bg-white hover:bg-[#1a2332]/5 active:bg-[#1a2332]/10 text-[#1a2332] border-2 border-[#1a2332] hover:border-[#2d3748] px-8 py-4 text-lg font-semibold transition-all duration-200 ease-out active:scale-[0.98]">
                See How It Works
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="flex flex-wrap items-center justify-center gap-8 text-[#4a5568]"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#d4a574]/10 rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-[#d4a574]" />
                </div>
                <div className="text-left">
                  <div className="font-body text-sm font-semibold text-[#1a2332]">TCPA-Safe</div>
                  <div className="font-body text-sm text-[#6b7280]">Opt-In Leads Only</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#d4a574]/10 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-[#d4a574]" />
                </div>
                <div className="text-left">
                  <div className="font-body text-sm font-semibold text-[#1a2332]">CRM Integration</div>
                  <div className="font-body text-sm text-[#6b7280]">Salesforce, HubSpot, More</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#d4a574]/10 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-[#d4a574]" />
                </div>
                <div className="text-left">
                  <div className="font-body text-sm font-semibold text-[#1a2332]">Solar-Specific</div>
                  <div className="font-body text-sm text-[#6b7280]">Built for Solar Sales</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SMS Conversation Demo - WITH FADE IN */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="py-32 bg-white"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="uppercase tracking-wider text-sm font-semibold text-[#d4a574] mb-4 text-center">
              Real Results
            </p>

            <h2 className="font-display text-[48px] leading-[1.1] font-semibold text-[#1a2332] text-center mb-4 tracking-tight">
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
        </motion.section>

        {/* Problem Section - WITH STAGGERED CARDS */}
        <section className="py-32 bg-[#f5f2ed]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="uppercase tracking-wider text-sm font-semibold text-[#d4a574] mb-4 text-center"
            >
              The Challenge
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-display text-[48px] leading-[1.1] font-semibold text-[#1a2332] text-center mb-4 tracking-tight"
            >
              Where Your Pipeline Is Leaking
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="font-body text-[18px] leading-[1.7] text-[#4a5568] text-center mb-16 max-w-3xl mx-auto"
            >
              You're spending serious money on leads. But systematic leakage is costing you 30–50% of your potential
              appointments before your setters even get a chance to qualify.
            </motion.p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {problemCards.map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                  className="bg-[#faf8f5] border-2 border-[#1a2332]/10 p-10 rounded transition-all duration-300 ease-out hover:shadow-md hover:-translate-y-1"
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 + 0.2, ease: "easeOut" }}
                    className="w-16 h-16 bg-[#d4a574]/10 rounded-full flex items-center justify-center mb-6"
                  >
                    <div className="text-[#1a2332]">{card.icon}</div>
                  </motion.div>
                  <h3 className="font-display text-[28px] leading-[1.3] font-medium text-[#1a2332] mb-3">
                    {card.title}
                  </h3>
                  <p className="font-body text-[16px] leading-[1.65] text-[#4a5568]">{card.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* DIY vs SolarSales AI Toolkit Comparison */}
        <section className="py-32 bg-[#f5f2ed]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-[48px] leading-[1.1] font-semibold text-[#1a2332] text-center mb-4 tracking-tight">
              DIY AI Toolkits vs. SolarSales AI
            </h2>
            <p className="font-body text-[18px] leading-[1.7] text-[#4a5568] text-center mb-16 max-w-3xl mx-auto">
              Most AI voice/SMS platforms give you the tools but expect you to become the operator. We're the opposite:
              you get results without the operational burden.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* DIY Burden Column */}
              <div className="bg-[#faf8f5] border-2 border-red-200 rounded-lg overflow-hidden">
                <div className="bg-red-50 border-b-2 border-red-200 px-8 py-6">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="w-8 h-8 text-red-600" />
                    <h3 className="font-display text-[28px] leading-[1.3] font-medium text-[#1a2332]">
                      DIY AI Toolkits
                    </h3>
                  </div>
                  <p className="font-body text-[16px] leading-[1.6] text-[#4a5568] mt-2">
                    You get access to software, but...
                  </p>
                </div>
                <div className="px-8 py-8 space-y-5">
                  {toolkitBurdens.map((burden, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <X className="w-5 h-5 text-red-600" />
                      </div>
                      <p className="font-body text-[16px] leading-[1.6] text-[#4a5568] pt-1">{burden}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* SolarSales AI Column */}
              <div className="bg-[#faf8f5] border-2 border-[#2d5f4f]/30 rounded-lg overflow-hidden">
                <div className="bg-[#2d5f4f]/10 border-b-2 border-[#2d5f4f]/30 px-8 py-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-8 h-8 text-[#2d5f4f]" />
                    <h3 className="font-display text-[28px] leading-[1.3] font-medium text-[#1a2332]">SolarSales AI</h3>
                  </div>
                  <p className="font-body text-[16px] leading-[1.6] text-[#4a5568] mt-2">We run it for you</p>
                </div>
                <div className="px-8 py-8 space-y-5">
                  {ourApproach.map((approach, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-[#2d5f4f]/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-5 h-5 text-[#2d5f4f]" />
                      </div>
                      <p className="font-body text-[16px] leading-[1.6] text-[#4a5568] pt-1">{approach}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 bg-[#2d5f4f]/10 border-2 border-[#2d5f4f]/20 rounded-lg px-8 py-6">
              <div className="flex items-start gap-4">
                <TrendingUp className="w-8 h-8 text-[#2d5f4f] flex-shrink-0" />
                <p className="font-body text-[18px] leading-[1.7] text-[#1a2332]">
                  <strong>Bottom line:</strong> You don't become an AI operations team. We handle setup, campaigns,
                  optimization, and troubleshooting. You get appointments and conversion data.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Features - WITH STAGGER */}
        <section className="py-32 bg-[#faf8f5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="uppercase tracking-wider text-sm font-semibold text-[#d4a574] mb-4 text-center"
            >
              Our Approach
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-display text-[48px] leading-[1.1] font-semibold text-[#1a2332] text-center mb-4 tracking-tight"
            >
              What We Actually Do For You
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="font-body text-[18px] leading-[1.7] text-[#4a5568] text-center mb-16 max-w-3xl mx-auto"
            >
              Think of us as your offshore team, but specialized for solar intake and revival
            </motion.p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutionFeatures.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                  className="bg-[#faf8f5] border-2 border-[#1a2332]/10 p-10 rounded transition-all duration-300 ease-out hover:shadow-md hover:-translate-y-1"
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 + 0.2, ease: "easeOut" }}
                    className="w-16 h-16 bg-[#d4a574]/10 rounded-full flex items-center justify-center mb-6"
                  >
                    <div className="text-[#1a2332]">{feature.icon}</div>
                  </motion.div>
                  <h3 className="font-display text-[28px] leading-[1.3] font-medium text-[#1a2332] mb-3">
                    {feature.title}
                  </h3>
                  <p className="font-body text-[16px] leading-[1.65] text-[#4a5568]">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What Teams Typically See - WITH LARGE NUMBERS */}
        <section className="py-32 bg-[#f5f2ed]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="uppercase tracking-wider text-sm font-semibold text-[#d4a574] mb-4 text-center"
            >
              Real Results
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-display text-[48px] leading-[1.1] font-semibold text-[#1a2332] text-center mb-4 tracking-tight"
            >
              What Teams Typically See
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="font-body text-[18px] leading-[1.7] text-[#4a5568] text-center mb-16 max-w-3xl mx-auto"
            >
              Based on results across 10–50 person residential solar teams using SolarSales AI:
            </motion.p>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              {/* DLS Results */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-[#faf8f5] border-2 border-[#d4a574]/30 p-10 rounded"
              >
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#f59e0b] to-[#d97706] rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-[32px] leading-[1.2] font-semibold text-[#1a2332] mb-2">
                      Dead Leads Sprint (2–4 weeks)
                    </h3>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="text-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="font-display text-[72px] leading-none font-bold text-[#d4a574] mb-4"
                    >
                      30–50%
                    </motion.div>
                    <p className="font-body text-[18px] leading-[1.7] text-[#4a5568]">
                      of "dead" leads re-engage when contacted systematically with AI voice + SMS
                    </p>
                  </div>

                  <div className="text-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                      className="font-display text-[72px] leading-none font-bold text-[#d4a574] mb-4"
                    >
                      15–25%
                    </motion.div>
                    <p className="font-body text-[18px] leading-[1.7] text-[#4a5568]">
                      of re-engaged leads book appointments after qualification
                    </p>
                  </div>

                  <div className="text-center pt-6 border-t-2 border-[#d4a574]/20">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                      className="font-display text-[56px] leading-none font-bold text-[#1a2332] mb-4"
                    >
                      150–250
                    </motion.div>
                    <p className="font-body text-[16px] leading-[1.65] text-[#4a5568] italic">
                      <strong>Example:</strong> Team with 1,000 dead leads typically books 150–250 new appointments from
                      previously written-off pipeline
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* RPS Results */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-[#faf8f5] border-2 border-[#2d5f4f]/30 p-10 rounded"
              >
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2d5f4f] to-[#1e4a3a] rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-[32px] leading-[1.2] font-semibold text-[#1a2332] mb-2">
                      Revenue Protection System (ongoing)
                    </h3>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="text-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="font-display text-[72px] leading-none font-bold text-[#2d5f4f] mb-4"
                    >
                      40–60%
                    </motion.div>
                    <p className="font-body text-[18px] leading-[1.7] text-[#4a5568]">
                      reduction in speed-to-lead gaps (from hours to minutes)
                    </p>
                  </div>

                  <div className="text-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                      className="font-display text-[72px] leading-none font-bold text-[#2d5f4f] mb-4"
                    >
                      3–5x
                    </motion.div>
                    <p className="font-body text-[18px] leading-[1.7] text-[#4a5568]">
                      improvement in missed call follow-up rates vs. manual processes
                    </p>
                  </div>

                  <div className="text-center pt-6 border-t-2 border-[#2d5f4f]/20">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                      className="font-display text-[56px] leading-none font-bold text-[#1a2332] mb-4"
                    >
                      20–35%
                    </motion.div>
                    <p className="font-body text-[16px] leading-[1.65] text-[#4a5568]">
                      increase in total qualified appointments compared to pre-RPS baseline
                    </p>
                  </div>
                </div>
              </motion.div>
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

        {/* Solar Revenue Capture Program - Two-Path Offer */}
        <section id="pricing" className="py-32 bg-[#faf8f5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="uppercase tracking-wider text-sm font-semibold text-[#d4a574] mb-4 text-center"
            >
              Get Started
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-display text-[48px] leading-[1.1] font-semibold text-[#1a2332] text-center mb-4 tracking-tight"
            >
              Solar Revenue Capture Program
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="font-body text-[18px] leading-[1.7] text-[#4a5568] text-center mb-16 max-w-3xl mx-auto"
            >
              Two starting points, both designed to prove ROI before asking for long-term commitment
            </motion.p>

            <div className="grid lg:grid-cols-5 gap-8 items-start">
              {/* Dead Leads Sprint - More Prominent (3 columns) */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="lg:col-span-3 bg-[#faf8f5] border-4 border-[#d4a574] rounded-lg shadow-md relative overflow-hidden"
              >
                {/* Badge */}
                <div className="absolute top-6 right-6">
                  <div className="bg-[#d4a574] text-[#faf8f5] px-4 py-2 rounded-full font-body text-sm font-semibold animate-pulse">
                    Recommended Starting Point
                  </div>
                </div>

                <div className="p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#d4a574]/20 to-[#d4a574]/10 rounded-full flex items-center justify-center">
                      <Zap className="w-8 h-8 text-[#d4a574]" />
                    </div>
                    <div>
                      <h3 className="font-display text-[36px] leading-[1.2] font-medium text-[#1a2332]">
                        Dead Leads Sprint
                      </h3>
                      <p className="font-body text-[16px] leading-[1.6] text-[#4a5568]">Time-boxed revival campaign</p>
                    </div>
                  </div>

                  <p className="font-body text-[18px] leading-[1.7] text-[#4a5568] mb-6">
                    <strong className="text-[#1a2332]">What we do:</strong> We run a 2–4 week AI voice + SMS campaign on
                    your aged/dead leads. We call, qualify, and book appointments with prospects you've already paid for
                    but written off.
                  </p>

                  <div className="space-y-4 mb-8">
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

                  <Button className="w-full bg-[#d4a574] hover:bg-[#c49564] active:bg-[#b48554] text-[#faf8f5] px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 ease-out active:scale-[0.98] hover:shadow-md">
                    Start Dead Leads Sprint
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>

                  <p className="font-body text-sm text-[#6b7280] text-center mt-4">
                    No obligation to continue after the sprint
                  </p>
                </div>
              </motion.div>

              {/* Revenue Protection System - Smaller (2 columns) */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="lg:col-span-2 bg-[#faf8f5] border-2 border-[#1a2332]/20 rounded-lg shadow-sm"
              >
                <div className="p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-[#1a2332]/10 rounded-full flex items-center justify-center">
                      <Shield className="w-7 h-7 text-[#1a2332]" />
                    </div>
                    <div>
                      <h3 className="font-display text-[28px] leading-[1.3] font-medium text-[#1a2332]">
                        Revenue Protection System
                      </h3>
                      <p className="font-body text-sm text-[#4a5568]">Ongoing intake & follow-up</p>
                    </div>
                  </div>

                  <p className="font-body text-[16px] leading-[1.6] text-[#4a5568] mb-6">
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
                        <strong className="text-[#1a2332]">Missed call recovery:</strong> Systematic follow-up, not
                        random
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

                  <Button className="w-full bg-[#1a2332] hover:bg-[#2d3748] active:bg-[#1a1f2e] text-[#faf8f5] px-6 py-3 text-base font-semibold rounded-lg transition-all duration-200 ease-out active:scale-[0.98]">
                    Start RPS Pilot
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>

                  <p className="font-body text-xs text-[#6b7280] text-center mt-4">
                    Recommended after DLS validates the approach
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Bottom guidance */}
            <div className="mt-16 text-center">
              <p className="font-body text-[18px] leading-[1.7] text-[#1a2332] max-w-3xl mx-auto">
                <strong className="text-[#1a2332]">Not sure which to choose?</strong> Start with Dead Leads Sprint. It
                proves the concept with minimal risk. If it works, expanding to RPS is straightforward.
              </p>
            </div>
          </div>
        </section>

        {/* How We Work With Your Team */}
        <section className="py-32 bg-[#f5f2ed]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-display text-[48px] leading-[1.1] font-semibold text-[#1a2332] text-center mb-4 tracking-tight"
            >
              How We Work With Your Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="font-body text-[18px] leading-[1.7] text-[#4a5568] text-center mb-16 max-w-3xl mx-auto"
            >
              Three-step integration that doesn't disrupt your current operations
            </motion.p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative bg-[#faf8f5] border-2 border-[#1a2332]/10 p-10 rounded shadow-sm"
              >
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
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                className="relative bg-[#faf8f5] border-2 border-[#1a2332]/10 p-10 rounded shadow-sm"
              >
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
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="relative bg-[#faf8f5] border-2 border-[#1a2332]/10 p-10 rounded shadow-sm"
              >
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
              </motion.div>
            </div>

            <div className="mt-12 text-center">
              <p className="font-body text-[18px] leading-[1.7] text-[#1a2332]">
                <strong>Timeline:</strong> Most teams are operational within 7–10 days from kickoff to first campaign
                launch.
              </p>
            </div>
          </div>
        </section>

        {/* Your First 30 Days Timeline Section */}
        <section className="py-32 bg-[#faf8f5]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-display text-[48px] leading-[1.1] font-semibold text-[#1a2332] text-center mb-4 tracking-tight"
            >
              Your First 30 Days with SolarSales AI
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="font-body text-[18px] leading-[1.7] text-[#4a5568] text-center mb-16"
            >
              Here's exactly what happens from Lead Flow Audit to seeing appointments on your calendar:
            </motion.p>

            <div className="relative space-y-12">
              {/* Vertical timeline line */}
              <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-[#1a2332]/20"></div>

              {/* Stage 1 */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative pl-24"
              >
                <div className="absolute left-0 top-0 w-16 h-16 bg-[#1a2332] text-[#faf8f5] rounded-full flex items-center justify-center font-display text-2xl font-semibold shadow-md">
                  1
                </div>
                <div className="bg-[#faf8f5] border-2 border-[#1a2332]/10 p-10 rounded shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#1a2332]/10 rounded-full flex items-center justify-center">
                      <Search className="w-5 h-5 text-[#1a2332]" />
                    </div>
                    <h3 className="font-display text-[28px] leading-[1.3] font-medium text-[#1a2332]">
                      Week 1: Audit & Alignment
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="font-body text-[16px] leading-[1.6] text-[#1a2332] font-semibold mb-2">
                        Lead Flow Audit Call (45 minutes)
                      </p>
                      <ul className="space-y-2 ml-4">
                        <li className="font-body text-[16px] leading-[1.6] text-[#4a5568]">
                          • We analyze your current lead sources, CRM, and appointment flow
                        </li>
                        <li className="font-body text-[16px] leading-[1.6] text-[#4a5568]">
                          • Identify specific leakage points (speed-to-lead, missed calls, dead leads)
                        </li>
                        <li className="font-body text-[16px] leading-[1.6] text-[#4a5568]">
                          • Scope integration requirements (CRM, calendar, lead routing)
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-body text-[16px] leading-[1.6] text-[#1a2332] font-semibold mb-2">
                        Script & Criteria Approval
                      </p>
                      <ul className="space-y-2 ml-4">
                        <li className="font-body text-[16px] leading-[1.6] text-[#4a5568]">
                          • We draft qualification scripts based on your ICP and offer
                        </li>
                        <li className="font-body text-[16px] leading-[1.6] text-[#4a5568]">
                          • You review and approve: calling hours, qualification questions, booking logic
                        </li>
                        <li className="font-body text-[16px] leading-[1.6] text-[#4a5568]">
                          • We configure your branding and caller ID
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Stage 2 */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="relative pl-24"
              >
                <div className="absolute left-0 top-0 w-16 h-16 bg-[#1a2332] text-[#faf8f5] rounded-full flex items-center justify-center font-display text-2xl font-semibold shadow-md">
                  2
                </div>
                <div className="bg-[#faf8f5] border-2 border-[#1a2332]/10 p-10 rounded shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#1a2332]/10 rounded-full flex items-center justify-center">
                      <Settings className="w-5 h-5 text-[#1a2332]" />
                    </div>
                    <h3 className="font-display text-[28px] leading-[1.3] font-medium text-[#1a2332]">
                      Week 2: Setup & Testing
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="font-body text-[16px] leading-[1.6] text-[#1a2332] font-semibold mb-2">
                        Technical Integration
                      </p>
                      <ul className="space-y-2 ml-4">
                        <li className="font-body text-[16px] leading-[1.6] text-[#4a5568]">
                          • CRM connection established (Salesforce, HubSpot, Pipedrive, or custom API)
                        </li>
                        <li className="font-body text-[16px] leading-[1.6] text-[#4a5568]">
                          • Calendar integration completed (Google, Outlook, Calendly, etc.)
                        </li>
                        <li className="font-body text-[16px] leading-[1.6] text-[#4a5568]">
                          • Lead routing configured (new leads, missed calls, or dead lead lists)
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-body text-[16px] leading-[1.6] text-[#1a2332] font-semibold mb-2">
                        Test Campaign
                      </p>
                      <ul className="space-y-2 ml-4">
                        <li className="font-body text-[16px] leading-[1.6] text-[#4a5568]">
                          • We conduct 10–20 test calls with your guidance
                        </li>
                        <li className="font-body text-[16px] leading-[1.6] text-[#4a5568]">
                          • You review call recordings and provide feedback
                        </li>
                        <li className="font-body text-[16px] leading-[1.6] text-[#4a5568]">
                          • Scripts refined based on your input
                        </li>
                      </ul>
                    </div>
                    <div className="bg-[#f5f2ed] rounded-lg p-4 mt-4">
                      <p className="font-body text-[16px] leading-[1.6] text-[#1a2332]">
                        You approve everything before we go live.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Stage 3 */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="relative pl-24"
              >
                <div className="absolute left-0 top-0 w-16 h-16 bg-[#d4a574] text-[#faf8f5] rounded-full flex items-center justify-center font-display text-xl font-semibold shadow-md">
                  3–4
                </div>
                <div className="bg-[#faf8f5] border-2 border-[#d4a574]/30 p-10 rounded shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#d4a574]/10 rounded-full flex items-center justify-center">
                      <Rocket className="w-5 h-5 text-[#d4a574]" />
                    </div>
                    <h3 className="font-display text-[28px] leading-[1.3] font-medium text-[#1a2332]">
                      Week 3–4: Campaign Launch & Optimization
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="font-body text-[16px] leading-[1.6] text-[#4a5568]">
                      <strong className="text-[#1a2332]">Dead Leads Sprint:</strong> Revival campaign begins on
                      aged/dead leads
                    </li>
                    <li className="font-body text-[16px] leading-[1.6] text-[#4a5568]">
                      <strong className="text-[#1a2332]">RPS Pilot:</strong> New lead intake and missed call follow-up
                      starts
                    </li>
                    <li className="font-body text-[16px] leading-[1.6] text-[#4a5568]">
                      <strong className="text-[#1a2332]">What you get:</strong>
                      <ul className="ml-6 mt-2 space-y-1">
                        <li>• Daily campaign monitoring and optimization</li>
                        <li>• Weekly reporting: calls made, conversations held, appointments booked</li>
                        <li>• Call recordings and transcripts for quality review</li>
                        <li>• Adjustments based on your feedback and conversion data</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Stage 4 */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="relative pl-24"
              >
                <div className="absolute left-0 top-0 w-16 h-16 bg-[#2d5f4f] text-[#faf8f5] rounded-full flex items-center justify-center font-display text-xl font-semibold shadow-md">
                  5+
                </div>
                <div className="bg-[#faf8f5] border-2 border-[#2d5f4f]/30 p-10 rounded shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#2d5f4f]/10 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-[#2d5f4f]" />
                    </div>
                    <h3 className="font-display text-[28px] leading-[1.3] font-medium text-[#1a2332]">
                      Week 5+: Results & Decision Point
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="font-body text-[16px] leading-[1.6] text-[#1a2332] font-semibold mb-2">
                        You review the data:
                      </p>
                      <ul className="space-y-2 ml-4">
                        <li className="font-body text-[16px] leading-[1.6] text-[#4a5568]">
                          • Total appointments booked
                        </li>
                        <li className="font-body text-[16px] leading-[1.6] text-[#4a5568]">
                          • Show rates and qualification accuracy
                        </li>
                        <li className="font-body text-[16px] leading-[1.6] text-[#4a5568]">
                          • Revenue impact (if deals have closed)
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-body text-[16px] leading-[1.6] text-[#1a2332] font-semibold mb-2">
                        Then decide:
                      </p>
                      <ul className="space-y-2 ml-4">
                        <li className="font-body text-[16px] leading-[1.6] text-[#4a5568]">
                          • Dead Leads Sprint: Expand to full Revenue Protection System?
                        </li>
                        <li className="font-body text-[16px] leading-[1.6] text-[#4a5568]">
                          • RPS Pilot: Scale to full lead volume?
                        </li>
                        <li className="font-body text-[16px] leading-[1.6] text-[#4a5568]">
                          Zero obligation to continue if results don't justify expansion.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="mt-16 text-center">
              <p className="font-display text-[28px] leading-[1.3] font-medium text-[#1a2332]">
                We focus on proving ROI in the first 30 days before asking for long-term commitment.
              </p>
            </div>
          </div>
        </section>

        {/* What SolarSales AI Is Not */}
        <section className="py-32 bg-[#f5f2ed]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-display text-[48px] leading-[1.1] font-semibold text-[#1a2332] text-center mb-4 tracking-tight"
            >
              What SolarSales AI Is Not
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="font-body text-[18px] leading-[1.7] text-[#4a5568] text-center mb-16 max-w-3xl mx-auto"
            >
              Let's be clear about what we're not offering
            </motion.p>

            <div className="space-y-6">
              {whatWeAreNot.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                  className="bg-[#faf8f5] border-l-4 border-[#1a2332] p-10 rounded shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-[#1a2332]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <X className="w-6 h-6 text-[#1a2332]" />
                    </div>
                    <div>
                      <h3 className="font-display text-[28px] leading-[1.3] font-medium text-[#1a2332] mb-2">
                        {item.title}
                      </h3>
                      <p className="font-body text-[16px] leading-[1.6] text-[#4a5568]">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Who This Is For */}
        <section className="py-32 bg-[#faf8f5]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-display text-[48px] leading-[1.1] font-semibold text-[#1a2332] text-center mb-16 tracking-tight"
            >
              Who This Is For (And Who It's Not)
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Great For */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="bg-[#2d5f4f]/5 border-2 border-[#2d5f4f]/20 rounded-lg p-10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#2d5f4f]/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-[#2d5f4f]" />
                  </div>
                  <h3 className="font-display text-[36px] leading-[1.2] font-medium text-[#1a2332]">Great For</h3>
                </div>
                <ul className="space-y-4">
                  {greatFor.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#2d5f4f] flex-shrink-0 mt-1" />
                      <p className="font-body text-[16px] leading-[1.6] text-[#4a5568]">{item}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Not Right Fit */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="bg-red-50/50 border-2 border-red-200 rounded-lg p-10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <XCircle className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="font-display text-[36px] leading-[1.2] font-medium text-[#1a2332]">Not Right Fit</h3>
                </div>
                <ul className="space-y-4">
                  {notRightFit.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                      <p className="font-body text-[16px] leading-[1.6] text-[#4a5568]">{item}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Expanded Compliance Section */}
        <section className="py-32 bg-[#f5f2ed]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="uppercase tracking-wider text-sm font-semibold text-[#d4a574] mb-4 text-center"
            >
              How We Protect Your Business
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-display text-[48px] leading-[1.1] font-semibold text-[#1a2332] text-center mb-4 tracking-tight"
            >
              Opt-In Leads Only. TCPA-Safe Practices.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="font-body text-[18px] leading-[1.7] text-[#4a5568] text-center mb-16 max-w-3xl mx-auto"
            >
              We work exclusively with leads who have opted in through your forms, LSA campaigns, and paid lead sources.
              Here's exactly how we protect your business:
            </motion.p>

            <h3 className="font-display text-[36px] leading-[1.2] font-medium text-[#1a2332] text-center mb-12">
              How We Ensure TCPA Compliance
            </h3>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Compliance Subsections */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-[#faf8f5] border-2 border-[#1a2332]/10 p-10 rounded shadow-sm"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#1a2332]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-[#1a2332]" />
                  </div>
                  <div>
                    <h4 className="font-display text-[28px] leading-[1.3] font-medium text-[#1a2332] mb-2">
                      Opt-In Verification
                    </h4>
                    <p className="font-body text-[16px] leading-[1.6] text-[#4a5568]">
                      We only contact leads who submitted your forms, called your LSA numbers, or came through verified
                      lead vendors with explicit consent documented. No cold lists, no scraped data.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                className="bg-[#faf8f5] border-2 border-[#1a2332]/10 p-10 rounded shadow-sm"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#1a2332]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#1a2332]" />
                  </div>
                  <div>
                    <h4 className="font-display text-[28px] leading-[1.3] font-medium text-[#1a2332] mb-2">
                      Call Window Controls
                    </h4>
                    <p className="font-body text-[16px] leading-[1.6] text-[#4a5568]">
                      You set the calling hours (typically 9am–7pm in the lead's local time zone). We never call outside
                      your approved windows. After-hours leads get queued for next-day contact.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="bg-[#faf8f5] border-2 border-[#1a2332]/10 p-10 rounded shadow-sm"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#1a2332]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <XCircle className="w-5 h-5 text-[#1a2332]" />
                  </div>
                  <div>
                    <h4 className="font-display text-[28px] leading-[1.3] font-medium text-[#1a2332] mb-2">
                      Instant Opt-Out
                    </h4>
                    <p className="font-body text-[16px] leading-[1.6] text-[#4a5568]">
                      Every call includes clear opt-out language. SMS replies with "STOP" are honored immediately and
                      permanently. DNC requests are synced to your CRM within minutes.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                className="bg-[#faf8f5] border-2 border-[#1a2332]/10 p-10 rounded shadow-sm"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#1a2332]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#1a2332]" />
                  </div>
                  <div>
                    <h4 className="font-display text-[28px] leading-[1.3] font-medium text-[#1a2332] mb-2">
                      Clear Caller Identification
                    </h4>
                    <p className="font-body text-[16px] leading-[1.6] text-[#4a5568]">
                      All calls identify your company name, purpose of contact, and callback number. No spoofed numbers,
                      no misleading caller IDs.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                className="bg-[#faf8f5] border-2 border-[#1a2332]/10 p-10 rounded shadow-sm"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#1a2332]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FileCheck className="w-5 h-5 text-[#1a2332]" />
                  </div>
                  <div>
                    <h4 className="font-display text-[28px] leading-[1.3] font-medium text-[#1a2332] mb-2">
                      Regular Compliance Audits
                    </h4>
                    <p className="font-body text-[16px] leading-[1.6] text-[#4a5568]">
                      Monthly compliance reviews are included in setup. We monitor call recordings, check opt-out
                      handling, and verify consent documentation.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                className="bg-[#faf8f5] border-2 border-[#1a2332]/10 p-10 rounded shadow-sm"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#1a2332]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Eye className="w-5 h-5 text-[#1a2332]" />
                  </div>
                  <div>
                    <h4 className="font-display text-[28px] leading-[1.3] font-medium text-[#1a2332] mb-2">
                      Transparent Operations
                    </h4>
                    <p className="font-body text-[16px] leading-[1.6] text-[#4a5568]">
                      You have full access to call recordings, transcripts, and campaign logs. Nothing happens behind
                      the scenes.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-[#faf8f5] border-2 border-[#1a2332]/10 p-8 rounded shadow-sm text-center"
              >
                <div className="w-14 h-14 bg-[#1a2332]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="w-7 h-7 text-[#1a2332]" />
                </div>
                <p className="font-body text-sm font-semibold text-[#1a2332] mb-2">TCPA-Safe Practices</p>
                <p className="font-body text-xs text-[#4a5568]">Strict adherence to TCPA requirements</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                className="bg-[#faf8f5] border-2 border-[#2d5f4f]/30 p-8 rounded shadow-sm text-center"
              >
                <div className="w-14 h-14 bg-[#2d5f4f]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-7 h-7 text-[#2d5f4f]" />
                </div>
                <p className="font-body text-sm font-semibold text-[#1a2332] mb-2">Opt-In Leads Only</p>
                <p className="font-body text-xs text-[#4a5568]">Zero cold calling. Documented consent.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="bg-[#faf8f5] border-2 border-[#1a2332]/10 p-8 rounded shadow-sm text-center"
              >
                <div className="w-14 h-14 bg-[#1a2332]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-7 h-7 text-[#1a2332]" />
                </div>
                <p className="font-body text-sm font-semibold text-[#1a2332] mb-2">Client-Controlled Hours</p>
                <p className="font-body text-xs text-[#4a5568]">You set the windows. We respect them.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                className="bg-[#faf8f5] border-2 border-[#1a2332]/10 p-8 rounded shadow-sm text-center"
              >
                <div className="w-14 h-14 bg-[#1a2332]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-7 h-7 text-[#1a2332]" />
                </div>
                <p className="font-body text-sm font-semibold text-[#1a2332] mb-2">Full Transparency</p>
                <p className="font-body text-xs text-[#4a5568]">Complete access to all recordings and logs.</p>
              </motion.div>
            </div>

            {/* Highlight Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-[#2d5f4f]/10 border-2 border-[#2d5f4f]/20 rounded-lg px-10 py-8 max-w-4xl mx-auto"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2d5f4f]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-[#2d5f4f]" />
                </div>
                <p className="font-body text-[18px] leading-[1.7] text-[#1a2332]">
                  We're the safe way to capture more appointments from leads you already paid for, without compliance
                  risk. Your business, your rules, our execution.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Built By Operators Section */}
        <section className="py-32 bg-[#faf8f5]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="bg-[#f5f2ed] border-2 border-[#d4a574]/30 rounded-lg p-12 shadow-sm"
            >
              <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#d4a574] to-[#c49564] rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="font-display text-[48px] leading-[1.1] font-semibold text-[#1a2332] mb-4 tracking-tight">
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
            </motion.div>
          </div>
        </section>

        {/* FAQ Section - WITH SMOOTH ACCORDION */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="py-32 bg-[#faf8f5]"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-display text-[48px] leading-[1.1] font-semibold text-[#1a2332] text-center mb-16 tracking-tight"
            >
              Frequently Asked Questions
            </motion.h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                  className="bg-white border-2 border-[#1a2332]/10 rounded overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                    className="w-full flex items-start justify-between gap-4 p-6 text-left transition-colors hover:bg-[#faf8f5]"
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <div className="text-[#d4a574] flex-shrink-0 mt-1">
                        <MessageSquare className="w-6 h-6" />
                      </div>
                      <h3 className="font-display text-[24px] leading-[1.3] font-medium text-[#1a2332]">
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 text-[#1a2332] flex-shrink-0 transition-transform duration-300 ${
                        expandedFAQ === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <motion.div
                    initial={false}
                    animate={{ height: expandedFAQ === index ? "auto" : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="px-6 py-4 bg-[#f5f2ed] border-t-2 border-[#1a2332]/10">
                      <div className="pl-12">
                        <p className="font-body text-[16px] leading-[1.65] text-[#4a5568] whitespace-pre-line">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Final CTA Section - WITH FADE IN */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="py-32 bg-[#1a2332] relative overflow-hidden"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
            <h2 className="font-display text-[60px] leading-[1.1] font-semibold text-[#faf8f5] mb-6 tracking-tight">
              Stop Losing Revenue on Leads You Already Paid For
            </h2>
            <p className="font-body text-[18px] leading-[1.7] text-[#faf8f5]/90 mb-12 max-w-2xl mx-auto">
              Schedule a Lead Flow Audit and we'll show you exactly where your pipeline is leaking—and how to plug those
              gaps without overhauling your tech stack.
            </p>
            <Button className="bg-[#d4a574] hover:bg-[#c49564] active:bg-[#b48554] text-[#faf8f5] px-10 py-5 text-xl font-semibold rounded-lg transition-all duration-200 ease-out active:scale-[0.98] hover:shadow-md">
              Schedule Your Lead Audit
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
            <p className="font-body text-sm text-[#faf8f5]/70 mt-6">
              45-minute call. Zero obligation. We'll show you the gaps.
            </p>
          </div>
        </motion.section>
      </main>

      {/* Footer - WITH FADE IN */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-[#1a2332] border-t border-[#faf8f5]/10 py-16"
      >
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
      </motion.footer>
    </div>
  )
}
