import { notFound } from "next/navigation";
import Link from "next/link";
import { MainLayout } from "@/components/main-layout";
import { Button } from "@/components/ui/button";
import { getModuleInfo } from "@/lib/module-service";
import { ModuleQuestions } from "@/components/module-questions";

// Definición de los parámetros de la página
interface PageParams {
  id: string;
}

// Función para generar metadatos estáticos
export function generateStaticParams(): PageParams[] {
  return Array.from({ length: 10 }, (_, i) => ({
    id: String(i + 1),
  }));
}

export default async function TestsPage(props: { params: Promise<PageParams> }) {
  // Esperar a que los parámetros estén disponibles
  const params = await props.params;

  // Convertir el ID a número
  const moduleId = Number(params.id);

  // Validar el ID
  if (isNaN(moduleId) || moduleId < 1 || moduleId > 10) {
    return notFound();
  }

  // Obtener información del módulo
  const moduleInfo = getModuleInfo(moduleId);

  if (!moduleInfo) {
    return notFound();
  }

  return (
    <MainLayout>
      <div className="container mx-auto py-10 px-4 md:px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold">Pruebas del Módulo {moduleId}</h1>
            <p className="text-muted-foreground text-sm mt-1">{moduleInfo.title}</p>
            <p className="text-muted-foreground mt-3">
              Evalúa tus conocimientos sobre este módulo
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href={`/curso/modulo/${moduleId}`}>Volver al módulo</Link>
          </Button>
        </div>

        {/* Componente de cliente para cargar las preguntas */}
        <ModuleQuestions moduleId={moduleId} moduleTitle={moduleInfo.title} />
      </div>
    </MainLayout>
  );
}
