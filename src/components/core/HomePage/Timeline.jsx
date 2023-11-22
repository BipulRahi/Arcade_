import React from "react";
import TimeLineImage from "../../../assets/Images/TimelineImage.png";
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import phone from "../../../pages/phone.mp4"
import {bip} from "../../../pages/hone.css";

const TimeLine = [
    {
      Heading: "Battery",
      Description: "4700 mAh Lithium ion Battery",
    },
    {
      Logo: Logo2,
      Heading: "Processor",
      Description: "Qualcomm Snapdragon 8+ Gen 1 Processor",
    },
    {
      Logo: Logo3,
      Heading: "Display ",
      Description: "LTPO AMOLED (1 Hz - 120 Hz)",
    },
    {
      Logo: Logo4,
      Heading: "Camera",
      Description: "50 MP(OIS) +50MP | 32MP Front Camera",
    },
  ];


const TimelineSection = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row relative gap-20 mb-20 items-center font-mono">
        <div className="lg:w-[45%] flex  flex-col gap-14 lg:gap-3">
          <div className="bip absolute text-9xl left-[600px] top-[-12rem]">NOTHING </div>
          {TimeLine.map((ele, i) => {
            return (
              <div className="flex flex-col lg:gap-3" key={i}>
                <div className="flex gap-6" key={i}>
                 
                  <div>
                    <h2 className="font-semibold text-[18px] bip">{ele.Heading}</h2>
                    <p className="text-base">{ele.Description}</p>
                  </div>
                </div>
                <div
                  className={` hidden ${
                    TimeLine.length - 1 === i ? "hidden" : "lg:block"
                  }  h-14 border-dotted border-r border-richblack-100 bg-richblack-400/0 w-[26px]`}
                ></div>
              </div>
            );
          })}
        </div>
        <div className="relative w-fit h-fit shadow-black shadow-[0px_0px_40px_2px]">
          <div className="absolute lg:left-[50%] lg:bottom-0 lg:translate-x-[-50%] lg:translate-y-[50%] bg-caribbeangreen-700 flex lg:flex-row flex-col text-white uppercase py-5 gap-4 lg:gap-0 lg:py-10 ">
           
            <div></div>
          </div>
          <video
            className=" w-[100vw] object-fit "
            autoPlay
            src={phone}
            loop
            muted
          />
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
