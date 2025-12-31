import React from "react";
import { Person } from "../lib/strukturData";

interface PersonCardProps {
    person : Person;
}

const PersonCard: React.FC<PersonCardProps> = ({ person }) => {
    return(
        <div className="bg-[#FFFFFF] rounded-[10px] border  border-[#D6D6D6] p-6 text-center ">
            <div className="w-[56px] h-[56px] bg-gray-300 rounded-lg mx-auto mb-4 flex items-center justify-center">
                 <svg 
          className="w-8 h-8 text-black" 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path 
            fillRule="evenodd" 
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" 
            clipRule="evenodd" 
          />
        </svg>
            </div>
            <h3 className="font-bebas text-[20px] leading-[100%] text-black mb-1">
        {person.position}
      </h3>
         <p className="font-poppins text-[20px] leading-[100%] text-black">{person.name}</p>
        </div>
    )
}
export default PersonCard;