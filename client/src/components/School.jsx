

const School = () => {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-2">
                <fieldset>
                  <legend className="text-sm text-slate-600">
                    School/University
                  </legend>
                  <input
                    type="text"
                    id="confirmPassword"
                    placeholder="School or University"
                    className={`h-10 w-full bg-gray-100 text-gray-700 text-sm px-4 rounded-md focus:border-primary-color border outline-none `}
                  />
                </fieldset>
                <fieldset>
                  <legend className="text-sm text-slate-600">Degree</legend>
                  <input
                    type="text"
                    id="confirmPassword"
                    placeholder="Degree"
                    className={`h-10 w-full bg-gray-100 text-gray-700 text-sm px-4 rounded-md focus:border-primary-color border outline-none `}
                  />
                </fieldset>

                <fieldset>
                  <legend className="text-sm text-slate-600">
                    Fields of study
                  </legend>
                  <input
                    type="text"
                    id="confirmPassword"
                    placeholder="Fields of study"
                    className={`h-10 w-full bg-gray-100 text-gray-700 text-sm px-4 rounded-md focus:border-primary-color border outline-none `}
                  />
                </fieldset>
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-2">
                  <fieldset>
                    <legend className="text-sm text-slate-600">
                      Start year
                    </legend>
                    <input
                      type="date"
                      id="confirmPassword"
                      placeholder="Start year"
                      className={`h-10 w-full bg-gray-100 text-gray-700 text-sm px-4 rounded-md focus:border-primary-color border outline-none `}
                    />
                  </fieldset>
                  <fieldset>
                    <legend className="text-sm text-slate-600">End year</legend>
                    <input
                      type="date"
                      id="confirmPassword"
                      placeholder="Start year"
                      className={`h-10 w-full bg-gray-100 text-gray-700 text-sm px-4 rounded-md focus:border-primary-color border outline-none `}
                    />
                  </fieldset>
                </div>
              </div>
  )
}

export default School