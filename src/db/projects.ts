import { VideoProject } from "@/types/videos";

export const allVideoProjects: VideoProject[] = [
  {
    id: "commercial-campaign-01",
    video_title: "Nike - The Urban Athlete",
    video_description: "A high-energy commercial highlighting the resilience of urban runners. Edited for maximum impact with rapid pacing and cinematic color grading.",
    cover_image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800&h=450",
    video_link: "https://youtube.com/watch?v=placeholder1",
    category: ["Commercial", "Brand Content"],
    publish_date: "2024-03-15",
    client_name: "Nike",
    client_image: "/clients/nike.png",
    duration: "1:30",
    software_used: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
    client_feedback: "Satyam perfectly captured the energy we were looking for. The pacing is spot on!",
    project_images: [
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=800&h=450",
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=800&h=450"
    ]
  },
  {
    id: "doc-film-01",
    video_title: "Echoes of the Valley",
    video_description: "A documentary short exploring the lives of nomadic tribes in the Himalayas. Focus on storytelling, narrative clarity, and emotional resonance.",
    cover_image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800&h=450",
    video_link: "https://youtube.com/watch?v=placeholder2",
    category: ["Documentary", "Storytelling"],
    publish_date: "2023-11-20",
    client_name: "National Geographic (Freelance)",
    client_image: "/clients/natgeo.png",
    duration: "12:45",
    software_used: ["DaVinci Resolve", "Premiere Pro"],
    client_feedback: "The narrative flow is beautiful. Satyam handled the sensitive footage with great care.",
    project_images: [
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&q=80&w=800&h=450",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800&h=450"
    ]
  },
  {
    id: "event-wedding-01",
    video_title: "Aaditya & Rhea - The Royal Wedding",
    video_description: "A cinematic wedding highlight film capturing the grandeur and emotion of a traditional Indian wedding. High-end color grading and sound design.",
    cover_image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800&h=450",
    video_link: "https://youtube.com/watch?v=placeholder3",
    category: ["Events", "Wedding"],
    publish_date: "2024-01-10",
    client_name: "Private Client",
    client_image: "/clients/wedding.png",
    duration: "5:20",
    software_used: ["Premiere Pro", "DaVinci Resolve"],
    client_feedback: "We are speechless. This film is more beautiful than we ever imagined.",
    project_images: [
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800&h=450",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800&h=450"
    ]
  },
  {
    id: "brand-content-01",
    video_title: "Tesla - Future is Now",
    video_description: "A sleek brand film showcasing the latest Tesla Model S features. Visual effects and motion graphics focused.",
    cover_image: "https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&q=80&w=800&h=450",
    video_link: "https://youtube.com/watch?v=placeholder4",
    category: ["Brand Content", "Commercial"],
    publish_date: "2024-02-05",
    client_name: "Tesla",
    client_image: "/clients/tesla.png",
    duration: "2:15",
    software_used: ["After Effects", "Premiere Pro"],
    client_feedback: "Exceptional motion graphics. The video feels truly futuristic.",
    project_images: [
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=800&h=450",
      "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?auto=format&fit=crop&q=80&w=800&h=450"
    ]
  }
];
