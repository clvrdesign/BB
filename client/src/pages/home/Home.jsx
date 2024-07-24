import Navbar from '../../components/Navbar'
import Slider from '../../components/Slider'
import Post from '../../components/Post'

function Home() {
  return (
    <>
      <Navbar />
      <div className='container sm:mx-auto sm:my-5 m-auto lg:h-48 h-36 bg-slate-100 overflow-hidden sm:rounded-3xl'>
        <Slider/>
        <div className="flex h-80">
          <Post/>
          Hello dolly
        </div>
      </div>
    </>
  )
}

export default Home