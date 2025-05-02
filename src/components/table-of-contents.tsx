"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TableOfContentsProps {
  content: string;
  className?: string;
}

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents({ content, className }: TableOfContentsProps) {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  // Extraer los encabezados del contenido
  useEffect(() => {
    const headingRegex = /^(#{1,3})\s+(.+)$/gm;
    const matches = [...content.matchAll(headingRegex)];

    const items = matches.map((match) => {
      const level = match[1].length;
      const text = match[2];
      const slug = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
      const id = `heading-${slug}`;

      return { id, text, level };
    });

    setToc(items);
  }, [content]);

  // Observar los encabezados para resaltar el activo
  useEffect(() => {
    if (toc.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -66% 0px" }
    );

    // Observar todos los encabezados
    toc.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [toc]);

  if (toc.length === 0) {
    return null;
  }

  return (
    <div className={cn("hidden lg:block", className)}>
      <div className="sticky top-20">
        <div className="border rounded-md p-4 bg-card">
          <h4 className="mb-4 text-sm font-semibold border-b pb-2">Tabla de Contenidos</h4>
          <ul className="space-y-2 text-sm">
            {toc.map((item) => (
              <li
                key={item.id}
                className={cn(
                  "transition-colors",
                  item.level === 1 ? "pl-0" : "",
                  item.level === 2 ? "pl-4" : "",
                  item.level === 3 ? "pl-8" : "",
                  activeId === item.id
                    ? "text-primary font-medium border-l-2 border-primary pl-2"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(item.id)?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  className="block py-1 hover:underline"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
