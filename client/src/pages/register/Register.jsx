

const Register = () => {
  return (
    <div className="w-full h-screen bg-white flex items-center justify-center">
      <div className="w-3/5  h-screen rounded-r-[50px] overflow-hidden">
        <img className="w-full h-full object-cover" src="https://pro.drc.ngo/media/1a4nktem/burundi-wedding-studio-9664.jpg?anchor=center&mode=crop&width=1200&height=630&rnd=133118445983400000" alt="" />
      </div>
      <div className="w-2/5 bg-white px-[120px]">
        <h1 className='text-2xl font-bold text-gray-600 mb-4'>Devenir Fan</h1>
        <form action="" className="flex flex-col">
          <div className="flex flex-col gap-1 mb-2">
            <label className="text-gray-500" htmlFor="name">Nom et Prénom</label>
            <input type="text" name='name' placeholder="Jean" className="h-10 bg-gray-100 px-4 rounded-md focus:border-primary-color border outline-none" />
          </div>
          <div className="flex flex-col gap-1 mb-2">
            <label className="text-gray-500" htmlFor="name">Email</label>
            <input type="text" name='name' placeholder="Jean" className="h-10 bg-gray-100 px-4 rounded-md focus:border-primary-color border outline-none" />
          </div>
          <div className="flex flex-col gap-1 mb-2">
            <label className="text-gray-500" htmlFor="name">Nationalité</label>
            <div className="flex">
              <input type="text" name='name' placeholder="Jean" className="h-10 bg-gray-100 px-4 rounded-md focus:border-primary-color border outline-none" />
            </div>
            </div>
          <div className="flex flex-col gap-1 mb-2">
            <label className="text-gray-500" htmlFor="name">Nom et Prénom</label>
            <input type="text" name='name' placeholder="Jean" className="h-10 bg-gray-100 px-4 rounded-md focus:border-primary-color border outline-none" />
          </div>
          

        </form>
      </div>
    </div>
  )
}

export default Register