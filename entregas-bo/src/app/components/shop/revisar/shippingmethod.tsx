// components/shop/review/ShippingMethod.tsx
interface ShippingOption {
  type: string;
  cost: number;
  days: string;
}

export default function ShippingMethod({
  selectedMethod,
  onMethodChange,
}: {
  selectedMethod: ShippingOption;
  onMethodChange: (method: ShippingOption) => void;
}) {
  const shippingOptions = [
    { type: "Envío gratuito", cost: 0, days: "7-30 días hábiles" },
    { type: "Envío regular", cost: 7.5, days: "3-14 días hábiles" },
    { type: "Envío Express", cost: 22.5, days: "1-3 días hábiles" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-6">Método de Envío</h2>
      <div className="space-y-4">
        {shippingOptions.map((option) => (
          <label
            key={option.type}
            className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer ${
              selectedMethod.type === option.type
                ? "bg-blue-50 border-blue-500"
                : "bg-gray-50 border-gray-300"
            }`}
          >
            <input
              type="radio"
              name="shipping"
              checked={selectedMethod.type === option.type}
              onChange={() => onMethodChange(option)}
              className="form-radio text-blue-500 focus:ring-blue-500"
            />
            <div className="flex flex-col ml-4 w-full">
              <span className="font-medium text-gray-900">{option.type}</span>
              <span className="text-sm text-gray-500">{option.days}</span>
            </div>
            <span className="font-medium text-gray-900">
              {option.cost === 0 ? "$0" : `$${option.cost.toFixed(2)}`}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
