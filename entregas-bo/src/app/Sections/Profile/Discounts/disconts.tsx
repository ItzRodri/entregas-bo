import React, { useState } from "react";
import CustomInput from "@/app/components/common/inputprops";
import EditableModal from "@/app/components/common/modalprops";

const Discount: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalFields, setModalFields] = useState<
    { label: string; placeholder: string; value: string; type?: string }[]
  >([]);
  const [modalTitle, setModalTitle] = useState("");

  const [personalData, setPersonalData] = useState({
    nombre: "Jimmy Smith",
    email: "Jimmy.smith1996@gmail.com",
    telefono: "+12345678910",
    contraseña: "asdf",
    direccion: "HubSpot, 25 First Street, Cambridge...",
    codigopostal: "02139",
  });

  const handleModalSave = (updatedValues: { [key: string]: string }) => {
    setPersonalData((prev) => ({
      ...prev,
      ...updatedValues,
    }));
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-full">
      <div className="flex-grow p-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Descuentos y vales
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Añade código de descuento para aplicar un descuento en tu compra
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
          <CustomInput
            label=""
            placeholder=""
            value={"codigo"}
            icon="/icons/user.svg"
            editable={true}
            onEdit={() => console.log("Nombre completo")}
          />
        </div>
      </div>
    </div>
  );
};

export default Discount;
