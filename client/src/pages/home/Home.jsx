import Navbar from '../../components/Navbar'
import Slider from '../../components/Slider'

function Home() {
  return (
    <>
      <Navbar />
      <div className='container sm:mx-auto sm:my-5 m-auto h-48 bg-slate-100 overflow-hidden sm:rounded-3xl'>
        <Slider/>
      </div>
    </>
  )
}

export default Home