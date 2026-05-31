"use client";

import { useState, useEffect } from "react";
import { m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import GlassmorphismCard from "@/components/glassmorphism-card";
import {
    ArrowLeft,
    Play,
    Clock,
    User,
    Calendar,
    Quote,
    ExternalLink,
} from "lucide-react";
import { getVideoEmbedUrl } from "@/lib/helper";
import type { VideoProject } from "@/types/videos";

interface ProjectDetailsProps {
    project: VideoProject;
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
    const [showVideo, setShowVideo] = useState(false);
    const embedUrl = getVideoEmbedUrl(project.video_link);
    const isVertical = project.category.includes("Reels") || project.category.includes("Shorts") || project.video_link.includes("instagram.com");
    const [thumbnailUrl, setThumbnailUrl] = useState(
        project.cover_image && project.cover_image.startsWith('http')
            ? project.cover_image
            : project.cover_image
            ? `https://img.youtube.com/vi/${project.cover_image}/maxresdefault.jpg`
            : "/placeholder.svg"
    );

    useEffect(() => {
        if (project.video_link && project.video_link.includes("instagram.com")) {
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

    return (
        <div className="min-h-screen pt-32 pb-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Back Button */}
                <m.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <Button
                        asChild
                        variant="outline"
                        className="pl-4 pr-6 py-2 h-auto text-sm font-medium text-white bg-white/5 border border-white/10 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_20px_rgba(255,255,255,0.1)] hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-xl group"
                    >
                        <Link href="/">
                            <ArrowLeft className="mr-2" size={16} />
                            Back to Projects
                        </Link>
                    </Button>
                </m.div>

                {/* Video Player Section */}
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <GlassmorphismCard className="p-4 md:p-6 flex flex-col items-center justify-center">
                        {isVertical ? (
                            /* Premium iPhone Mockup Frame */
                            <div className="relative w-full max-w-[320px] sm:max-w-[340px] aspect-[9/19.5] mx-auto rounded-[3rem] p-3 bg-black ring-8 ring-slate-900/50 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] border-4 border-slate-800/80 overflow-hidden isolate my-4">
                                {/* Dynamic Island / Notch */}
                                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-end px-4">
                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-indigo-900/40 mr-2 animate-pulse" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-900/60" />
                                </div>
                                
                                {/* Inner screen area */}
                                <div className="w-full h-full rounded-[2.2rem] overflow-hidden bg-slate-950 relative">
                                    {showVideo && embedUrl ? (
                                        <iframe
                                            src={project.video_link.includes("instagram.com") ? embedUrl : `${embedUrl}?autoplay=1&modestbranding=1&rel=0`}
                                            title={project.video_title}
                                            className="w-full h-full border-0 absolute inset-0 z-10"
                                            allowFullScreen
                                            allow="autoplay; encrypted-media"
                                        />
                                    ) : (
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={thumbnailUrl}
                                                alt={project.video_title}
                                                fill
                                                className="object-cover"
                                                onError={() => {
                                                    if (project.cover_image && !project.cover_image.startsWith('http')) {
                                                        setThumbnailUrl(`https://img.youtube.com/vi/${project.cover_image}/hqdefault.jpg`);
                                                    }
                                                }}
                                            />
                                            {embedUrl && (
                                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-20 backdrop-blur-[1px]">
                                                    <Button
                                                        onClick={() => setShowVideo(true)}
                                                        size="lg"
                                                        className="bg-blue-600 hover:bg-blue-700 cursor-pointer shadow-lg hover:shadow-blue-500/20 px-6 py-3 rounded-full hover:scale-105 transition-all duration-300"
                                                    >
                                                        <Play className="mr-2" size={20} />
                                                        Play Reel
                                                    </Button>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ) : (
                            /* Standard 16:9 Landscape Player */
                            <div className="aspect-video relative rounded-lg overflow-hidden bg-gray-900 w-full">
                                {showVideo && embedUrl ? (
                                    <iframe
                                        src={`${embedUrl}?autoplay=1&modestbranding=1&rel=0`}
                                        title={project.video_title}
                                        className="w-full h-full"
                                        allowFullScreen
                                        allow="autoplay; encrypted-media"
                                    />
                                ) : (
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={thumbnailUrl}
                                            alt={project.video_title}
                                            fill
                                            className="object-cover"
                                            onError={() => {
                                                if (project.cover_image && !project.cover_image.startsWith('http')) {
                                                    setThumbnailUrl(`https://img.youtube.com/vi/${project.cover_image}/hqdefault.jpg`);
                                                }
                                            }}
                                        />
                                        {embedUrl && (
                                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                                <Button
                                                    onClick={() => setShowVideo(true)}
                                                    size="lg"
                                                    className="bg-blue-600 hover:bg-blue-700 cursor-pointer"
                                                >
                                                    <Play className="mr-2" size={24} />
                                                    Play Preview
                                                </Button>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        )}
                    </GlassmorphismCard>
                </m.div>

                {/* Project Details Section */}
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-8"
                >
                    <GlassmorphismCard className="p-6 md:p-8">
                        <div className="mb-6">
                            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-end mb-4 gap-4">
                                {project.duration && (
                                    <div className="flex items-center text-gray-400 text-sm">
                                        <Clock className="mr-1" size={14} />
                                        {project.duration}
                                    </div>
                                )}
                            </div>
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">
                                {project.video_title}
                            </h1>
                            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                                {project.video_description}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div>
                                <h3 className="text-lg font-semibold mb-3 text-white">
                                    Project Details
                                </h3>
                                <div className="space-y-2 text-sm">
                                    <div className="flex items-center text-gray-400">
                                        <Calendar className="mr-2" size={14} />
                                        <span>
                                            Published:{" "}
                                            {new Date(project.publish_date).toLocaleDateString(
                                                "en-US",
                                                {
                                                    year: "numeric",
                                                    month: "short",
                                                    day: "numeric",
                                                }
                                            )}
                                        </span>
                                    </div>
                                    <div className="flex items-center text-gray-400">
                                        <User className="mr-2" size={14} />
                                        <span>Client: {project.client_name}</span>
                                    </div>
                                </div>
                            </div>

                            {project.software_used && (
                                <div>
                                    <h3 className="text-lg font-semibold mb-3 text-white">
                                        Software Used
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.software_used.map((software) => (
                                            <Badge
                                                key={software}
                                                variant="outline"
                                                className="border-gray-600 text-gray-300"
                                            >
                                                {software}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="mb-8">
                            <h3 className="text-lg font-semibold mb-3 text-white">
                                Categories
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.category.map((category) => (
                                    <Badge
                                        key={category}
                                        variant="outline"
                                        className="border-gray-600 text-gray-300"
                                    >
                                        {category}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            {project.video_link !== "#" && (
                                <Button asChild className="bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-blue-500/20 px-6 py-3 rounded-full hover:scale-105 transition-all duration-300">
                                    <a
                                        href={project.video_link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <ExternalLink className="mr-2" size={16} />
                                        {project.video_link.includes("instagram.com") ? "View on Instagram" : "View on YouTube"}
                                    </a>
                                </Button>
                            )}
                        </div>
                    </GlassmorphismCard>
                </m.div>

                {/* Project Gallery */}
                {project.project_images && project.project_images.length > 0 && (
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-16"
                    >
                        <GlassmorphismCard className="p-8">
                            <h3 className="text-2xl font-semibold mb-6 text-white text-center">
                                Project Gallery
                            </h3>
                            <Carousel className="w-full max-w-4xl mx-auto">
                                <CarouselContent>
                                    {project.project_images.map((image, index) => (
                                        <CarouselItem key={index} className="basis-1/2">
                                            <div className="p-1">
                                                <div className="relative aspect-video rounded-lg overflow-hidden">
                                                    <Image
                                                        src={image || "/placeholder.svg"}
                                                        alt={`Project image ${index + 1}`}
                                                        fill
                                                        className="object-cover hover:scale-105 transition-transform duration-300"
                                                    />
                                                </div>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className="cursor-pointer" />
                                <CarouselNext className="cursor-pointer" />
                            </Carousel>
                        </GlassmorphismCard>
                    </m.div>
                )}

                {/* Client Feedback */}
                {project.client_feedback && (
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-16"
                    >
                        <GlassmorphismCard className="p-8">
                            <h3 className="text-2xl font-semibold mb-6 text-white text-center">
                                Client Feedback
                            </h3>
                            <div className="max-w-3xl mx-auto">
                                <div className="flex items-center justify-center space-x-4 mb-6">
                                    <Image
                                        src={project.client_image || "/placeholder.svg"}
                                        alt={project.client_name}
                                        width={64}
                                        height={64}
                                        className="rounded-full"
                                    />
                                    <div className="text-center">
                                        <p className="font-medium text-white text-lg">
                                            {project.client_name}
                                        </p>
                                    </div>
                                </div>
                                <div className="relative">
                                    <Quote
                                        className="absolute -top-4 -left-4 text-blue-400 opacity-50"
                                        size={32}
                                    />
                                    <blockquote className="text-gray-300 italic text-lg text-center leading-relaxed pl-8">
                                        "{project.client_feedback}"
                                    </blockquote>
                                </div>
                            </div>
                        </GlassmorphismCard>
                    </m.div>
                )}
            </div>
        </div>
    );
}
