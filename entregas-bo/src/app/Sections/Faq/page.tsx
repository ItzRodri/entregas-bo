import { FaqItem, FaqBanner, FaqTable } from "@/app/components/faq";

const faqData = [
  {
    question: "¿Puedo comprar productos de Tech Heim con pagos a plazos?",
    answer:
      "Sí, Tech Heim ofrece la opción de comprar productos utilizando tanto pagos en efectivo como en cuotas. Esto te permite elegir el método de pago que se adapte a tus necesidades y presupuesto.",
  },
  {
    question:
      "¿Cómo puedo interactuar con el contenido de la revista en Tech Heim?",
    answer:
      "Puedes interactuar activamente con el contenido de la revista dejando comentarios y participando en la sección de preguntas y respuestas. Siéntete libre de compartir tus ideas, hacer preguntas e interactuar con otros entusiastas de la tecnología en la comunidad.",
  },
  {
    question: "¿Ofrece Tech Heim una garantía en sus productos?",
    answer:
      "Sí, Tech Heim ofrece una garantía en todos los productos elegibles. Los detalles específicos de la garantía pueden variar según el fabricante y la categoría del producto. Por favor, consulte la descripción del producto o póngase en contacto con nuestro equipo de atención al cliente para obtener más información.",
  },
  {
    question: "¿Es Tech Heim una plataforma segura para compras en línea?",
    answer:
      "Sí, Tech Heim ofrece una garantía en todos los productos elegibles. Los detalles específicos de la garantía pueden variar según el fabricante y la categoría del producto. Por favor, consulte la descripción del producto o póngase en contacto con nuestro equipo de atención al cliente para obtener más información.",
  },
  {
    question:
      "¿Cómo puedo obtener ayuda con mi compra o cualquier otra pregunta?",
    answer:
      "Si necesita ayuda con su compra o tiene alguna pregunta, nuestro equipo de soporte está aquí para ayudarle. Puede comunicarse con nosotros a través de la sección de contacto en nuestro sitio web, enviar un correo electrónico o llamar a nuestro centro de atención al cliente.",
  },
];

const FAQPage = () => {
  return (
    <div className="py-10 px-4 md:px-20 font-inter ">
      <FaqBanner />
      
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8">
        {/* Grid container con breakpoint personalizado */}
        <div className="grid grid-cols-1 xl:grid-cols-[300px_1fr] gap-6">
          {/* Sidebar */}
          <aside className="w-full">
            <FaqTable />
          </aside>
          
          {/* Contenido principal */}
          <main className="w-full">
            <div className="bg-white rounded-lg shadow-md">
              {faqData.map((item, index) => (
                <FaqItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
