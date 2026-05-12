export interface Movie {
  id: number;
  title: string;
  category: string;
  year: number;
  image: string;
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "John Wick 4",
    category: "Acción",
    year: 2023,
    image:
      "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
  },

  {
    id: 2,
    title: "Interstellar",
    category: "Ciencia ficción",
    year: 2014,
    image:
      "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  },

  {
    id: 3,
    title: "Batman",
    category: "Acción",
    year: 2022,
    image:
      "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
  },
];