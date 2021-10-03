import { ArrowBack } from "@mui/icons-material"

function Widget({img, text}) {
    return (
        <div className="relative p-2 m-6 h-80 w-96" >
            <div className="relative h-full w-full" >
                <img className="h-full w-full object-cover rounded-3xl  shadow-lg" src={img} alt="" />
            </div>
            <div className="absolute flex justify-between items-center bottom-3 cursor-pointer left-1 right-1 mx-2 rounded-3xl p-4 bg-gray-50" >
                <ArrowBack />
                <p className="text-sm text-gray-900" >{text}</p>
            </div>
        </div>
    )
}

export default Widget
