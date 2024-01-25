import { hero3 } from "../../assets/images";
import { products, services } from "../../constants";
import Button from "../Button";
import Card from "../Card";
import Service from "../Service";


const Home = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero section */}
      <div className="bg-hero bg-cover h-[100vh] items-center flex text-center justify-center bg-center w-full bg-red">
        <div className="block">
          <h3 className="text-white md:text-2xl text-xl font-unna mb-5 max-md:mt-6 tracking-wide">
            WELCOME TO EFUNSEWA HERBS
          </h3>
          <p className="text-white text-center md:text-7xl text-4xl font-unna tracking-wide">
            Let’s Bring the Spring to <br /> Your Home
          </p>
          <Button text="Shop Now" color="black" bgColor="white" />
        </div>
      </div>

      {/* New Plant section */}
      <div className="lg:px-[10rem] md:px-[2rem] mt-8 ">
        <div className="heading ms:block md:flex text-center items-center justify-between">
          <h3 className="font-unna text-xl mt-6">New Products</h3>
          <Button text="Shop Now" color="white" bgColor="primary" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 text-center sm:place-items-center  lg:grid-cols-3 gap-10 mt-10">
          {products.map((prod) => {
            return (
              <Card
                key={prod.name}
                imgUrl={prod.imgUrl}
                name={prod.name}
                description={prod.description}
                price={prod.price}
              />
            );
          })}
        </div>
      </div>

      {/* our story */}
      <div className="lg:flex mt-[10rem] sm:block w-full mb-10  items-center">
        <div className="w-[50%}">
          <img
            src={hero3}
            alt="our story image"
            width={800}
            height={900}
          />
        </div>
        <div className="lg:w-[50%] sm:w-[100%] lg:ms-[4rem] max-lg:px-5 sm:mt-2">
          <h3 className="font-unna text-xl font-light">OUR STORY</h3>
          <p className="font-unna text-3xl mt-3">For People Who Love Products</p>
          <div className="font-dmsans w-[70%] sm:w-[100%] mt-4">
            <p>
              Vivamus quam sociis tristique diam at donec nisl, hendrerit leo
              nunc at velit lacinia porttitor a nulla tellus ultrices varius
              aliquet sed in placerat.
            </p>

            <p className="mt-4">
              Facilisis eu faucibus diam cursus pulvinar consectetur purus sem
              felis, mauris consectetur nisl vitae gravida ultricies sem
              condimentum aliquet ut sed gravida amet vitae euismod pulvinar
              volutpat laoreet pharetra.
            </p>
          </div>
          <Button bgColor="primary" color="white" text="Read More" />
         
        </div>
      </div>

      {/* Testimonials */}

      {/* Our Services */}
      <div className=" justify-around sm:block md:flex mt-[10rem] sm:px-6">
        {services.map((service)=> {
          return <Service key={service.title} icon={service.icon} title={service.title} desc={service.desc}/>
        })}
      </div>
    </div>
  );
}

export default Home