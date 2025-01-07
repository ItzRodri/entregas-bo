"use client";
import CustomInput from "@/app/components/common/inputprops";
import { useState } from "react";
import MapAddressModal from "../../common/modaladress";
import UserDetailsModal from "../../common/modaluserdetails";

export default function UserInfo() {
  const [showMapModal, setShowMapModal] = useState(false);
  const [showUserDetailsModal, setShowUserDetailsModal] = useState(false);
  const [userAddress, setUserAddress] = useState("HubSpot, 25 First Street, Cambridge MA 02141, Estados Unidos");
  const [userName, setUserName] = useState("Jimmy Smith");

  const handleAddressConfirm = (address: string) => {
    setUserAddress(address);
    setShowMapModal(false);
  };

  const handleUserDetailsSubmit = (formData: any) => {
    setUserName(formData.fullName);
    setShowUserDetailsModal(false);
  };

  return (
    <div>
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">Usuario</h2>
        <CustomInput
          label="Nombre completo"
          placeholder="Nombre completo"
          value={userName}
          icon=""
          editable={true}
          onEdit={() => setShowUserDetailsModal(true)}
        />
      </div>

      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">Envío a</h2>
        <CustomInput
          label="Dirección"
          placeholder="Dirección de envío"
          value={userAddress}
          icon=""
          editable={true}
          onEdit={() => setShowMapModal(true)}
        />
      </div>

      {/* Modal del Mapa */}
      <MapAddressModal
        isOpen={showMapModal}
        onClose={() => setShowMapModal(false)}
        onConfirm={handleAddressConfirm}
      />

      {/* Modal de Detalles del Usuario */}
      <UserDetailsModal
        isOpen={showUserDetailsModal}
        onClose={() => setShowUserDetailsModal(false)}
        onSubmit={handleUserDetailsSubmit}
      />
    </div>
  );
}
