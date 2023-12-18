import { Link, useLocation } from "react-router-dom"
import { navLinks } from "../constants"
import { useState } from "react"
import hamburger from '../assets/icons/hamburger.svg'

const Nav = () => {
  const location  =  useLocation()
  const [navItem] = useState(navLinks);
   return (
     <header>
       <nav className="flex padding-x sm:pt-10 items-center absolute z-10 w-full">
         <Link to="/">
           <h3 className="font-bold text-3xl font-primary text-white ms-6 font-courgette">
             Efunsewa <span className="text-primary">Herbs</span>
           </h3>
         </Link>

         <ul className="flex-1 flex gap-16 items-center max-lg:hidden justify-center text-white font-roboto">
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

         <div className="hidden max-lg:block justify-end">
           <img src={hamburger} alt="" width={24} height={24} />
         </div>
       </nav>
     </header>
   );
}

export default Nav