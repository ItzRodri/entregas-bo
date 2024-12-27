import Image from "next/image";

const FaqBanner: React.FC = () => {
    return (
        <Image
        src={"/Faqbanner.png"}
        alt="Banner de preguntas frecuentes"
        width={1016}
        height={426}
        className="container mx-auto"
        />
    );
  };
  
  export default FaqBanner;
  