import { features } from "../../constants";

const HomeFeatures = () => {
  return (
    <div className="padding-x grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 p-10 mb-10 place-items-center w-full ">
      {features.map((fs, index) => (
        <div
          key={fs.title}
          className={`w-full p-6 items-center flex flex-col h-[16rem]  
          ${index < 5 && "sm:border-b"}
          ${(index + 1) % 2 !== 0 && "md:border-r"} 
          ${index < 4 && "md:border-b"}
          ${(index + 1) % 3 !== 0 && "lg:border-r"} 
          ${index < 3 && "lg:border-b"}
        `}
        >
          <img
            src={fs.imgUrl}
            alt={`${fs.title} image`}
            width={80}
            height={80}
          />
          <h2 className="font-roboto font-[500] font-3xl mt-2 ">{fs.title}</h2>
          <p className="flex-wrap text-center mt-4">{fs.note}</p>
        </div>
      ))}
    </div>
  );
};

export default HomeFeatures;
