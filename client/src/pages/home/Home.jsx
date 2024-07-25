import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Slider from '../../components/Slider'
import Post from '../../components/Post'

function Home() {
  return (
    <>
      <Navbar />
      <div className='container sm:mx-auto sm:my-5 m-auto lg:h-48 h-36 bg-slate-100 overflow-hidden sm:rounded-3xl'>
        <Slider/>
      </div>
      <div className="container flex gap-4 sm:mx-auto sm:my-5 m-auto">
        <ul className="min-w-60 lg:flex lg:flex-col hidden text-slate-500 sm:rounded-3xl">
            <li className='flex items-center hover:bg-slate-100 px-4 rounded-md'><i className="bi bi-person-circle"></i><Link className='w-full flex justify-between p-4 border-b hover:border-slate-50 border-slate-200' to='/'>Fondateur <i className="bi bi-chevron-right"></i></Link></li>
            <li className='flex items-center hover:bg-slate-100 px-4 rounded-md'><i className="bi bi-"></i><Link className='w-full flex justify-between p-4 border-b hover:border-slate-50 border-slate-200' to='/'>Vision <i className="bi bi-chevron-right"></i></Link></li>
            <li className='flex items-center hover:bg-slate-100 px-4 rounded-md'><i className="bi bi-calendar-date"></i><Link className='w-full flex justify-between p-4 border-b hover:border-slate-50 border-slate-200' to='/'>Calendar <i className="bi bi-chevron-right"></i></Link></li>
            <li className='flex items-center hover:bg-slate-100 px-4 rounded-md'><i className="bi bi-play-circle"></i><Link className='w-full flex justify-between p-4 border-b hover:border-slate-50 border-slate-200' to='/'>Media <i className="bi bi-chevron-right"></i></Link></li>
            <li className='flex items-center hover:bg-slate-100 px-4 rounded-md'><i className="bi bi-book"></i><Link className='w-full flex justify-between p-4 border-b hover:border-slate-50 border-slate-200' to='/'>Publications <i className="bi bi-chevron-right"></i></Link></li>
            <li className='flex items-center hover:bg-slate-100 px-4 rounded-md'><i className="bi bi-envelope"></i><Link className='w-full flex justify-between p-4' to='/'>Contactez-nous <i className="bi bi-chevron-right"></i></Link></li>
        </ul>
        <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </div>
      </div>
    </>
  )
}

export default Home