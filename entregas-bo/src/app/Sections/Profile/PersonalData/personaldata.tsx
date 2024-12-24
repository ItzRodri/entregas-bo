import React from 'react';
import CustomInput from '@/app/components/common/inputprops';

const PersonalData: React.FC = () => {
  const handleEdit = (field: string) => {
    console.log(`Editing ${field}`);
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
            value="Jimmy Smith"
            icon="/icons/user.svg"
            editable={true}
            onEdit={() => handleEdit('Nombre completo')}
          />
          <CustomInput
            placeholder="Dirección de correo electrónico"
            value="Jimmy.smith1996@gmail.com"
            icon="/icons/email.svg"
            editable={true}
            onEdit={() => handleEdit('Correo electrónico')}
          />
          <CustomInput
            placeholder="Número de teléfono"
            value="+12345678910"
            icon="/icons/phone.svg"
            editable={true}
            onEdit={() => handleEdit('Teléfono')}
          />
          <CustomInput
            placeholder="Contraseña"
            value="Puntuación oculta"
            icon="/icons/key.svg"
            editable={true}
            onEdit={() => handleEdit('Contraseña')}
          />
          <CustomInput
            placeholder="Dirección"
            value="HubSpot, 25 First Street, Cambridge..."
            icon="/icons/home.svg"
            editable={true}
            onEdit={() => handleEdit('Dirección')}
          />
          <CustomInput
            placeholder="Código postal"
            value="02139"
            icon="/icons/postalcode.svg"
            editable={true}
            onEdit={() => handleEdit('Código postal')}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalData;