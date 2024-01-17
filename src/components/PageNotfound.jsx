import { error404 } from "../assets/icons"


const PageNotfound = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <div className="block">
        <img src={error404} alt="" />

        <h1 className="font-unna text-4xl">Sorry, this page does not available.</h1>
      </div>
    </div>
  );
}

export default PageNotfound