
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SlickCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    draggable: false,
    fade: true,
  };

  return (

    <div className="h-full slider bg-slate-900 z-1">
        <Slider {...settings}>
        <img className='w-full h-full object-cover opacity-75' src="https://images.unsplash.com/photo-1715026323270-564a788bbadc?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="slide" />
        <img className='w-full h-full object-cover opacity-75' src="https://images.unsplash.com/photo-1564786632542-299f7d3550b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="slide" />
        <img className='w-full h-full object-cover opacity-75' src="https://images.unsplash.com/photo-1564438525449-fb13d18167a4?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="slide" />
        </Slider>
    </div>

  );
}

export default SlickCarousel