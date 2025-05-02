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
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Curso sobre Violencia de Género
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Una comprensión integral de la violencia de género, sus causas, manifestaciones, consecuencias y las estrategias para su prevención e intervención.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild>
                <Link href="/curso">Comenzar el curso</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/sobre">Más información</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Estructura del Curso
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                El curso está dividido en 10 módulos que cubren todos los aspectos de la violencia de género.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            {featuredModules.map((module) => (
              <Card key={module.id} className="flex flex-col">
                <CardHeader>
                  <CardTitle>Módulo {module.id}</CardTitle>
                  <CardDescription>{module.title}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Duración: {module.duration}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <Link href={`/curso/modulo/${module.id}`}>Ver módulo</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Objetivo del Curso
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Proporcionar una comprensión integral de la violencia de género, sus causas, manifestaciones, consecuencias y las estrategias para su prevención e intervención, fomentando una actitud crítica y comprometida hacia su erradicación.
              </p>
            </div>
            <Button asChild>
              <Link href="/curso">Comenzar ahora</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
