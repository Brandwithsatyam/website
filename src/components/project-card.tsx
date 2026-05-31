"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { m, AnimatePresence  } from "framer-motion";
import { Play } from "lucide-react";
import GlassmorphismCard from "@/components/glassmorphism-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { VideoProject } from "@/types/videos";
import { getVideoEmbedUrl } from "@/lib/helper";

interface ProjectCardProps {
    project: VideoProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);
    const embedUrl = getVideoEmbedUrl(project.video_link);
    const [thumbnailUrl, setThumbnailUrl] = useState(
        project.cover_image.startsWith('http') ? project.cover_image : `https://img.youtube.com/vi/${project.cover_image}/maxresdefault.jpg`
    );

    const isVertical = project.category.includes("Reels") || project.category.includes("Shorts") || project.video_link.includes("instagram.com");

    useEffect(() => {
        if (project.video_link.includes("instagram.com")) {
            fetch(`/api/instagram-thumbnail?url=${encodeURIComponent(project.video_link)}`)
                .then((res) => res.json())
                .then((data) => {
                    if (data.thumbnailUrl) {
                        setThumbnailUrl(data.thumbnailUrl);
                    }
                })
                .catch((err) => console.error("Error fetching Instagram thumbnail:", err));
        }
    }, [project.video_link]);

    const handlePlayClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();
        setIsOpenModal(true);
    };

    return (
        <div ref={cardRef} className="h-full">
            <GlassmorphismCard className="h-full group hover:shadow-2xl hover:shadow-blue-900/10 transition-shadow duration-500 flex flex-col">
                <div className="flex flex-col h-full p-5">
                    {/* Media Area */}
                    <div className="relative overflow-hidden rounded-2xl aspect-video mb-5 shadow-lg bg-black isolate">
                        <div
                            className="relative w-full h-full cursor-pointer group/thumb"
                            onClick={handlePlayClick}
                        >
                            <div className="w-full h-full relative">
                                <Image
                                    src={thumbnailUrl}
                                    alt={project.video_title}
                                    fill
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    onError={() => {
                                        if (!project.cover_image.startsWith('http')) {
                                            setThumbnailUrl(`https://img.youtube.com/vi/${project.cover_image}/hqdefault.jpg`);
                                        }
                                    }}
                                />
                            </div>

                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 bg-black/20 group-hover/thumb:bg-black/40 transition-colors duration-300 flex items-center justify-center backdrop-blur-[0px] group-hover/thumb:backdrop-blur-[2px]">
                                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white transform scale-90 group-hover/thumb:scale-110 transition-all duration-300 shadow-xl shadow-black/20">
                                    <Play className="ml-1 fill-white" size={28} />
                                </div>
                            </div>

                                    {/* Duration Badge */}
                                    {project.duration && (
                                        <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm border border-white/10 text-white text-[10px] font-bold px-2 py-1 rounded-md">
                                            {project.duration}
                                        </div>
                                    )}
                                </div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 flex flex-col relative w-full">
                        {/* Category Tags - Absolute positioning on top right or just below title if preferred */}
                        <div className="flex gap-2 mb-3 flex-wrap">
                            {project.category.slice(0, 2).map((cat) => (
                                <Badge key={cat} variant="secondary" className="bg-white/5 hover:bg-white/10 text-gray-400 text-[10px] font-normal border-none">
                                    {cat}
                                </Badge>
                            ))}
                        </div>

                        <Link href={`/project/${project.id}`} className="block group/title">
                            <h3 className="text-xl font-bold mb-3 text-white group-hover/title:text-blue-400 transition-colors line-clamp-2 leading-tight">
                                {project.video_title}
                            </h3>
                        </Link>

                        <p className="text-gray-400 text-sm mb-6 line-clamp-2 leading-relaxed">
                            {project.video_description}
                        </p>

                        {/* Actions & Metadata */}
                        <div className="mt-auto pt-5 border-t border-white/5 flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10 bg-white/5 p-1">
                                    <Image
                                        src={project.client_image || "/placeholder.svg"}
                                        alt={project.client_name}
                                        width={32}
                                        height={32}
                                        className="w-full h-full object-contain rounded-full"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-medium text-white line-clamp-1 max-w-[100px] truncate">{project.client_name}</span>
                                    <span className="text-[10px] text-gray-500">
                                        {new Date(project.publish_date).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric"
                                        })}
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <Link href={`/project/${project.id}`}>
                                    <Button
                                        size="sm"
                                        variant="ghost"
                                        className="h-8 px-5 text-xs font-medium text-white bg-white/5 border border-white/10 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_20px_rgba(255,255,255,0.1)] hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-xl"
                                    >
                                        Details
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </GlassmorphismCard>

            {/* Immersive Video Modal */}
            <AnimatePresence>
                {isOpenModal && (
                    <m.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpenModal(false)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setIsOpenModal(false)}
                            className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full backdrop-blur-md transition-colors z-50 cursor-pointer border border-white/10"
                            aria-label="Close video"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>

                        {/* Video container */}
                        <m.div 
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className={`relative w-full overflow-hidden rounded-2xl shadow-2xl bg-black border border-white/10 ${
                                isVertical 
                                    ? "max-w-[340px] aspect-[9/16]" 
                                    : "max-w-4xl aspect-video"
                            }`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {embedUrl ? (
                                <iframe
                                    src={project.video_link.includes("instagram.com") ? embedUrl : `${embedUrl}?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1`}
                                    title={project.video_title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full border-0 absolute inset-0"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center p-6 text-center text-sm text-gray-300">
                                    Video preview not available.
                                </div>
                            )}
                        </m.div>
                    </m.div>
                )}
            </AnimatePresence>
        </div>
    );
}
