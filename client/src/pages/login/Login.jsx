
import Button from "../../components/Button";
import { Link } from 'react-router-dom'

const Login = () => {

  return (
    <div className="w-full h-screen bg-white flex md:flex-row flex-col items-center justify-center">
      <div className="md:w-2/5 w-full md:min-h-auto min-h-screen bg-white md:pt-0 pt-5 md:pb-0 pb-5 md:px-[120px] px-3 md:my-0 my-10">
        <div className="relative w-full min-h-screen flex flex-col justify-center py-10">
          <div className='sticky bg-white top-0 left-0 py-2'>
            <small>Login /
              <Link to='/' className='pl-1 text-primary-accent'>Accueil</Link>
            </small>
          </div>
          <h1 className='text-[2rem] font-bold text-gray-600 mb-4'>Login</h1>
          <form className="w-full flex flex-col gap-3">
            <div className="flex flex-col gap-1 mb-2">
              <label className="text-gray-500" htmlFor="name">Nom d&apos;utilisateur</label>
              <input
                type="text"
                id='name'
                className="h-10 bg-gray-100 px-4 rounded-md focus:border-primary-color border outline-none"
              />
            </div>
            <div className="flex flex-col gap-1 mb-2">
              <label className="text-gray-500" htmlFor="email">Mot de passe</label>
              <input
                type="password"
                id='password'
                className="h-10 bg-gray-100 px-4 rounded-md focus:border-primary-color border outline-none"
              />
            </div>


            <Link to="#"
              className="text-primary-accent">
              Mot de passé oublié?
            </Link>

            <Button className="w-full bg-primary-color px-16">Login</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
