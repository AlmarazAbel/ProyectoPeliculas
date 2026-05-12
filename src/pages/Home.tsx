import NavbarCustom from "../components/NavBar";
import Hero from "../components/Hero";
import MovieCard from "../components/MovieCard";
import { movies } from "../data/movies";

const Home = () => {
  return (
    <>
      <NavbarCustom />
      <Hero />
       {/* MOVIES */}
      <section className="bg-[#070b17] px-6 lg:px-12 py-12">
        
        <h2 className="text-4xl font-bold text-white mb-10">
          Películas destacadas
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;