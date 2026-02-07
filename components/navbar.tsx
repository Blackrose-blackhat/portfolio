"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import projects from "@/data/projects.json";

export function Navbar() {
  const pathname = usePathname();

  // Find project title if on a project detail page
  const projectSlug = pathname.startsWith("/work/")
    ? pathname.split("/").pop()
    : null;
  const project = projectSlug
    ? projects.find((p) => p.slug === projectSlug)
    : null;

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/5">
      <div className="max-w-[720px] mx-auto px-6 h-12 flex items-center text-[13px] font-medium text-muted-foreground/50">
        <div className="flex items-center">
          <Link
            href="/"
            className={cn(
              "hover:text-foreground transition-colors px-1",
              pathname === "/" && "text-foreground font-semibold",
            )}
          >
            Home
          </Link>

          <span className="opacity-30 select-none">/</span>

          <Link
            href="/work"
            className={cn(
              "hover:text-foreground transition-colors px-1",
              pathname.startsWith("/work") && "text-foreground font-semibold",
            )}
          >
            Work
          </Link>

          <span className="opacity-30 select-none">/</span>

          <Link
            href="/freelance"
            className={cn(
              "hover:text-foreground transition-colors px-1",
              pathname.startsWith("/freelance") &&
                "text-foreground font-semibold",
            )}
          >
            Freelance
          </Link>

          <span className="opacity-30 select-none">/</span>

          <Link
            href="/achievements"
            className={cn(
              "hover:text-foreground transition-colors px-1",
              pathname.startsWith("/achievements") &&
                "text-foreground font-semibold",
            )}
          >
            Achievements
          </Link>

          {project && (
            <>
              <span className="opacity-30 select-none">/</span>
              <span className="text-foreground font-semibold px-1 truncate max-w-[150px] sm:max-w-none">
                {project.title}
              </span>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
