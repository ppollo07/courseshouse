import modulesInfo from '@/data/modules-info.json';

// Tipos para los datos de los módulos
export interface ModuleInfo {
  id: number;
  title: string;
  description: string;
  duration: string;
}

export interface TrueFalseQuestion {
  question: string;
  type: 'truefalse';
  correctAnswer: boolean;
  explanation: string;
}

export interface MultipleChoiceQuestion {
  question: string;
  type: 'multiple';
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export type Question = TrueFalseQuestion | MultipleChoiceQuestion;

export interface ModuleTests {
  truefalse: TrueFalseQuestion[];
  multiple: MultipleChoiceQuestion[];
}

export interface Module extends ModuleInfo {
  content: string;
  examples: string;
  tests: ModuleTests;
  images: string;
}

// Función para obtener la información básica de todos los módulos
export function getAllModules(): ModuleInfo[] {
  return modulesInfo;
}

// Función para obtener la información básica de un módulo específico
export function getModuleInfo(moduleId: number): ModuleInfo | undefined {
  return modulesInfo.find(module => module.id === moduleId);
}

// Función para obtener el contenido completo de un módulo específico
export async function getModule(moduleId: number): Promise<Module | undefined> {
  try {
    // Importar dinámicamente el módulo específico
    const moduleData = await import(`@/data/module-${moduleId}.json`);
    return moduleData.default as Module;
  } catch (error) {
    console.error(`Error al cargar el módulo ${moduleId}:`, error);
    return undefined;
  }
}

// Función para obtener solo el contenido de un módulo
export async function getModuleContent(moduleId: number): Promise<string> {
  const moduleData = await getModule(moduleId);
  return moduleData?.content || '';
}

// Función para obtener solo los ejemplos de un módulo
export async function getModuleExamples(moduleId: number): Promise<string> {
  const moduleData = await getModule(moduleId);
  return moduleData?.examples || '';
}

// Función para obtener solo las pruebas de un módulo
export async function getModuleTests(moduleId: number): Promise<ModuleTests | undefined> {
  const moduleData = await getModule(moduleId);
  return moduleData?.tests;
}

// Función para obtener solo las imágenes y descripciones de un módulo
export async function getModuleImagesDescriptions(moduleId: number): Promise<string> {
  const moduleData = await getModule(moduleId);
  return moduleData?.images || '';
}

// Función para obtener todas las preguntas de un módulo
export async function getModuleQuestions(moduleId: number): Promise<Question[]> {
  const tests = await getModuleTests(moduleId);
  if (!tests) return [];

  return [...tests.truefalse, ...tests.multiple];
}

// Función para buscar módulos por término
export function searchModules(term: string): ModuleInfo[] {
  const searchTerm = term.toLowerCase();
  return modulesInfo.filter(module =>
    module.title.toLowerCase().includes(searchTerm) ||
    module.description.toLowerCase().includes(searchTerm)
  );
}
