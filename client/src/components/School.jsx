const School = () => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 51 }, (_, i) => currentYear - i);

  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-2">
      <fieldset>
        <legend className="text-sm text-slate-600">Etablissement</legend>
        <input
          type="text"
          id="confirmPassword"
          placeholder="Etablissement"
          className={`h-10 w-full bg-gray-100 text-gray-700 text-sm px-4 rounded-md focus:border-primary-color border outline-none `}
        />
      </fieldset>
      <fieldset>
        <legend className="text-sm text-slate-600">Diplôme</legend>
        <select
          name=""
          id=""
          className={`h-10 w-full bg-gray-100 text-gray-700 text-sm px-4 rounded-md focus:border-primary-color border outline-none `}
        >
          <option value="" selected disabled>
            Sélectionner Diplôme
          </option>
          <option value="">Primaire</option>
          <option value="">A3</option>
          <option value="">Secondaire/A4</option>
          <option value="">Bac+2/A1</option>
          <option value="">Bac+3/Licence</option>
          <option value="">Master</option>
          <option value="">Doctorat</option>
        </select>
      </fieldset>

      <fieldset>
        <legend className="text-sm text-slate-600">Domaine d&apos;Etude</legend>
        <input
          type="text"
          id="confirmPassword"
          placeholder="Domaine d'Etude"
          className={`h-10 w-full bg-gray-100 text-gray-700 text-sm px-4 rounded-md focus:border-primary-color border outline-none `}
        />
      </fieldset>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-2">
        <fieldset>
          <legend className="text-sm text-slate-600">Année de début</legend>
          <select
            name=""
            id=""
            className={`h-10 w-full bg-gray-100 text-gray-700 text-sm px-4 rounded-md focus:border-primary-color border outline-none `}
          >
            <option value="" selected disabled>Séléctioner l&apos;année de début</option>
            {years.map((year) => (
              <>
              
              <option key={year} value={year}>
                {year}
              </option>
              </>
            ))}
          </select>
        </fieldset>
        <fieldset>
          <legend className="text-sm text-slate-600">Année de fin</legend>
          <select
            name=""
            id=""
            className={`h-10 w-full bg-gray-100 text-gray-700 text-sm px-4 rounded-md focus:border-primary-color border outline-none `}
          >
            <option value="" selected disabled>Séléctioner l&apos;année de fin</option>
            {years.map((year) => (

              
              <option key={year} value={year}>
                {year}
              </option>
              
            ))}
          </select>
        </fieldset>
      </div>
    </div>
  );
};

export default School;
