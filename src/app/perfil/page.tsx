import Link from "next/link";
import { MainLayout } from "@/components/main-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function PerfilPage() {
  return (
    <MainLayout>
      <div className="container py-10">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="/placeholder-avatar.jpg" alt="Avatar" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>Usuario</CardTitle>
                    <CardDescription>usuario@ejemplo.com</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium">Fecha de registro</h3>
                    <p className="text-sm text-muted-foreground">1 de mayo de 2023</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Último acceso</h3>
                    <p className="text-sm text-muted-foreground">Hoy</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Editar perfil</Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="md:w-2/3">
            <Card>
              <CardHeader>
                <CardTitle>Progreso del Curso</CardTitle>
                <CardDescription>Tu avance en los módulos del curso</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Array.from({ length: 10 }, (_, i) => i + 1).map((moduleId) => (
                    <div key={moduleId} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`h-4 w-4 rounded-full ${moduleId <= 3 ? 'bg-green-500' : 'bg-gray-200 dark:bg-gray-700'}`}></div>
                        <span>Módulo {moduleId}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {moduleId <= 3 ? (
                          <span className="text-sm text-green-500">Completado</span>
                        ) : (
                          <span className="text-sm text-muted-foreground">Pendiente</span>
                        )}
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={`/curso/modulo/${moduleId}`}>
                            {moduleId <= 3 ? 'Repasar' : 'Comenzar'}
                          </Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <div className="w-full">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Progreso total</span>
                    <span className="text-sm font-medium">30%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: '30%' }}></div>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
