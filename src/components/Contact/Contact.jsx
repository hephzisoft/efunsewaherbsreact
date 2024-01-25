import { contact } from "../../constants";
import ContactCard from "./ContactCard";

const Contact = () => {
  return (
    <div className="flex mx-7 mt-16">
      <div className="border-r-2 ms-[3rem] w-[40%] ">
        <h1 className="font-unna text-6xl">Get In Touch</h1>
        <p className="font-dmsans w-[30rem] ">
          Sit vulputate faucibus eget eget scelerisque faucibus malesuada nullam
          mollis ut montes, dui scelerisque ornare.
        </p>
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
        <div></div>
      </div>
      <div>
        <h5 className="font-unna">Drop us a line or two</h5>
       <form action="">
       <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
      <input
        className="border border-gray-300 p-2 w-full rounded"
        type="text"
        id="name"
        name="name"
        placeholder="John Doe"
        required
      />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
      <input
        className="border border-gray-300 p-2 w-full rounded"
        type="email"
        id="email"
        name="email"
        placeholder="john@example.com"
        required
      />
       
    </div>

    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
      <textarea
        className="border border-gray-300 p-2 w-full rounded"
        id="message"
        name="message"
        rows="4"
        placeholder="Your message here..."
        required
      ></textarea>
    </div>
       </form>
      </div>
    </div>
  );
};

export default Contact;
