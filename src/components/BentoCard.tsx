import { LucideIcon } from "lucide-react";

interface BentoCardProps {
  href: string;
  icon: LucideIcon;
  title: string;
  description?: string;
  size?: "small" | "medium" | "large";
  delay?: number;
}

const BentoCard = ({ href, icon: Icon, title, description, delay = 0 }: BentoCardProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bento-card group flex items-center gap-4 p-4 animate-fade-up relative z-10"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 border border-primary/30">
        <Icon className="w-6 h-6" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 uppercase tracking-wide text-sm">
          {title}
        </h3>
        {description && (
          <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider opacity-80 truncate">{description}</p>
        )}
      </div>
      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
        <svg
          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
      
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-primary/0 group-hover:bg-primary/5 transition-all duration-500 pointer-events-none" />
    </a>
  );
};

export default BentoCard;
