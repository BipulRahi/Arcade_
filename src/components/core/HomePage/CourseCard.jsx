import React from "react"
// Importing React Icons
import { HiUsers } from "react-icons/hi"
import { FaIndianRupeeSign } from "react-icons/fa6";

import { ImTree } from "react-icons/im"

const CourseCard = ({ cardData, currentCard, setCurrentCard }) => {
  return (
    <div
      className={`w-[360px] lg:w-[30%] ${
        currentCard === cardData?.heading
          ? "bg-white shadow-[12px_12px_0_0] shadow-yellow-50"
          : "bg-richblack-800"
      }  box-border h-[300px] cursor-pointer text-richblack-25`}
      onClick={() => setCurrentCard(cardData?.heading)}
    >
      <div className="flex h-[80%] flex-col gap-3 border-b-[2px] border-dashed border-richblack-400 p-6">
        <div
          className={` ${
            currentCard === cardData?.heading && "text-richblack-800"
          } text-[20px] font-semibold`}
        >
          {cardData?.heading}
        </div>

        <div className="text-richblack-400 flex ">
          <img src={cardData?.src} className={`mx-3 h-[30%] ${
        currentCard === cardData?.heading
          ? "h-[35%] text-black filter  shadow-[5px_2px_0_0] shadow-black-50 "
          : "bg-richblack-800"}`
      }  />
          <div className="w-max">{cardData?.description}</div>
        </div>
      </div>

      <div
        className={`flex justify-between ${
          currentCard === cardData?.heading
            ? "text-blue-300"
            : "text-richblack-300"
        } px-6 py-3 font-medium`}
      >
        {/* Level */}
        <div className="flex items-center gap-2 text-[16px]">
          <HiUsers />
          <p>{cardData?.level}</p>
        </div>

        {/* Flow Chart */}
        <div className="flex items-center gap-2 text-[16px]">
        <FaIndianRupeeSign />

          <p>{cardData?.lessionNumber} </p>
        </div>
      </div>
    </div>
  )
}

export default CourseCard
