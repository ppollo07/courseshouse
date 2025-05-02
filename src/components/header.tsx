"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { UserCircle } from "lucide-react";
import { MobileNav } from "./mobile-nav";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-12 sm:h-14 items-center justify-between px-2 sm:px-4 max-w-7xl">
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <MobileNav />
        </div>

        <div className="flex-1 md:flex md:items-center hidden">
          <Link href="/" className="flex items-center space-x-2">
            {/* Eliminado el texto "Curso Violencia de Género" */}
          </Link>
        </div>

        {/* Menú de navegación centrado - solo visible en desktop */}
        <nav className="hidden md:flex items-center justify-center space-x-6 lg:space-x-8 text-sm font-medium">
          <Link
            href="/"
            className={`transition-colors hover:text-foreground/80 ${
              pathname === "/"
                ? "text-foreground font-bold"
                : "text-foreground/60"
            }`}
          >
            Inicio
          </Link>
          <Link
            href="/curso"
            className={`transition-colors hover:text-foreground/80 ${
              pathname.startsWith("/curso")
                ? "text-foreground font-bold"
                : "text-foreground/60"
            }`}
          >
            Módulos
          </Link>
          <Link
            href="/recursos"
            className={`transition-colors hover:text-foreground/80 ${
              pathname.startsWith("/recursos")
                ? "text-foreground font-bold"
                : "text-foreground/60"
            }`}
          >
            Recursos
          </Link>

        </nav>

        {/* Logo centrado en móvil */}
        <div className="md:hidden flex-1 flex justify-center">
          <Link href="/" className="font-semibold text-base sm:text-lg">
            Curso VG
          </Link>
        </div>

        <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-4">
          <ThemeToggle />
          <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-9 sm:w-9" asChild>
            <Link href="/perfil">
              <UserCircle className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="sr-only">Perfil</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
