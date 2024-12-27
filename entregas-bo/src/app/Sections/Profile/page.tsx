"use client";
import React, { useState } from "react";
import Sidebar from "../../components/layout/profile-sidebar";
import PersonalData from "./PersonalData/personaldata";
import PayMentsFacilities from "./PaymentFacilities/paymentfacilities";
import Wishlist from "./Wish-List/wishlist";
import Discount from "./Discounts/disconts";
import Notification from "./Notification/notification";
import ContactUs from "./contactus/contactus";

const ProfilePage: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState("Datos Personales");

  const renderContent = () => {
    switch (selectedSection) {
      case "Datos Personales":
        return <PersonalData />;
      case "Pago e Instalaciones":
        return <PayMentsFacilities />;
      case "Pedidos":
        return <div>Contenido de Pedidos</div>;
      case "Lista de deseos":
        return <Wishlist />;
      case "Descuentos":
        return <Discount />;
      case "Seguridad y acceso":
        return <div>Contenido de Seguridad y acceso</div>;
      case "Notificación":
        return <Notification />;
      case "Contáctanos":
        return <ContactUs />;
      case "Cerrar sesión":
        return <div>Contenido de Cerrar sesión</div>;
      default:
        return <PersonalData />;
    }
  };

  return (
    <div className="md:container md:mx-auto flex flex-col md:flex-row md:py-10 md:px-20 font-inter">
      {/* Sidebar */}
      <Sidebar
        onSelect={setSelectedSection}
        selectedSection={selectedSection}
      />

      {/* Main Content */}
      <div className="flex-1 p-4">{renderContent()}</div>
    </div>
  );
};

export default ProfilePage;
