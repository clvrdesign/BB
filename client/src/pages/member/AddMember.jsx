import { useEffect, useState, useRef } from 'react';
import Button from "../../components/Button";
import { Link } from 'react-router-dom'

const AddMem = () => {
  const dayRef = useRef(null);
  const [isFebruary, setIsFebruary] = useState(false);
  const [formValues, setFormValues] = useState({
    lastName: '',
    firstName: '',
    email: '',
    phoneSMS: '',
    phoneWhatsApp: '',
    year: ''
  });
  const [errors, setErrors] = useState({});

  const checkMonth = () => {
    if (dayRef.current && dayRef.current.value === '2') {
      setIsFebruary(true);
    } else {
      setIsFebruary(false);
    }
  };

  useEffect(() => {
    const handleChange = () => {
      checkMonth();
    };

    const daySelect = dayRef.current;
    if (daySelect) {
      daySelect.addEventListener('change', handleChange);
    }

    return () => {
      if (daySelect) {
        daySelect.removeEventListener('change', handleChange);
      }
    };
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formValues.lastName) newErrors.lastName = 'Le nom est requis';
    if (!formValues.firstName) newErrors.firstName = 'Le prénom est requis';
    if (!formValues.email) newErrors.email = 'L\'Email est requis';
    if (!/\S+@\S+\.\S+/.test(formValues.email)) newErrors.email = 'L\'email est invalide';
    if (!formValues.phoneSMS) newErrors.phoneSMS = 'Le numéro de téléphone est requis';
    if (!/^[0-9]{8}$/.test(formValues.phoneSMS)) newErrors.phoneSMS = 'Phone number must be 8 digits';
    if (!formValues.year) newErrors.year = 'Year of birth is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted', formValues);
    } else {
      setErrors(validationErrors);
    }
  };

  const handleInputChange = () => {
    // const { name, value } = e.target;
    // setFormValues({
    //   ...formValues,
    //   [name]: value
    // });
  };

  handleInputChange()

  return (
    <div className="w-full min-h-screen bg-slate-100 md:py-5 py-0 md:px-3 px-0 flex md:flex-row flex-col items-center justify-center">
      <div className="max-w-[1200px] bg-white py-10 md:px-10 px-3 rounded-xl">
        <div className="relative w-full flex flex-col justify-center">
          <div className='sticky bg-white top-0 left-0 py-2'>
            <small>Inscription /
              <Link to='/' className='pl-1 text-primary-accent'>Accueil</Link>
            </small>
          </div>
          <h1 className='text-[2rem] font-bold text-gray-600 mb-4'>Inscription Membre Actif</h1>
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">

            <fieldset>
              <legend className="text-lg font-bold text-gray-600 mb-2">1. Type de volontariat</legend>

              <div className="grid sm:grid-cols-2 grid-cols-1">
                <div className='flex gap-1'>
                  <input type="checkbox" name="" id="add" />
                  <label htmlFor="add">Enregistrat membre</label>
                </div>

                <div className='flex gap-1'>
                  <input type="checkbox" name="" id="add" />
                  <label htmlFor="add">Administration</label>
                </div>
                <div className='flex gap-1'>
                  <input type="checkbox" name="" id="add" />
                  <label htmlFor="add">Communication</label>
                </div>
                <div className='flex gap-1'>
                  <input type="checkbox" name="" id="add" />
                  <label htmlFor="add">Informatique</label>
                </div>
                <div className='flex gap-1'>
                  <input type="checkbox" name="" id="add" />
                  <label htmlFor="add">Gestion et logistique</label>
                </div>
                <div className='flex gap-1'>
                  <input type="checkbox" name="" id="add" />
                  <label htmlFor="add">Compagne et mobilisation</label>
                </div>
                <div className='flex gap-1'>
                  <input type="checkbox" name="" id="add" />
                  <label htmlFor="add">Mandataire politique</label>
                </div>
              </div>

            </fieldset>

            <fieldset>
              <legend className="text-lg font-bold text-gray-600 mb-2">2. Candidats aux éléctions</legend>

              <div className="grid sm:grid-cols-2 grid-cols-1">
                <div className='flex gap-1'>
                  <input type="checkbox" name="" id="add" />
                  <label htmlFor="add">Candidat Député</label>
                </div>

                <div className='flex gap-1'>
                  <input type="checkbox" name="" id="add" />
                  <label htmlFor="add">Candidat conseil communal</label>
                </div>
                <div className='flex gap-1'>
                  <input type="checkbox" name="" id="add" />
                  <label htmlFor="add">Candidat Sénataire</label>
                </div>
                <div className='flex gap-1'>
                  <input type="checkbox" name="" id="add" />
                  <label htmlFor="add">Candidat Conseil collinaire</label>
                </div>
                <div className='flex gap-1'>
                  <input type="checkbox" name="" id="add" />
                  <label htmlFor="add">Candidat chef de quartier</label>
                </div>

              </div>

            </fieldset>

            <fieldset>
              <legend className="text-lg font-bold text-gray-600 mb-2">3. Résidence</legend>

              <div className="grid sm:grid-cols-2 grid-cols-1 gap-2">
                <input
                  type="text"
                  id='confirmPassword'
                  placeholder="Mukaza, Bujumbura"
                  className={`h-10 bg-gray-100 text-sm px-4 rounded-md focus:border-primary-color border outline-none ${errors.lastName ? 'border-red-500' : ''}`}
                />
                <input
                  type="text"
                  id='confirmPassword'
                  placeholder="Mukaza, Bujumbura"
                  className={`h-10 bg-gray-100 text-sm px-4 rounded-md focus:border-primary-color border outline-none ${errors.lastName ? 'border-red-500' : ''}`}
                />

              </div>

            </fieldset>

            <fieldset>
              <legend className="text-lg font-bold text-gray-600 mb-2">4. Education</legend>

              <div className="grid sm:grid-cols-2 grid-cols-1 gap-2">
                <input
                  type="text"
                  id='confirmPassword'
                  placeholder="Mukaza, Bujumbura"
                  className={`h-10 bg-gray-100 text-sm px-4 rounded-md focus:border-primary-color border outline-none ${errors.lastName ? 'border-red-500' : ''}`}
                />
                <input
                  type="text"
                  id='confirmPassword'
                  placeholder="Mukaza, Bujumbura"
                  className={`h-10 bg-gray-100 text-sm px-4 rounded-md focus:border-primary-color border outline-none ${errors.lastName ? 'border-red-500' : ''}`}
                />

              </div>

            </fieldset>

            <fieldset className='w-full'>
              <legend className="text-lg font-bold text-gray-600 mb-2">5.Expérience professionelle</legend>
              <textarea className='w-full h-40 bg-gray-100 text-sm p-4 rounded-md focus:border-primary-color border outline-none' name="" id=""></textarea>


            </fieldset>

            <fieldset>
              <legend className="text-lg font-bold text-gray-600 mb-2">6. Appartenance ethnique</legend>

              <div className="grid sm:grid-cols-3 grid-cols-1">
                <div className='flex gap-1'>
                  <input type="radio" name="ethnic" id="add" />
                  <label htmlFor="add">Umuhutu</label>
                </div>

                <div className='flex gap-1'>
                  <input type="radio" name="ethnic" id="add" />
                  <label htmlFor="add">Umututsi</label>
                </div>
                <div className='flex gap-1'>
                  <input type="radio" name="ethnic" id="add" />
                  <label htmlFor="add">Umutwa</label>
                </div>
                
              </div>

              </fieldset>

              <fieldset className='w-full'>
              <legend className="text-lg font-bold text-gray-600 mb-2">7. Passé politique</legend>
              <textarea className='w-full h-40 bg-gray-100 text-sm p-4 rounded-md focus:border-primary-color border outline-none' name="" id=""></textarea>


            </fieldset>

            <fieldset className='w-full'>
              <legend className="text-lg font-bold text-gray-600 mb-2">8. Téléchargements</legend>
              <label className='w-full flex justify-center py-10 rounded-xl border-dashed border' htmlFor="cardOne">Identité 1</label>
              <input className='hidden' id='cardOne' type="file" />
              <label className='w-full flex justify-center py-10 my-5 rounded-xl border-dashed border' htmlFor="cardTwo">Identité 2</label>
              <input className='hidden' id='cardTwo' type="file" />
              <label className='w-full flex justify-center py-10 rounded-xl border-dashed border' htmlFor="photo">Photo passport</label>
              <input className='hidden' id='photo' type="file" />
            </fieldset>

              <div className="flex justify-start">
                <label className="text-gray-500 text-sm font-bold my-4 flex items-start">
                  <input className="leading-loose text-pink-600 top-0 translate-y-1" type="checkbox" required />
                  <small className="ml-2 font-normal text-gray-600 text-left">Accept the
                    <Link to="#"
                      className="text-primary-accent px-2">
                      Terms and Conditions
                    </Link> of the site and the
                    <Link to="#"
                      className="text-primary-accent pl-2">information
                      data policy.
                    </Link>
                  </small>
                </label>
              </div>
              <Button className="md:w-fit w-full bg-primary-color px-10">Devenir Fan</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMem;
