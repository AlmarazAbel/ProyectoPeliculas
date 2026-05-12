const Hero = () => {
  return (
    <section
      className="relative h-[85vh] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://wallpapercave.com/wp/wp4056410.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-6 lg:px-20">
        <div className="max-w-2xl text-white">
          <p className="text-violet-400 uppercase tracking-widest mb-3">
            Película destacada
          </p>

          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            John Wick 4
          </h1>

          <p className="text-lg text-gray-300 mb-8">
            John Wick descubre un camino para derrotar a la Alta Mesa.
            Pero antes de ganar su libertad, deberá enfrentarse a un
            nuevo enemigo con poderosas alianzas.
          </p>

          <div className="flex gap-4">
            <button className="bg-violet-600 hover:bg-violet-700 transition px-6 py-3 rounded-lg font-semibold">
              ▶ Ver ahora
            </button>

            <button className="border border-gray-400 hover:bg-white hover:text-black transition px-6 py-3 rounded-lg font-semibold">
              Más información
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;