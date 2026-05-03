"use client";

import { m } from "framer-motion";
import { Button } from "@/components/ui/button";
import GlassmorphismCard from "@/components/glassmorphism-card";
import {
  Video,
  Film,
  Camera,
  Search,
  Layout,
  MessageSquare,
  Zap,
  ArrowRight,
  Check,
  Share2,
  TrendingUp,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: Video,
      title: "Commercial & Brand Films",
      description:
        "High-impact promotional content designed to build brand identity and drive customer engagement.",
      features: [
        "Cinematic Brand Films",
        "Product Showcases",
        "Social Media Ad Campaigns",
        "Corporate Identity Videos",
        "High-End Color Grading",
      ],
      color: "text-blue-400",
    },
    {
      icon: Film,
      title: "Documentary & Storytelling",
      description:
        "Narrative-driven edits that transform raw footage into compelling stories with emotional depth.",
      features: [
        "Documentary Shorts",
        "Interview Highlights",
        "Narrative Clarity",
        "Pacing & Rhythm",
        "Atmospheric Sound Design",
      ],
      color: "text-purple-400",
    },
    {
      icon: Search,
      title: "Content Strategy & Planning",
      description:
        "End-to-end strategy to help brands build a consistent and powerful digital presence.",
      features: [
        "In-depth Brand Research",
        "Platform-Specific Strategy",
        "Content Planning & Calendars",
        "Posting Optimizations",
        "Target Audience Analysis",
      ],
      color: "text-emerald-400",
    },
    {
      icon: Camera,
      title: "Events & Weddings",
      description:
        "Cinematic preservation of life's most precious moments with professional editing.",
      features: [
        "Wedding Highlight Films",
        "Event Recaps",
        "Multicam Editing",
        "Emotional Storytelling",
        "Fast Turnaround Times",
      ],
      color: "text-yellow-400",
    },
    {
      icon: TrendingUp,
      title: "Social Media Optimization",
      description:
        "Tailored edits for platforms like Instagram, TikTok, and YouTube to maximize reach.",
      features: [
        "Retention-Focused Edits",
        "Engagement Hooks",
        "Platform-Specific Aspect Ratios",
        "Kinetic Typography",
        "Trending Audio Sync",
      ],
      color: "text-pink-400",
    },
    {
      icon: Layout,
      title: "Post-Production Management",
      description:
        "Comprehensive management of the editing process from data ingest to final delivery.",
      features: [
        "Project Organization",
        "VFX & Motion Graphics",
        "Audio Mastering",
        "Multi-Platform Delivery",
        "Revision Management",
      ],
      color: "text-cyan-400",
    },
  ];

  const packages = [
    {
      name: "Strategy Kickstart",
      price: "$500+",
      description: "Perfect for brands needing a clear content roadmap",
      features: [
        "Brand Research & Analysis",
        "30-Day Content Plan",
        "Platform Best Practices",
        "Research & Keywords",
        "Strategy Consultation",
      ],
      popular: false,
    },
    {
      name: "Professional Edit",
      price: "$1,200+",
      description: "Comprehensive editing for your primary brand assets",
      features: [
        "Primary Video (up to 3 min)",
        "2 Social Media Versions",
        "Color Grading & Audio",
        "Motion Graphics Intro/Outro",
        "Content Strategy Included",
        "3 Revisions",
      ],
      popular: true,
    },
    {
      name: "Narrative Documentary",
      price: "Custom",
      description: "Full-scale storytelling for long-form content",
      features: [
        "Narrative Development",
        "Long-Form Editing",
        "Advanced Sound Design",
        "Cinematic Color Suite",
        "Unlimited Revisions",
        "Distribution Advice",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            My Services
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            From strategic planning to final delivery, I offer comprehensive video editing
            and content strategy services to build your brand.
          </p>
        </m.div>

        {/* Services Grid */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {services.map((service, index) => (
            <m.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassmorphismCard className="p-6 h-full">
                <div className="space-y-4">
                  <service.icon className={`${service.color} mb-4`} size={32} />
                  <h3 className="text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-sm text-gray-300"
                      >
                        <Check className="mr-2 text-green-400" size={14} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassmorphismCard>
            </m.div>
          ))}
        </m.div>

        {/* Pricing Packages */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Project Packages
            </h2>
            <p className="text-gray-300 text-lg">
              Choose the right scale for your visual content needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <m.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <GlassmorphismCard
                  className={`p-8 h-full relative ${pkg.popular ? "ring-2 ring-blue-500" : ""}`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2 text-white">
                      {pkg.name}
                    </h3>
                    <div className="text-3xl font-bold text-blue-400 mb-2">
                      {pkg.price}
                    </div>
                    <p className="text-gray-400 text-sm">{pkg.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-sm text-gray-300"
                      >
                        <Check
                          className="mr-3 text-green-400 flex-shrink-0"
                          size={16}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${pkg.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-700 hover:bg-gray-600"}`}
                    asChild
                  >
                    <a href="/contact">Get Started</a>
                  </Button>
                </GlassmorphismCard>
              </m.div>
            ))}
          </div>
        </m.div>

        {/* Process Section */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mb-16"
        >
          <GlassmorphismCard className="p-8">
            <h3 className="text-2xl font-semibold mb-6 text-white text-center">
              My Creative Process
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Research",
                  description:
                    "Tailoring content strategy and planning for your brand",
                },
                {
                  step: "02",
                  title: "Selection",
                  description:
                    "Identifying key storytelling moments from raw footage",
                },
                {
                  step: "03",
                  title: "Assembly",
                  description: "Building the narrative structure with precision",
                },
                {
                  step: "04",
                  title: "Refinement",
                  description: "Polishing with color, sound, and platform optimization",
                },
              ].map((process) => (
                <div key={process.step} className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    {process.step}
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-white">
                    {process.title}
                  </h4>
                  <p className="text-gray-400 text-sm">{process.description}</p>
                </div>
              ))}
            </div>
          </GlassmorphismCard>
        </m.div>

        {/* CTA Section */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="text-center"
        >
          <GlassmorphismCard className="p-8">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss your vision and build something amazing together.
              I'm here to help bring your narrative to life with technical precision
              and strategic engineerings.
            </p>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <a href="/contact">
                Get a Quote <ArrowRight className="ml-2" size={20} />
              </a>
            </Button>
          </GlassmorphismCard>
        </m.div>
      </div>
    </div>
  );
}
