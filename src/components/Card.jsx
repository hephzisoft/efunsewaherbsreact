export default function Card({imgUrl, name, description, price}) {
    return (
    
    <div className="">

        <div className="bg-card justify-center items-center flex w-[20rem] h-[26rem]">
                <img src={imgUrl} alt="" className="mt-10" width={100}/>
        </div>
        <h3 className="font-unna mt-4 text-xl">{name}</h3>
        <p className="font-dmsans">{description}</p>
        <p className="font-dmsans">{`₦${price}`}</p>
    </div>
    )
}