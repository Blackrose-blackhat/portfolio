import { Avatar, AvatarImage } from "../ui/avatar";

export function Overview() {
  return (
    <section id="overview" className="mb-8">
      <div className="flex items-center gap-6 mb-12">
        <Avatar className="h-20 w-20 border border-border/5 rounded-full overflow-hidden shrink-0">
          <AvatarImage
            src="/avatar.jpg"
            alt="Musharaf Parwej"
            className="rounded-full object-cover scale-y-125 scale-x-110"
          />
        </Avatar>
        <div className="flex flex-col justify-center">
          <h1 className="text-xl font-bold tracking-tight text-foreground">
            Musharaf Parwej
          </h1>
          <p className="text-sm text-muted-foreground font-medium leading-relaxed">
            Software developer
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8 text-[14px] font-medium">
        <a
          href="https://github.com/Blackrose-blackhat"
          target="_blank"
          className="text-muted-foreground hover:text-foreground transition-all"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/musharafparwej"
          target="_blank"
          className="text-muted-foreground hover:text-foreground transition-all"
        >
          LinkedIn
        </a>
        <a
          href="mailto:mushrafparwej@gmail.com"
          className="text-muted-foreground hover:text-foreground transition-all"
        >
          Email
        </a>
      </div>
    </section>
  );
}
