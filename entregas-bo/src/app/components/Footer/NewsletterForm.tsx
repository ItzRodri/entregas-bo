import Image from "next/image";

const NewsletterForm = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Inscríbete para recibir noticias y actualizaciones</h3>
      <div className="relative mb-4">
      <a
          href="/formulario" /* Redirige al formulario */
          className="flex items-center justify-between border border-gray-300 rounded-md p-2 pl-3 pr-3 text-gray-300 hover:text-white hover:border-gray-100"
        >
          <div className="flex items-center space-x-2">
            <Image src="/user.svg" alt="User Icon" width={20} height={20} />
            <span className="text-gray-300">Email address</span>
          </div>
          <Image src="/arrowemail.svg" alt="Submit" width={20} height={20} />
        </a>
      </div>
      <div className="flex space-x-4">
        <a href="#"><Image src="/facebook.svg" alt="Facebook" width={24} height={24} /></a>
        <a href="#"><Image src="/twitter.svg" alt="Twitter" width={24} height={24} /></a>
        <a href="#"><Image src="/instagram.svg" alt="Instagram" width={24} height={24} /></a>
        <a href="#"><Image src="/youtube.svg" alt="YouTube" width={24} height={24} /></a>
      </div>
    </div>
  );
};

export default NewsletterForm;
