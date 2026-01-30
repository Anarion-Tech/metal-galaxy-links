interface ProfileBentoProps {
  name: string;
  bio: string;
  avatarUrl?: string;
}

const ProfileBento = ({ name, bio, avatarUrl }: ProfileBentoProps) => {
  return (
    <div className="bento-card col-span-2 md:col-span-2 row-span-1 flex items-center justify-center p-4 animate-fade-up relative z-10 h-full">
      {avatarUrl ? (
        <img
          src={avatarUrl}
          alt={name}
          className="max-w-full max-h-full object-contain"
        />
      ) : (
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/80 to-accent/80 flex items-center justify-center text-primary-foreground text-3xl font-metal mb-2">
            {name.charAt(0).toUpperCase()}
          </div>
          <h1 className="text-xl font-metal text-foreground tracking-wider">{name}</h1>
          <p className="text-muted-foreground text-xs uppercase tracking-wide mt-1">{bio}</p>
        </div>
      )}
    </div>
  );
};

export default ProfileBento;
