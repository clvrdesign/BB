
import Button from "../../components/Button";
import { Link } from 'react-router-dom'

const Login = () => {

  return (
    <div className="w-full h-screen bg-slate-100 px-3 flex md:flex-row flex-col items-center justify-center">
      <div className="md:w-[455px] w-full bg-white rounded-lg">
        <div className="relative w-full flex flex-col justify-center py-20 md:px-10 px-5">
          <div className='sticky bg-white top-0 left-0 py-2'>
            <small>Login /
              <Link to='/' className='pl-1 text-primary-accent'>Accueil</Link>
            </small>
          </div>
          <h1 className='text-[2rem] font-bold text-gray-600 mb-4'>Login</h1>
          <form className="w-full flex flex-col gap-3">
            <div className="flex flex-col gap-1 mb-2">
              <label className="text-gray-500 text-sm" htmlFor="name">Nom d&apos;utilisateur</label>
              <input
                type="text"
                id='name'
                className="h-10 bg-gray-100 text-sm text-slate-600 px-4 rounded-md focus:border-primary-color border outline-none"
              />
            </div>
            <div className="flex flex-col gap-1 mb-2">
              <label className="text-gray-500 text-sm" htmlFor="email">Mot de passe</label>
              <input
                type="password"
                id='password'
                className="h-10 bg-gray-100 px-4 text-sm text-slate-600 rounded-md focus:border-primary-color border outline-none"
              />
            </div>


            <Link to="#"
              className="text-primary-accent text-sm">
              Mot de passé oublié?
            </Link>

            <Button className="md:w-fit w-full bg-primary-color px-16">Login</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
