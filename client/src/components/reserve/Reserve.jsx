import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Reserve = ({setOpen, hotelId}) => {
  return (
    <div classNmae="reserve">
        <div className="rContainer">
            <FontAwesomeIcon 
              icon={faCircleXmark} 
              className="rClose" 
              onClick={() => setOpen(false)} 
            />
            <span>Select Your Rooms</span>
        </div>
    </div>
  )
}

export default Reserve