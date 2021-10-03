
import { Button } from '@mui/material'
import Widget from './Widget'

function SecondMain() {
    return (
        <div className="my-4 py-4" >
            <h2 className="text-3xl text-center my-4 font-semibold text-green-600">إختر مكان الإقامة الذي يناسبك</h2>
            <div className="flex justify-around lg:justify-between items-center mt-10 flex-wrap" >
                <Widget img='https://bit.ly/3l4cPKq' text='أماكن فريدة للإقامة'  />
                <Widget img='https://bit.ly/3mfTCVD' text='حيوانات أليفة مسموحة '  />
                <Widget img='https://bit.ly/3uzgTFx' text='بيوت وسط الطبيعة'  />
            </div>
            <div className='relative my-14 h-[480px] px-6' >
                <div className='relative flex h-full w-full' >
                    <img className="h-full w-full flex-grow object-cover rounded-3xl filter brightness-75 shadow-lg" src="https://images.pexels.com/photos/633276/pexels-photo-633276.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                </div>
                <div data-aos="fade-right" className="absolute right-10 lg:right-20 top-[40%] space-y-4 flex flex-col justify-end" >
                    <h2 className="text-4xl font-semibold text-white w-[400px] text-right lg:w-full" >إكتشف العالم و لا تأكل هم الحجز</h2>
                    <h5 className="text-right text-sm text-gray-50 w-[360px] xl:w-[500px] mr-4" >
                        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص ذا النص
                        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص ذا النص
                    </h5>
                    <Button 
                        style={{ 
                            backgroundColor: 'orange', padding: '.7rem 1.8rem', color: 'white', borderRadius: '9999px' , alignSelf: 'flex-end', fontSize: '18px'
                        }}
                    >
                         إكتشف
                    </Button >
                </div>
            </div>
        </div>
    )
}

export default SecondMain
