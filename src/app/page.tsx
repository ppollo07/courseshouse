import Link from "next/link";
import { MainLayout } from "@/components/main-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Clock, Users, Lightbulb, Award, CheckCircle } from "lucide-react";
import { getAllModules } from "@/lib/module-service";

export default function Home() {
  // Obtener los módulos para mostrar en la pestaña de módulos
  const modules = getAllModules();
  const featuredModules = modules.slice(0, 10);

  return (
    <MainLayout>
      {/* Hero Section with Background Image */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 relative">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/img/vg0.jpeg")',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            filter: 'brightness(0.25)'
          }}
        />
        {/* Additional dark overlay for better contrast */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        {/* Content */}
        <div className="container px-3 sm:px-4 md:px-6 mx-auto max-w-5xl relative z-10">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-3 sm:mb-4 text-white">
              Curso de Violencia de Género
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-3xl mb-6 sm:mb-8">
              Un programa completo diseñado para proporcionar una comprensión integral de la violencia de género,
              sus causas, manifestaciones y estrategias para su prevención e intervención.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button
                size="sm"
                className="h-9 sm:h-10 px-5 sm:px-6 text-xs sm:text-sm bg-white dark:bg-white text-black dark:text-black hover:bg-gray-100 dark:hover:bg-gray-200 font-semibold shadow-lg"
                asChild
              >
                <Link href="/curso">Comenzar el curso</Link>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-9 sm:h-10 px-5 sm:px-6 text-xs sm:text-sm bg-black/40 dark:bg-black/40 border-white dark:border-white text-white dark:text-white hover:bg-white/20 dark:hover:bg-white/20 font-semibold shadow-lg"
                asChild
              >
                <Link href="/contacto">Contactar</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container px-3 sm:px-4 md:px-6 py-8 sm:py-12 mx-auto max-w-5xl">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="mb-4 w-full md:w-auto flex flex-wrap h-auto justify-center">
            <TabsTrigger value="overview" className="text-xs sm:text-sm h-8 sm:h-9 px-2 sm:px-3">
              Visión General
            </TabsTrigger>
            <TabsTrigger value="modules" className="text-xs sm:text-sm h-8 sm:h-9 px-2 sm:px-3">
              Módulos
            </TabsTrigger>
            <TabsTrigger value="methodology" className="text-xs sm:text-sm h-8 sm:h-9 px-2 sm:px-3">
              Metodología
            </TabsTrigger>
            <TabsTrigger value="benefits" className="text-xs sm:text-sm h-8 sm:h-9 px-2 sm:px-3">
              Beneficios
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <Card>
                <CardHeader className="p-4 sm:p-5 pb-2 sm:pb-3">
                  <div className="flex items-center mb-2">
                    <Lightbulb className="h-5 w-5 mr-2 text-primary" />
                    <CardTitle className="text-base sm:text-lg">Objetivo General</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-4 sm:p-5 pt-0 sm:pt-0">
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Proporcionar una comprensión integral de la violencia de género, sus causas, manifestaciones,
                    consecuencias y las estrategias para su prevención e intervención, fomentando una actitud
                    crítica y comprometida hacia su erradicación.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="p-4 sm:p-5 pb-2 sm:pb-3">
                  <div className="flex items-center mb-2">
                    <Users className="h-5 w-5 mr-2 text-primary" />
                    <CardTitle className="text-base sm:text-lg">Público Objetivo</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-4 sm:p-5 pt-0 sm:pt-0">
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Este curso está diseñado para cualquier persona mayor de 18 años interesada en comprender
                    y abordar la violencia de género. Es especialmente relevante para profesionales de la salud,
                    educación, trabajo social, derecho, así como para activistas y público general comprometido
                    con la igualdad.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="p-4 sm:p-5 pb-2 sm:pb-3">
                  <div className="flex items-center mb-2">
                    <Clock className="h-5 w-5 mr-2 text-primary" />
                    <CardTitle className="text-base sm:text-lg">Duración y Formato</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-4 sm:p-5 pt-0 sm:pt-0">
                  <p className="text-sm sm:text-base text-muted-foreground">
                    El curso tiene una duración total de 60 horas, distribuidas en 10 módulos temáticos.
                    Cada módulo incluye contenido teórico, recursos audiovisuales, actividades prácticas
                    y evaluaciones para consolidar el aprendizaje.
                  </p>
                  <div className="mt-3 flex items-center">
                    <span className="text-xs sm:text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">
                      Certificado de finalización disponible
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="p-4 sm:p-5 pb-2 sm:pb-3">
                  <div className="flex items-center mb-2">
                    <Award className="h-5 w-5 mr-2 text-primary" />
                    <CardTitle className="text-base sm:text-lg">Reconocimiento</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-4 sm:p-5 pt-0 sm:pt-0">
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Este curso ha sido desarrollado por expertos en violencia de género, psicología,
                    derecho y trabajo social. El contenido está actualizado con las últimas investigaciones
                    y enfoques en el campo, siguiendo recomendaciones de organismos internacionales.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Modules Tab */}
          <TabsContent value="modules">
            <Card>
              <CardHeader className="p-4 sm:p-5 pb-2 sm:pb-3">
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-primary" />
                  <CardTitle className="text-base sm:text-lg">Estructura del Curso</CardTitle>
                </div>
                <CardDescription className="text-xs sm:text-sm mt-1">
                  El curso está dividido en 10 módulos que cubren todos los aspectos de la violencia de género
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-5 pt-2 sm:pt-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  {featuredModules.map((module) => (
                    <div key={module.id} className="flex items-start p-3 border rounded-md bg-card/50">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                        <span className="text-xs font-bold">{module.id}</span>
                      </div>
                      <div>
                        <h3 className="text-sm sm:text-base font-medium">{module.title}</h3>
                        <p className="text-xs text-muted-foreground mt-1">
                          Duración: {module.duration}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-center">
                  <Button size="sm" className="h-8 sm:h-9 text-xs sm:text-sm" asChild>
                    <Link href="/curso">Ver todos los módulos</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Methodology Tab */}
          <TabsContent value="methodology">
            <Card>
              <CardHeader className="p-4 sm:p-5 pb-2 sm:pb-3">
                <CardTitle className="text-base sm:text-lg">Metodología de Aprendizaje</CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  Enfoque pedagógico centrado en el aprendizaje activo y participativo
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-5 pt-2 sm:pt-3">
                <div className="space-y-4">
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Cada módulo del curso incluye una combinación de los siguientes elementos:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2" />
                      <div>
                        <h3 className="text-sm sm:text-base font-medium">Exposiciones teóricas</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Contenido actualizado y basado en evidencia
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2" />
                      <div>
                        <h3 className="text-sm sm:text-base font-medium">Análisis de casos prácticos</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Ejemplos reales para aplicar conocimientos
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2" />
                      <div>
                        <h3 className="text-sm sm:text-base font-medium">Materiales audiovisuales</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Documentales, campañas y recursos multimedia
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2" />
                      <div>
                        <h3 className="text-sm sm:text-base font-medium">Debates y reflexiones</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Espacios para el pensamiento crítico
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2" />
                      <div>
                        <h3 className="text-sm sm:text-base font-medium">Actividades prácticas</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Ejercicios individuales y grupales
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2" />
                      <div>
                        <h3 className="text-sm sm:text-base font-medium">Evaluaciones formativas</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Pruebas para consolidar el aprendizaje
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-muted-foreground mt-4">
                    Se busca activamente la participación y reflexión de los participantes, fomentando
                    un aprendizaje significativo que pueda traducirse en acciones concretas para prevenir
                    y abordar la violencia de género.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Benefits Tab */}
          <TabsContent value="benefits">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              <Card className="md:col-span-3">
                <CardHeader className="p-4 sm:p-5 pb-2 sm:pb-3">
                  <CardTitle className="text-base sm:text-lg">Beneficios del Curso</CardTitle>
                  <CardDescription className="text-xs sm:text-sm">
                    Lo que obtendrás al completar este programa formativo
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader className="p-4 sm:p-5 pb-2 sm:pb-3">
                  <CardTitle className="text-sm sm:text-base">Conocimiento Integral</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-5 pt-0 sm:pt-0">
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Comprenderás en profundidad qué es la violencia de género, sus causas, manifestaciones
                    y consecuencias, basado en las últimas investigaciones y enfoques teóricos.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="p-4 sm:p-5 pb-2 sm:pb-3">
                  <CardTitle className="text-sm sm:text-base">Herramientas Prácticas</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-5 pt-0 sm:pt-0">
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Adquirirás habilidades y recursos para identificar situaciones de violencia,
                    conocer los recursos disponibles y contribuir a su prevención en diferentes contextos.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="p-4 sm:p-5 pb-2 sm:pb-3">
                  <CardTitle className="text-sm sm:text-base">Conciencia Crítica</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-5 pt-0 sm:pt-0">
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Desarrollarás una mirada crítica sobre los estereotipos y desigualdades de género
                    que sustentan la violencia, contribuyendo a transformar actitudes y comportamientos.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="p-4 sm:p-5 pb-2 sm:pb-3">
                  <CardTitle className="text-sm sm:text-base">Certificación</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-5 pt-0 sm:pt-0">
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Al completar el curso y aprobar las evaluaciones, recibirás un certificado que
                    acredita tu formación especializada en violencia de género.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="p-4 sm:p-5 pb-2 sm:pb-3">
                  <CardTitle className="text-sm sm:text-base">Recursos Actualizados</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-5 pt-0 sm:pt-0">
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Accederás a materiales, bibliografía y recursos audiovisuales actualizados
                    que podrás consultar incluso después de finalizar el curso.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="p-4 sm:p-5 pb-2 sm:pb-3">
                  <CardTitle className="text-sm sm:text-base">Comunidad de Aprendizaje</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-5 pt-0 sm:pt-0">
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Formarás parte de una comunidad comprometida con la erradicación de la violencia
                    de género, con la que podrás compartir experiencias y conocimientos.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* CTA Section with Background Image */}
      <section className="w-full py-10 sm:py-12 md:py-16 relative">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/img/vg.jpeg")',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            filter: 'brightness(0.25)'
          }}
        />
        {/* Additional dark overlay for better contrast */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        {/* Content */}
        <div className="container px-3 sm:px-4 md:px-6 mx-auto max-w-5xl relative z-10">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-white">
              ¿Listo para comenzar?
            </h2>
            <p className="text-sm sm:text-base text-gray-200 max-w-2xl mb-4 sm:mb-5">
              Únete a nuestro curso y forma parte del cambio hacia una sociedad libre de violencia de género.
            </p>
            <Button
              size="sm"
              className="h-9 sm:h-10 px-5 sm:px-6 text-xs sm:text-sm bg-white dark:bg-white text-primary dark:text-primary hover:bg-gray-100 dark:hover:bg-gray-200 font-medium shadow-lg"
              asChild
            >
              <Link href="/curso">Comenzar el curso ahora</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
