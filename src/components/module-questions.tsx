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
    <div className="grid grid-cols-1 gap-6 mt-6">
      {trueFalseQuestions.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Prueba de Verdadero/Falso</CardTitle>
            <CardDescription>
              Indica si las siguientes afirmaciones son verdaderas o falsas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {trueFalseQuestions.map((question, index) => (
                <div key={index} className="p-4 border rounded-md">
                  <p className="font-medium mb-2">{index + 1}. {question.question}</p>
                  <div className="flex gap-2 mt-2">
                    <Button variant="outline" size="sm">
                      Verdadero
                    </Button>
                    <Button variant="outline" size="sm">
                      Falso
                    </Button>
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    <details>
                      <summary className="cursor-pointer">Ver explicación</summary>
                      <p className="mt-2 pl-2 border-l-2 border-primary/20">{question.explanation}</p>
                    </details>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {multipleChoiceQuestions.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Prueba de Opción Múltiple</CardTitle>
            <CardDescription>
              Selecciona la respuesta correcta para cada pregunta
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {multipleChoiceQuestions.map((question, index) => (
                <div key={index} className="p-4 border rounded-md">
                  <p className="font-medium mb-2">{index + 1}. {question.question}</p>
                  <div className="space-y-2 mt-2">
                    {question.options?.map((option, optIndex) => (
                      <div key={optIndex} className="flex items-center">
                        <Button variant="outline" size="sm" className="w-full justify-start">
                          {String.fromCharCode(97 + optIndex)}) {option}
                        </Button>
                      </div>
                    ))}
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    <details>
                      <summary className="cursor-pointer">Ver respuesta correcta</summary>
                      <p className="mt-2 pl-2 border-l-2 border-primary/20">Respuesta correcta: {question.correctAnswer}</p>
                    </details>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Enviar respuestas</Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
