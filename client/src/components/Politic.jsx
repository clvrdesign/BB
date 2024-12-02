import { useState } from "react";

const Politique = () => {
  const [responsibilities, setResponsibilities] = useState([{}]); // Manage responsibilities dynamically
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 51 }, (_, i) => currentYear - i);

  const addResponsibility = () => {
    setResponsibilities((prev) => [...prev, {}]); // Add a new responsibility entry
  };

  const removeResponsibility = (index) => {
    setResponsibilities((prev) => prev.filter((_, i) => i !== index)); // Remove a responsibility entry
  };

  return (
    <>
      {responsibilities.map((_, index) => (
        <div key={index} className="border p-4 rounded-md mb-4 relative">
          <button
            onClick={() => removeResponsibility(index)}
            className="absolute top-2 right-2 text-red-500 text-sm hover:underline"
          >
            Remove
          </button>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-2">
            <fieldset>
              <legend className="text-sm text-slate-600">
                Nom de la formation politique
              </legend>
              <input
                type="text"
                placeholder="Nom de la formation politique"
                className="h-10 w-full bg-gray-100 text-gray-700 text-sm px-4 rounded-md focus:border-primary-color border outline-none"
              />
            </fieldset>
            <fieldset>
              <legend className="text-sm text-slate-600">
                Catégorie politique
              </legend>
              <select
                name={`category-${index}`}
                id={`category-${index}`}
                className="h-10 w-full bg-gray-100 text-gray-700 text-sm px-4 rounded-md focus:border-primary-color border outline-none"
              >
                <option value="" disabled selected>
                  Sélectionner Catégorie
                </option>
                <option value="parti-politique">Parti politique</option>
                <option value="coalition-politique">Coalition politique</option>
                <option value="candidat-independant">
                  Candidat indépendant
                </option>
              </select>
            </fieldset>
            <fieldset>
              <legend className="text-sm text-slate-600">
                Poste/Responsabilités
              </legend>
              <input
                type="text"
                placeholder="Poste/Responsabilités"
                className="h-10 w-full bg-gray-100 text-gray-700 text-sm px-4 rounded-md focus:border-primary-color border outline-none"
              />
            </fieldset>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-2">
              {["Année de début", "Année de fin"].map((label, idx) => (
                <fieldset key={idx}>
                  <legend className="text-sm text-slate-600">{label}</legend>
                  <select
                    name={`${label.toLowerCase().replace(/ /g, "-")}-${index}`}
                    id={`${label.toLowerCase().replace(/ /g, "-")}-${index}`}
                    className="h-10 w-full bg-gray-100 text-gray-700 text-sm px-4 rounded-md focus:border-primary-color border outline-none"
                  >
                    <option value="" disabled selected>
                      Séléctioner l&apos;année
                    </option>
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </fieldset>
              ))}
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={addResponsibility}
        className="text-white h-10 flex items-center cursor-pointer justify-center mt-3 bg-slate-500 px-10 rounded-md"
      >
        Ajouter Responsabilité
      </button>
    </>
  );
};

export default Politique;
