"use client";
import React, { useState } from 'react';
import Sidebar from '../../components/layout/profile-sidebar';
import PersonalData from './PersonalData/personaldata';

const ProfilePage: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState('Datos Personales');

  const renderContent = () => {
    switch (selectedSection) {
      case 'Datos Personales':
        return <PersonalData />;
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
        return <PersonalData />;
    }
  };

  return (
    <div className="md:container md:mx-auto flex flex-col md:flex-row md:py-10 md:px-20 font-inter">
      {/* Sidebar */}
      <Sidebar onSelect={setSelectedSection} selectedSection={selectedSection} />
      
      {/* Main Content */}
      <div className="flex-1 p-4">
        {renderContent()}
      </div>
    </div>
  );
};

export default ProfilePage;