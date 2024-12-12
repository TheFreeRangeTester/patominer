/** @type {import('next').NextConfig} */
import type { Configuration } from 'webpack';

const nextConfig = {
  // Deshabilitar caché de webpack
  webpack: (config: Configuration) => {
    config.cache = false;
    return config;
  },

  // Configuraciones adicionales para exportación estática
  output: 'export',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig;
