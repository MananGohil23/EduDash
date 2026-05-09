import React from 'react'
import { useState } from 'react';
import {FaChevronDown} from 'react-icons/fa';

const DropDown = ({buttonText, content}) => {
    const [dropDownOpen, setDropDownOpen] = useState('null');
  return (
    <>
        <div>
            <div className="dropdown">
                <button className="flex text-2xl items-center gap-2" onClick={() => setDropDownOpen(!dropDownOpen)}>
                    {buttonText}
                    <span><FaChevronDown /></span>
                </button>
                <div className={`dropdown-content mt-4 ${dropDownOpen ? 'block' : 'hidden'}`}>
                    <div className = {`flex flex-col gap-2 border rounded-md p-2 bg-white shadow-md text-slate-900`}>
                        {content.map((item) => (
                            <p className = "hover:scale-105 cursor-pointer">{item}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default DropDown
