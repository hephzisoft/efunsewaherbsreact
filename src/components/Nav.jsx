import { Link, useLocation  } from "react-router-dom"
import { navLinks } from "../constants"
import { useState } from "react"
import hamburger from '../assets/icons/hamburger.svg'

const Nav = () => {
  const location = useLocation();
  let pathName  =  location.pathname;
  const [navItem] = useState(navLinks);
  const [isOpen , setIsOpen]=  useState(false); 
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
   return (
     <header>
       <nav className={`flex padding-x mt-8 flex-row items-center ${pathName === '/' && 'absolute'} font-dmsans w-full max-lg:mt-10 max-lg:justify-between ${pathName !== '/' && 'border-b-2 pb-4'} `}>
         <Link to="/">
           <h3 className="font-bold text-3xl font-primary text-black">
             Efunsewa <span className="text-primary">Herbs</span>
           </h3>
         </Link>

         <ul className="flex-1 flex gap-8 items-center max-lg:hidden justify-end ">
           {navItem.map((link) => (
             <li key={link.href}>
               <Link
                 to={link.href}
                 className={`cursor-pointer text-xl text-black tracking-wide `}
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
                 stroke="#000000"
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
         <div className={`mobile-menu transition duration-300 ease-in max-lg:block fixed  h-[200px] bg-white ${pathName !== '/' && 'bg-card'} w-full z-20 top-[6rem]`}>
           <ul className="justify-center items-center flex-col flex">
             {navItem.map((link) => (
               <li key={link.href} className="gap-4 py-3">
                 <Link
                   to={link.href}
                   className="cursor-pointer font-dmsans text-lg tracking-wide text-black"
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