import { features } from "../../constants"

const HomeFeatures = () => {
    return (
        <div className="padding-x grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 p-10 mb-10 place-items-center w-full ">
       

             {features.map((fs,index)=>(
            
                <div key={fs.title} className={` w-full max-md:${index===5 ?'': 'border-b'} lg:${index !== 2 && index !== 5? 'border-r':''} lg:${index === 0 ? 'border-r' : ''} lg:${index <3   ?' border-b-2' :''} max-lg:${index > 3 ? '': 'border-b'} max-lg:${index ===1 || index===3 || index === 5 ? 'border-l': ''}  p-6 items-center flex flex-col h-[16rem]`}>

                    <img src={fs.imgUrl} alt={`${fs.title} image`} width={80} height={80} />
                    <h2 className="font-roboto font-[500] font-3xl mt-2 ">{fs.title}</h2>
                    <p className="flex-wrap text-center mt-4">{fs.note}</p>
                </div>
             ))}
        </div>
    )
}

export default HomeFeatures