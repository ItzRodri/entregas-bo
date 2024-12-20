import React from "react";
import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "Meta Platforms tiene planes de lanzamiento de software",
    description:
      "La empresa matriz de Facebook, Meta Platforms, está introduciendo un software para...",
    image: "/meta.png",
    date: "Agosto 8, 2023",
    readTime: "3 minutos de lectura",
  },
  {
    id: 2,
    title: "Los primeros auriculares fueron inventados para uso telefónico",
    description:
      "Tener unos audífonos podría significar algo diferente para diferentes personas...",
    image: "/headphones.png",
    date: "Marzo 28, 2023",
  },
  {
    id: 3,
    title: "Analizando la caída del precio del Bitcoin del 17 de Agosto",
    description:
      "Esta acción causó un gran impacto en el mercado de criptomonedas.",
    image: "/bitcoin.png",
    date: "Agosto 17, 2023",
  },
];

const Blogs: React.FC = () => {
  return (
    <section className="py-10 px-4 bg-white md:px-10">
      <div className="container mx-auto">
        {/* Título */}
        <div className="flex justify-between items-center py-4 border-b border-gray-200">
          {/* Título */}
          <div>
            <h2 className="text-3xl font-bold leading-tight text-gray-900">
              Nuestros
             
              Blogs
            </h2>
          </div>

          {/* Botón Ver todo */}
          <div>
            <Link
              href="/blogs"
              className="text-sm font-medium hover:text-blue-800 flex items-center"
            >
              Ver todo <span className="ml-1">&gt;</span>
            </Link>
          </div>
        </div>

        {/* Tarjetas de Blogs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white border rounded-lg shadow-md hover:shadow-lg transition p-4"
            >
              {/* Imagen */}
              <div className="w-full h-48 relative mb-4">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>

              {/* Contenido */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-800">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-500">{blog.description}</p>
                <div className="text-xs text-gray-400 mt-2">
                  <span>{blog.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
