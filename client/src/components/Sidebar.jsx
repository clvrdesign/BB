import { Link } from 'react-router-dom'
import User from '../components/User';

function Sidebar() {
    return (
        <>
            <ul className="w-full text-slate-500 sm:rounded-3xl">
            <li className='flex items-center hover:bg-slate-100 px-4 rounded-md'><i className="bi bi-person-circle"></i><Link className='w-full flex justify-between p-4 border-b hover:border-slate-50 border-slate-200' to='/'>Fondateur <i className="bi bi-chevron-right"></i></Link></li>
            <li className='flex items-center hover:bg-slate-100 px-4 rounded-md'><i className="bi bi-eye"></i><Link className='w-full flex justify-between p-4 border-b hover:border-slate-50 border-slate-200' to='/'>Vision <i className="bi bi-chevron-right"></i></Link></li>
            <li className='flex items-center hover:bg-slate-100 px-4 rounded-md'><i className="bi bi-calendar-date"></i><Link className='w-full flex justify-between p-4 border-b hover:border-slate-50 border-slate-200' to='/'>Calendar <i className="bi bi-chevron-right"></i></Link></li>
            <li className='flex items-center hover:bg-slate-100 px-4 rounded-md'><i className="bi bi-play-circle"></i><Link className='w-full flex justify-between p-4 border-b hover:border-slate-50 border-slate-200' to='/'>Media <i className="bi bi-chevron-right"></i></Link></li>
            <li className='flex items-center hover:bg-slate-100 px-4 rounded-md'><i className="bi bi-book"></i><Link className='w-full flex justify-between p-4 border-b hover:border-slate-50 border-slate-200' to='/'>Publications <i className="bi bi-chevron-right"></i></Link></li>
            <li className='flex items-center hover:bg-slate-100 px-4 rounded-md'><i className="bi bi-envelope"></i><Link className='w-full flex justify-between p-4' to='/'>Contactez-nous <i className="bi bi-chevron-right"></i></Link></li>
          </ul>
          <div className="flex flex-col">
            <h2 className='font-bold text-xl px-3 text-slate-700 mt-5 my-2'>Top members</h2>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
          </div>
        </>
    )
}

export default Sidebar