import Button from "../../components/Button";
import { useEffect, useState, useRef } from 'react';

const Register = () => {
  const dayRef = useRef(null);
  const [isFebruary, setIsFebruary] = useState(false);

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

    // Clean up the event listener on unmount
    return () => {
      if (daySelect) {
        daySelect.removeEventListener('change', handleChange);
      }
    };
  }, []);

  return (
    <div className="w-full h-screen bg-white flex md:flex-row flex-col items-center justify-center">
      <div className="md:w-3/5 w-full md:h-screen h-[20vsh] md:rounded-r-[50px] rounded-b-[50px] overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="https://pro.drc.ngo/media/1a4nktem/burundi-wedding-studio-9664.jpg?anchor=center&mode=crop&width=1200&height=630&rnd=133118445983400000"
          alt=""
        />
      </div>
      <div className="md:w-2/5 w-full bg-white md:pt-0 pt-5 md:px-[120px] px-3">
        <h1 className='text-[2rem] font-bold text-gray-600 mb-4'>S&apos;inscrire</h1>
        <form className="w-full flex flex-col">
          <div className="flex flex-col gap-1 mb-2">
            <label className="text-gray-500" htmlFor="name">Nom et Prénom</label>
            <input
              type="text"
              name='name'
              placeholder="Jean"
              className="h-10 bg-gray-100 px-4 rounded-md focus:border-primary-color border outline-none"
            />
          </div>
          <div className="flex flex-col gap-1 mb-2">
            <label className="text-gray-500" htmlFor="email">Email</label>
            <input
              type="email"
              name='email'
              placeholder="Jean@email.com"
              className="h-10 bg-gray-100 px-4 rounded-md focus:border-primary-color border outline-none"
            />
          </div>
          <div className="flex flex-col gap-1 mt-4 mb-2">
            <label className="text-gray-500">Nationalité</label>
            <div className="flex gap-10 h-10 bg-gray-100 px-4 rounded-md">
              <div className="flex items-center gap-2">
                <input type="radio" name='nationality' value="Burundi" className="h-4 w-4" />
                <label className="text-gray-700">Burundi</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" name='nationality' value="Ami du Burundi" className="h-4 w-4" />
                <label className="text-gray-700">Ami du Burundi</label>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1 mt-4 mb-2">
            <label className="text-gray-500">Genre</label>
            <div className="flex gap-10 h-10 bg-gray-100 px-4 rounded-md">
              <div className="flex items-center gap-2">
                <input type="radio" name='genre' value="Homme" className="h-4 w-4" />
                <label className="text-gray-700">Homme</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" name='genre' value="Femme" className="h-4 w-4" />
                <label className="text-gray-700">Femme</label>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1 mb-2">
            <label className="text-gray-500">Date de naissance</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <select ref={dayRef} className="h-10 bg-gray-100 text-gray-600 px-4 rounded-md focus:border-primary-color border outline-none">
                <option value="" disabled selected>Mois</option>
                <option value="1">Janvier</option>
                <option value="2">Fevrier</option>
                <option value="3">Mars</option>
                <option value="4">Avril</option>
                <option value="5">Mai</option>
                <option value="6">Juin</option>
                <option value="7">Juillet</option>
                <option value="8">Aout</option>
                <option value="9">Septembre</option>
                <option value="10">Octobre</option>
                <option value="11">Novembre</option>
                <option value="12">Decembre</option>
              </select>
              <select className="h-10 bg-gray-100 text-gray-600 px-4 rounded-md focus:border-primary-color border outline-none">
                <option value="" disabled selected>Jour</option>
                {Array.from({ length: isFebruary ? 28 : 31 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
              <input
                type="text"
                name='year'
                placeholder="Année"
                className="h-10 bg-gray-100 px-4 rounded-md focus:border-primary-color border outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1 mb-2">
            <label className="text-gray-500">Telephone/SMS</label>
            <input
              type="text"
              name='phoneSMS'
              placeholder="79 999 999"
              className="h-10 bg-gray-100 px-4 rounded-md focus:border-primary-color border outline-none"
            />
          </div>
          <div className="flex flex-col gap-1 mb-4">
            <label className="text-gray-500">Telephone/WhatsApp</label>
            <input
              type="text"
              name='phoneWhatsApp'
              placeholder="79 999 999"
              className="h-10 bg-gray-100 px-4 rounded-md focus:border-primary-color border outline-none"
            />
          </div>
          <Button className="w-full bg-primary-color px-10">Devenir Fan</Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
