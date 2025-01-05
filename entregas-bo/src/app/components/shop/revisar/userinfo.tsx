"use client";
import CustomInput from "@/app/components/common/inputprops";
import { useState } from "react";

export default function UserInfo() {
  const [showEditModal, setShowEditModal] = useState(false);

  return (
    <div>
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">Usuario</h2>
        <CustomInput
          label="Nombre completo"
          placeholder="Nombre completo"
          value="Jimmy Smith"
          icon=""
          editable={true}
          onEdit={() => setShowEditModal(true)}
        />
      </div>

      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">Envío a</h2>
        <CustomInput
          label="Dirección"
          placeholder="Dirección de envío"
          value="HubSpot, 25 First Street, Cambridge MA 02141, Estados Unidos"
          icon=""
          editable={true}
          onEdit={() => setShowEditModal(true)}
        />
      </div>
      {/* Usar tu EditableModal existente */}
    </div>
  );
}
