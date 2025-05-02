import Link from "next/link";
import { MainLayout } from "@/components/main-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllModules } from "@/lib/module-service";

export default function CursoPage() {
  // Obtener todos los módulos
  const modules = getAllModules();

  return (
    <MainLayout>
      <div className="container mx-auto py-10 px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Módulos del Curso
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Explora los 10 módulos que componen este curso sobre violencia de género.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map((module) => (
            <Card key={module.id} className="flex flex-col">
              <CardHeader>
                <CardTitle>Módulo {module.id}: {module.title}</CardTitle>
                <CardDescription>{module.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Duración: {module.duration}
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                  <Link href={`/curso/modulo/${module.id}`}>Ver contenido</Link>
                </Button>
                <Button variant="secondary" asChild>
                  <Link href={`/curso/modulo/${module.id}/pruebas`}>Pruebas</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
