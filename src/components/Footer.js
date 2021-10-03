import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material"

function Footer() {
    return (
        <footer className="relative flex flex-col-reverse md:flex-row justify-around flex-wrap items-center bg-green-700 py-14 px-4">
             <div className="flex text-white m-6 space-x-4" >
                 <LinkedIn />
                 <Instagram />
                 <Twitter />
                 <Facebook />
             </div>
            <div className="flex items-center m-6 space-x-3 text-white" >
                <span>إتصل بنا</span>
                <span>الوكلاء</span>
                <span>سياسة الخصوصية</span>
            </div>
            <div className="text-white m-6" >
                <a className="text-3xl" href="/">
                    Takeit Easy
                </a>                  
            </div>
            <p className='text-sm absolute bottom-5 right-5 text-white' >جميع الحقوق محفوظة</p>
        </footer>
    )
}

export default Footer
