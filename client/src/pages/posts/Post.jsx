
import { useState, useEffect, useRef } from 'react';
import Navbar from '../../components/Navbar';
import Slider from '../../components/Slider';
import Post from '../../components/Post';
import Sidebar from '../../components/Sidebar';

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
          <div className="flex xl:flex-row flex-col gap-4">
            <div className="basis-3/4 px-4">
                <h1 className="text-4xl font-bold text-slate-700 my-4">This the post title</h1>
                <p className="text-lg text-slate-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ipsam alias vel, consequuntur, totam necessitatibus quos fugiat illum esse vitae quae qui minus veritatis assumenda delectus exercitationem quam.
                    Facilis quaerat dignissimos voluptas ullam repudiandae veniam officiis nam numquam, sapiente aliquam neque vitae obcaecati quidem iste tempore aperiam, at autem temporibus voluptate.
                    Ratione cumque totam debitis sit dolor quia beatae magni, natus ipsa? Ex eos consectetur consequuntur numquam nobis fugit doloribus? Eos qui quisquam ipsam ducimus maxime molestias,
                    provident quidem optio aliquid eaque magnam delectus odio vel ex distinctio omnis accusantium amet? Impedit aperiam laborum aspernatur qui cupiditate culpa tempore excepturi exercitationem animi voluptatem?
                    Rerum atque doloremque ut voluptate numquam ipsam reprehenderit ipsum. Minus nulla autem quasi id quae esse ea sed, debitis labore asperiores officiis?
                </p>

                <div className="w-full h-[350px] lg:h-[750px] overflow-hidden my-5 rounded-xl">
                    <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1672575659188-e7dd57652db3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1cnVuZGl8ZW58MHx8MHx8fDA%3D" alt="" />
                </div>

            </div>
            <div className="basis-1/4 flex flex-col gap-4">
                <h1 className='text-2xl font-bold text-slate-700 px-4'>Related posts</h1>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
          </div>
        }
      </div>
    </>
  );
}

export default Home;
