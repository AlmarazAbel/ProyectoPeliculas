import type { Movie } from "../data/movies";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <div className="bg-[#111827] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
      
      {/* IMAGE */}
      <img
        src={movie.image}
        alt={movie.title}
        className="w-full h-[380px] object-cover"
      />

      {/* CONTENT */}
      <div className="p-4 text-white">
        <h3 className="text-xl font-bold mb-2">
          {movie.title}
        </h3>

        <p className="text-gray-400">
          {movie.category}
        </p>

        <p className="text-sm text-gray-500 mt-1">
          {movie.year}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;