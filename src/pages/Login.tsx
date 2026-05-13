import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

interface Props {
  onLogin: () => void;
}

const Login = ({ onLogin }: Props) => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulación de credenciales (Consigna 3)
    if (user === "admin" && pass === "admin") {
     Swal.fire({
      title: "¡Bienvenido, Administrador!",
      text: "Ingreso exitoso al sistema.",
      icon: "success",
      timer: 2000, // Se cierra solo después de 2 segundos
      showConfirmButton: false, // Oculta el botón para que sea más fluido
      background: "#111827",
      color: "#fff",
    }).then(() => {
      // 2. Una vez que se cierra el alert, hacemos el login y navegamos
      onLogin();
      navigate("/admin");
    });

  } else {
    // Alert de error (el que ya tenías)
    Swal.fire({
      title: "Error",
      text: "Usuario o contraseña incorrectos",
      icon: "error",
      background: "#111827",
      color: "#fff",
      confirmButtonColor: "#7c3aed"
    });
  }
};
  

  return (
    <div className="min-h-screen bg-[#070b17] flex items-center justify-center p-4">
      <div className="bg-[#111827] p-8 rounded-2xl border border-gray-800 w-full max-w-md shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Admin Login</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Usuario"
            className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white outline-none focus:ring-2 focus:ring-violet-600"
            onChange={(e) => setUser(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white outline-none focus:ring-2 focus:ring-violet-600"
            onChange={(e) => setPass(e.target.value)}
          />
          <button 
            type="submit"
            className="w-full bg-violet-600 hover:bg-violet-700 text-white font-bold py-3 rounded-lg transition-all"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;