import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Obbligatorio per GitHub Pages
  basePath: "/Venice-By-Boat",
  images: {
    unoptimized: true, // GitHub Pages non supporta l'ottimizzazione immagini di Next.js
  },
};

export default nextConfig;
