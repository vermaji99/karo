"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Rocket, 
  TrendingUp, 
  Zap, 
  Globe, 
  Briefcase, 
  Smartphone, 
  Cpu, 
  Factory, 
  ShoppingBag,
  Award,
  ChevronRight,
  Play,
  Linkedin,
  Twitter,
  Instagram,
  Mail
} from "lucide-react";

// --- COMPONENTS ---
// Updated dependencies fix for Vercel build
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
              <Rocket className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-black">Karo <span className="text-blue-600">Pitch</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-zinc-600 hover:text-black font-medium transition-colors">About</a>
            <a href="#how-it-works" className="text-zinc-600 hover:text-black font-medium transition-colors">How it Works</a>
            <a href="#investors" className="text-zinc-600 hover:text-black font-medium transition-colors">Investors</a>
            <a href="#startups" className="text-zinc-600 hover:text-black font-medium transition-colors">Startups</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden sm:block text-black font-semibold px-4 py-2 hover:bg-zinc-100 rounded-full transition-all">
              Login
            </button>
            <button className="bg-black text-white px-6 py-2.5 rounded-full font-semibold hover:bg-zinc-800 transition-all shadow-lg shadow-black/5">
              Apply to Pitch
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-purple-50/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Applications now open for Spring 2026
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-black leading-tight mb-6">
              Pitch Your Startup to India’s <span className="text-blue-600">Top Investors</span>
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              Karo Pitch is a curated platform where startup founders from across India can present their ideas, connect with investors, and raise funding to grow their businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 group">
                Apply to Pitch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-black border border-zinc-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-zinc-50 transition-all flex items-center justify-center gap-2">
                Explore Startups
              </button>
            </div>
            <p className="mt-8 text-sm text-zinc-500 font-medium">
              Join a growing community of founders, investors, and innovators building the future of Bharat.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl shadow-blue-500/10 border border-zinc-100 p-4">
              <div className="rounded-2xl overflow-hidden aspect-video bg-zinc-100 flex items-center justify-center relative group">
                {/* Placeholder for hero visual */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
                <div className="z-10 text-center p-8">
                   <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg cursor-pointer hover:scale-110 transition-transform">
                     <Play className="text-blue-600 fill-blue-600 w-8 h-8 ml-1" />
                   </div>
                   <p className="text-black font-bold text-xl">Watch how Karo Pitch works</p>
                   <p className="text-zinc-600">Real pitches. Real investors. Real results.</p>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-xs font-bold text-black uppercase tracking-wider">Live Session</span>
                </div>
              </div>
            </div>
            {/* Floating cards */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-zinc-100 z-20 hidden sm:block animate-bounce-slow">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <TrendingUp className="text-blue-600 w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-medium">Total Funding Raised</p>
                  <p className="text-lg font-bold text-black">₹150Cr+</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-zinc-100 z-20 hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <Users className="text-purple-600 w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-medium">Active Investors</p>
                  <p className="text-lg font-bold text-black">500+</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Trust = () => {
  return (
    <section className="py-12 bg-white border-y border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-10">Trusted by founders across India & backed by KaroStartup</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
          <div className="flex items-center gap-2 text-xl font-bold text-zinc-800">
             <Rocket className="w-6 h-6" /> Startup India
          </div>
          <div className="flex items-center gap-2 text-xl font-bold text-zinc-800">
             <Users className="w-6 h-6" /> Founder Community
          </div>
          <div className="flex items-center gap-2 text-xl font-bold text-zinc-800">
             <Briefcase className="w-6 h-6" /> Investor Network
          </div>
          <div className="flex items-center gap-2 text-xl font-bold text-zinc-800">
             <Globe className="w-6 h-6" /> Bharat VC
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-zinc-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 bg-white p-8 rounded-3xl shadow-xl border border-zinc-100">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100">
                  <TrendingUp className="text-blue-600 w-10 h-10 mb-4" />
                  <h4 className="text-lg font-bold text-black mb-1">Visibility</h4>
                  <p className="text-sm text-zinc-600">Get discovered by top investors across India.</p>
                </div>
                <div className="p-6 rounded-2xl bg-purple-50 border border-purple-100">
                  <Briefcase className="text-purple-600 w-10 h-10 mb-4" />
                  <h4 className="text-lg font-bold text-black mb-1">Capital</h4>
                  <p className="text-sm text-zinc-600">Raise seed to Series A funding directly.</p>
                </div>
                <div className="p-6 rounded-2xl bg-green-50 border border-green-100">
                  <Users className="text-green-600 w-10 h-10 mb-4" />
                  <h4 className="text-lg font-bold text-black mb-1">Mentorship</h4>
                  <p className="text-sm text-zinc-600">Learn from seasoned industry experts.</p>
                </div>
                <div className="p-6 rounded-2xl bg-orange-50 border border-orange-100">
                  <Zap className="text-orange-600 w-10 h-10 mb-4" />
                  <h4 className="text-lg font-bold text-black mb-1">Growth</h4>
                  <p className="text-sm text-zinc-600">Scale your startup with the right partners.</p>
                </div>
              </div>
            </div>
            {/* Background shape */}
            <div className="absolute -top-10 -left-10 w-full h-full bg-blue-600/5 rounded-3xl -rotate-3 -z-10" />
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-black mb-6">What is Karo Pitch?</h2>
            <div className="space-y-6 text-lg text-zinc-600 leading-relaxed">
              <p>
                Thousands of founders across India are building incredible startups but many struggle to reach the right investors. Karo Pitch was created to bridge this gap.
              </p>
              <p>
                Through curated pitch events and a discovery platform, Karo Pitch helps promising startups showcase their ideas directly to investors, mentors, and the startup ecosystem.
              </p>
              <div className="p-6 bg-white border-l-4 border-blue-600 rounded-r-2xl shadow-sm italic text-black font-medium">
                "Our mission is to empower founders across Bharat by giving them access to capital, mentorship, and visibility."
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Apply with your pitch deck",
      desc: "Submit your startup details and pitch deck through the application portal.",
      icon: <Mail className="w-8 h-8" />
    },
    {
      id: 2,
      title: "Get shortlisted by KaroStartup",
      desc: "Our team reviews applications and selects promising startups.",
      icon: <CheckCircle2 className="w-8 h-8" />
    },
    {
      id: 3,
      title: "Pitch live to investors",
      desc: "Shortlisted founders present their startups to a curated panel of investors.",
      icon: <Users className="w-8 h-8" />
    },
    {
      id: 4,
      title: "Raise funding and scale",
      desc: "Founders connect with investors and secure funding to grow their businesses.",
      icon: <TrendingUp className="w-8 h-8" />
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">How Karo Pitch Works</h2>
          <p className="text-zinc-500 text-lg">A simple 4-step process to get your startup funded.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line for desktop */}
          <div className="hidden lg:block absolute top-1/4 left-[10%] right-[10%] h-0.5 bg-zinc-100 -z-10" />
          
          {steps.map((step) => (
            <div key={step.id} className="bg-white p-8 rounded-3xl border border-zinc-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all group">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                {step.icon}
              </div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-1 rounded">Step 0{step.id}</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">{step.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Categories = () => {
  const categories = [
    { title: "D2C Brands", icon: <ShoppingBag className="w-6 h-6" />, desc: "Consumer products built for modern India." },
    { title: "Consumer Startups", icon: <Smartphone className="w-6 h-6" />, desc: "Services and apps for the everyday Indian user." },
    { title: "MSMEs", icon: <Briefcase className="w-6 h-6" />, desc: "Scaling traditional businesses with technology." },
    { title: "SaaS Startups", icon: <Cpu className="w-6 h-6" />, desc: "Software solutions for Indian and global markets." },
    { title: "Manufacturing", icon: <Factory className="w-6 h-6" />, desc: "Building physical products in India, for the world." },
    { title: "Bharat-focused", icon: <Globe className="w-6 h-6" />, desc: "Startups solving problems for Tier 2 and Tier 3 cities." }
  ];

  return (
    <section className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Who Can Apply</h2>
          <p className="text-zinc-500 text-lg">We welcome startups from all sectors and stages across Bharat.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-zinc-100 flex items-start gap-4 hover:translate-y-[-4px] transition-transform">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                {cat.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-black mb-1">{cat.title}</h3>
                <p className="text-zinc-500 text-sm">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Investors = () => {
  return (
    <section id="investors" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-black mb-6 leading-tight">Meet Investors Looking for the <span className="text-blue-600">Next Big Startup</span></h2>
            <p className="text-lg text-zinc-600 mb-10 leading-relaxed">
              Karo Pitch connects founders with angel investors, venture capitalists, and startup mentors who are actively looking for innovative businesses to invest in.
            </p>
            <div className="space-y-4">
              {[
                "Direct access to active Angel Investors",
                "Connections with Venture Capital Firms",
                "One-on-one mentorship from Industry Experts",
                "Feedback from experienced Startup Mentors"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500 w-6 h-6" />
                  <span className="text-black font-medium">{item}</span>
                </div>
              ))}
            </div>
            <button className="mt-10 bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-zinc-800 transition-all">
              Apply to Pitch Now
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6 relative">
             <div className="absolute inset-0 bg-blue-100 rounded-[3rem] -rotate-3 -z-10 blur-2xl opacity-20" />
             <div className="space-y-6">
               <div className="bg-white p-6 rounded-2xl shadow-lg border border-zinc-100">
                 <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mb-4">
                   <Users className="w-6 h-6" />
                 </div>
                 <h4 className="font-bold text-black mb-1">Angel Investors</h4>
                 <p className="text-sm text-zinc-500">Early stage backers for bold ideas.</p>
               </div>
               <div className="bg-white p-6 rounded-2xl shadow-lg border border-zinc-100 translate-x-4">
                 <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                   <Briefcase className="w-6 h-6" />
                 </div>
                 <h4 className="font-bold text-black mb-1">VC Firms</h4>
                 <p className="text-sm text-zinc-500">Growth capital for scaling businesses.</p>
               </div>
             </div>
             <div className="space-y-6 pt-12">
               <div className="bg-white p-6 rounded-2xl shadow-lg border border-zinc-100">
                 <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-4">
                   <Award className="w-6 h-6" />
                 </div>
                 <h4 className="font-bold text-black mb-1">Industry Experts</h4>
                 <p className="text-sm text-zinc-500">Deep domain knowledge and network.</p>
               </div>
               <div className="bg-white p-6 rounded-2xl shadow-lg border border-zinc-100 translate-x-4">
                 <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-4">
                   <TrendingUp className="w-6 h-6" />
                 </div>
                 <h4 className="font-bold text-black mb-1">Mentors</h4>
                 <p className="text-sm text-zinc-500">Guidance for every step of your journey.</p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturedStartups = () => {
  const startups = [
    { name: "EcoCart", category: "Sustainability", desc: "A platform providing eco-friendly packaging solutions for eCommerce brands." },
    { name: "FarmLink", category: "AgriTech", desc: "Connecting farmers directly with retailers through a digital supply chain." },
    { name: "SkillForge", category: "EdTech", desc: "Helping students learn industry-ready skills through AI powered learning." },
    { name: "HealthPal", category: "HealthTech", desc: "Affordable healthcare solutions for remote communities in Bharat." },
    { name: "ZestPay", category: "FinTech", desc: "Simplifying cross-border payments for Indian MSMEs and freelancers." },
    { name: "SwiftLog", category: "Logistics", desc: "Hyper-local delivery solutions for small businesses using EV fleet." }
  ];

  return (
    <section id="startups" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-black mb-4">Featured Startups</h2>
            <p className="text-zinc-500 text-lg">Promising ventures from our recent cohorts.</p>
          </div>
          <button className="hidden sm:flex items-center gap-2 text-blue-600 font-bold hover:underline transition-all">
            View All Startups <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {startups.map((startup, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 border border-zinc-100 hover:shadow-2xl transition-all group">
              <div className="w-12 h-12 bg-zinc-100 rounded-2xl mb-6 flex items-center justify-center text-xl font-bold text-black">
                {startup.name[0]}
              </div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full mb-4 inline-block">
                {startup.category}
              </span>
              <h3 className="text-2xl font-bold text-black mb-3">{startup.name}</h3>
              <p className="text-zinc-500 mb-6 line-clamp-2">{startup.desc}</p>
              <button className="text-black font-bold flex items-center gap-2 group-hover:text-blue-600 transition-colors">
                Read Journey <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PoweredBy = () => {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-600/20 text-blue-400 border border-blue-600/30 text-sm font-bold uppercase tracking-widest">
              Powered by KaroStartup
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              India’s Fastest Growing <span className="text-blue-500">Startup Media Platform</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              KaroStartup is dedicated to showcasing startup stories, founder journeys, and innovations from across the country. We support founders by giving them visibility and connecting them with opportunities like Karo Pitch.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-3xl font-bold mb-1">1000+</p>
                <p className="text-zinc-500 text-sm uppercase tracking-widest">Stories Published</p>
              </div>
              <div>
                <p className="text-3xl font-bold mb-1">50k+</p>
                <p className="text-zinc-500 text-sm uppercase tracking-widest">Founder Community</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-zinc-900 rounded-[2.5rem] p-8 border border-zinc-800">
               <div className="aspect-[4/3] bg-zinc-800 rounded-2xl flex items-center justify-center">
                  <Globe className="w-32 h-32 text-blue-600/20 animate-pulse" />
               </div>
            </div>
            {/* Glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/10 rounded-full blur-[100px] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 rounded-[3rem] p-12 lg:p-20 text-center text-white">
           {/* Decorative elements */}
           <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
           <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

           <div className="relative z-10 max-w-3xl mx-auto">
             <h2 className="text-4xl lg:text-6xl font-bold mb-8">Ready to Pitch Your Startup?</h2>
             <p className="text-xl text-blue-100 mb-12 leading-relaxed">
               Take the next step in your startup journey. Apply to pitch your startup and connect with investors who believe in bold ideas.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <button className="bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-zinc-100 transition-all shadow-xl shadow-black/10">
                 Apply Now
               </button>
               <button className="bg-blue-500/20 backdrop-blur border border-white/20 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                 Partner With Us
               </button>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-zinc-50 pt-20 pb-10 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <Rocket className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-black">Karo <span className="text-blue-600">Pitch</span></span>
            </div>
            <p className="text-zinc-500 max-w-xs mb-8">
              Empowering Indian founders with capital, mentorship, and the visibility they deserve.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white border border-zinc-200 rounded-full flex items-center justify-center hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white border border-zinc-200 rounded-full flex items-center justify-center hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white border border-zinc-200 rounded-full flex items-center justify-center hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-black mb-6 uppercase text-xs tracking-widest">Platform</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-zinc-500 hover:text-blue-600 transition-colors">Apply to Pitch</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-blue-600 transition-colors">Explore Startups</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-blue-600 transition-colors">How it Works</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-blue-600 transition-colors">Success Stories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-black mb-6 uppercase text-xs tracking-widest">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-zinc-500 hover:text-blue-600 transition-colors">About Karo Pitch</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-blue-600 transition-colors">KaroStartup</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-blue-600 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-blue-600 transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-black mb-6 uppercase text-xs tracking-widest">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-zinc-500 hover:text-blue-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-blue-600 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-blue-600 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
          <p>© 2026 Karo Pitch by KaroStartup. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-black transition-colors">Made for Bharat</a>
            <a href="#" className="hover:text-black transition-colors">Building the Future</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- MAIN PAGE ---

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-950 selection:bg-blue-100 selection:text-blue-700">
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <About />
        <HowItWorks />
        <Categories />
        <Investors />
        <FeaturedStartups />
        <PoweredBy />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
