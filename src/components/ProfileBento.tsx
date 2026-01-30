interface ProfileBentoProps {
  name: string;
  bio: string;
  avatarUrl?: string;
}

const ProfileBento = ({ name, bio, avatarUrl }: ProfileBentoProps) => {
  return (
    <div className="bento-card col-span-2 md:col-span-2 row-span-1 flex items-center gap-6 p-6 animate-fade-up relative z-10">
      <div className="relative flex-shrink-0">
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border-2 border-primary/50 shadow-lg shadow-primary/20">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt={name}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/80 to-accent/80 flex items-center justify-center text-primary-foreground text-3xl font-metal backdrop-blur-sm">
              {name.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
        {/* Decorative ring */}
        <div className="absolute -inset-1 rounded-2xl border border-primary/20 -z-10" />
      </div>
      
      <div className="flex-1 min-w-0">
        <h1 className="text-2xl md:text-3xl font-metal text-foreground tracking-wider truncate">{name}</h1>
        <p className="text-muted-foreground text-sm uppercase tracking-wide mt-1 line-clamp-2">{bio}</p>
      </div>
    </div>
  );
};

export default ProfileBento;
