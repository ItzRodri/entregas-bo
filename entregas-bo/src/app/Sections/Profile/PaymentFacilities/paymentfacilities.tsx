import CustomInput from "@/app/components/common/inputprops";

const PayMentsFacilities: React.FC =()=>{
    const handleEdit = (field: string) => {
        console.log(`Editing ${field}`);
      };
    return (
        <>
           <div className="flex flex-col md:flex-row w-full h-full">
      <div className="flex-grow p-6">
        <h2 className="text-xl font-semibold text-gray-800">Tarjetas</h2>
        <p className="text-sm text-gray-500 mb-6">administrar métodos de pago</p>

        {/* Grilla responsiva */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
          <CustomInput
            placeholder=""
            value="Tarjetas de crédito o débito"
            icon=""
            editable={true}
            onEdit={() => handleEdit('Tarjetas de crédito o débito')}
          />
          <CustomInput
            placeholder=""
            value="PayPal"
            icon=""
            editable={true}
            onEdit={() => handleEdit('PayPal')}
          />
        </div>
      </div>
    </div>
        </>
    );
}
export default PayMentsFacilities