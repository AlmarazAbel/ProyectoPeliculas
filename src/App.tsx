// src/App.tsx
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavbarCustom from "./components/NavBar";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import { initialMovies } from "./data/movies"; // Asegúrate de importar tus datos
import { getMoviesFromStorage, type Movie } from "./data/movies";

const App = () => {
  const [isAuth, setIsAuth] = useState<boolean>(() => {
    return localStorage.getItem("isAuth") === "true";
  });

  // Estado para las películas y para la búsqueda
  const [movies, setMovies] = useState<Movie[]>(() => {
    return getMoviesFromStorage(); 
  });
  
  const [searchTerm, setSearchTerm] = useState("");

  const handleLogin = () => {
    setIsAuth(true);
    localStorage.setItem("isAuth", "true");
  };

  const handleLogout = () => {
    setIsAuth(false);
    localStorage.removeItem("isAuth");
  };
   
  const allMovies = movies; // La lista total del storage
  // Lógica de filtrado en tiempo real
  const filteredMovies = movies.filter(movie => 
    movie.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <BrowserRouter>
      {/* Pasamos la función setSearchTerm al Navbar */}
      <NavbarCustom onSearch={setSearchTerm} /> 
      
      <Routes>
        {/* Pasamos las películas filtradas al Home */}
        <Route path="/" element={<Home movies={filteredMovies} allMovies={allMovies} />} />

        <Route 
          path="/login" 
          element={!isAuth ? <Login onLogin={handleLogin} /> : <Navigate to="/admin" />} 
        />
        
        <Route 
          path="/admin" 
          element={
            isAuth ? (
              <Admin onLogout={handleLogout} /> 
            ) : (
              <Navigate to="/login" />
            )
          } 
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;