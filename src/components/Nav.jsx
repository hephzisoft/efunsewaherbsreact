import { Link, useLocation } from "react-router-dom"
import { navLinks } from "../constants"
import { useState } from "react"
import hamburger from '../assets/icons/hamburger.svg'

const Nav = () => {
  const location = useLocation();
  const [navItem] = useState(navLinks);
  const [isOpen , setIsOpen]=  useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
   return (
     <header>
       <nav className="flex padding-x items-center absolute z-10 w-full max-lg:mt-10 max-lg:justify-between ">
         <Link to="/">
           <h3 className="font-bold text-3xl font-primary text-white  font-courgette">
             Efunsewa <span className="text-primary">Herbs</span>
           </h3>
         </Link>

         <ul className="flex-1 flex gap-10 items-center max-lg:hidden justify-center text-white font-roboto">
           {navItem.map((link) => (
             <li key={link.href}>
               <Link
                 to={link.href}
                 className={`cursor-pointer text-xl font-courgette tracking-wide ${
                   location.pathname === link.href
                     ? "underline hover:no-underline"
                     : ""
                 } hover:underline active:underline`}
               >
                 {link.label}
               </Link>
             </li>
           ))}
         </ul>

         <div className="hidden max-lg:block justify-end text-center ">
           <button onClick={toggleMenu}>
             {" "}
             {isOpen ? (
               <svg
                 className="w-6 h-6"
                 fill="none"
                 stroke="#ffffff"
                 viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg"
               >
                 <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth="2"
                   d="M6 18L18 6M6 6l12 12"
                 ></path>
               </svg>
             ) : (
               <img src={hamburger} alt="" width={25} height={25} />
             )}{" "}
           </button>
         </div>
       </nav>

       {isOpen && (
         <div className="mobile-menu transition duration-300 ease-in max-lg:block fixed  h-[90vh] bg-slate-800 w-full z-20 top-[6rem]">
           <ul className="justify-center items-center flex-col flex">
             {navItem.map((link) => (
               <li key={link.href} className="gap-x-10 py-10">
                 <Link
                   to={link.href}
                   className="cursor-pointer text-xl font-courgette tracking-wide text-white"
                 >
                   {link.label}
                 </Link>
               </li>
             ))}
           </ul>
         </div>
       )}
     </header>
   );
}

export default Nav