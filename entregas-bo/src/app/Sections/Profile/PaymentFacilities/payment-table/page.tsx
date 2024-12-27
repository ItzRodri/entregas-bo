"use client";
import React from "react";

const PaymentTable = () => {
  const data = [
    {
      id: 1,
      descripcion: { imagen: "imagen1.jpg", cantidad: 2, codigo: "#591232" },
      montoAdeudado: "100 BOB",
      fechaVencimiento: "23/12/23",
      montoActual: "-",
      fechaPago: "-",
      estado: "Fuera de tiempo",
      total: "200 BOB",
    },
    {
      id: 2,
      descripcion: { imagen: "imagen2.jpg", cantidad: 1, codigo: "#591233" },
      montoAdeudado: "150 BOB",
      fechaVencimiento: "24/12/23",
      montoActual: "150 BOB",
      fechaPago: "22/12/23",
      estado: "Pagado",
      total: "150 BOB",
    },
    {
      id: 3,
      descripcion: { imagen: "imagen3.jpg", cantidad: 3, codigo: "#591234" },
      montoAdeudado: "200 BOB",
      fechaVencimiento: "25/12/23",
      montoActual: "-",
      fechaPago: "-",
      estado: "A tiempo",
      total: "600 BOB",
    },
    {
      id: 4,
      descripcion: { imagen: "imagen4.jpg", cantidad: 4, codigo: "#591235" },
      montoAdeudado: "250 BOB",
      fechaVencimiento: "26/12/23",
      montoActual: "250 BOB",
      fechaPago: "25/12/23",
      estado: "Pagado",
      total: "1000 BOB",
    },
    {
      id: 5,
      descripcion: { imagen: "imagen5.jpg", cantidad: 5, codigo: "#591236" },
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
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th></th>
            <th>Descripcion</th>
            <th>Monto Adeudado</th>
            <th>Fecha de vencimiento</th>
            <th>Monto Actual</th>
            <th>Fecha de Pago</th>
            <th>Estado</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <img src={item.descripcion.imagen} alt="Producto" />{" "}
                {item.descripcion.cantidad} {item.descripcion.codigo}
              </td>
              <td className="text-orange-500">{item.montoAdeudado}</td>
              <td>{item.fechaVencimiento}</td>
              <td>{item.montoActual}</td>
              <td>{item.fechaPago}</td>
              <td
                className={`text-${
                  item.estado === "Pagado"
                    ? "green"
                    : item.estado === "A tiempo"
                    ? "blue"
                    : "red"
                }-500`}
              >
                {item.estado}
              </td>
              <td>{item.total}</td>
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
  );
};

export default PaymentTable;
