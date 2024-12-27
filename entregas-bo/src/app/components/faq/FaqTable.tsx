const FaqTable: React.FC = () => {
    const sections = ["General", "Confianza y Seguridad", "Servicios", "Facturación"];
  
    return (
      <aside className="w-64 bg-gray-50 p-4 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Tabla de contenidos</h2>
        <ul className="space-y-2">
          {sections.map((section, index) => (
            <li key={index}>
              <a
                href={`#${section.toLowerCase().replace(/ /g, "-")}`}
                className="text-gray-600 hover:text-blue-600 block"
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    );
  };
  
  export default FaqTable;
  