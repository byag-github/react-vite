import { useEffect, useState } from "react";

// icon start
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

function AboutIcon(props) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={100} height={100} viewBox="0 0 48 48" {...props}><path fill="#e8eaf6" d="M37 40H11l-6 6V12c0-3.3 2.7-6 6-6h26c3.3 0 6 2.7 6 6v22c0 3.3-2.7 6-6 6"></path><g fill="black"><path d="M22 20h4v11h-4z"></path><circle cx={24} cy={15} r={2}></circle></g></svg>);
}

function GalleryIcon(props) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={100} height={100} viewBox="0 0 32 32" {...props}><path fill="#e8eaf6" d="M30 5.851v20.298H2V5.851z"></path><path fill="black" d="M24.232 8.541a2.2 2.2 0 1 0 1.127.623a2.2 2.2 0 0 0-1.127-.623M18.111 20.1q-2.724-3.788-5.45-7.575L4.579 23.766h10.9q1.316-1.832 2.634-3.663M22.057 16q-2.793 3.882-5.584 7.765h11.169Q24.851 19.882 22.057 16"></path></svg>);
};

function ServiceIcon(props) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={100} height={100} viewBox="0 0 48 48" {...props}><path fill="#e8eaf6" d="M25.6 34.4c.1-.4.1-.9.1-1.4s0-.9-.1-1.4l2.8-2c.3-.2.4-.6.2-.9l-2.7-4.6c-.2-.3-.5-.4-.8-.3L22 25.3c-.7-.6-1.5-1-2.4-1.4l-.3-3.4c0-.3-.3-.6-.6-.6h-5.3c-.3 0-.6.3-.6.6l-.4 3.5c-.9.3-1.6.8-2.4 1.4L6.9 24c-.3-.1-.7 0-.8.3l-2.7 4.6c-.2.3-.1.7.2.9l2.8 2c-.1.4-.1.9-.1 1.4s0 .9.1 1.4l-2.8 2c-.3.2-.4.6-.2.9l2.7 4.6c.2.3.5.4.8.3L10 41c.7.6 1.5 1 2.4 1.4l.3 3.4c0 .3.3.6.6.6h5.3c.3 0 .6-.3.6-.6l.3-3.4c.9-.3 1.6-.8 2.4-1.4l3.1 1.4c.3.1.7 0 .8-.3l2.7-4.6c.2-.3.1-.7-.2-.9zM16 38c-2.8 0-5-2.2-5-5s2.2-5 5-5s5 2.2 5 5s-2.2 5-5 5"></path><path fill="black" d="M41.9 15.3c.1-.5.1-.9.1-1.3s0-.8-.1-1.3l2.5-1.8c.3-.2.3-.5.2-.8l-2.5-4.3c-.2-.3-.5-.4-.8-.2l-2.9 1.3c-.7-.5-1.4-.9-2.2-1.3l-.3-3.1c.1-.3-.1-.5-.4-.5h-4.9c-.3 0-.6.2-.6.5l-.3 3.1c-.8.3-1.5.7-2.2 1.3l-2.9-1.3c-.3-.1-.6 0-.8.2l-2.5 4.3c-.2.3-.1.6.2.8l2.5 1.8V14c0 .4 0 .8.1 1.3l-2.5 1.8c-.3.2-.3.5-.2.8l2.5 4.3c.2.3.5.4.8.2l2.9-1.3c.7.5 1.4.9 2.2 1.3l.3 3.1c0 .3.3.5.6.5h4.9c.3 0 .6-.2.6-.5l.3-3.1c.8-.3 1.5-.7 2.2-1.3l2.9 1.3c.3.1.6 0 .8-.2l2.5-4.3c.2-.3.1-.6-.2-.8zM33 19c-2.8 0-5-2.2-5-5s2.2-5 5-5s5 2.2 5 5s-2.2 5-5 5"></path></svg>);
};

function NewsIcon(props) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={100} height={100} viewBox="0 0 512 512" {...props}><path fill="#bdbdbd" d="M223.308 219.461H25.22v253.083l.066.005c.956 15.068 13.474 26.996 28.783 26.996c13.906 0 25.511-9.839 28.24-22.935l140.999 10.039z"></path><path fill="#e8eaf6" d="M474.925 91.014h-1.366l-49.6-42.842v23.241l.011 19.601h-5.511l-13.962-48.905V20.448a8.655 8.655 0 0 0-8.655-8.655H82.765l.172 458.903l-.019.019c-.01 15.924-12.922 28.83-28.848 28.83h400.66c15.933 0 28.849-12.916 28.849-28.849V99.669a8.655 8.655 0 0 0-8.654-8.655"></path><path fill="#bdbdbd" d="M431.531 200.87H134.358v-8.655h297.173zm0 256.587H134.358v8.655h297.173zM177.632 53.691h-43.273v8.655h43.273z"></path><path fill="black" d="M290.716 297.353H134.358v-17.309h156.358zm.059 25.964H134.417v17.309h156.358zm0 43.273H134.417v17.309h156.358zm0 43.273H134.417v17.309h156.358zm140.816 0H316.74v17.309h114.851z"></path><path fill="black" d="M376.688 91.616v35.219h-.061c-.313 4.494-4.019 8.054-8.593 8.054h-225.02c-4.573 0-8.28-3.56-8.594-8.054h-.061V91.616a8.655 8.655 0 0 1 8.655-8.655h225.021a8.653 8.653 0 0 1 8.653 8.655M142.81 254.08h139.515a8.45 8.45 0 0 0 8.451-8.451v-17.716a8.45 8.45 0 0 0-8.451-8.451H142.81a8.45 8.45 0 0 0-8.451 8.451v17.716a8.45 8.45 0 0 0 8.451 8.451m288.781-25.966a8.654 8.654 0 0 0-8.654-8.652l-.014.001l-.001-.001h-97.549l-.001.001a8.654 8.654 0 0 0-8.631 8.651v147.131a8.653 8.653 0 0 0 8.631 8.653l.001.001h97.549l.001-.001l.014.001a8.655 8.655 0 0 0 8.655-8.655z"></path><path fill="black" d="M482.646 95.787h-80.199V14.971l78.464 78.463z"></path></svg>);
}
// icon end

const Navbar = () => {
    const [tampil, setTampil] = useState(false);
    const [scroll, setScroll] = useState(false);

    const handleClick = () => {
        setTampil(!tampil);
    };

    let menuActive = tampil ? "-left-4" : "-left-full";

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 5) {
                setScroll(true);
                setTampil(false);
            } else {
                setScroll(false);
            }
        });
    });

    let scrollActive = scroll ? "py-6 bg-red-400 shadow-purple-500" : "py-4";
    let scrollActive2 = scroll ? "text-black" : "md:text-purple-900";
    let scrollActive3 = scroll ? "hover:text-white" : "hover:text-red-500";

    return (
        <div className={`z-50 navbar fixed w-full ${scrollActive} transition-all border-b-2 border-b-black`}>
            <div className="container px-5 mx-auto">
                <div className="navbar-box flex items-center justify-between">

                    {/* car logo start */}
                    <div className="logo">
                        <div className="car-road">
                            <div className="car">
                                <div className="car-top">
                                    <div className="window">
                                    </div>
                                </div>
                                <div className="car-base">
                                </div>
                                <div className="wheel-left wheel">
                                    <div className="wheel-spike">
                                    </div>
                                    <div className="wheel-center">
                                    </div>
                                </div>
                                <div className="wheel-right wheel">
                                    <div className="wheel-spike">
                                    </div>
                                    <div className="wheel-center">
                                    </div>
                                </div>
                                <div className="head-light"></div>
                            </div>
                            <div className="road">
                            </div>
                        </div>
                    </div>
                    {/* car logo end */}

                    {/* ul li */}
                    <ul className={`flex lg:gap-12 md:static md:flex-row md:shadow-none md:bg-transparent 
                    md:w-auto md:h-full md:translate-y-0 ${scrollActive2} md:p-0 md:m-0 gap-5 fixed 
                    ${menuActive} top-1/2 -translate-y-1/2 flex-col px-8 py-6 rounded-xl 
                    bg-red-400 shadow-[2px_2px_2px_2px_rgba(147,51,234,1)] font-bold text-black transition-all`}>

                        <li className={`flex ml-3 items-center gap-2 transform hover:scale-125 ${scrollActive3} transition duration-100`}>
                            <HomeIcon width={30} height={30} className="md:hidden block -mt-1" />
                            <a href="#jumbotron" className="font-medium">Home</a>
                        </li>
                        <li className={`flex ml-3 items-center gap-2 transform hover:scale-125 ${scrollActive3} transition duration-100`}>
                            <AboutIcon width={30} height={30} className="md:hidden block" />
                            <a href="#jumbotron" className="font-medium">About</a>
                        </li >
                        <li className={`flex ml-3 items-center gap-2 transform hover:scale-125 ${scrollActive3} transition duration-100`}>
                            <ServiceIcon width={30} height={30} className="md:hidden block" />
                            <a href="#services" className="font-medium">Services</a>
                        </li>
                        <li className={`flex ml-3 items-center gap-2 transform hover:scale-125 ${scrollActive3} transition duration-100`}>
                            <GalleryIcon width={30} height={30} className="md:hidden block" />
                            <a href="#gallery" className="font-medium">Gallery</a>
                        </li>
                        <li className={`flex ml-3 items-center gap-2 transform hover:scale-125 ${scrollActive3} transition duration-100`}>
                            <NewsIcon width={30} height={30} className="md:hidden block" />
                            <a href="#news" className="font-medium">News</a>
                        </li>
                    </ul>

                    {/* sosmed */}
                    <div className="social flex items-center gap-4 lg:text-base md:text-sm text-xs">
                        <a href="#social" className="px-5 py-2 font-bold text-white bg-black rounded-full shadow-[0px_0px_0px_3.5px_rgba(126,34,206,1)] transform hover:scale-105 hover:bg-purple-500 hover:shadow-[2px_2px_2px_2px_rgba(0,0,0,1)]
                        hover:text-red-900 transition duration-300">
                            Connect With US!
                        </a>
                        <i className="ri-menu-3-line text-3xl md:hidden block" onClick={handleClick}></i>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Navbar;