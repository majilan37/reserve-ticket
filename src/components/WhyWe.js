import {LocalOffer, AddLocationAlt, Lock, CheckBox} from '@mui/icons-material'
import WhyWeCard from './WhyWeCard'

function WhyWe() {
    return (
        <div className="flex-grow">
            <h2 className="text-3xl text-center my-4 font-semibold text-green-600">لماذا نحن ؟</h2>
            <div className="py-8 px-4 flex justify-around flex-wrap lg:flex-nowrap">
               <WhyWeCard Icon={CheckBox} title='حجز سهل' />
               <WhyWeCard Icon={Lock} title='معلوماتك آمنة' />
               <WhyWeCard Icon={AddLocationAlt} title='أفضل الأماكن' />
               <WhyWeCard Icon={LocalOffer} title='أفضل سعر' />
            </div>
        </div>
    )
}

export default WhyWe
