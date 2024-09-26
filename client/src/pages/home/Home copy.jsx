
import { useState, useEffect, useRef } from 'react';
import Navbar from '../../../components/Navbar';
import Slider from '../../../components/Slider';
import Post from '../../../components/Post';
import Sidebar from '../../../components/Sidebar';

function Home() {

  const [sidebar, setSidebar] = useState(false);
  const sidebarRef = useRef(null);
  const iconRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target) &&
      iconRef.current &&
      !iconRef.current.contains(event.target)
    ) {
      setSidebar(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebar((prev) => !prev);
  };

  return (
    <>
      <Navbar ref={iconRef} onClick={toggleSidebar} />
      {!sidebar &&
        <div className='container sm:mx-auto sm:my-5 m-auto lg:h-48 h-36 bg-slate-100 overflow-hidden sm:rounded-3xl'>
          <Slider />
        </div>
      }
      <div className="container flex gap-4 sm:mx-auto sm:my-5 m-auto">
        {/* Sidebar for small */}
        {sidebar &&
          <div ref={sidebarRef} className="lg:min-w-60 lg:flex lg:flex-col lg:relative lg:top-0 sticky top-20 left-0 w-full h-screen  bg-slate-50">
            <Sidebar/>
          </div>
        }

        {/* Sidebar for lager screen */}
        <div ref={sidebarRef} className="lg:min-w-60 lg:flex lg:flex-col lg:relative lg:top-0 sticky top-20 left-0 w-full h-screen hidden  bg-slate-50">
          <Sidebar/>
        </div>

        
        {!sidebar &&
          <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">

            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />

          </div>
        }
      </div>
    </>
  );
}

export default Home;
