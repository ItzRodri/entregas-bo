import React, { useState } from "react";
import CustomInput from "@/app/components/common/inputprops";
import EditableModal from "@/app/components/common/modalprops";

const PersonalData: React.FC = () => {
  // State para manejar si el modal está abierto o cerrado
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalFields, setModalFields] = useState<
    { label: string; placeholder: string; value: string; type?: string }[]
  >([]);
  const [modalTitle, setModalTitle] = useState("");

  // State para almacenar los datos personales
  const [personalData, setPersonalData] = useState({
    nombre: "Jimmy Smith",
    email: "Jimmy.smith1996@gmail.com",
    telefono: "+12345678910",
    contraseña: "asdf",
    direccion: "HubSpot, 25 First Street, Cambridge...",
    codigopostal: "02139",
  });

  // Función para manejar la edición de los campos
  const handleEdit = (field: string) => {
    const fieldMapping: {
      [key: string]: {
        label: string;
        placeholder: string;
        value: string;
        type?: string;
      }[];
    } = {
      "Nombre completo": [
        {
          label: "Nombre",
          placeholder: "Nombre",
          value: personalData.nombre.split(" ")[0],
        },
        {
          label: "Apellido",
          placeholder: "Apellido",
          value: personalData.nombre.split(" ")[1] || "",
        },
      ],
      "Correo electrónico": [
        {
          label: "Email",
          placeholder: "Dirección de correo electrónico",
          value: personalData.email,
        },
      ],
      Teléfono: [
        {
          label: "Teléfono",
          placeholder: "Número de teléfono",
          value: personalData.telefono,
        },
      ],
      Contraseña: [
        {
          label: "Contraseña",
          placeholder: "Nueva contraseña",
          value: "",
          type: "password",
        },
      ],
      Dirección: [
        {
          label: "Dirección",
          placeholder: "Dirección",
          value: personalData.direccion,
        },
      ],
      "Código postal": [
        {
          label: "Código Postal",
          placeholder: "Código postal",
          value: personalData.codigopostal,
        },
      ],
    };

    setModalFields(fieldMapping[field] || []);
    setModalTitle(field);
    setIsModalOpen(true);
  };

  // Función para manejar el guardado de los valores del modal
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
        <h2 className="text-xl font-semibold text-gray-800">Identificación</h2>
        <p className="text-sm text-gray-500 mb-6">Verifica tu identidad</p>
        {/* Grilla responsiva */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
          <CustomInput
            placeholder="Nombre completo"
            value={personalData.nombre}
            icon="/icons/user.svg"
            editable={true}
            onEdit={() => handleEdit("Nombre completo")}
          />
          <CustomInput
            placeholder="Dirección de correo electrónico"
            value={personalData.email}
            icon="/icons/email.svg"
            editable={true}
            onEdit={() => handleEdit("Correo electrónico")}
          />
          <CustomInput
            placeholder="Número de teléfono"
            value={personalData.telefono}
            icon="/icons/phone.svg"
            editable={true}
            onEdit={() => handleEdit("Teléfono")}
          />
          <CustomInput
            placeholder="Contraseña"
            value={personalData.contraseña}
            icon="/icons/key.svg"
            editable={true}
            type="password"
            onEdit={() => handleEdit("Contraseña")}
          />
          <CustomInput
            placeholder="Dirección"
            value={personalData.direccion}
            icon="/icons/home.svg"
            editable={true}
            onEdit={() => handleEdit("Dirección")}
          />
          <CustomInput
            placeholder="Código postal"
            value={personalData.codigopostal}
            icon="/icons/postalcode.svg"
            editable={true}
            onEdit={() => handleEdit("Código postal")}
          />
        </div>
      </div>

     {/* Modal para editar los campos */}
      {isModalOpen && (
        <EditableModal
          title={modalTitle}
          fields={modalFields}
          onSave={handleModalSave}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default PersonalData;
