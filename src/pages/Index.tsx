import ProfileHeader from "@/components/ProfileHeader";
import LinkCard from "@/components/LinkCard";
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
  {
    href: "https://instagram.com",
    icon: Instagram,
    title: "Instagram",
    description: "Suivez mes aventures quotidiennes",
  },
  {
    href: "https://twitter.com",
    icon: Twitter,
    title: "Twitter / X",
    description: "Mes pensées et actualités",
  },
  {
    href: "https://youtube.com",
    icon: Youtube,
    title: "YouTube",
    description: "Vidéos et tutoriels",
  },
  {
    href: "https://linkedin.com",
    icon: Linkedin,
    title: "LinkedIn",
    description: "Mon parcours professionnel",
  },
  {
    href: "https://github.com",
    icon: Github,
    title: "GitHub",
    description: "Mes projets open source",
  },
  {
    href: "https://spotify.com",
    icon: Music,
    title: "Spotify",
    description: "Ma playlist du moment",
  },
  {
    href: "https://example.com",
    icon: Globe,
    title: "Mon Site Web",
    description: "Portfolio et blog personnel",
  },
  {
    href: "mailto:contact@example.com",
    icon: Mail,
    title: "Contact",
    description: "Envoyez-moi un message",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen py-12 px-4 relative">
      <div className="max-w-md mx-auto relative z-10">
        <ProfileHeader
          name="Votre Nom"
          bio="🤘 Créateur · Développeur · Passionné de Metal 🤘"
        />

        <div className="mt-10 space-y-3">
          {links.map((link, index) => (
            <LinkCard
              key={link.title}
              href={link.href}
              icon={link.icon}
              title={link.title}
              description={link.description}
              delay={100 + index * 50}
            />
          ))}
        </div>

        <footer className="mt-12 text-center animate-fade-up relative z-10" style={{ animationDelay: "600ms" }}>
          <p className="text-sm text-muted-foreground uppercase tracking-widest">
            Forgé avec <span className="text-primary">🔥</span>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
