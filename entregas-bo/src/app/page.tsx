
import Carousel from "./itemscarousel";
import NavBar from "./NavBar";
import Image from "next/image";
export default function Home() {
  return (
    <>
      
      <section className="flex items-center justify-between px-12 py-12 bg-white">
      {/* Contenido de la izquierda */}
      <div>
        <br />
      </div>
      <div className="">
        <h1 className="text-6xl font-bold leading-tight text-blue-900">
          Entregas.com.bo
        </h1>
        <p className="mt-4 text-lg text-gray-600">
        Todo lo que necesitas para cocinar, directo a tu puerta.
        </p>
        <button className="mt-6 bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-orange-600 transition duration-300">
          Explorar más
        </button>
      </div>

      {/* Imágenes de laptops */}
      <div className="">
        {/* Laptop 1 */}
        <Image
          src="laptopsprueba.svg"
          alt="Laptop 1"
          width={600}
          height={800}
          className=""
        />

      </div>
      <div>
        <br />
      </div>
    </section>
    </>
  );
}
