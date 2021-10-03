function WhyWeCard({Icon, title}) {
    return (
        <div className="max-w-xs px-4 m-4">
            <div className="flex flex-col items-end" >
                <Icon className="text-gray-500" style={{fontSize:'40px' }} />
                <h4 className="font-semibold text-lg">{title}</h4>
            </div>
            <p className="text-right text-sm text-gray-500" >
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص ذا النص
            </p>
        </div>
    )
}

export default WhyWeCard
