const fs = require('fs');
const path = require('path');

// Configuración
const documentsDir = '/Users/ariel.porporatto/pollo/ProjectsRandom/Cursos/ViolenciaGenero/Documents';
const outputDir = '/Users/ariel.porporatto/pollo/ProjectsRandom/Cursos/ViolenciaGenero/violencia-genero/src/data';

// Asegurarse de que el directorio de salida exista
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Información de los módulos (basada en el temario)
const modulesInfo = [
  {
    id: 1,
    title: "Introducción y Conceptos Fundamentales",
    description: "Diferencias entre sexo y género, definición de violencia de género, conceptos relacionados, mitos y realidades.",
    duration: "6 horas"
  },
  {
    id: 2,
    title: "Tipos y Manifestaciones de la Violencia de Género",
    description: "Violencia física, psicológica, sexual, económica, vicaria, institucional, digital y otras formas.",
    duration: "10 horas"
  },
  {
    id: 3,
    title: "Magnitud del Problema: Datos y Estadísticas",
    description: "Estadísticas globales y en España, feminicidios, costes de la violencia de género.",
    duration: "6 horas"
  },
  {
    id: 4,
    title: "Causas y Factores de Riesgo",
    description: "Raíces estructurales, modelo ecológico, socialización de género, masculinidades y violencia.",
    duration: "8 horas"
  },
  {
    id: 5,
    title: "Impacto y Consecuencias",
    description: "Consecuencias para la salud física y mental, impacto en hijos e hijas, impacto social y económico.",
    duration: "6 horas"
  },
  {
    id: 6,
    title: "Marco Legal y Derechos",
    description: "Marco normativo internacional y en España, derechos de las víctimas, proceso de denuncia.",
    duration: "6 horas"
  },
  {
    id: 7,
    title: "Intervención y Servicios de Apoyo",
    description: "Principios de intervención, servicios especializados, intervención multidisciplinar.",
    duration: "8 horas"
  },
  {
    id: 8,
    title: "Prevención de la Violencia de Género",
    description: "Niveles de prevención, estrategias, involucrar a hombres y niños, campañas de sensibilización.",
    duration: "8 horas"
  },
  {
    id: 9,
    title: "Grupos Específicos y Violencias Interseccionales",
    description: "Enfoque interseccional, violencia contra mujeres migrantes, con discapacidad, LGBTIQ+.",
    duration: "2 horas"
  },
  {
    id: 10,
    title: "Conclusiones y Compromiso",
    description: "Recapitulación, rol de cada persona, recursos adicionales.",
    duration: "Cierre"
  }
];

// Función para leer el contenido de un archivo
function readFileContent(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    console.error(`Error al leer el archivo ${filePath}:`, error);
    return '';
  }
}

// Función para parsear las pruebas de verdadero/falso y opción múltiple
function parseTestQuestions(content) {
  if (!content) return { truefalse: [], multiple: [] };

  const truefalseSection = content.split('## Prueba de Verdadero/Falso')[1]?.split('## Prueba de Opción Múltiple')[0] || '';
  const multipleChoiceSection = content.split('## Prueba de Opción Múltiple')[1] || '';
  
  // Parsear preguntas de verdadero/falso
  const truefalseQuestions = [];
  const tfMatches = truefalseSection.match(/\d+\.\s+.*?(?=\d+\.\s+|$)/gs) || [];
  
  tfMatches.forEach(match => {
    const lines = match.trim().split('\n').filter(Boolean);
    if (lines.length >= 3) {
      const questionMatch = lines[0].match(/\d+\.\s+(.*)/);
      const question = questionMatch ? questionMatch[1].trim() : '';
      const answer = lines[1].includes('Verdadero');
      const explanationLine = lines[2].trim();
      const explanation = explanationLine.replace(/\*\s*Explicación:\s*/, '').trim();
      
      truefalseQuestions.push({
        question,
        type: 'truefalse',
        correctAnswer: answer,
        explanation
      });
    }
  });
  
  // Parsear preguntas de opción múltiple
  const multipleChoiceQuestions = [];
  const mcMatches = multipleChoiceSection.match(/\d+\.\s+.*?(?=\d+\.\s+|$)/gs) || [];
  
  mcMatches.forEach(match => {
    const lines = match.trim().split('\n').filter(Boolean);
    if (lines.length >= 5) {
      const questionMatch = lines[0].match(/\d+\.\s+(.*)/);
      const question = questionMatch ? questionMatch[1].trim() : '';
      
      const options = [];
      for (let i = 1; i <= 4; i++) {
        if (lines[i] && lines[i].match(/[a-d]\)/)) {
          options.push(lines[i].replace(/[a-d]\)\s*/, '').trim());
        }
      }
      
      let correctAnswer = '';
      const answerLine = lines.find(line => line.includes('* Respuesta correcta:'));
      if (answerLine) {
        correctAnswer = answerLine.replace(/\*\s*Respuesta correcta:\s*/, '').trim();
      }
      
      multipleChoiceQuestions.push({
        question,
        type: 'multiple',
        options,
        correctAnswer,
        explanation: ''
      });
    }
  });
  
  return {
    truefalse: truefalseQuestions,
    multiple: multipleChoiceQuestions
  };
}

// Función para procesar un módulo
function processModule(moduleId) {
  const moduleInfo = modulesInfo[moduleId - 1];
  
  // Rutas de los archivos
  const contentPath = path.join(documentsDir, `modulo_${String(moduleId).padStart(2, '0')}_contenido.md`);
  const examplesPath = path.join(documentsDir, `modulo_${String(moduleId).padStart(2, '0')}_ejemplos.md`);
  const testsPath = path.join(documentsDir, `modulo_${String(moduleId).padStart(2, '0')}_pruebas.md`);
  const imagesPath = path.join(documentsDir, `modulo_${String(moduleId).padStart(2, '0')}_imagenes_descripciones.md`);
  
  // Leer contenidos
  const content = readFileContent(contentPath);
  const examples = readFileContent(examplesPath);
  const tests = readFileContent(testsPath);
  const images = readFileContent(imagesPath);
  
  // Parsear pruebas
  const parsedTests = parseTestQuestions(tests);
  
  // Crear objeto del módulo
  const moduleData = {
    id: moduleId,
    title: moduleInfo.title,
    description: moduleInfo.description,
    duration: moduleInfo.duration,
    content: content,
    examples: examples,
    tests: {
      truefalse: parsedTests.truefalse,
      multiple: parsedTests.multiple
    },
    images: images
  };
  
  return moduleData;
}

// Procesar todos los módulos
const allModules = [];
for (let i = 1; i <= 10; i++) {
  console.log(`Procesando módulo ${i}...`);
  const moduleData = processModule(i);
  allModules.push(moduleData);
}

// Guardar datos en archivos JSON
console.log('Guardando datos...');

// Guardar todos los módulos en un solo archivo
fs.writeFileSync(
  path.join(outputDir, 'all-modules.json'),
  JSON.stringify(allModules, null, 2),
  'utf8'
);

// Guardar cada módulo en un archivo separado
allModules.forEach(module => {
  fs.writeFileSync(
    path.join(outputDir, `module-${module.id}.json`),
    JSON.stringify(module, null, 2),
    'utf8'
  );
});

// Guardar información básica de los módulos (sin contenido completo)
const modulesBasicInfo = allModules.map(module => ({
  id: module.id,
  title: module.title,
  description: module.description,
  duration: module.duration
}));

fs.writeFileSync(
  path.join(outputDir, 'modules-info.json'),
  JSON.stringify(modulesBasicInfo, null, 2),
  'utf8'
);

console.log('Proceso completado con éxito.');
