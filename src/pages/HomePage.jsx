import { Link } from 'react-router-dom';

import AssetsImage from '../assets/images/img2.png'
import AssetsImage2 from '../assets/images/img3.gif'

import AssestsImage3 from '../assets/images/img4.gif'
import AssestsImage5 from '../assets/images/img6.gif'

import AssestsImage8 from '../assets/images/car1.png'
import AssestsImage9 from '../assets/images/car2.png'
import AssestsImage10 from '../assets/images/car3.png'



const HomePage = () => {
    return (

        // body start
        <div className="homepage pb-10">
            <div className="container mx-auto px-8">

                {/* jumbotron */}
                <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-28" id="jumbotron">
                    <div className="box">
                        <h1 className='lg:text-5xl/tight text-3xl font-medium mb-7  '>
                            Welcome To The Biggest Showroom in<br /> <span className='font-bold text-purple-500 underline text-shadow transform hover:scale-110]
                        hover:text-slate-100 transition duration-300'>Puerto Rico / Purwokerto</span>
                        </h1>
                        <p className='text-base/8 mb-7'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit hic quia itaque.
                            Veritatis expedita, deleniti rerum odit dolore quod adipisci doloribus exercitationem
                            cupiditate minima quibusdam laborum dolorum facere voluptatem mollitia.</p>
                        <div className='lg:mt-0 mt-10'>

                            {/* link multiplepage */}
                            <Link to="/about" className='py-2 px-4 rounded-full bg-purple-400 shadow-[0px_0px_0px_2px_rgba(239,68,68,1)] transform hover:scale-105 hover:bg-red-500 hover:shadow-[2px_2px_2px_2px_rgba(168,85,247,1)]
                        hover:text-white transition duration-300'>
                                About Us <i className="ri-eye-line ms-1"></i>
                            </Link>

                        </div>
                    </div>
                    <div className="box">
                        <img src={AssetsImage} width={850} height={850} alt="Image1" className='md:w-full w-[400px] mx-auto md:m-0' />
                    </div>
                </div>

                {/* services */}
                <div className="about grid md:grid-cols-2 grid-cols-1 items-center md:gap-20 gap-5 md:pt-40 pt-48 text-center" id="services">
                    <div className="box md:order-1 order-2">
                        <img src={AssetsImage2} className='lg:w-[700px] w-[600px] md:m-0 mx-auto' />
                    </div>
                    <div className="box md:order-2 order-1">
                        <h1 className='lg:text-5xl/tight text-3xl font-medium mb-7 -mt-16'>
                            <span className='font-bold text-purple-500 underline text-shadow transform hover:scale-110]
                        hover:text-slate-100 transition duration-300'>Services</span>
                        </h1>
                        <p className='text-base/loose'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit hic quia itaque.
                            Veritatis expedita, deleniti rerum odit dolore quod adipisci doloribus exercitationem
                            cupiditate minima quibusdam laborum dolorum facere voluptatem mollitia.</p>
                    </div>
                </div>

                {/* gallery */}
                <div className="gallery md:pt-36 pt-36" id="gallery">
                    <h1 className='lg:text-5xl/tight text-3xl text-center font-medium mb-3 -mt-5'>
                        <span className='font-bold text-purple-500 underline text-shadow transform hover:scale-110]
                        hover:text-slate-100 transition duration-300'>Gallery</span>
                    </h1>
                    <p className='text-center pt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed veniam in, sapiente eligendi veritatis unde consectetur dolor ratione perspiciatis neque magnam esse eum incidunt aliquid recusandae odit, pariatur iste at.</p>
                    <div className="gallery-box pt-10 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">

                        <div className="box bg-purple-400 rounded-xl shadow-[2px_2px_2px_2px_rgba(239,68,68,1)] transform hover:scale-105 hover:bg-red-500 hover:shadow-[2px_2px_2px_2px_rgba(168,85,247,1)]
                        hover:text-white transition duration-300 p-6">
                            <div className='mt-2 p-1'>
                                <i className="ri-number-1 text-3xl "></i>
                            </div>
                            <img src={AssestsImage8} alt="" className='w-full h-[300px] -mt-16 -mb-16 p-5' />
                            <h3 className='text-xl font-bold mt-6 mb-2'>Car Red</h3>
                            <p className='text-base/loose'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, totam distinctio ipsa reiciendis aliquam sequi ab doloremque, saepe neque illo quis velit numquam quisquam est quia perspiciatis nisi alias atque?</p>
                        </div>
                        <div className="box bg-purple-400 rounded-xl shadow-[2px_2px_2px_2px_rgba(239,68,68,1)] transform hover:scale-105 hover:bg-red-500 hover:shadow-[2px_2px_2px_2px_rgba(168,85,247,1)]
                        hover:text-white transition duration-300 p-6">
                            <div className='mt-2 p-1'>
                                <i className="ri-number-2 text-3xl "></i>
                            </div>
                            <img src={AssestsImage9} alt="" className='w-full h-[300px] -mt-16 -mb-16 p-5' />
                            <h3 className='text-xl font-bold mt-6 mb-2'>Car Blue</h3>
                            <p className='text-base/loose'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, totam distinctio ipsa reiciendis aliquam sequi ab doloremque, saepe neque illo quis velit numquam quisquam est quia perspiciatis nisi alias atque?</p>
                        </div>
                        <div className="box bg-purple-400 rounded-xl shadow-[2px_2px_2px_2px_rgba(239,68,68,1)] transform hover:scale-105 hover:bg-red-500 hover:shadow-[2px_2px_2px_2px_rgba(168,85,247,1)]
                        hover:text-white transition duration-300 p-6">
                            <div className='mt-2 p-1'>
                                <i className="ri-number-3 text-3xl "></i>
                            </div>
                            <img src={AssestsImage10} alt="" className='w-full h-[300px] -mt-16 -mb-16 p-5' />
                            <h3 className='text-xl font-bold mt-6 mb-2'>Car Grey</h3>
                            <p className='text-base/loose'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, totam distinctio ipsa reiciendis aliquam sequi ab doloremque, saepe neque illo quis velit numquam quisquam est quia perspiciatis nisi alias atque?</p>
                        </div>


                    </div>
                </div>

                {/* news */}
                <div className="news md:pt-36 pt-36" id="news">
                    <h1 className='lg:text-5xl/tight text-3xl text-center font-medium mb-3 -mt-5'>
                        <span className='font-bold text-purple-500 underline text-shadow transform hover:scale-110]
                        hover:text-slate-100 transition duration-300'>News</span>
                    </h1>
                    <p className='text-center pt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed veniam in, sapiente eligendi veritatis unde consectetur dolor ratione perspiciatis neque magnam esse eum incidunt aliquid recusandae odit, pariatur iste at.</p>
                    <div className="news-box pt-10 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                        <div className="box bg-purple-400 rounded-xl shadow-[2px_2px_2px_2px_rgba(239,68,68,1)] transform hover:scale-105 hover:bg-red-500 hover:shadow-[2px_2px_2px_2px_rgba(168,85,247,1)]
                        hover:text-white transition duration-300 p-20">
                            <img src={AssestsImage3} alt="" className='w-full h-[250px] -mt-9 p-5' />
                            <h3 className='text-xl font-bold mt-2 mb-2'>News 1</h3>
                            <p className='text-base/loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae velit recusandae ipsa inventore et. Amet pariatur aliquid iusto, cupiditate omnis fuga nostrum at accusamus atque beatae!</p>
                        </div>
                        <div className="box bg-purple-400 rounded-xl shadow-[2px_2px_2px_2px_rgba(239,68,68,1)] transform hover:scale-105 hover:bg-red-500 hover:shadow-[2px_2px_2px_2px_rgba(168,85,247,1)]
                        hover:text-white transition duration-300 p-20">
                            <img src={AssestsImage5} alt="" className='w-full h-[250px] -mt-9 p-5' />
                            <h3 className='text-xl font-bold mt-2 mb-2'>News 2</h3>
                            <p className='text-base/loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae velit recusandae ipsa inventore et. Amet pariatur aliquid iusto, cupiditate omnis fuga nostrum at accusamus atque beatae!</p>
                        </div>
                        <div className="box bg-purple-400 rounded-xl shadow-[2px_2px_2px_2px_rgba(239,68,68,1)] transform hover:scale-105 hover:bg-red-500 hover:shadow-[2px_2px_2px_2px_rgba(168,85,247,1)]
                        hover:text-white transition duration-300 p-20">
                            <img src={AssestsImage3} alt="" className='w-full h-[250px] -mt-9 p-5' />
                            <h3 className='text-xl font-bold mt-2 mb-2'>News 3</h3>
                            <p className='text-base/loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae velit recusandae ipsa inventore et. Amet pariatur aliquid iusto, cupiditate omnis fuga nostrum at accusamus atque beatae!</p>
                        </div>
                        <div className="box bg-purple-400 rounded-xl shadow-[2px_2px_2px_2px_rgba(239,68,68,1)] transform hover:scale-105 hover:bg-red-500 hover:shadow-[2px_2px_2px_2px_rgba(168,85,247,1)]
                        hover:text-white transition duration-300 p-20">
                            <img src={AssestsImage5} alt="" className='w-full h-[250px] -mt-9 p-5' />
                            <h3 className='text-xl font-bold mt-2 mb-2'>News 4</h3>
                            <p className='text-base/loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae velit recusandae ipsa inventore et. Amet pariatur aliquid iusto, cupiditate omnis fuga nostrum at accusamus atque beatae!</p>
                        </div>
                        <div className="box bg-purple-400 rounded-xl shadow-[2px_2px_2px_2px_rgba(239,68,68,1)] transform hover:scale-105 hover:bg-red-500 hover:shadow-[2px_2px_2px_2px_rgba(168,85,247,1)]
                        hover:text-white transition duration-300 p-20">
                            <img src={AssestsImage3} alt="" className='w-full h-[250px] -mt-9 p-5' />
                            <h3 className='text-xl font-bold mt-2 mb-2'>News 5</h3>
                            <p className='text-base/loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae velit recusandae ipsa inventore et. Amet pariatur aliquid iusto, cupiditate omnis fuga nostrum at accusamus atque beatae!</p>
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HomePage;