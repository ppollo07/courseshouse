"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Home, Info, Menu, Library } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const routes = [
    {
      href: "/",
      label: "Inicio",
      icon: <Home className="h-5 w-5 mr-3" />,
      active: pathname === "/",
    },
    {
      href: "/curso",
      label: "Módulos",
      icon: <BookOpen className="h-5 w-5 mr-3" />,
      active: pathname.startsWith("/curso"),
    },
    {
      href: "/recursos",
      label: "Recursos",
      icon: <Library className="h-5 w-5 mr-3" />,
      active: pathname.startsWith("/recursos"),
    },
    {
      href: "/sobre",
      label: "Sobre el Curso",
      icon: <Info className="h-5 w-5 mr-3" />,
      active: pathname.startsWith("/sobre"),
    },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden" size="icon">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col p-0 max-w-[280px]">
        <div className="p-6 bg-primary/5 dark:bg-primary/10">
          <div className="flex items-center justify-center mb-4">
            <Link
              href="/"
              className="flex items-center justify-center"
              onClick={() => setOpen(false)}
            >
              <span className="font-bold text-xl">Curso VG</span>
            </Link>
          </div>
          <p className="text-sm text-center text-muted-foreground">
            Violencia de Género
          </p>
        </div>

        <nav className="flex flex-col p-4">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`flex items-center py-3 px-4 rounded-md transition-colors ${
                route.active
                  ? "bg-primary/10 text-primary font-medium"
                  : "hover:bg-muted text-foreground/80 hover:text-foreground"
              }`}
              onClick={() => setOpen(false)}
            >
              {route.icon}
              {route.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto p-4 text-center text-sm text-muted-foreground border-t">
          <p>© 2024 Curso Violencia de Género</p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
