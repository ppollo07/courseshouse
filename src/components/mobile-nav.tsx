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
      icon: <Home className="h-4 w-4 mr-2.5" />,
      active: pathname === "/",
    },
    {
      href: "/curso",
      label: "Módulos",
      icon: <BookOpen className="h-4 w-4 mr-2.5" />,
      active: pathname.startsWith("/curso"),
    },
    {
      href: "/recursos",
      label: "Recursos",
      icon: <Library className="h-4 w-4 mr-2.5" />,
      active: pathname.startsWith("/recursos"),
    },
    {
      href: "/sobre",
      label: "Sobre el Curso",
      icon: <Info className="h-4 w-4 mr-2.5" />,
      active: pathname.startsWith("/sobre"),
    },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden h-8 w-8" size="icon">
          <Menu className="h-4 w-4" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col p-0 max-w-[250px]">
        <div className="p-4 bg-primary/5 dark:bg-primary/10">
          <div className="flex items-center justify-center mb-2">
            <Link
              href="/"
              className="flex items-center justify-center"
              onClick={() => setOpen(false)}
            >
              <span className="font-bold text-lg">Curso VG</span>
            </Link>
          </div>
          <p className="text-xs text-center text-muted-foreground">
            Violencia de Género
          </p>
        </div>

        <nav className="flex flex-col p-2">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`flex items-center py-2 px-3 rounded-md transition-colors text-sm ${
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

        <div className="mt-auto p-3 text-center text-xs text-muted-foreground border-t">
          <p>© 2024 Curso Violencia de Género</p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
