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
      <div className="container sm:mx-auto sm:my-5 m-auto lg:h-48 h-36 lg:bg-slate-100 overflow-hidden sm:rounded-3xl">
        <ul className="lg:flex lg:flex-col hidden bg-slate-100">
            <li><Link className='p-2' to='/'>Fondateur</Link></li>
            <li><Link to='/'>Vision</Link></li>
            <li><Link to='/'>Calendar</Link></li>
            <li><Link to='/'>Media</Link></li>
            <li><Link to='/'>Publications</Link></li>
            <li><Link to='/'>Contact-nous</Link></li>
        </ul>
        <div className="flex flex-col-reverse">
          <Post/>
          
        </div>
      </div>
    </>
  )
}

export default Home