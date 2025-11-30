import { Code, Database, Smartphone, Terminal } from "lucide-react";

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
