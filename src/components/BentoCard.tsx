import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface BentoCardProps {
  href: string;
  icon: LucideIcon;
  title: string;
  description?: string;
  size?: "small" | "medium" | "large";
  delay?: number;
}

const BentoCard = ({ href, icon: Icon, title, description, size = "small", delay = 0 }: BentoCardProps) => {
  const sizeClasses = {
    small: "col-span-1 row-span-1",
    medium: "col-span-1 row-span-2 md:col-span-1",
    large: "col-span-2 row-span-1",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "bento-card group flex flex-col items-center justify-center gap-3 p-6 animate-fade-up relative z-10",
        sizeClasses[size]
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 border border-primary/30">
        <Icon className="w-7 h-7" />
      </div>
      <div className="text-center">
        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 uppercase tracking-wide text-sm">
          {title}
        </h3>
        {description && size !== "small" && (
          <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider opacity-80">{description}</p>
        )}
      </div>
      
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-primary/0 group-hover:bg-primary/5 transition-all duration-500 pointer-events-none" />
    </a>
  );
};

export default BentoCard;
