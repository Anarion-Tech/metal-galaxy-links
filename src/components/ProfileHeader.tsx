interface ProfileHeaderProps {
  name: string;
  bio: string;
  avatarUrl?: string;
}

const ProfileHeader = ({ name, bio, avatarUrl }: ProfileHeaderProps) => {
  return (
    <div className="flex flex-col items-center text-center animate-fade-up">
      <div className="relative mb-6">
        <div className="w-28 h-28 rounded-full avatar-glow overflow-hidden border-4 border-card animate-float">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground text-3xl font-bold">
              {name.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
        <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-primary-foreground shadow-lg">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <h1 className="text-3xl font-bold text-foreground mb-2">{name}</h1>
      <p className="text-muted-foreground max-w-xs leading-relaxed">{bio}</p>
    </div>
  );
};

export default ProfileHeader;
