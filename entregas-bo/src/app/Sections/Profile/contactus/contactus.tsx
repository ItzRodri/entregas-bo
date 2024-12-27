import React from "react";

const ContactUs = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="flex items-center">
            <span className="text-2xl mr-2">📞</span>
            <div>
              <h3 className="text-lg font-semibold">Teléfono</h3>
              <p className="text-gray-600">+1 234 567 890</p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-2xl mr-2">📧</span>
            <div>
              <h3 className="text-lg font-semibold">Correo Electrónico</h3>
              <p className="text-gray-600">info@empresa.com</p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-2xl mr-2">📍</span>
            <div>
              <h3 className="text-lg font-semibold">Dirección</h3>
              <p className="text-gray-600">123 Calle Principal, Ciudad, País</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Envíanos un mensaje</h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
