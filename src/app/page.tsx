import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MainLayout } from "@/components/main-layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllModules } from "@/lib/module-service";

export default function Home() {
  // Obtener todos los módulos
  const modules = getAllModules();

  // Seleccionar solo los primeros 9 módulos para mostrar en la página principal
  const featuredModules = modules.slice(0, 9);
  return (
    <MainLayout>
      <section className="w-full py-8 sm:py-12 md:py-20 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 max-w-6xl">
          <div className="flex flex-col items-center justify-center space-y-3 sm:space-y-4 text-center">
            <div className="space-y-1.5 sm:space-y-2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                Curso sobre Violencia de Género
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl dark:text-gray-400">
                Una comprensión integral de la violencia de género, sus causas, manifestaciones, consecuencias y las estrategias para su prevención e intervención.
              </p>
            </div>
            <div className="space-x-2 sm:space-x-4 flex">
              <Button size="sm" className="text-xs sm:text-sm h-8 sm:h-9" asChild>
                <Link href="/curso">Comenzar el curso</Link>
              </Button>
              <Button variant="outline" size="sm" className="text-xs sm:text-sm h-8 sm:h-9" asChild>
                <Link href="/sobre">Más información</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 max-w-6xl">
          <div className="flex flex-col items-center justify-center space-y-3 sm:space-y-4 text-center">
            <div className="space-y-1.5 sm:space-y-2">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter">
                Estructura del Curso
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 text-sm sm:text-base md:text-lg dark:text-gray-400">
                El curso está dividido en 10 módulos que cubren todos los aspectos de la violencia de género.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-3 sm:gap-4 md:gap-5 md:grid-cols-2 lg:grid-cols-3 mt-5 sm:mt-6 md:mt-8">
            {featuredModules.map((module) => (
              <Card key={module.id} className="flex flex-col">
                <CardHeader className="p-3 sm:p-4 pb-1 sm:pb-2">
                  <CardTitle className="text-base sm:text-lg">Módulo {module.id}</CardTitle>
                  <CardDescription className="text-xs sm:text-sm">{module.title}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 p-3 sm:p-4 pt-1 sm:pt-2">
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    Duración: {module.duration}
                  </p>
                </CardContent>
                <CardFooter className="p-3 sm:p-4 pt-0 sm:pt-0">
                  <Button variant="outline" size="sm" className="w-full h-7 sm:h-8 text-xs sm:text-sm" asChild>
                    <Link href={`/curso/modulo/${module.id}`}>Ver módulo</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 bg-muted/50">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 max-w-6xl">
          <div className="flex flex-col items-center justify-center space-y-3 sm:space-y-4 text-center">
            <div className="space-y-1.5 sm:space-y-2">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter">
                Objetivo del Curso
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 text-sm sm:text-base md:text-lg dark:text-gray-400">
                Proporcionar una comprensión integral de la violencia de género, sus causas, manifestaciones, consecuencias y las estrategias para su prevención e intervención, fomentando una actitud crítica y comprometida hacia su erradicación.
              </p>
            </div>
            <Button size="sm" className="text-xs sm:text-sm h-8 sm:h-9 mt-2 sm:mt-3" asChild>
              <Link href="/curso">Comenzar ahora</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
