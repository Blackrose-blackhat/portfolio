export function Overview() {
  return (
    <section id="overview" className="pt-16 sm:pt-24">
      <img
        src="/avatar.jpg"
        alt="Musharaf Parwej"
        className="h-24 w-24 sm:h-28 sm:w-28 rounded-full object-cover border-2 border-border/20 mb-8"
      />
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-2">
        Musharaf Parwej
      </h1>
      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-[520px]">
        full-stack engineer building production-grade tools across web3, AI, and
        cloud-native ecosystems.
      </p>

      <div className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-sm">
        <a
          href="https://github.com/Blackrose-blackhat"
          target="_blank"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          github
        </a>
        <a
          href="https://linkedin.com/in/musharafparwej"
          target="_blank"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          linkedin
        </a>
        <a
          href="mailto:mushrafparwej@gmail.com"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          email
        </a>
      </div>
    </section>
  );
}
