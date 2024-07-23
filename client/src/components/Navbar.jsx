import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="flex justify-center items-center bg-slate-100 border-b border-slate-200">
        <div className="container flex justify-between items-center">
            <div className="flex items-center gap-10">
                <div className="w-20">
                    <img src="https://img.freepik.com/premium-vector/free-vector-beautiful-flying-hummingbird-design-element-banners-posters-leaflets-brochur_1009653-1.jpg" alt="" />
                </div>
                <div className="flex h-10">
                    <input className='p-4 rounded-full text-slate-500 border border-slate-300 outline-none text-sm' type="text" placeholder='Rechercher'/>
                </div>
            </div>
            
            <div className="flex items-center gap-20">
                <ul className="flex gap-10 text-sm text-slate-500">
                    <li className='hover:text-primary-color'>
                        <Link to="/">Acceuil</Link>
                    </li>
                    <li className='hover:text-primary-color'>
                        <Link to="/login">Projets</Link>
                    </li>
                    <li className='hover:text-primary-color'>
                        <Link to="/login">Calendrier</Link>
                    </li>
                    <li className='hover:text-primary-color'>
                        <Link to="/login">Media</Link>
                    </li>
                </ul>
                <div className="w-10 h-10 flex justify-center items-center text-slate-50 bg-slate-400 rounded-full">
                    <i className='bi bi-person text-2xl'></i>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar