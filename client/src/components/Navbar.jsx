import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { assets } from '../assets/assets';

function Navbar() {
  const [profileMenu, setProfileMenu] = useState(false);
  const menuRef = useRef(null);
  const iconRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      iconRef.current &&
      !iconRef.current.contains(event.target)
    ) {
      setProfileMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleProfileMenu = () => {
    setProfileMenu((prev) => !prev);
  };

  return (
    <div className="flex justify-center items-center bg-slate-50 border-b border-slate-100 p-4 z-10">
      <div className="container flex justify-between items-center">
        <div className="flex items-center lg:gap-10 gap-4">

          <div className="w-20">
            <Link to="/">
              <img src={assets.logo} alt="logo" className="w-full" />
            </Link>
          </div>

          <form className="lg:flex hidden gap-2 h-10">
            <input
              className="p-4 rounded-full text-slate-500 border border-slate-200 outline-none"
              type="text"
              placeholder="Rechercher"
              required
            />
            <button className="bg-primary-color h-10 w-10 text-slate-50 rounded-full">
              <i className="bi bi-search"></i>
            </button>
          </form>

          <div className="hover:text-primary-color lg:hidden">
              <Link className="w-10 h-10 flex lg:w-auto lg:h-auto lg:bg-transparent lg:gap-2 justify-center items-center lg:text-base text-md lg:text-slate-500 text-slate-500 bg-slate-200 rounded-full" to="/"><i className="bi bi-search"></i> <label className='lg:block cursor-pointer className="flex gap-2" hidden'>Messages</label></Link>
          </div>

        </div>

        <div className="flex items-center lg:gap-20 gap-2">

          <ul className="flex lg:gap-10 gap-2 text-slate-500">
            <li className="hover:text-primary-color hidden lg:block">
              <Link className="w-10 h-10 flex lg:w-auto lg:h-auto lg:bg-transparent lg:gap-2 justify-center items-center lg:text-base  text-xl lg:text-slate-500 text-slate-500 bg-slate-200 rounded-full" to="/"><i className="bi bi-house-door"></i> <label className='lg:block cursor-pointer className="flex gap-2" hidden'>Acceuil</label></Link>
            </li>
            <li className="hover:text-primary-color">
              <Link className="w-10 h-10 flex lg:w-auto lg:h-auto lg:bg-transparent lg:gap-2 justify-center items-center lg:text-base  text-xl lg:text-slate-500 text-slate-500 bg-slate-200 rounded-full" to="/"><i className="bi bi-bell"></i> <label className='lg:block cursor-pointer className="flex gap-2" hidden'>Notifications</label></Link>
            </li>
            <li className="hover:text-primary-color">
              <Link className="w-10 h-10 flex lg:w-auto lg:h-auto lg:bg-transparent lg:gap-2 justify-center items-center lg:text-base  text-xl lg:text-slate-500 text-slate-500 bg-slate-200 rounded-full" to="/"><i className="bi bi-chat"></i> <label className='lg:block cursor-pointer className="flex gap-2" hidden'>Messages</label></Link>
            </li>
            
          </ul>

          <div ref={iconRef}  onClick={toggleProfileMenu} className="relative w-10 h-10 cursor-pointer flex justify-center items-center text-slate-50 bg-slate-400 rounded-full">
            {/*  h-full object-cover */}
            <div className="w-10 h-10 cursor-pointer flex justify-center items-center rounded-full overflow-hidden">
                <img className='w-full h-full object-cover' src={assets.profile} alt="" />
            </div>

            {profileMenu && (
              <ul
                ref={menuRef}
                className="absolute top-16 right-0 w-56 bg-slate-100 text-slate-500 flex flex-col rounded-3xl p-2"
              >
                <li>
                  <Link
                    className="flex gap-2 py-2 px-5 ease-out delay-75 hover:bg-slate-200 hover:text-primary-accent rounded-full"
                    to="/"
                  >
                    <i className="bi bi-person-add"></i> Devenir fan
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex gap-2 py-2 px-5 ease-out delay-75 hover:bg-slate-200 hover:text-primary-accent rounded-full"
                    to="/"
                  >
                    <i className="bi bi-people"></i> Devenir membre
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex gap-2 py-2 px-5 ease-out delay-75 hover:bg-slate-200 hover:text-primary-accent rounded-full"
                    to="/"
                  >
                    <i className="bi bi-person-plus"></i> Ajouter membre
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex gap-2 py-2 px-5 ease-out delay-75 hover:bg-slate-200 hover:text-primary-accent rounded-full"
                    to="/"
                  >
                    <i className="bi bi-info-circle"></i> About
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex gap-2 py-2 px-5 ease-out delay-75 hover:bg-red-500 hover:text-white rounded-full"
                    to="/"
                  >
                    <i className="bi bi-box-arrow-left"></i> Deconnexion
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
