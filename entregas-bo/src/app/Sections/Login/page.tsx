"use client";
import React, { useState } from 'react';

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="max-w-md mx-auto my-48 p-5 border rounded-lg shadow-2xl">
      <h2 className="text-2xl font-bold mb-5 text-center">{isLogin ? 'Login' : 'Register'}</h2>
      <form>
        {!isLogin && (
          <div className="mb-4">
            <label className="block text-gray-700">Nombre Completo</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Nombre Completo"
            />
          </div>
        )}
        <div className="mb-4">
          <label className="block text-gray-700">Correo</label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Correo"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Contraseña</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Contraseña"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-dark"
        >
          {isLogin ? 'Login' : 'Register'}
        </button>
      </form>
      <button
        onClick={toggleForm}
        className="w-full mt-4 text-primary hover:underline"
      >
        {isLogin ? 'No tienes una cuenta? Regístrate' : 'Ya tienes una cuenta? Inicia sesión'}
      </button>
    </div>
  );
};

export default LoginRegister;