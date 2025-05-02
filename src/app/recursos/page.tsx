import { MainLayout } from "@/components/main-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function RecursosPage() {
  return (
    <MainLayout>
      <div className="container py-10">
        <h1 className="text-3xl font-bold mb-6">Recursos</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Líneas de Ayuda</CardTitle>
              <CardDescription>Servicios de atención y asistencia</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>
                  <strong>016:</strong> Teléfono de información y asesoramiento jurídico en materia de violencia de género.
                </li>
                <li>
                  <strong>112:</strong> Teléfono de emergencias.
                </li>
                <li>
                  <strong>900 116 016:</strong> Servicio de atención a personas con discapacidad auditiva y/o del habla.
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Recursos Online</CardTitle>
              <CardDescription>Sitios web con información y ayuda</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>
                  <a href="https://violenciagenero.igualdad.gob.es/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Delegación del Gobierno contra la Violencia de Género
                  </a>
                </li>
                <li>
                  <a href="https://www.inmujeres.gob.es/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Instituto de las Mujeres
                  </a>
                </li>
                <li>
                  <a href="https://www.unwomen.org/es" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    ONU Mujeres
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Documentos y Guías</CardTitle>
              <CardDescription>Material de consulta y formación</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>
                  <a href="https://violenciagenero.igualdad.gob.es/informacionUtil/guias/home.htm" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Guías y Manuales
                  </a>
                </li>
                <li>
                  <a href="https://www.who.int/es/news-room/fact-sheets/detail/violence-against-women" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    OMS: Violencia contra la mujer
                  </a>
                </li>
                <li>
                  <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2004-21760" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Ley Orgánica 1/2004 de Medidas de Protección Integral contra la Violencia de Género
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Aplicaciones Móviles</CardTitle>
              <CardDescription>Apps de ayuda y prevención</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>
                  <strong>AlertCops:</strong> App oficial de las Fuerzas y Cuerpos de Seguridad del Estado.
                </li>
                <li>
                  <strong>Libres:</strong> Información y recursos para mujeres que sufren violencia de género.
                </li>
                <li>
                  <strong>Relación Sana:</strong> App para detectar señales de violencia en las relaciones.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
