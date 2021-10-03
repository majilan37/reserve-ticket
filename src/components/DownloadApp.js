function DownloadApp() {
    return (
        <div className="bg-green-700 flex justify-around items-center px-8 py-10 my-10">
            <div className='hidden md:block bg-white w-[350px] border-4 rounded-xl shadow-2xl h-[575px] overflow-hidden'>
                <img className='object-contain w-full h-auto ' src="images/phoneGraphics.png" alt="" />
            </div>
            <div className='flex flex-col items-end space-y-6' >
                <h2 className='text-6xl mx-4 text-center font-semibold lg:text-right max-w-[700px] float-right text-white'>حمل التطبيق الآن</h2>
                <h5 className='text-3xl mx-4 text-center font-semibold lg:text-right max-w-[700px] float-right text-white'>و أحصل على أفضل العروض و الخصومات</h5>
                <div className="relative items-center justify-center flex flex-wrap" >
                    <img className="object-cover cursor-pointer mx-2 h-20" src="https://bit.ly/3orYObr" alt="" />
                    <img className="object-cover cursor-pointer mx-2 h-[55px] " src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1200px-Google_Play_Store_badge_EN.svg.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default DownloadApp
