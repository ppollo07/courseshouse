import Link from "next/link";
import { MainLayout } from "@/components/main-layout";
import { Button } from "@/components/ui/button";

export default function SobrePage() {
  return (
    <MainLayout>
      <div className="container py-10">
        <h1 className="text-3xl font-bold mb-6">Sobre el Curso</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <h2>Objetivo General</h2>
          <p>
            Proporcionar una comprensión integral de la violencia de género, sus causas, manifestaciones, 
            consecuencias y las estrategias para su prevención e intervención, fomentando una actitud 
            crítica y comprometida hacia su erradicación.
          </p>
          
          <h2>Público</h2>
          <p>Cualquier persona mayor de 18 años.</p>
          
          <h2>Duración Total</h2>
          <p>60 horas.</p>
          
          <h2>Metodología</h2>
          <p>
            Cada módulo incluye exposiciones teóricas, análisis de casos prácticos, visionado de 
            materiales audiovisuales (documentales, campañas), debates grupales, actividades 
            individuales y grupales, y referencias a la investigación recopilada. Se busca activamente 
            la participación y reflexión de los asistentes.
          </p>
          
          <h2>Estructura del Curso</h2>
          <ul>
            <li><strong>Módulo 1:</strong> Introducción y Conceptos Fundamentales (6 horas)</li>
            <li><strong>Módulo 2:</strong> Tipos y Manifestaciones de la Violencia de Género (10 horas)</li>
            <li><strong>Módulo 3:</strong> Magnitud del Problema: Datos y Estadísticas (6 horas)</li>
            <li><strong>Módulo 4:</strong> Causas y Factores de Riesgo (8 horas)</li>
            <li><strong>Módulo 5:</strong> Impacto y Consecuencias (6 horas)</li>
            <li><strong>Módulo 6:</strong> Marco Legal y Derechos (6 horas)</li>
            <li><strong>Módulo 7:</strong> Intervención y Servicios de Apoyo (8 horas)</li>
            <li><strong>Módulo 8:</strong> Prevención de la Violencia de Género (8 horas)</li>
            <li><strong>Módulo 9:</strong> Grupos Específicos y Violencias Interseccionales (2 horas)</li>
            <li><strong>Módulo 10:</strong> Conclusiones y Compromiso</li>
          </ul>
        </div>
        
        <div className="mt-8">
          <Button asChild>
            <Link href="/curso">Comenzar el curso</Link>
          </Button>
        </div>
      </div>
    </MainLayout>
  );
}
