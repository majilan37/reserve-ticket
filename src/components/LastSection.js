import { Rating } from '@mui/material';
import {useState} from 'react'

function LastSection() {
    const [value, setValue] = useState(4);
    return (
        <main>
            <div className="flex flex-col my-12 mx-auto">
                <div className="flex flex-col items-center">
                    <h2 className="text-3xl text-center my-4 mb-6 font-semibold text-green-600">عملائنا قالوا عنا </h2>
                <div data-aos="fade-right" className="flex flex-col-reverse lg:flex-row items-center my-8 mx-6" >
                        <div className='px-6 flex flex-col items-end'>
                            <h4 className="text-lg mx-4 text-right">
                                عبيدة أمين                            
                                <span className="text-gray-600 mx-4 text-sm" >
                                    , سوريا - دمشق
                                </span>
                            </h4>
                            <p className='text-lg md:text-2xl text-green-700 max-w-md text-right my-6 mx-4' >
                                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص ذا النص
                                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص ذا النص
                            </p>
                            <Rating
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                            />
                        </div>
                        <div className="relative h-96 w-64 m-6">
                            <img className="object-cover h-full w-full rounded-full" src="https://bit.ly/3zYOUAt" alt="" />
                        </div>
                </div>
                </div>
                <div>
                    <h2 className="text-3xl text-center my-4 mb-6 font-semibold text-green-600">عملائنا قالوا عنا </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center" >
                        <img className="h-12 m-6 object-contain" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Trivago.svg/2560px-Trivago.svg.png" alt="" />
                        <img className="h-24  m-6 object-contain" src="https://index.impakter.com/wp-content/uploads/2021/03/Emirates.png" alt="" />
                        <img className="h-12  m-6 object-contain" src="https://bit.ly/3A3qztk" alt="" />
                        <img className="h-16  m-6 object-contain" src="https://bit.ly/3irqSrP" alt="" />
                        <img className="h-20 m-6 object-contain" src="https://bit.ly/2Y59IJb" alt="" />
                        <img className="h-14 m-6 object-contain" src="https://bit.ly/3A426E9" alt="" />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default LastSection
