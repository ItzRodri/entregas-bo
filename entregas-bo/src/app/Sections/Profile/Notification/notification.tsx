import React from "react";

const Notification = () => {
  const notifications = [
    {
      id: 1,
      icon: "🔔",
      title: "Emails",
      description:
        "Escribimos correos electrónicos para informarle lo que es importante, como: nuevo pedido, confirmaciones.",
    },
    {
      id: 2,
      icon: "📧",
      title: "Orden entregada",
      description: "Serás notado una vez que se entregue el pedido.",
    },
    {
      id: 3,
      icon: "⚠️",
      title: "Estado de su Pedido",
      description:
        "Reciba notificaciones sobre el estado de su pedido, promociones y otras actualizaciones.",
    },
    {
      id: 4,
      icon: "✅",
      title: "Disponibilidad del producto",
      description: "Se le notará cuando el producto esté disponible.",
    },
  ];

  return (
    <div className="container mx-auto p-4  b">
      <h2 className="text-xl font-semibold text-gray-800">Notificaciónes</h2>
      <p className="text-sm text-gray-500 mb-6">
        Administra tu configuración de notificaciones{" "}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white ">
        {notifications.map((notification) => (
          <div key={notification.id} className=" py-4  flex flex-col">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">{notification.icon}</span>
              <h3 className="text-lg font-semibold text-gray-800 flex-1">
                {notification.title}
              </h3>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600    dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600"></div>
              </label>
            </div>
            <p className="text-gray-600">{notification.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
