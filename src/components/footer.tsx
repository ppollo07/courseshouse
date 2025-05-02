import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {new Date().getFullYear()} Curso sobre Violencia de Género. Todos los derechos reservados.
        </p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
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
