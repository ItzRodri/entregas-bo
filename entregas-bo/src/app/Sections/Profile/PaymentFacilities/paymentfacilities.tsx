import React, { useState } from "react";
import CustomInput from "@/app/components/common/inputprops";
import PaymentModal from "@/app/components/common/modalpayprops";
import Image from "next/image";

const PaymentFacilities: React.FC = () => {
  const [showTable, setShowTable] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowTable(true);
  };
  const [isModalOpen, setModalOpen] = useState(false);
  const [paymentData, setPaymentData] = useState({
    card: "",
    paypal: "",
  });

  const handleEdit = (field: string) => {
    console.log(`Edit ${field}`);
  };
  const data = [
    {
      id: 1,
      descripcion: {
        imagen: "/ps5.png",
        cantidad: 2,
        codigo: "#591232",
      },
      montoAdeudado: "100 BOB",
      fechaVencimiento: "23/12/23",
      montoActual: "-",
      fechaPago: "-",
      estado: "Fuera de tiempo",
      total: "200 BOB",
    },
    {
      id: 2,
      descripcion: { imagen: "/ps5.png", cantidad: 1, codigo: "#591233" },
      montoAdeudado: "150 BOB",
      fechaVencimiento: "24/12/23",
      montoActual: "150 BOB",
      fechaPago: "22/12/23",
      estado: "Pagado",
      total: "150 BOB",
    },
    {
      id: 3,
      descripcion: { imagen: "/ps5.png", cantidad: 3, codigo: "#591234" },
      montoAdeudado: "200 BOB",
      fechaVencimiento: "25/12/23",
      montoActual: "-",
      fechaPago: "-",
      estado: "A tiempo",
      total: "600 BOB",
    },
    {
      id: 4,
      descripcion: { imagen: "/ps5.png", cantidad: 4, codigo: "#591235" },
      montoAdeudado: "250 BOB",
      fechaVencimiento: "26/12/23",
      montoActual: "250 BOB",
      fechaPago: "25/12/23",
      estado: "Pagado",
      total: "1000 BOB",
    },
    {
      id: 5,
      descripcion: { imagen: "/ps5.png", cantidad: 5, codigo: "#591236" },
      montoAdeudado: "300 BOB",
      fechaVencimiento: "27/12/23",
      montoActual: "-",
      fechaPago: "-",
      estado: "Fuera de tiempo",
      total: "1500 BOB",
    },
  ];
  return (
    <div>
      {!showTable ? (
        <div className="container mx-auto p-4 md:p-8">
          <h2 className="text-xl font-semibold text-gray-800">Tarjetas</h2>
          <p className="text-sm text-gray-500 mb-6">
            administrar métodos de pago
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <CustomInput
                label=""
                placeholder="Tarjetas de crédito o débito"
                value={paymentData.card}
                icon=""
                editable={true}
                onEdit={() => setModalOpen(true)}
              />
              <PaymentModal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
              />
              <div className="flex">
                <img
                  src="/icons/americanexpress.svg"
                  alt="American Express"
                  width={32}
                  height={32}
                  className=""
                />
                <img
                  src="/icons/mastercard.svg"
                  alt="MasterCard"
                  width={32}
                  height={32}
                  className=""
                />
                <img
                  src="/icons/visa.svg"
                  alt="Visa"
                  width={32}
                  height={32}
                  className=""
                />
              </div>
            </div>
            <div className="flex items-center">
              <CustomInput
                label=""
                placeholder="PayPal"
                value={paymentData.paypal}
                icon=""
                editable={true}
                onEdit={() => setModalOpen(true)}
              />
              <PaymentModal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
              />
              <div className="flex">
                <img
                  src="/icons/paypal.svg"
                  alt="PayPal"
                  width={32}
                  height={32}
                  className=""
                />
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-800">
                Pagos a plazos
              </h3>
              <a
                onClick={handleLinkClick}
                href="#"
                className="text-blue-500 hover:text-blue-700 text-sm"
              >
                Administra tu cuota &rarr;
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <table className="min-w-full bg-white ">
            <thead className="bg-gray-100 ">
              <tr>
                <th></th>
                <th className=" items-center text-center">Descripcion</th>
                <th className=" items-center text-center">Monto Adeudado</th>
                <th className=" items-center text-center">
                  Fecha de vencimiento
                </th>
                <th className=" items-center text-center">Monto Actual</th>
                <th className=" items-center text-center">Fecha de Pago</th>
                <th className=" items-center text-center">Estado</th>
                <th className=" items-center text-center">Total</th>
              </tr>
            </thead>
            <tbody className="">
              {data.map((item) => (
                <tr key={item.id} className=" space-y-12">
                  <td className=" items-center text-center">
                    <input type="checkbox" />
                  </td>
                  <td className=" row-auto items-center text-start">
                    <Image
                      src={item.descripcion.imagen}
                      width={100}
                      height={20}
                      alt="Producto"
                    />
                    {"+"}
                    {item.descripcion.cantidad} {item.descripcion.codigo}
                  </td>
                  <td className="text-orange-500   text-center items-center">
                    {item.montoAdeudado}
                  </td>
                  <td className=" items-center text-center">
                    {item.fechaVencimiento}
                  </td>
                  <td className=" items-center text-center">
                    {item.montoActual}
                  </td>
                  <td className=" items-center text-center">
                    {item.fechaPago}
                  </td>
                  <td
                    className={`text-${
                      item.estado == "Pagado"
                        ? "green"
                        : item.estado == "A tiempo"
                        ? "blue"
                        : "red"
                    }-500  items-center text-center text-gree`}
                  >
                    {item.estado}
                  </td>
                  <td className=" items-center text-center">{item.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center mt-4">
            <span>Subtotal: {/* Aquí puedes calcular el subtotal */}</span>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Pagar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentFacilities;
