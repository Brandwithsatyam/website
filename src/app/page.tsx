import { Suspense } from "react";
import MouseMoveEffect from "@/components/mouse-move-effect";
import Hero from "@/components/hero";
import GlassmorphismCard from "@/components/glassmorphism-card";
import ProjectGrid from "@/components/project-grid";
import {
  getVideoCategoriesWithCountIncludingAll,
  getAllVideoProjectsFlattened
} from "@/lib/helper";
import { Video, BarChart3, Sparkles, Search, BookOpen, Smartphone } from "lucide-react";

export default function HomePage() {
  // Fetch data on the server
  const categories = getVideoCategoriesWithCountIncludingAll();
  const allProjects = getAllVideoProjectsFlattened(); // We need all projects initially for the grid to filter client-side

  return (
    <div className="min-h-screen relative overflow-hidden">
      <MouseMoveEffect />

      <Hero />

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 relative">
            {/* Spotlight Effect behind title */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />

            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white tracking-tight relative z-10">
              <span className="bg-gradient-to-r from-white via-blue-100 to-gray-400 bg-clip-text text-transparent">
                My Projects
              </span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              From cinematic brand films to high-energy commercial edits — I focus
              on crafting visual stories that are not just seen, but
              <span className="text-blue-400 font-medium"> felt</span>.
            </p>
          </div>

          <Suspense fallback={<div className="text-center py-20 text-gray-400">Loading projects...</div>}>
            <ProjectGrid initialCategories={categories} initialProjects={allProjects} />
          </Suspense>
        </div>
      </section>

      {/* What I Can Do Section */}
      <section className="py-24 px-4 sm:px-6 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              What I Can Do <span className="text-blue-500">for You</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              If you're looking for someone who blends creativity with technical
              skill, communicates clearly, and truly cares about results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Video Editing",
                description: "Professional editing with Premiere Pro and Photoshop.",
                icon: Video,
                color: "text-blue-400 group-hover:text-blue-300",
                bgGlow: "bg-blue-500/10 border-blue-500/20 group-hover:bg-blue-500/20 group-hover:border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]",
              },
              {
                title: "Content Strategy",
                description: "Planning what, where, and how to post for maximum impact.",
                icon: BarChart3,
                color: "text-orange-400 group-hover:text-orange-300",
                bgGlow: "bg-orange-500/10 border-orange-500/20 group-hover:bg-orange-500/20 group-hover:border-orange-500/30 shadow-[0_0_15px_rgba(249,115,22,0.1)] group-hover:shadow-[0_0_25px_rgba(249,115,22,0.3)]",
              },
              {
                title: "Motion Graphics",
                description: "Adding dynamic visual elements and kinetic typography.",
                icon: Sparkles,
                color: "text-purple-400 group-hover:text-purple-300",
                bgGlow: "bg-purple-500/10 border-purple-500/20 group-hover:bg-purple-500/20 group-hover:border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.1)] group-hover:shadow-[0_0_25px_rgba(168,85,247,0.3)]",
              },
              {
                title: "Brand Research",
                description: "In-depth analysis to tailor content to your brand voice.",
                icon: Search,
                color: "text-emerald-400 group-hover:text-emerald-300",
                bgGlow: "bg-emerald-500/10 border-emerald-500/20 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.1)] group-hover:shadow-[0_0_25px_rgba(16,185,129,0.3)]",
              },
              {
                title: "Storytelling",
                description: "Crafting narratives that resonate with your target audience.",
                icon: BookOpen,
                color: "text-amber-400 group-hover:text-amber-300",
                bgGlow: "bg-amber-500/10 border-amber-500/20 group-hover:bg-amber-500/20 group-hover:border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.1)] group-hover:shadow-[0_0_25px_rgba(245,158,11,0.3)]",
              },
              {
                title: "Platform Optimization",
                description: "Tailoring content for YouTube, Instagram, and more.",
                icon: Smartphone,
                color: "text-indigo-400 group-hover:text-indigo-300",
                bgGlow: "bg-indigo-500/10 border-indigo-500/20 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.1)] group-hover:shadow-[0_0_25px_rgba(99,102,241,0.3)]",
              },
            ].map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={service.title} className="h-full">
                  <GlassmorphismCard className="p-8 h-full group hover:bg-white/[0.03] hover:shadow-[0_0_40px_rgba(59,130,246,0.1)] transition-all duration-500">
                    <div className="flex flex-col items-center text-center h-full w-full justify-center">
                      <div className={`mb-6 w-16 h-16 flex items-center justify-center rounded-2xl border transition-all duration-500 transform group-hover:scale-110 ${service.bgGlow}`}>
                        <IconComponent size={28} strokeWidth={1.5} className={`${service.color} transition-colors duration-500`} />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-500">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed font-light">
                        {service.description}
                      </p>
                    </div>
                  </GlassmorphismCard>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
