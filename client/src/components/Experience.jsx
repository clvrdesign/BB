

const Experience = () => {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-2">
                <fieldset>
                  <legend className="text-sm text-slate-600">
                    Employeur
                  </legend>
                  <input
                    type="text"
                    id="confirmPassword"
                    placeholder="Employeur"
                    className={`h-10 w-full bg-gray-100 text-gray-700 text-sm px-4 rounded-md focus:border-primary-color border outline-none `}
                  />
                </fieldset>
                <fieldset>
                  <legend className="text-sm text-slate-600">Catégorie</legend>
                  <select
                    name=""
                    id=""
                    className={`h-10 w-full bg-gray-100 text-gray-700 text-sm px-4 rounded-md focus:border-primary-color border outline-none `}
                  >
                    <option value="" selected disabled>Sélectionner la catégorie</option>  
                    <option value="">Poste par décrêt</option>
                    <option value="">Directeur Général/Dir</option>
                    <option value="">Cadre de Direction</option>
                    <option value="">Cadre d&apos;Appui</option>
                    <option value="">Agent</option>
                    <option value="">Contrat à court terme</option>
                    <option value="">Journalier</option>

                  </select>
                </fieldset>

                <fieldset>
                  <legend className="text-sm text-slate-600">
                    Poste occupé
                  </legend>
                  <input
                    type="text"
                    id="confirmPassword"
                    placeholder="Poste occupé"
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

export default Experience