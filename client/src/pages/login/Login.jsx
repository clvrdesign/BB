import { useState } from 'react';
import Button from "../../components/Button";
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let validationErrors = {};
    if (!formData.username.trim()) {
      validationErrors.username = "Nom d'utilisateur est requis";
    }
    if (!formData.password.trim()) {
      validationErrors.password = "Mot de passe est requis";
    }
    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Handle form submission
      console.log('Form data:', formData);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <div className="w-full h-screen bg-slate-100 px-3 flex md:flex-row flex-col items-center justify-center">
      <div className="md:w-[455px] w-full bg-white rounded-lg">
        <div className="relative w-full flex flex-col justify-center py-20 md:px-10 px-5">
          <div className="sticky bg-white top-0 left-0 py-2">
            <small>Login /
              <Link to="/" className="pl-1 text-primary-accent">Accueil</Link>
            </small>
          </div>
          <h1 className="text-[2rem] font-bold text-gray-600 mb-4">Login</h1>
          <form className="w-full flex flex-col gap-3" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1 mb-2">
              <label className="text-gray-500 text-sm" htmlFor="username">Nom d&apos;utilisateur</label>
              <input
                type="text"
                id="username"
                value={formData.username}
                onChange={handleChange}
                className={`h-10 bg-gray-100 text-sm text-slate-600 px-4 rounded-md focus:border-primary-color border outline-none ${errors.username ? 'border-red-500' : ''}`}
              />
              {errors.username && <small className="text-red-500 text-xs">{errors.username}</small>}
            </div>
            <div className="flex flex-col gap-1 mb-2">
              <label className="text-gray-500 text-sm" htmlFor="password">Mot de passe</label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className={`h-10 bg-gray-100 px-4 text-sm text-slate-600 rounded-md focus:border-primary-color border outline-none ${errors.password ? 'border-red-500' : ''}`}
              />
              {errors.password && <small className="text-red-500 text-xs">{errors.password}</small>}
            </div>

            <Link to="#" className="text-primary-accent text-sm">
              Mot de passe oublié?
            </Link>

            <Button className="md:w-fit w-full bg-primary-color px-16">Login</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
