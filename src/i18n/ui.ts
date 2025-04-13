import { themeConfig } from "@/config";
const { title, subtitle, description } = themeConfig.site;

export const ui = {
  en: {
    title: title,
    subtitle: subtitle,
    description: description,
    posts: "Posts",
    tags: "Tags",
    about: "About",
    toc: "Table of Contents",
  },
  es: {
    title: "La Frontera",
    subtitle: "Noticias y Analysis revolucionario.",
    description:
      "Retypeset es un tema de blog estático basado en el framework Astro. Inspirado por Typography, Retypeset establece un nuevo estándar visual y reimagina el diseño de todas las páginas, creando una experiencia de lectura similar a la de los libros impresos, reviviendo la belleza de la tipografía. Detalles en cada mirada, elegancia en cada espacio.",
    posts: "Artículos",
    tags: "Etiquetas",
    about: "Sobre",
    toc: "Índice",
  },
};
