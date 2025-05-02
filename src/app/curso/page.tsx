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
      <div className="container mx-auto py-6 sm:py-8 md:py-10 px-3 sm:px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col items-center justify-center space-y-2 sm:space-y-3 md:space-y-4 text-center mb-5 sm:mb-8 md:mb-10">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter">
            Módulos del Curso
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 text-sm sm:text-base md:text-lg dark:text-gray-400">
            Explora los 10 módulos que componen este curso sobre violencia de género.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
          {modules.map((module) => (
            <Card key={module.id} className="flex flex-col">
              <CardHeader className="p-3 sm:p-4 pb-1 sm:pb-2">
                <CardTitle className="text-base sm:text-lg">Módulo {module.id}: {module.title}</CardTitle>
                <CardDescription className="text-xs sm:text-sm">{module.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 p-3 sm:p-4 pt-1 sm:pt-2">
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  Duración: {module.duration}
                </p>
              </CardContent>
              <CardFooter className="p-3 sm:p-4 pt-0 sm:pt-0 flex justify-between">
                <Button variant="outline" size="sm" className="h-7 sm:h-8 text-xs sm:text-sm" asChild>
                  <Link href={`/curso/modulo/${module.id}`}>Ver contenido</Link>
                </Button>
                <Button variant="secondary" size="sm" className="h-7 sm:h-8 text-xs sm:text-sm" asChild>
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
