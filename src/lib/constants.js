import { Code, Database, Smartphone, Terminal } from "lucide-react";

export const PROFILE = {
    name: "Bir Mehto",
    role: "Mobile Engineer",
    roleHighlight: "Flutter & Native",
    description: "Crafting high-performance mobile experiences with Flutter, Kotlin, and Swift. Specialized in building scalable, pixel-perfect applications for iOS and Android.",
    email: "birmehto@gmail.com",
    social: {
        github: "https://github.com/birmehto",
        linkedin: "https://linkedin.com/in/birmehto",
    },
    resumeUrl: "https://drive.google.com/uc?export=download&id=1qT2x3dusx6Z9UErRNL-cW-cI7IjRU4Qn"
};

export const PROJECTS = [
    {
        id: "oswal-solar",
        title: "Oswal Solar Pumps",
        description: "Solar pump management app under PM-KUSUM with smooth UI and reliable performance. 10K+ downloads on Play Store.",
        tags: ["Flutter", "IoT", "Solar Energy", "PM-KUSUM"],
        demo: "https://play.google.com/store/apps/details?id=com.solar.oswal",
        image: "/projects/oswal-solar.png",
        color: "#f59e0b"
    },
    {
        id: "track-tide",
        title: "Track Tide",
        description: "Employee attendance, work-hour tracking, leave management & holiday system for efficient workforce management.",
        tags: ["Flutter", "HR Management", "Attendance", "Firebase"],
        demo: "https://play.google.com/store/apps/details?id=com.ipop.tracktide",
        image: "/projects/track-tide.png",
        color: "#3b82f6"
    },
    {
        id: "lotus-digital",
        title: "Lotus Digital Media",
        description: "Digital signage and restaurant advertisement display system for TV screens with dynamic content management.",
        tags: ["Flutter", "Digital Signage", "TV App", "Advertisement"],
        demo: "https://play.google.com/store/apps/details?id=com.lotus.digitalmedia",
        image: "/projects/lotus-digital.png",
        color: "#8b5cf6"
    },
    {
        id: "aps-solar",
        title: "APS Solar Pump",
        description: "App to monitor and manage solar-powered water pumps with real-time data and remote control capabilities.",
        tags: ["Flutter", "IoT", "Solar", "Remote Control"],
        demo: "https://play.google.com/store/apps/details?id=com.aps.apssolarpump",
        image: "/projects/aps-solar.png",
        color: "#10b981"
    },
    {
        id: "arham-erp",
        title: "Arham ERP",
        description: "ERP application built with a team to streamline business operations including inventory, sales, and reporting.",
        tags: ["Flutter", "ERP", "Team Project", "Business"],
        demo: "https://play.google.com/store/apps/details?id=com.arhamerp.app",
        image: "/projects/arham-erp.png",
        color: "#6366f1"
    },
    {
        id: "kitmedia-player",
        title: "KitMedia Player",
        description: "A cross-platform video player with Material 3 UI, gesture controls, search, and optimized playback for mobile, web, and desktop.",
        tags: ["Flutter", "Material 3", "Video Player", "Cross-Platform"],
        demo: "https://github.com/birmehto/kitmedia",
        image: "/projects/kitmedia.png",
        color: "#ec4899"
    },
    {
        id: "dropx",
        title: "DropX Package",
        description: "A reusable Flutter dropdown package for mobile, web, and desktop with customizable styling and smooth animations.",
        tags: ["Flutter", "Package", "Open Source", "UI Component"],
        demo: "https://github.com/birmehto/DropX",
        image: "/projects/dropx.png",
        color: "#06b6d4"
    }
];

export const SKILL_CATEGORIES = [
    {
        title: "Mobile Engineering",
        icon: Smartphone,
        skills: [
            { name: "Flutter & Dart", level: 95 },
            { name: "Kotlin (Jetpack Compose)", level: 80 },
            { name: "Swift (SwiftUI)", level: 75 },
            { name: "Clean Architecture", level: 90 },
        ],
    },
    {
        title: "State Management",
        icon: Database,
        skills: [
            { name: "Bloc / Cubit", level: 90 },
            { name: "Riverpod", level: 93 },
            { name: "Provider", level: 80 },
            { name: "GetX", level: 85 },
        ],
    },
    {
        title: "Backend & Cloud",
        icon: Code,
        skills: [
            { name: "Firebase", level: 90 },
            { name: "Supabase", level: 85 },
            { name: "REST APIs", level: 95 },
            { name: "GraphQL", level: 80 },
        ],
    },
    {
        title: "DevOps & Tools",
        icon: Terminal,
        skills: [
            { name: "CI/CD (Codemagic)", level: 88 },
            { name: "Git & GitHub", level: 92 },
            { name: "XCode", level: 75 },
            { name: "Android Studio", level: 95 },
        ],
    },
];
