// Importamos el servicio de módulos
import {
  getAllModules as getModulesInfo,
  getModuleContent as getModuleContentFromService,
  getModuleExamples as getModuleExamplesFromService,
  getModuleTests as getModuleTestsFromService,
  getModuleImagesDescriptions as getModuleImagesDescriptionsFromService,
  getModuleQuestions as getModuleQuestionsFromService,
  type Question
} from './module-service';

// Función para obtener el contenido de un módulo
export async function getModuleContent(moduleId: number): Promise<string> {
  try {
    return await getModuleContentFromService(moduleId);
  } catch (error) {
    console.error(`Error al obtener el contenido del módulo ${moduleId}:`, error);
    return `# Error al cargar el contenido del módulo ${moduleId}`;
  }
}

// Función para obtener los ejemplos de un módulo
export async function getModuleExamples(moduleId: number): Promise<string> {
  try {
    return await getModuleExamplesFromService(moduleId);
  } catch (error) {
    console.error(`Error al obtener los ejemplos del módulo ${moduleId}:`, error);
    return `# Error al cargar los ejemplos del módulo ${moduleId}`;
  }
}

// Función para obtener las pruebas de un módulo
export async function getModuleTests(moduleId: number): Promise<string> {
  try {
    const tests = await getModuleTestsFromService(moduleId);
    if (!tests) return `# No hay pruebas disponibles para el módulo ${moduleId}`;

    // Convertir el objeto de pruebas a formato markdown
    let markdown = `# Pruebas de Evaluación para el Módulo ${moduleId}\n\n`;

    // Pruebas de verdadero/falso
    if (tests.truefalse && tests.truefalse.length > 0) {
      markdown += `## Prueba de Verdadero/Falso\n\n`;
      tests.truefalse.forEach((q, index) => {
        markdown += `${index + 1}. ${q.question}\n`;
        markdown += `   * Respuesta: ${q.correctAnswer ? 'Verdadero' : 'Falso'}\n`;
        markdown += `   * Explicación: ${q.explanation}\n\n`;
      });
    }

    // Pruebas de opción múltiple
    if (tests.multiple && tests.multiple.length > 0) {
      markdown += `## Prueba de Opción Múltiple\n\n`;
      tests.multiple.forEach((q, index) => {
        markdown += `${index + 1}. ${q.question}\n`;
        if (q.options) {
          q.options.forEach((option, optIndex) => {
            const optionLetter = String.fromCharCode(97 + optIndex); // a, b, c, d...
            markdown += `   ${optionLetter}) ${option}\n`;
          });
        }
        markdown += `   * Respuesta correcta: ${q.correctAnswer}\n\n`;
      });
    }

    return markdown;
  } catch (error) {
    console.error(`Error al obtener las pruebas del módulo ${moduleId}:`, error);
    return `# Error al cargar las pruebas del módulo ${moduleId}`;
  }
}

// Función para obtener las imágenes y descripciones de un módulo
export async function getModuleImagesDescriptions(moduleId: number): Promise<string> {
  try {
    return await getModuleImagesDescriptionsFromService(moduleId);
  } catch (error) {
    console.error(`Error al obtener las imágenes del módulo ${moduleId}:`, error);
    return `# Error al cargar las imágenes del módulo ${moduleId}`;
  }
}

// Función para obtener todos los módulos
export function getAllModules() {
  return getModulesInfo();
}

// Función para analizar las preguntas de prueba
export async function parseTestQuestions(moduleId: number): Promise<Question[]> {
  try {
    return await getModuleQuestionsFromService(moduleId);
  } catch (error) {
    console.error(`Error al analizar las preguntas del módulo ${moduleId}:`, error);
    return [];
  }
}
