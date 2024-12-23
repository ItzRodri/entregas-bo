"use client";
import React, { useState } from 'react';
import Sidebar from './profile-sidebar';

const ProfilePage = () => {
  const [selectedSection, setSelectedSection] = useState('Datos Personales');

  const renderContent = () => {
    switch (selectedSection) {
      case 'Datos Personales':
        return <div>Contenido de Datos Personales</div>;
      case 'Pago e Instalaciones':
        return <div>Contenido de Pago e Instalaciones</div>;
      case 'Pedidos':
        return <div>Contenido de Pedidos</div>;
      case 'Lista de deseos':
        return <div>Contenido de Lista de deseos</div>;
      case 'Descuentos':
        return <div>Contenido de Descuentos</div>;
      case 'Seguridad y acceso':
        return <div>Contenido de Seguridad y acceso</div>;
      case 'Notificación':
        return <div>Contenido de Notificación</div>;
      case 'Contáctanos':
        return <div>Contenido de Contáctanos</div>;
      case 'Cerrar sesión':
        return <div>Contenido de Cerrar sesión</div>;
      default:
        return <div>Selecciona una opción</div>;
    }
  };

  return (
    <div className="flex px-44 py-12">
      <Sidebar onSelect={setSelectedSection} />
      <div className="profile-content p-4">
        {renderContent()}
      </div>
    </div>
  );
};

export default ProfilePage;