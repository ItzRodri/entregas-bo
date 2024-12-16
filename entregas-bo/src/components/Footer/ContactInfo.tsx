import Image from "next/image";

const ContactInfo = () => {
  return (
    <div className="flex flex-auto space-x-10">
      {/* Compañía */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Compañía</h3>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:underline">Sobre nosotros</a></li>
          <li><a href="#" className="hover:underline">Blog</a></li>
          <li><a href="#" className="hover:underline">Devoluciones</a></li>
          <li><a href="#" className="hover:underline">Estado del pedido</a></li>
        </ul>
      </div>
      {/* Información */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Información</h3>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:underline">¿Cómo funciona?</a></li>
          <li><a href="#" className="hover:underline">Nuestras promesas</a></li>
          <li><a href="#" className="hover:underline">Preguntas frecuentes</a></li>
        </ul>
      </div>

      {/* Contáctenos */}
      <div>
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
          <a href="mailto:TechHeimSoporte@gmail.com" className="hover:underline text-sm">
            TechHeimSoporte@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
