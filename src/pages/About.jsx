import { Link } from 'react-router-dom';

import AssetsImage from '../assets/images/img1.png'
import AssetsImage2 from '../assets/images/img3.png'

function HomeIcon(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={100} height={100} viewBox="0 0 48 48" {...props}>
            <path fill="#e8eaf6" d="M42 39H6V23L24 6l18 17z"></path>
            <path fill="#c5cae9" d="m39 21l-5-5V9h5zM6 39h36v5H6z"></path>
            <path fill="black" d="M24 4.3L4 22.9l2 2.2L24 8.4l18 16.7l2-2.2z"></path>
            <path fill="black" d="M18 28h12v16H18z"></path>
            <path fill="black" d="M21 17h6v6h-6z"></path>
            <path fill="#f93e3e" d="M27.5 35.5c-.3 0-.5.2-.5.5v2c0 .3.2.5.5.5s.5-.2.5-.5v-2c0-.3-.2-.5-.5-.5"></path>
        </svg>
    );
};

const About = () => {
    return (

        // body start
        <div className="homepage pb-10">
            <div className="container mx-auto px-8">

                {/* jumbotron */}
                <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-28" id="jumbotron">
                    <div className="box">
                        <h1 className='lg:text-5xl/tight text-3xl font-medium mb-7  '>
                            <span className='font-bold text-purple-500 underline text-shadow transform hover:scale-110]
                        hover:text-slate-100 transition duration-300'>About US!</span>
                        </h1>
                        <p className='text-base/8 mb-7'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit hic quia itaque.
                            Veritatis expedita, deleniti rerum odit dolore quod adipisci doloribus exercitationem
                            cupiditate minima quibusdam laborum dolorum facere voluptatem mollitia.</p>
                        <div className='flex items-center'>

                            {/* link multiplepage */}
                            <Link to="/" className='flex text-sm items-center py-2 px-4 rounded-full bg-purple-400 shadow-[0px_0px_0px_2px_rgba(239,68,68,1)] transform hover:scale-105 hover:bg-red-500 hover:shadow-[2px_2px_2px_2px_rgba(168,85,247,1)]
                        hover:text-white transition duration-300'>
                                <HomeIcon width={25} height={25} className="-mt-1 mr-1" />
                                Back to Homepage
                            </Link>

                        </div>
                    </div>
                    <div className="box">
                        <img src={AssetsImage} width={850} height={850} alt="Image1" className='md:w-full w-[400px] mx-auto md:mt-0 -mt-10' />
                    </div>
                </div>

                {/* trusted */}
                <div className="about grid md:grid-cols-2 grid-cols-1 items-center md:gap-20 gap-5 md:pt-40 pt-48 text-center" id="trusted">
                    <div className="box md:order-1 order-2">
                        <img src={AssetsImage2} className='lg:w-[700px] w-[600px] md:m-0 mx-auto' />
                    </div>
                    <div className="box md:order-2 order-1 md:mt-0 -mt-3">
                        <h1 className='lg:text-5xl/tight text-3xl font-medium mb-7 -mt-16'>
                            <span className='font-bold text-purple-500 underline text-shadow transform hover:scale-110]
                        hover:text-slate-100 transition duration-300'>Trusted Showroom!</span>
                        </h1>
                        <p className='text-base/loose'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit hic quia itaque.
                            Veritatis expedita, deleniti rerum odit dolore quod adipisci doloribus exercitationem
                            cupiditate minima quibusdam laborum dolorum facere voluptatem mollitia.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;