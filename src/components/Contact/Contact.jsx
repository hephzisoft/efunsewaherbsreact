import { fa0 } from "@fortawesome/free-solid-svg-icons";
import { contact, socialMedia } from "../../constants";
import Button from "../Button";
import ContactCard from "./ContactCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faSquareFacebook,
  faThreads,
  faTiktok,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="md:flex sm:block  lg:mx-7 sm:mx-0 mt-16 ">
      <div className="border-r sm:ps-0 md:ps-[3rem] sm:text-center md:text-left sm:w-full md:w-[50%] ">
        <h1 className="font-unna sm:text-4xl md:text-6xl mb-5">Get In Touch</h1>
        <p className="font-dmsans sm:w-full md:w-[30rem] ">
          Sit vulputate faucibus eget eget scelerisque faucibus malesuada nullam
          mollis ut montes, dui scelerisque ornare.
        </p>
        <div className="mt-[4rem]">
          {contact.map((item) => {
            return (
              <ContactCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                desc={item.desc}
              />
            );
          })}
        </div>
        <div className="mt-10 border-t sm:border-b md:border-b-0 pt-5 sm:items-center  lg:items-start  sm:w-full md:w-[20rem]">
          <p className="font-unna text-xl tracking-wider">FOLLOW US</p>
          <div className="sm:justify-around sm:px-10 md:px-0 sm:my-5 sm:flex">
            {socialMedia.map((media) => {
              var icon = fa0;
              switch (media) {
                case "facebook":
                  icon = faSquareFacebook;
                  break;
                case "instagram":
                  icon = faInstagram;
                  break;
                case "twitter":
                  icon = faXTwitter;
                  break;
                case "youtube":
                  icon = faYoutube;
                  break;
                case "tiktok":
                  icon = faTiktok;
                  break;
                case "thread":
                  icon = faThreads;
                  break;
              }
              return (
                <button key={media}>
                  <FontAwesomeIcon
                    icon={icon}
                    size="xl"
                    width={30}
                    className="text-black"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div className="sm:w-full md:w-[50%] sm:ps-0 sm:pe-0 md:ps-[1.4rem] md:pe-[1rem]">
        <h5 className="font-unna text-3xl mb-4 sm:text-center">Drop us a line or two</h5>
        <form action="" className="">
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 font-dmsans"
              htmlFor="name"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <input
              className="border border-gray-300 p-2 w-full rounded"
              type="text"
              id="name"
              name="name"
              placeholder="Full Name"
              required
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 font-dmsans"
              htmlFor="email"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              className="border border-gray-300 p-2 w-full rounded"
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              required
            />
          </div>

          <div className="mb-3">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 font-dmsans"
              htmlFor="message"
            >
              Comment or Message <span className="text-red-500">*</span>
            </label>
            <textarea
              className="border border-gray-300 p-2 w-full rounded"
              id="message"
              name="message"
              rows="4"
              placeholder="Your message here..."
              required
            ></textarea>
          </div>

          <Button color="white" bgColor="primary" text="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
