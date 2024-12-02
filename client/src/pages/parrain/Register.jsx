// import { useState } from 'react';
import Button from "../../components/Button";
import { Link } from 'react-router-dom'
import School from "../../components/School"
import Experience from "../../components/Experience"
import Politic from "../../components/Politic"

const AddMem = () => {
  
  return (
    <div className="w-full min-h-screen bg-slate-100 md:py-5 py-0 md:px-3 px-0 flex md:flex-row flex-col items-center justify-center">
      <div className="max-w-[1200px] bg-white py-10 md:px-10 px-3 rounded-xl">
        <div className="relative w-full flex flex-col justify-center">
          <div className='sticky bg-white top-0 left-0 py-2'>
            <small>Inscription /
              <Link to='/' className='pl-1 text-primary-accent'>Accueil</Link>
            </small>
          </div>
          <h1 className='text-[2rem] font-bold text-gray-600 mb-4'>Parrainer Membre</h1>
          <form onSubmit='' className="w-full flex flex-col gap-3">
          <fieldset>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-2">
                <input
                  type="text"
                  id=''
                  placeholder="User ID du Candidat Parrainé"
                  className={`h-10 bg-gray-100 text-sm px-4 rounded-md focus:border-primary-color border outline-none `}
                />
                <input
                  type="text"
                  id='confirmPassword'
                  placeholder="Nom d&apos;utilisateur du Candidat Parrainé"
                  className={`h-10 bg-gray-100 text-sm px-4 rounded-md focus:border-primary-color border outline-none `}
                />
                
              </div>

            </fieldset>
            
            <fieldset>
              <legend className="text-lg font-bold text-gray-600 mb-2">1. Parrainer Candidat aux Elections</legend>

              <div className="grid sm:grid-cols-2 grid-cols-1 gap-2">
                <div className='flex items-center gap-1'>
                  <input type="checkbox" name="" id="add" />
                  <label htmlFor="add" className='text-gray-600 text-sm'>Candidat Député</label>
                </div>

                <div className='flex items-center gap-1'>
                  <input type="checkbox" name="" id="add" />
                  <label htmlFor="add" className='text-gray-600 text-sm'>Candidat Conseiller Communal</label>
                </div>
                <div className='flex items-center gap-1'>
                  <input type="checkbox" name="" id="add" />
                  <label htmlFor="add" className='text-gray-600 text-sm'>Candidat Sénateur</label>
                </div>
                <div className='flex items-center gap-1'>
                  <input type="checkbox" name="" id="add" />
                  <label htmlFor="add" className='text-gray-600 text-sm'>Candidat Conseiller Collinaire</label>
                </div>
                <div className='flex items-center gap-1'>
                  <input type="checkbox" name="" id="add" />
                  <label htmlFor="add" className='text-gray-600 text-sm'>Candidat Chef de Quartier</label>
                </div>

              </div>

            </fieldset>

            <fieldset>
              <legend className="text-lg font-bold text-gray-600 mb-2">2. Résidence</legend>

              <div className="grid sm:grid-cols-2 grid-cols-1 gap-2">
                <input
                  type="text"
                  id='confirmPassword'
                  placeholder="Mukaza, Bujumbura"
                  className={`h-10 bg-gray-100 text-sm px-4 rounded-md focus:border-primary-color border outline-none `}
                />
                <input
                  type="text"
                  id='confirmPassword'
                  placeholder="Mukaza, Bujumbura"
                  className={`h-10 bg-gray-100 text-sm px-4 rounded-md focus:border-primary-color border outline-none `}
                />

              </div>

            </fieldset>

            <fieldset>
              <legend className="text-lg font-bold text-gray-600 mb-2">
                4. Education
              </legend>

              <School/>
            </fieldset>

            <fieldset className='w-full'>
              <legend className="text-lg font-bold text-gray-600 mb-2">4.Expérience professionelle</legend>
              <Experience/>
            </fieldset>

            <fieldset>
              <legend className="text-lg font-bold text-gray-600 mb-2">5. Appartenance ethnique</legend>

              <div className="grid sm:grid-cols-3 grid-cols-1 gap-2">
                <div className='flex gap-1'>
                  <input type="radio" name="ethnic" id="add" />
                  <label htmlFor="add" className='text-gray-600 text-sm'>Umuganwa</label>
                </div>
                <div className='flex gap-1'>
                  <input type="radio" name="ethnic" id="add" />
                  <label htmlFor="add" className='text-gray-600 text-sm'>Umuhutu</label>
                </div>

                <div className='flex gap-1'>
                  <input type="radio" name="ethnic" id="add" />
                  <label htmlFor="add" className='text-gray-600 text-sm'>Umututsi</label>
                </div>
                <div className='flex gap-1'>
                  <input type="radio" name="ethnic" id="add" />
                  <label htmlFor="add" className='text-gray-600 text-sm'>Umutwa</label>
                </div>

              </div>

            </fieldset>

            <fieldset className='w-full'>
              <legend className="text-lg font-bold text-gray-600 mb-2">6. Passé politique</legend>
              <Politic/>
            </fieldset>

            <fieldset className='w-full'>
              <legend className="text-lg font-bold text-gray-600 mb-2">7. Téléchargements</legend>
              <label className='w-full flex justify-center items-center gap-2 text-sm text-gray-600 py-10 rounded-xl border-dashed border' htmlFor="cardOne"><i className="fi fi-rr-add-image translate-y-0.5"></i> Identité 1</label>
              <input className='hidden' id='cardOne' type="file" />
              <label className='w-full flex justify-center items-center gap-2 text-sm text-gray-600 py-10 my-5 rounded-xl border-dashed border' htmlFor="cardTwo"><i className="fi fi-rr-add-image translate-y-0.5"></i> Identité 2</label>
              <input className='hidden' id='cardTwo' type="file" />
              <label className='w-full flex justify-center items-center gap-2 text-sm text-gray-600 py-10 rounded-xl border-dashed border' htmlFor="photo"><i className="fi fi-rr-add-image translate-y-0.5"></i> Photo passport</label>
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
            <Button className="md:w-fit w-full bg-primary-color px-10">Parrainer</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMem;
