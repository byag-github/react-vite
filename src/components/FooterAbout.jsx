
const FooterAbout = () => {
    return (
        <div className="z-40 footer bg-red-400 shadow mt-20" id="social">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                <div className="py-8">
                    <p className="flex justify-between items-center lg:ml-9 ml-0 px-3 py-1 text-black bg-transparent rounded shadow-[0px_0px_0px_3.5px_rgba(126,34,206,1)] transform hover:scale-105 hover:bg-purple-500 hover:shadow-[2px_2px_2px_2px_rgba(0,0,0,1)] hover:text-red-900 transition duration-300">
                        <span className="text-2xl font-bold">&copy;</span> &nbsp; <span>BYAG / yusufahmadghiffari</span>
                    </p>
                </div>
                <div className="z-40 social-footer flex items-center gap-5 md:mt-0 -mt-2 md:mb-0 mb-5 lg:mr-9 mr-0">
                    <i className="ri-facebook-box-fill text-blue-600 text-3xl"></i>
                    <i className="ri-instagram-line text-rose-700 text-3xl"></i>
                    <i className="ri-linkedin-fill text-sky-600 text-3xl"></i>
                    <i className="ri-twitter-x-fill text-slate-200 text-2xl"></i>
                    <i className="ri-youtube-fill text-red-600 text-3xl"></i>
                </div>
            </div>
        </div>
    )
}

export default FooterAbout;