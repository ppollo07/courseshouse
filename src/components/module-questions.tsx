"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Question } from "@/lib/module-service";

// Función para obtener las preguntas del módulo (comentada para uso futuro)
// async function getQuestions(moduleId: number): Promise<Question[]> {
//   try {
//     const response = await fetch(`/api/modules/${moduleId}/questions`);
//     if (!response.ok) {
//       throw new Error(`Error: ${response.status}`);
//     }
//     return await response.json();
//   } catch (error) {
//     console.error("Error al cargar las preguntas:", error);
//     return [];
//   }
// }

interface ModuleQuestionsProps {
  moduleId: number;
  moduleTitle: string;
}

export function ModuleQuestions({ moduleId }: ModuleQuestionsProps) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadQuestions() {
      try {
        setLoading(true);
        // Simulamos la carga de preguntas (en una implementación real, usaríamos getQuestions)
        // const data = await getQuestions(moduleId);

        // Datos de ejemplo para desarrollo
        const data: Question[] = [
          {
            question: "La violencia de género solo incluye agresiones físicas graves.",
            type: "truefalse",
            correctAnswer: false,
            explanation: "La violencia de género incluye múltiples formas: física, psicológica, sexual, económica, vicaria, digital, entre otras."
          },
          {
            question: "El patriarcado es un sistema social que establece relaciones jerárquicas de poder donde lo masculino predomina sobre lo femenino.",
            type: "truefalse",
            correctAnswer: true,
            explanation: "El patriarcado es efectivamente un sistema social, político, económico y cultural donde los hombres ostentan posiciones de poder y autoridad primarias."
          },
          {
            question: "¿Cuál de las siguientes afirmaciones describe correctamente el concepto de género?",
            type: "multiple",
            options: [
              "Es determinado por los cromosomas y las hormonas",
              "Es una construcción social que varía según la cultura y el tiempo",
              "Es inmutable y permanente desde el nacimiento",
              "Es exactamente lo mismo que el sexo biológico"
            ],
            correctAnswer: "Es una construcción social que varía según la cultura y el tiempo",
            explanation: ""
          },
          {
            question: "Los estereotipos de género son:",
            type: "multiple",
            options: [
              "Características biológicas que diferencian a hombres y mujeres",
              "Leyes que regulan el comportamiento según el sexo",
              "Creencias simplificadas y generalizadas sobre cómo son o deben ser los hombres y las mujeres",
              "Roles asignados únicamente en la infancia"
            ],
            correctAnswer: "Creencias simplificadas y generalizadas sobre cómo son o deben ser los hombres y las mujeres",
            explanation: ""
          }
        ];

        setQuestions(data);
        setError(null);
      } catch (err) {
        setError("Error al cargar las preguntas. Por favor, intenta de nuevo más tarde.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadQuestions();
  }, [moduleId]);

  // Separar preguntas por tipo
  const trueFalseQuestions = questions.filter(q => q.type === "truefalse");
  const multipleChoiceQuestions = questions.filter(q => q.type === "multiple");

  if (loading) {
    return <div className="py-8 text-center">Cargando preguntas...</div>;
  }

  if (error) {
    return <div className="py-8 text-center text-red-500">{error}</div>;
  }

  if (questions.length === 0) {
    return <div className="py-8 text-center">No hay preguntas disponibles para este módulo.</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:gap-6 mt-4 sm:mt-6">
      {trueFalseQuestions.length > 0 && (
        <Card className="shadow-sm border-muted overflow-hidden">
          <CardHeader className="bg-muted/30 border-b p-3 sm:p-4">
            <CardTitle className="text-lg sm:text-xl">Prueba de Verdadero/Falso</CardTitle>
            <CardDescription className="text-muted-foreground text-xs sm:text-sm">
              Indica si las siguientes afirmaciones son verdaderas o falsas
            </CardDescription>
          </CardHeader>
          <CardContent className="p-3 sm:p-4 pt-4 sm:pt-5">
            <div className="space-y-4 sm:space-y-5">
              {trueFalseQuestions.map((question, index) => (
                <div key={index} className="p-3 sm:p-4 border rounded-md bg-card/50">
                  <p className="font-medium mb-2 sm:mb-3 text-sm sm:text-base leading-tight sm:leading-relaxed">
                    {index + 1}. {question.question}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2 sm:mt-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 px-4 text-xs sm:text-sm hover:bg-green-100/20 hover:border-green-200 dark:hover:bg-green-900/20 dark:hover:border-green-800"
                    >
                      Verdadero
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 px-4 text-xs sm:text-sm hover:bg-red-100/20 hover:border-red-200 dark:hover:bg-red-900/20 dark:hover:border-red-800"
                    >
                      Falso
                    </Button>
                  </div>
                  <div className="mt-2 sm:mt-3 text-xs sm:text-sm text-muted-foreground">
                    <details className="bg-muted/30 p-1.5 sm:p-2 rounded-md">
                      <summary className="cursor-pointer font-medium">Ver explicación</summary>
                      <div className="mt-1 sm:mt-2 pl-2 sm:pl-3 border-l-2 border-primary/50 py-1 sm:py-2">
                        <p className="leading-tight sm:leading-relaxed">{question.explanation}</p>
                      </div>
                    </details>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {multipleChoiceQuestions.length > 0 && (
        <Card className="shadow-sm border-muted overflow-hidden">
          <CardHeader className="bg-muted/30 border-b p-3 sm:p-4">
            <CardTitle className="text-lg sm:text-xl">Prueba de Opción Múltiple</CardTitle>
            <CardDescription className="text-muted-foreground text-xs sm:text-sm">
              Selecciona la respuesta correcta para cada pregunta
            </CardDescription>
          </CardHeader>
          <CardContent className="p-3 sm:p-4 pt-4 sm:pt-5">
            <div className="space-y-4 sm:space-y-5">
              {multipleChoiceQuestions.map((question, index) => (
                <div key={index} className="p-3 sm:p-4 border rounded-md bg-card/50">
                  <p className="font-medium mb-2 sm:mb-3 text-sm sm:text-base leading-tight sm:leading-relaxed">
                    {index + 1}. {question.question}
                  </p>
                  <div className="space-y-2 mt-2 sm:mt-3">
                    {question.options?.map((option, optIndex) => (
                      <div key={optIndex} className="flex items-center">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full justify-start text-left whitespace-normal h-auto py-2 px-3 sm:py-2.5 sm:px-4 rounded-md hover:bg-primary/10 text-xs sm:text-sm"
                        >
                          <span className="mr-1.5 sm:mr-2 font-medium min-w-[16px] sm:min-w-[20px]">{String.fromCharCode(97 + optIndex)})</span>
                          <span className="leading-tight sm:leading-relaxed">{option}</span>
                        </Button>
                      </div>
                    ))}
                  </div>
                  <div className="mt-2 sm:mt-3 text-xs sm:text-sm text-muted-foreground">
                    <details className="bg-muted/30 p-1.5 sm:p-2 rounded-md">
                      <summary className="cursor-pointer font-medium">Ver respuesta correcta</summary>
                      <div className="mt-1 sm:mt-2 pl-2 sm:pl-3 border-l-2 border-primary/50 py-1 sm:py-2">
                        <p className="font-medium text-primary text-xs sm:text-sm">Respuesta correcta:</p>
                        <p className="mt-0.5 sm:mt-1 leading-tight sm:leading-relaxed">{question.correctAnswer}</p>
                      </div>
                    </details>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t bg-muted/20 p-3 sm:p-4">
            <Button className="w-full md:w-auto md:px-6 md:ml-auto h-8 sm:h-9 text-xs sm:text-sm">
              <span className="mr-1.5 sm:mr-2">Enviar respuestas</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send-horizontal"><path d="m3 3 3 9-3 9 19-9Z"/><path d="M6 12h16"/></svg>
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
