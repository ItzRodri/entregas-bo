import React, { useState, useEffect } from "react";
import Image from "next/image";
import CustomButton from "./button";

// Define los props del componente modal
interface EditableModalProps {
  title: string;
  fields: {
    label: string;
    placeholder: string;
    value: string;
    type?: string;
  }[];
  onSave: (updatedValues: { [key: string]: string }) => void; // Función para guardar los valores
  onClose: () => void; // Función para cerrar el modal
}

const EditableModal: React.FC<EditableModalProps> = ({
  title,
  fields,
  onSave,
  onClose,
}) => {
  // State para almacenar los valores de los campos del formulario
  const [formValues, setFormValues] = useState<{ [key: string]: string }>(() =>
    fields.reduce((acc, field) => {
      acc[field.label] = field.value;
      return acc;
    }, {} as { [key: string]: string })
  );

  // Actualiza los valores del formulario cuando cambian los campos
  useEffect(() => {
    setFormValues(
      fields.reduce((acc, field) => {
        acc[field.label] = field.value;
        return acc;
      }, {} as { [key: string]: string })
    );
  }, [fields]);

  // Función para manejar el cambio de los valores de los campos del formulario
  const handleInputChange = (label: string, value: string) => {
    setFormValues((prev) => ({ ...prev, [label]: value }));
  };

  // Función para guardar los valores del formulario
  const handleSave = () => {
    onSave(formValues);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg w-96 p-6 shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <Image src="/icons/close.svg" alt="Close" width={24} height={24} />
          </button>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          {fields.map((field) => (
            <div key={field.label}>
              <label
                htmlFor={field.label}
                className="block text-sm font-medium text-gray-500"
              >
                {field.label}
              </label>
              <input
                id={field.label}
                type={field.type || "text"} // Handle dynamic input type
                value={formValues[field.label] || ""} // Ensure no undefined values
                placeholder={field.placeholder}
                onChange={(e) => handleInputChange(field.label, e.target.value)}
                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-end mt-6">
          <CustomButton
            text="Save"
            variant="primary"
            size="medium"
            onClick={() => alert("Saved")}
          />
        </div>
      </div>
    </div>
  );
};

export default EditableModal;
