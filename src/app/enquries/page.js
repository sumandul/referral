"use client";

import { useState } from "react";
import PImage from "../../../public/1.webp";
import Image from "next/image";
import { Accordion }from "../components/accodian/Accodian";
import {
  HiXMark,
  HiOutlineChevronLeft,
  HiMiniEllipsisVertical,
  HiAdjustmentsHorizontal,
} from "react-icons/hi2";

const AddGiftCard = () => {
  const [dropDown, setDropDown] = useState(false);
  const data=[
    { title: "Glod fish", content: "Content for Item 1" },
    { title: "Hample", content: "Content for Item 2" },
    // Add more items as needed
  ]
  return (
    <div className=" ">
      <div className="bg-[#2B324D]   text-white py-4 px-4     flex items-center  justify-between sm:hidden  ">
        {" "}
        <div className="font-[800]"> Enquires</div>
        <div className=" flex items-center gap-4 ">
          <div className=" w-[125.72px]  bg-white text-[#07182B]  border-[#EDEDED] flex justify-between  px-2 font-normal text-[12.37px] items-center border-[4.83px] rounded-[41px]">
            <div>Charlie Silva</div>{" "}
            <div className="w-4 h-4">
              <Image
                src={PImage}
                className=" rounded-full h-full w-full object-cover" alt="img-pic"
              />
            </div>
           
          </div>{" "}
           <HiAdjustmentsHorizontal className="text-2xl" />
        </div>
      </div>
   <div className=" mx-3">
   <div className=" border-[1px] mt-10 py-6 px-4 rounded-[8px] border-[#E6E6E6]">
    <p className=" text-[14px] text-[#838187] font-normal pb-6">A Promotion Allows client to purchase a gift card for a set amount.</p>
      <Accordion data={data}   keyAttr="title"
  valAttr="content"/>
      </div>
      <div className=" flex justify-center mt-10 "><button className="bg-[#2B324D] py-2 px-4 rounded-full text-center text-[14px] font-bold text-white">Add a promotion</button></div>
   </div>
    </div>
  );
};
export default AddGiftCard; 
