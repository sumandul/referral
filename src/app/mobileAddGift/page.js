"use client";

import { useState } from "react";
import {
  HiMiniEllipsisVertical,
  HiArrowSmallLeft,
} from "react-icons/hi2";

const AddGiftCard = () => {
  const [dropDown, setDropDown] = useState(false);
  return (
    <div className=" px-3 pt-2">
      <div className="bg-[#2B324D]   rounded-[10px]  text-white py-4 px-4   text-base font-bold  flex items-center  justify-between sm:hidden  ">
        {" "}
        <div>
          {" "}
          <HiArrowSmallLeft className="text-[26px] " />
        </div>
        <div> Add gift card</div>
        <div className=" relative">
          {" "}
          <HiMiniEllipsisVertical
            className="text-[26px] "
            onClick={() => setDropDown(!dropDown)}
          />{" "}
  
    <div
      className={`absolute top-10 right-0 rounded-[6px] duration-500 ${dropDown ?" translate-x-0":" translate-x-[200px]"}  shadow-xl bg-white w-[158px]`}
    >
      <ul className="text-[12px] px-2 py-4 font-semibold text-[#3B3840]">
        <li>Edit</li>
        <li>Delete</li>
      </ul>
    </div>

        </div>
      </div>
      <div className=" border-[1px] mt-10 py-6 px-4 rounded-[8px] border-[#E6E6E6]">
        <div>
          <p className="  font-bold    text-[#3B3840] text-base leading-[22px] ">
            Description
          </p>
          <span className=" text-[#838187] font-normal text-[14px]">
            Gild fish
          </span>
        </div>
        <div className=" mt-6">
          <p className="  font-bold    text-[#3B3840] text-base leading-[22px] ">
          Gift Card value
          </p>
          <span className=" text-[#838187] font-normal text-[14px]">
          $120.00
          </span>
        </div>
        <div className=" mt-6">
          <p className="  font-bold    text-[#3B3840] text-base leading-[22px] ">
          Sale price
          </p>
          <span className=" text-[#838187] font-normal text-[14px]">
          $120.00
          </span>
        </div>
        <div className=" mt-6">
          <p className="  font-bold    text-[#3B3840] text-base leading-[22px] ">
          Start date
          </p>
          <span className=" text-[#838187] font-normal text-[14px]">
          June 29, 20023
          </span>
        </div>
        <div className=" mt-6">
          <p className="  font-bold    text-[#3B3840] text-base leading-[22px] ">
          End date
          </p>
          <span className=" text-[#838187] font-normal text-[14px]">
          June 30, 20023
          </span>
        </div>
      </div>
    </div>
  );
};
export default AddGiftCard;
