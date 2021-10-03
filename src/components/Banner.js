import BannerTabs from "./BannerTabs"


function Banner() {

    return (
        <div  className="relative h-[65vh] lg:h-auto bg-[#E2EFF8]" >
            <div className="flex items-center justify-evenly" >
                <div  className="hidden lg:flex max-w-[600px]  2xl:w-[500px] px-6 items-center justify-around">
                    <img className='object-contain h-full w-full' src="images/banner-img.PNG" alt="" />
                </div>
                <h2 data-aos='fade-left' className='text-6xl lg:text-8xl px-6 my-10 text-center font-semibold lg:text-right max-w-[700px] float-right text-green-600' >
                    أعثر على أفضل الأماكن للحجز 
                </h2>
            </div>
            <div data-aos='fade-up' className='bg-red-400 items-end flex flex-col p-6 z-50 mt-14 lg:mb-12 lg:mt-[-160px] bg-[rgba(255,255,255,.5)] backdrop-blur-sm rounded-2xl max-w-[80%] mx-auto shadow-md' >
                <BannerTabs />
            </div>
        </div>
    )
}

export default Banner
