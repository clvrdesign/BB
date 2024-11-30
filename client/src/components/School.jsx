

const School = () => {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-2">
                <fieldset>
                  <legend className="text-sm text-slate-600">
                    Etablissement
                  </legend>
                  <input
                    type="text"
                    id="confirmPassword"
                    placeholder="Etablissement"
                    className={`h-10 w-full bg-gray-100 text-gray-700 text-sm px-4 rounded-md focus:border-primary-color border outline-none `}
                  />
                </fieldset>
                <fieldset>
                  <legend className="text-sm text-slate-600">Diplome</legend>
                  <select
                    name=""
                    id=""
                    className={`h-10 w-full bg-gray-100 text-gray-700 text-sm px-4 rounded-md focus:border-primary-color border outline-none `}
                  >

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
                  <legend className="text-sm text-slate-600">
                    Fields of study
                  </legend>
                  <input
                    type="text"
                    id="confirmPassword"
                    placeholder="Domain "
                    className={`h-10 w-full bg-gray-100 text-gray-700 text-sm px-4 rounded-md focus:border-primary-color border outline-none `}
                  />
                </fieldset>
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-2">
                  <fieldset>
                    <legend className="text-sm text-slate-600">
                      Année de début
                    </legend>
                    <input
                      type="date"
                      id="confirmPassword"
                      placeholder="Année de début"
                      className={`h-10 w-full bg-gray-100 text-gray-700 text-sm px-4 rounded-md focus:border-primary-color border outline-none `}
                    />
                  </fieldset>
                  <fieldset>
                    <legend className="text-sm text-slate-600">
                    Année de fin
                    </legend>
                    <input
                      type="date"
                      id="confirmPassword"
                      placeholder="Année de fin"
                      className={`h-10 w-full bg-gray-100 text-gray-700 text-sm px-4 rounded-md focus:border-primary-color border outline-none `}
                    />
                  </fieldset>
                </div>
              </div>
  )
}

export default School