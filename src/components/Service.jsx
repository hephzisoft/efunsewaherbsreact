import { faLock, faBox, faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const Service = ({icon, title, desc}) => {
  var newIcon = faBox;

if(icon === "faLock"){
newIcon= faLock;
}else if(icon === "faBox"){
  newIcon= faBox;
}else if(icon === "faHandHoldingHeart"){
newIcon= faHandHoldingHeart;
}
  return (
    <div className="flex sm:mb-4">
    <FontAwesomeIcon icon={newIcon} className="bg-primary text-white rounded-full p-5 mr-4"/>
       <div className="block">
       <p className="font-unna text-xl">{title}</p>
        <p className="font-dmsans text-sm">{desc}</p>
       </div>
    </div>
  )
}

export default Service