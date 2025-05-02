import { notFound } from "next/navigation";
import Link from "next/link";
import { MainLayout } from "@/components/main-layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import { TableOfContents } from "@/components/table-of-contents";
import { getModuleContent, getModuleExamples, getModuleImagesDescriptions } from "@/lib/module-content";
import { getModuleInfo } from "@/lib/module-service";

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

// Función para obtener el contenido del módulo
async function getModuleData(moduleId: number) {
  // Obtener contenidos de forma asíncrona
  const [content, examples, imagesDescriptions] = await Promise.all([
    getModuleContent(moduleId),
    getModuleExamples(moduleId),
    getModuleImagesDescriptions(moduleId)
  ]);

  return { content, examples, imagesDescriptions };
}

export default async function ModulePage(props: { params: Promise<PageParams> }) {
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
      <ModuleContent
        moduleId={moduleId}
        moduleInfo={moduleInfo}
        moduleDataPromise={getModuleData(moduleId)}
      />
    </MainLayout>
  );
}

// Componente de cliente para mostrar el contenido del módulo
async function ModuleContent({
  moduleId,
  moduleInfo,
  moduleDataPromise
}: {
  moduleId: number;
  moduleInfo: {
    title: string;
    description: string;
  };
  moduleDataPromise: Promise<{
    content: string;
    examples: string;
    imagesDescriptions: string;
  }>;
}) {
  // Esperar a que se resuelva la promesa
  const { content, examples, imagesDescriptions } = await moduleDataPromise;

  return (
    <div className="container mx-auto py-10 px-4 md:px-6 max-w-5xl">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold">Módulo {moduleId}: {moduleInfo.title}</h1>
          <p className="text-muted-foreground text-sm mt-1">{moduleInfo.description}</p>
          <p className="text-muted-foreground mt-3">
            {moduleId < 10 ? (
              <>
                <Link href={`/curso/modulo/${moduleId + 1}`} className="text-primary hover:underline">
                  Siguiente módulo
                </Link>
              </>
            ) : null}
            {moduleId > 1 ? (
              <>
                {moduleId < 10 ? " | " : ""}
                <Link href={`/curso/modulo/${moduleId - 1}`} className="text-primary hover:underline">
                  Módulo anterior
                </Link>
              </>
            ) : null}
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <Link href="/curso">Volver a módulos</Link>
          </Button>
          <Button asChild>
            <Link href={`/curso/modulo/${moduleId}/pruebas`}>Ir a pruebas</Link>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="content" className="w-full">
        <TabsList className="mb-4 w-full md:w-auto flex flex-wrap">
          <TabsTrigger value="content">Contenido</TabsTrigger>
          <TabsTrigger value="examples">Ejemplos</TabsTrigger>
          <TabsTrigger value="images">Imágenes y Descripciones</TabsTrigger>
        </TabsList>
        <TabsContent value="content" className="p-6 border rounded-md bg-card">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <div className="max-w-3xl">
                <MarkdownRenderer content={content} className="text-card-foreground" />
              </div>
            </div>
            <div className="lg:col-span-1">
              <TableOfContents content={content} className="sticky top-20" />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="examples" className="p-6 border rounded-md bg-card">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <div className="max-w-3xl">
                <MarkdownRenderer content={examples} className="text-card-foreground" />
              </div>
            </div>
            <div className="lg:col-span-1">
              <TableOfContents content={examples} className="sticky top-20" />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="images" className="p-6 border rounded-md bg-card">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <div className="max-w-3xl">
                <MarkdownRenderer content={imagesDescriptions} className="text-card-foreground" />
              </div>
            </div>
            <div className="lg:col-span-1">
              <TableOfContents content={imagesDescriptions} className="sticky top-20" />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
