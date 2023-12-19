import { features } from "../../constants"

const HomeFeatures = () => {
    return (
        <div className="padding-x grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 p-10 mb-10 place-items-center w-full ">
            {/* <div className="border-b border-r w-full">Cell 1</div>
             <div className="border-b w-full">Cell 2</div> 
            <div className="border-b  w-full border-l">Cell 3</div>
             <div className="border-r w-full ">Cell 4</div> 
             <div className="border-r w-full">Cell 5</div>
             <div  className="w-full">Cell 6</div> */}

             {features.map((fs,index)=>(
            
                <div key={fs.title} className={` w-full ${index !== 2 && index !== 5? 'border-r':''} ${index === 0 ? 'border-r' : ''} ${index <3   ?' border-b' :''} p-6 items-center flex flex-col h-[16rem]`}>

                    <img src={fs.imgUrl} alt={`${fs.title} image`} width={80} height={80} />
                    <h2 className="font-roboto font-[500] font-3xl mt-2 ">{fs.title}</h2>
                    <p className="flex-wrap text-center mt-4">{fs.note}</p>
                </div>
             ))}
        </div>
    )
}

export default HomeFeatures