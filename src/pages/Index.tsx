import ProfileBento from "@/components/ProfileBento";
import BentoCard from "@/components/BentoCard";
import logo from "@/assets/logo.png";
import {
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  Github,
  Mail,
  Globe,
  Music,
} from "lucide-react";

const links = [
  // {
  //   href: "https://instagram.com",
  //   icon: Instagram,
  //   title: "Instagram",
  //   description: "Suivez mes aventures quotidiennes",
  //   size: "small" as const,
  // },
  // {
  //   href: "https://twitter.com",
  //   icon: Twitter,
  //   title: "Twitter / X",
  //   description: "Mes pensées et actualités",
  //   size: "small" as const,
  // },
  // {
  //   href: "https://youtube.com",
  //   icon: Youtube,
  //   title: "YouTube",
  //   description: "Vidéos et tutoriels",
  //   size: "large" as const,
  // },
  // {
  //   href: "https://linkedin.com",
  //   icon: Linkedin,
  //   title: "LinkedIn",
  //   description: "Mon parcours professionnel",
  //   size: "small" as const,
  // },
  // {
  //   href: "https://github.com",
  //   icon: Github,
  //   title: "GitHub",
  //   description: "Mes projets open source",
  //   size: "small" as const,
  // },
  // {
  //   href: "https://spotify.com",
  //   icon: Music,
  //   title: "Spotify",
  //   description: "Ma playlist du moment",
  //   size: "small" as const,
  // },
  {
    href: "https://metal-galaxy.net",
    icon: Mail,
    title: "Newsletter",
    description: "Portfolio et blog personnel",
    size: "large" as const,
  },
  {
    href: "mailto:contact@example.com",
    icon: Mail,
    title: "Contact",
    description: "Envoyez-moi un message",
    size: "large" as const,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen py-8 px-4 relative">
      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[140px]">
          {/* Profile Card - spans 2 columns */}
          <div className="col-span-2 md:col-span-2">
            <ProfileBento
              name="Votre Nom"
              bio="🤘 Créateur · Développeur · Passionné de Metal 🤘"
              avatarUrl={logo}
            />
          </div>

          {/* Link Cards */}
          {links.map((link, index) => (
            <BentoCard
              key={link.title}
              href={link.href}
              icon={link.icon}
              title={link.title}
              description={link.description}
              size={link.size}
              delay={100 + index * 50}
            />
          ))}
        </div>

        <footer
          className="mt-8 text-center animate-fade-up relative z-10"
          style={{ animationDelay: "600ms" }}
        >
          <p className="text-sm text-muted-foreground uppercase tracking-widest">
            Forgé avec <span className="text-primary">🔥</span>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
