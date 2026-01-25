import { LucideIcon } from "lucide-react";

interface LinkCardProps {
  href: string;
  icon: LucideIcon;
  title: string;
  description?: string;
  delay?: number;
}

const LinkCard = ({ href, icon: Icon, title, description, delay = 0 }: LinkCardProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="link-button glass-card flex items-center gap-4 p-4 rounded-sm animate-fade-up group relative z-10"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 uppercase tracking-wide">
          {title}
        </h3>
        {description && (
          <p className="text-xs text-muted-foreground truncate uppercase tracking-wider">{description}</p>
        )}
      </div>
      <div className="flex-shrink-0 w-8 h-8 rounded-sm bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
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
    </a>
  );
};

export default LinkCard;
