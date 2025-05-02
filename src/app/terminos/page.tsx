import { MainLayout } from "@/components/main-layout";

export default function TerminosPage() {
  return (
    <MainLayout>
      <div className="container py-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Términos y Condiciones</h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p>
              Última actualización: 1 de mayo de 2023
            </p>
            
            <h2>1. Introducción</h2>
            <p>
              Bienvenido/a al Curso sobre Violencia de Género. Estos Términos y Condiciones rigen el uso de nuestra plataforma educativa y todos los contenidos y servicios disponibles a través de ella.
            </p>
            
            <h2>2. Aceptación de los Términos</h2>
            <p>
              Al acceder o utilizar nuestra plataforma, usted acepta estar sujeto a estos Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, no podrá acceder a la plataforma.
            </p>
            
            <h2>3. Cambios en los Términos</h2>
            <p>
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación. El uso continuado de la plataforma después de dichos cambios constituirá su aceptación de los nuevos términos.
            </p>
            
            <h2>4. Acceso y Uso de la Plataforma</h2>
            <p>
              4.1. Requisitos de Edad: Este curso está dirigido a personas mayores de 18 años.
            </p>
            <p>
              4.2. Registro: Para acceder a ciertos contenidos o funcionalidades, puede ser necesario registrarse y proporcionar información precisa y completa.
            </p>
            <p>
              4.3. Seguridad de la Cuenta: Es responsable de mantener la confidencialidad de su información de acceso y de todas las actividades que ocurran bajo su cuenta.
            </p>
            
            <h2>5. Propiedad Intelectual</h2>
            <p>
              5.1. Todos los contenidos del curso (textos, imágenes, vídeos, etc.) están protegidos por derechos de autor y otras leyes de propiedad intelectual.
            </p>
            <p>
              5.2. Se permite el uso personal y no comercial de los materiales del curso. No se permite la reproducción, distribución o modificación sin autorización expresa.
            </p>
            
            <h2>6. Limitación de Responsabilidad</h2>
            <p>
              6.1. La información proporcionada en el curso tiene fines educativos y no constituye asesoramiento profesional.
            </p>
            <p>
              6.2. No nos hacemos responsables de cualquier daño directo, indirecto, incidental o consecuente que pueda surgir del uso de nuestra plataforma o contenidos.
            </p>
            
            <h2>7. Ley Aplicable</h2>
            <p>
              Estos términos se regirán e interpretarán de acuerdo con las leyes de España, sin tener en cuenta sus disposiciones sobre conflictos de leyes.
            </p>
            
            <h2>8. Contacto</h2>
            <p>
              Si tiene alguna pregunta sobre estos Términos y Condiciones, puede contactarnos a través de la página de contacto o enviando un correo electrónico a info@cursovg.ejemplo.com.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
