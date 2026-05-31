"use client";

import { m } from "framer-motion";
import Link from "next/link";
import GlassmorphismCard from "@/components/glassmorphism-card";
import CTASection from "@/components/CTASection";
import { 
  Film, 
  Sparkles, 
  Video, 
  Package, 
  Check, 
  Clock, 
  AlertCircle, 
  ArrowRight
} from "lucide-react";

export default function WorkWithMePage() {
  const packages = [
    {
      id: "reels-editing",
      title: "Reels Editing",
      price: "₹1,000",
      priceSuffix: "starting",
      description: "Fast-paced, engaging short-form content optimized for maximum engagement on TikTok, Instagram, and Shorts.",
      icon: Film,
      glowColor: "shadow-[0_0_30px_rgba(59,130,246,0.15)] group-hover:shadow-[0_0_40px_rgba(59,130,246,0.35)]",
      borderColor: "border-blue-500/20 group-hover:border-blue-500/40",
      iconBg: "bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20",
      buttonStyle: "bg-blue-600/10 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/30",
      features: [
        "Clean cuts and pacing",
        "Engaging captions/subtitles",
        "Trending background music sync",
        "Color adjustments & grading",
        "Optimized for social media algorithm"
      ]
    },
    {
      id: "premium-reels",
      title: "Premium Reels",
      price: "₹1,500",
      priceSuffix: "starting",
      description: "High-retention short-form content with custom motion graphics, sound design, and advanced visual techniques.",
      icon: Sparkles,
      isPopular: true,
      glowColor: "shadow-[0_0_30px_rgba(168,85,247,0.2)] group-hover:shadow-[0_0_45px_rgba(168,85,247,0.45)]",
      borderColor: "border-purple-500/30 group-hover:border-purple-500/50",
      iconBg: "bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20",
      buttonStyle: "bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]",
      features: [
        "Advanced dynamic captions & emojis",
        "Custom motion graphics & keyframing",
        "Layered sound design & sound effects (SFX)",
        "Premium transitions & zoom effects",
        "Strategic B-roll & overlay placement",
        "High-retention storytelling framework"
      ]
    },
    {
      id: "long-form-content",
      title: "Long Form Content",
      price: "₹3,000",
      priceSuffix: "starting",
      description: "Professional horizontal editing for YouTube videos, podcasts, interviews, and documentary storytelling.",
      icon: Video,
      glowColor: "shadow-[0_0_30px_rgba(249,115,22,0.15)] group-hover:shadow-[0_0_40px_rgba(249,115,22,0.35)]",
      borderColor: "border-orange-500/20 group-hover:border-orange-500/40",
      iconBg: "bg-orange-500/10 text-orange-400 group-hover:bg-orange-500/20",
      buttonStyle: "bg-orange-600/10 hover:bg-orange-600 text-orange-300 hover:text-white border border-orange-500/30",
      features: [
        "Clean pacing, matching narrative flow",
        "Multi-cam & audio synchronization",
        "Professional sound mixing & balancing",
        "Cinematic grading and title cards",
        "Up to 5 minutes base duration",
        "Tailored to YouTube/podcast standards"
      ]
    },
    {
      id: "monthly-packages",
      title: "Monthly Packages",
      price: "Custom",
      priceSuffix: "pricing",
      description: "Consistency is key. Get a continuous stream of tailored content designed to scale your personal brand or business.",
      icon: Package,
      glowColor: "shadow-[0_0_30px_rgba(16,185,129,0.15)] group-hover:shadow-[0_0_40px_rgba(16,185,129,0.35)]",
      borderColor: "border-emerald-500/20 group-hover:border-emerald-500/40",
      iconBg: "bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20",
      buttonStyle: "bg-emerald-600/10 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/30",
      features: [
        "Custom content calendar & strategy",
        "Flexible mix of Reels & YouTube videos",
        "Prioritized turnaround times",
        "Dedicated communication channel",
        "Continuous performance-based editing tweaks",
        "Perfect for creators & brands scaling up"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center pt-32 pb-12 md:py-24 px-4 relative overflow-hidden">
      {/* Background Spotlight glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-purple-500/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header Section */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
            <span className="text-xs md:text-sm font-semibold text-blue-300 tracking-widest uppercase">
              Pricing & Packages
            </span>
          </div>
          <h1 className="text-4xl md:text-7xl font-bold mt-0 mb-4 text-white tracking-tight leading-tight">
            Work With <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Me</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Professional video editing packages designed to capture attention, boost engagement, and build a powerful visual brand.
          </p>
        </m.div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {packages.map((pkg, idx) => {
            const IconComponent = pkg.icon;
            return (
              <m.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="h-full group"
              >
                <GlassmorphismCard 
                  className={`p-8 h-full border ${pkg.borderColor} transition-all duration-500 relative flex flex-col justify-between ${pkg.glowColor}`}
                >
                  {/* Popular Tag */}
                  {pkg.isPopular && (
                    <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.4)] border border-purple-400/20">
                      Popular Choice
                    </div>
                  )}

                  <div>
                    {/* Header */}
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`p-3.5 rounded-2xl transition-colors duration-500 ${pkg.iconBg}`}>
                        <IconComponent size={24} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                          {pkg.title}
                        </h3>
                        <p className="text-gray-400 text-xs mt-1 font-light">
                          Professional Short-Form Edit
                        </p>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="flex items-baseline space-x-2 mb-6">
                      <span className="text-4xl md:text-5xl font-black text-white tracking-tight">
                        {pkg.price}
                      </span>
                      <span className="text-gray-500 text-sm font-mono uppercase tracking-wider">
                        / {pkg.priceSuffix}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm font-light leading-relaxed mb-8">
                      {pkg.description}
                    </p>

                    {/* Divider */}
                    <div className="h-px bg-white/5 w-full mb-8" />

                    {/* Features List */}
                    <div className="space-y-4 mb-8">
                      <h4 className="text-white text-xs uppercase tracking-widest font-bold opacity-60">
                        What's Included
                      </h4>
                      <ul className="space-y-3.5">
                        {pkg.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start text-gray-300 text-sm font-light">
                            <span className="mr-3 mt-0.5 p-0.5 bg-white/5 rounded-full text-emerald-400 border border-white/5 flex-shrink-0">
                              <Check size={12} strokeWidth={3} />
                            </span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Button */}
                  <Link href={`/contact?package=${pkg.id}`}>
                    <span className={`w-full py-4 px-6 rounded-2xl font-bold text-sm flex items-center justify-center transition-all duration-300 cursor-pointer ${pkg.buttonStyle}`}>
                      Get Started
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </GlassmorphismCard>
              </m.div>
            );
          })}
        </div>

        {/* Additional Pricing & Terms Details */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-20 px-4"
        >
          <GlassmorphismCard className="p-8 border border-white/5 bg-white/[0.01]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white/5 border border-white/10 rounded-2xl text-orange-400 mt-1 flex-shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Long Form Details</h4>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">
                    Base pricing includes a duration of <strong>Up to 5 Minutes</strong>.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 md:border-l md:border-white/5 md:pl-8">
                <div className="p-3 bg-white/5 border border-white/10 rounded-2xl text-blue-400 mt-1 flex-shrink-0">
                  <AlertCircle size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Additional Charges</h4>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">
                    Applies for longer duration, complex visual effect requirements, custom motion graphics, or fast-tracked delivery requests.
                  </p>
                </div>
              </div>
            </div>
          </GlassmorphismCard>
        </m.div>

        {/* Call To Action */}
        <CTASection
          title="Ready to Work Together?"
          description="Let's craft custom videos that capture your audience, drive traffic, and grow your brand."
          buttonText="Start Collaboration"
          href="/contact"
        />
      </div>
    </div>
  );
}
