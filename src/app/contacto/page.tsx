import { MainLayout } from "@/components/main-layout";

export default function ContactoPage() {
  return (
    <MainLayout>
      <div className="container mx-auto py-10 px-4 md:px-6 max-w-5xl">
        <h1 className="text-3xl font-bold mb-6">Contacto</h1>
        <div className="bg-card p-6 rounded-lg border">
          <p className="mb-4">
            Para cualquier consulta relacionada con el curso, puedes contactarnos a través de los siguientes medios:
          </p>
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold mb-2">Correo electrónico</h2>
              <p>info@cursovg.org</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Teléfono</h2>
              <p>+54 11 1234-5678</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Dirección</h2>
              <p>Av. Rivadavia 1234, Buenos Aires, Argentina</p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
