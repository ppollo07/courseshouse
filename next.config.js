/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Opciones generales */

  // Deshabilitar ESLint durante la compilación
  eslint: {
    // Advertencia: solo deshabilitar en producción si estás seguro de que tu código es correcto
    ignoreDuringBuilds: true,
  },

  // Deshabilitar la comprobación de tipos durante la compilación
  typescript: {
    // Advertencia: solo deshabilitar en producción si estás seguro de que tu código es correcto
    ignoreBuildErrors: true,
  },

  // Configuración para Webpack (cuando se usa sin Turbopack)
  webpack: (config) => {
    // Configuración para importar archivos JSON
    config.module.rules.push({
      test: /\.json$/,
      type: 'json',
    });

    return config;
  },

  // Configuración para Turbopack (estable)
  // @see https://nextjs.org/docs/app/api-reference/next-config-js/turbopack
  turbopack: {
    // Configuración para resolver módulos
    resolveAlias: {
      // Asegurarse de que los archivos JSON se manejen correctamente
      '*.json': '*.json',
    },
  },
};

module.exports = nextConfig;
