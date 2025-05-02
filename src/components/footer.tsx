import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t py-4 sm:py-5 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-2 sm:gap-3 md:gap-4 md:h-20 lg:h-24 md:flex-row px-3 sm:px-4">
        <p className="text-center text-xs sm:text-sm leading-tight sm:leading-loose text-muted-foreground md:text-left">
          © {new Date().getFullYear()} Curso sobre Violencia de Género. Todos los derechos reservados.
        </p>
        <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
          <Link href="/terminos" className="hover:underline">
            Términos
          </Link>
          <Link href="/privacidad" className="hover:underline">
            Privacidad
          </Link>
          <Link href="/contacto" className="hover:underline">
            Contacto
          </Link>
        </div>
      </div>
    </footer>
  );
}
