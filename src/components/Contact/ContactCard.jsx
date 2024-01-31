import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ContactCard = ({icon, title, desc}) => {
  if(icon === 'location-dot'){
    icon = faLocationDot
  } 
  if(icon === 'phone'){
    icon = faPhone
  }
  if(icon === 'envelope'){
    icon = faEnvelope
  }
  return (
    <div className='md:flex items-center mt-10 sm:block'>
      <div >
      <FontAwesomeIcon icon={icon} className='text-xl text-primary'/>
      </div>
      <div className='ms-5'>
        <p className='font-unna tracking-wider text-xl'>{title}</p>
        <p className='font-dmsans font-semibold text-[#4D4F48] tracking-wider'>{desc}</p>
      </div>

    </div>
  )
}

export default ContactCard