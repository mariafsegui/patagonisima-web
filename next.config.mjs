/** @type {import('next').NextConfig} */
const nextConfig = {
  // Genera un sitio estatico en la carpeta "out/" al correr el build.
  // Esto permite subir la web por FTP a un hosting sin Node.js.
  output: 'export',
  // Cada ruta se genera como carpeta con index.html (mejor para hosting FTP).
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
