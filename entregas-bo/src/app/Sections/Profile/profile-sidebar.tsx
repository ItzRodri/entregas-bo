import React, { useState } from 'react';

const Sidebar = ({ onSelect }) => {
  const [selected, setSelected] = useState('');

  const handleSelect = (option) => {
    setSelected(option);
    onSelect(option);
  };

  return (
    <div className="w-auto h-auto border p-4 border-gray-300  bg-[#F9F9F9]">
      <button className={`flex items-center py-4 w-auto text-left ${selected === 'Datos Personales' ? 'text-blue-500 ' : ''}`} onClick={() => handleSelect('Datos Personales')}>
        <img src="/logo/user-edit.svg" alt="Logo" className={`w-8 h-8 mr-4 ${selected === 'Datos Personales' ? 'text-blue-500 border-b border-blue-500' : ''}`} />
        <p>Datos Personales</p>
      </button>
      <button className={`flex items-center py-4 w-auto text-left ${selected === 'Pago e Instalaciones' ? 'text-blue-500' : ''}`} onClick={() => handleSelect('Pago e Instalaciones')}>
        <img src="/logo/dollar-circle.svg" alt="Logo" className={`w-8 h-8 mr-4 ${selected === 'Pago e Instalaciones' ? 'text-blue-500 border-b border-blue-500' : ''}`} />
        <p>Pago e Instalaciones</p>
      </button>
      <button className={`flex items-center py-4 w-auto text-left ${selected === 'Pedidos' ? 'text-blue-500' : ''}`} onClick={() => handleSelect('Pedidos')}>
        <img src="/logo/bag.svg" alt="Logo" className={`w-8 h-8 mr-4 ${selected === 'Pedidos' ? 'text-blue-500 border-b border-blue-500' : ''}`} />
        <p>Pedidos</p>
      </button>
      <button className={`flex items-center py-4 w-auto text-left ${selected === 'Lista de deseos' ? 'text-blue-500' : ''}`} onClick={() => handleSelect('Lista de deseos')}>
        <img src="/logo/heart.svg" alt="Logo" className={`w-8 h-8 mr-4 ${selected === 'Lista de deseos' ? 'text-blue-500 border-b border-blue-500' : ''}`} />
        <p>Lista de deseos</p>
      </button>
      <button className={`flex items-center py-4 w-auto text-left ${selected === 'Descuentos' ? 'text-blue-500' : ''}`} onClick={() => handleSelect('Descuentos')}>
        <img src="/logo/gift.svg" alt="Logo" className={`w-8 h-8 mr-4 ${selected === 'Descuentos' ? 'text-blue-500 border-b border-blue-500' : ''}`} />
        <p>Descuentos</p>
      </button>
      <button className={`flex items-center py-4 w-auto text-left ${selected === 'Seguridad y acceso' ? 'text-blue-500' : ''}`} onClick={() => handleSelect('Seguridad y acceso')}>
        <img src="/logo/security-safe.svg" alt="Logo" className={`w-8 h-8 mr-4 ${selected === 'Seguridad y acceso' ? 'text-blue-500 border-b border-blue-500' : ''}`} />
        <p>Seguridad y acceso</p>
      </button>
      <button className={`flex items-center py-4 w-auto text-left ${selected === 'Notificación' ? 'text-blue-500' : ''}`} onClick={() => handleSelect('Notificación')}>
        <img src="/logo/notification.svg" alt="Logo" className={`w-8 h-8 mr-4 ${selected === 'Notificación' ? 'text-blue-500 border-b border-blue-500' : ''}`} />
        <p>Notificación</p>
      </button>
      <button className={`flex items-center py-4 w-auto text-left ${selected === 'Contáctanos' ? 'text-blue-500' : ''}`} onClick={() => handleSelect('Contáctanos')}>
        <img src="/logo/24-support.svg" alt="Logo" className={`w-8 h-8 mr-4 ${selected === 'Contáctanos' ? 'text-blue-500 border-b border-blue-500' : ''}`} />
        <p>Contáctanos</p>
      </button>
      <button className={`flex items-center py-4 w-auto text-left ${selected === 'Cerrar sesión' ? 'text-blue-500' : ''}`} onClick={() => handleSelect('Cerrar sesión')}>
        <img src="/logo/logout.svg" alt="Logo" className={`w-8 h-8 mr-4 ${selected === 'Cerrar sesión' ? 'text-blue-500 border-b border-blue-500' : ''}`} />
        <p className="text-red-500">Cerrar sesión</p>
      </button>
    </div>
  );
};

export default Sidebar;