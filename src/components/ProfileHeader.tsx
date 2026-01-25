interface ProfileHeaderProps {
  name: string;
  bio: string;
  avatarUrl?: string;
}

const ProfileHeader = ({ name, bio, avatarUrl }: ProfileHeaderProps) => {
  return (
    <div className="flex flex-col items-center text-center animate-fade-up relative z-10">
      <div className="relative mb-6">
        <div className="w-32 h-32 rounded-sm avatar-glow overflow-hidden animate-float rotate-3">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt={name}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground text-4xl font-metal">
              {name.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
        <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-primary rounded-sm flex items-center justify-center text-primary-foreground shadow-lg transform rotate-12">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        </div>
      </div>
      <h1 className="text-4xl font-metal text-foreground mb-3 tracking-wider blood-drip">{name}</h1>
      <p className="text-muted-foreground max-w-xs leading-relaxed uppercase tracking-wide text-sm">{bio}</p>
    </div>
  );
};

export default ProfileHeader;
