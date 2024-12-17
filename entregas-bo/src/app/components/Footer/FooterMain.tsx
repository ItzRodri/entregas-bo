import Image from "next/image";
import ContactInfo from "./ContactInfo";
import NewsletterForm from "./NewsletterForm";
import ButtonsFooter from "./buttonsfooter";

const FooterMain = () => {
  return (
    <footer className="bg-[#0C1D3E] text-white py-10 px-20 font-inter">
      {/* Contenedor Principal */}
      <div className="container mx-auto px-8 flex flex-row items-start gap-8">
        {/* ContactInfo */}
        <ContactInfo />
        {/* NewsletterForm */}
        <NewsletterForm />
        {/* Buttons */}
        <ButtonsFooter />
      </div>

      {/* Métodos de Pago */}
      <div className="flex justify-start space-x-4 mt-8 px-8">
        <Image src="/paypal.svg" alt="PayPal" width={40} height={24} />
        <Image src="/americanexpress.svg" alt="American Express" width={40} height={24} />
        <Image src="/visa.svg" alt="Visa" width={40} height={24} />
        <Image src="/mastercard.svg" alt="Mastercard" width={40} height={24} />
      </div>

      {/* Parte Inferior */}
      <div className="mt-8 pt-4 px-8 text-sm flex justify-between ">
        <p>&copy; {new Date().getFullYear()} Tech Heim.</p>
        <div className="space-x-4">
        <a href="#" className="hover:underline">configuración de cookies</a>
        <a href="#" className="hover:underline">Política de privacidad</a>
        <a href="#" className="hover:underline">Términos y Condiciones</a>
        <a href="#" className="hover:underline">Impresión</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterMain;
