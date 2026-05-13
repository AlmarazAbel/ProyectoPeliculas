
import Hero from "../components/Hero";
import MovieCard from "../components/MovieCard";
import  {type Movie } from "../data/movies";

const Home = ({ movies, allMovies }: { movies: Movie[]; allMovies: Movie[] }) => {

  // Buscamos la destacada que esté publicada. 
  // Si no hay ninguna marcada, usamos la primera publicada que encontremos.
  const featuredMovie = allMovies.find((m) => m.isFeatured && m.isPublished) || allMovies.find(m => m.isPublished);

  return (
    <main className="bg-[#070b17] min-h-screen">
      {/* 1. Hero Principal - Solo se muestra si existe una película */}
      {featuredMovie ? (
        <Hero movie={featuredMovie} />
      ) : (
        <div className="h-[40vh] flex items-center justify-center text-gray-500">
          Cargando cartelera...
        </div>
      )}
      
      <section className="px-6 lg:px-20 py-12 space-y-16">
        
        {/* SECCIÓN: ACCIÓN */}

        {movies.some(m => m.category === "Acción" && m.isPublished) && (
          <div id="acción" className="scroll-mt-24 mb-12">
            <h2 className="text-white text-3xl font-bold mb-8 border-l-4 border-violet-600 pl-4">
              Acción
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
              {movies
                .filter(m => m.category === "Acción" && m.isPublished)
                .map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
          </div>
        )}

        {/* SECCIÓN: COMEDIA */}
        {movies.some(m => m.category === "Comedia" && m.isPublished) && (
          <div id="comedia" className="scroll-mt-24 mb-12">
            <h2 className="text-white text-3xl font-bold mb-8 border-l-4 border-violet-600 pl-4">
              Comedia
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
              {movies
                .filter(m => m.category === "Comedia" && m.isPublished)
                .map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
          </div>
        )}

        
 {/* SECCIÓN: DRAMA */}
        {movies.some(m => m.category === "Drama" && m.isPublished) && (
          <div id="drama" className="scroll-mt-24 mb-12" >
            <h2 className="text-white text-3xl font-bold mb-8 border-l-4 border-violet-600 pl-4">
              Drama
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
              {movies
                .filter(m => m.category === "Drama" && m.isPublished)
                .map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
          </div>
        )}
         {/* SECCIÓN: TERROR */}
        {movies.some(m => m.category === "Terror" && m.isPublished) && (
          <div id="terror" className="scroll-mt-24 mb-12">
            <h2 className="text-white text-3xl font-bold mb-8 border-l-4 border-violet-600 pl-4">
              Terror
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
              {movies
                .filter(m => m.category === "Terror" && m.isPublished)
                .map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
          </div>
        )}
         {/* SECCIÓN: Ciencia ficción */}
        {movies.some(m => m.category === "Ciencia ficción" && m.isPublished) && (
          <div id="cienciaficción" className="scroll-mt-24 mb-12">
            <h2 className="text-white text-3xl font-bold mb-8 border-l-4 border-violet-600 pl-4">
              Ciencia ficción
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
              {movies
                .filter(m => m.category === "Ciencia ficción" && m.isPublished)
                .map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Home;