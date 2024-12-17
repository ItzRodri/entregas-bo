"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Mostrar el botón "Arrow Up" al hacer scroll hacia abajo
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Función para hacer scroll al inicio
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0C1D3E] text-white py-10 px-4 md:px-20 font-inter">
      {/* Contenedor Principal */}
      <div className="container mx-auto px-8 flex flex-row items-start gap-8">
        {/* ContactInfo */}
        <div className="flex flex-wrap gap-10 md:gap-16 justify-between mb-10">
          {/* Compañía */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-4">Compañía</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Devoluciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Estado del pedido
                </a>
              </li>
            </ul>
          </div>
          {/* Información */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-4">Información</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  ¿Cómo funciona?
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Nuestras promesas
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contáctenos */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-4">Contáctenos</h3>
            <div className="flex items-center space-x-2 mb-2">
              <Image src="/map.svg" alt="Ubicación" width={20} height={20} />
              <p className="text-sm">123 Main Street, Anytown, USA</p>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <Image src="/phone.svg" alt="Teléfono" width={20} height={20} />
              <p className="text-sm">+1 (555) 123-4567</p>
            </div>
            <div className="flex items-center space-x-2">
              <Image src="/mail.svg" alt="Correo" width={20} height={20} />
              <a
                href="mailto:TechHeimSoporte@gmail.com"
                className="hover:underline text-sm"
              >
                TechHeimSoporte@gmail.com
              </a>
            </div>
          </div>
        </div>
        {/* NewsletterForm */}
        <div className="w-full md:w-1/4 mx-auto">
          <h3 className="text-lg font-semibold mb-4">
            Inscríbete para recibir noticias y actualizaciones
          </h3>
          <div className="relative mb-4">
            <a
              href="/formulario" /* Redirige al formulario */
              className="flex items-center justify-between border border-gray-300 rounded-md p-2 pl-3 pr-3 text-gray-300 hover:text-white hover:border-gray-100"
            >
              <div className="flex items-center space-x-2">
                <Image src="/user.svg" alt="User Icon" width={20} height={20} />
                <span className="text-gray-300">Email address</span>
              </div>
              <Image
                src="/arrowemail.svg"
                alt="Submit"
                width={20}
                height={20}
              />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#">
              <Image
                src="/facebook.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
            </a>
            <a href="#">
              <Image src="/twitter.svg" alt="Twitter" width={24} height={24} />
            </a>
            <a href="#">
              <Image
                src="/instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
            </a>
            <a href="#">
              <Image src="/youtube.svg" alt="YouTube" width={24} height={24} />
            </a>
          </div>
        </div>
        {/* Buttons */}
        <div className="fixed right-6 bottom-8 flex flex-col space-y-4 items-center z-50">
          {/* Botón de Chat */}
          <a
            href="/contact" // Cambia la ruta a la página de chat o contacto
            aria-label="Online chat"
          >
            <Image src="/onlinechat.svg" alt="Chat" width={40} height={40}/>
          </a>

          {/* Botón de Scroll al Top */}
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
              <Image
                src="/arrowUp.svg"
                alt="Scroll to Top"
                width={40}
                height={40}
              />
            </button>
          )}
        </div>
      </div>

      {/* Métodos de Pago */}
      <div className="container mx-auto px-8 flex flex-row items-start gap-8">
        <Image src="/paypal.svg" alt="PayPal" width={40} height={40} />
        <Image
          src="/americanexpress.svg"
          alt="American Express"
          width={40}
          height={24}
        />
        <Image src="/visa.svg" alt="Visa" width={40} height={40} />
        <Image src="/mastercard.svg" alt="Mastercard" width={40} height={40} />
      </div>

      {/* Parte Inferior */}
      <div className="container mx-auto px-8 flex flex-row items-start gap-8 justify-between mt-10 ">
        <p>&copy; {new Date().getFullYear()} Tech Heim.</p>
        <div className="space-x-4">
          <a href="#" className="hover:underline">
            configuración de cookies
          </a>
          <a href="#" className="hover:underline">
            Política de privacidad
          </a>
          <a href="#" className="hover:underline">
            Términos y Condiciones
          </a>
          <a href="#" className="hover:underline">
            Impresión
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
