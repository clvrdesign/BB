

const Politique = () => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 51 }, (_, i) => currentYear - i);

  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-2">
      <fieldset>
        <legend className="text-sm text-slate-600">
          Nom de la formation politique
        </legend>
        <input
          type="text"
          id="confirmPassword"
          placeholder="Nom de la formation politique"
          className={`h-10 w-full bg-gray-100 text-gray-700 text-sm px-4 rounded-md focus:border-primary-color border outline-none `}
        />
      </fieldset>
      <fieldset>
        <legend className="text-sm text-slate-600">Catégorie politique</legend>
        <select
          name=""
          id=""
          className={`h-10 w-full bg-gray-100 text-gray-700 text-sm px-4 rounded-md focus:border-primary-color border outline-none `}
        >
          <option value="" selected disabled>Sélectionner Catégorie</option>
          <option value="">Parti politique</option>
          <option value="">Coallision politique</option>
          <option value="">Candidat indépendant</option>
        </select>
      </fieldset>

      <fieldset>
        <legend className="text-sm text-slate-600">
          Poste/Responsabilités
        </legend>
        <input
          type="text"
          id="confirmPassword"
          placeholder="Poste/Responsabilités"
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
  )
}

export default Politique