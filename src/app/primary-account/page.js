"use client";
import {
  HiPencil,
  HiOutlineLockClosed,
  HiOutlineAdjustments,
  HiOutlineBell,
  HiOutlineClipboardCheck,
  HiPencilAlt,
} from "react-icons/hi";
import { useState } from "react";
import Toogle from "../components/toogle/page";

const PrimaryAccount = () => {
  const [passwordForm, setPasswordFrom] = useState(false);
  const [tab, setTab] = useState("password");
  const [activeTab,setActiveTab]= useState("primaryaccount")

  return (
    <>
      <div  className=" px-10 bg-[#f5f7fd]">
        <div className="text-[#343434] font-medium">
    <h4 className="  text-[24px] ">Payment Accounts</h4>
<div className=" gap-2 flex items-center text-[14px]">    <span>All Settings </span> <div  className="  rounded-full bg-[#343434] h-[6px] w-[6px]"></div> <span>Payments & Checkout</span></div>
        </div>
        <div className=" mt-8 sm:mt-14 text-base text-[#343434] font-medium  border-zapp-gray_500 ">
            <div className="border-zapp-gray_500 flex text-sm sm:text-[1rem] text-zapp-light_black font-normal ">
              <button
                className={`  ${activeTab === "primaryaccount" && "  border-b-2  border-[#3056D3] "
                  }  border-[#3056D3] pb-1    border-b-2   px-4  `}
                onClick={() =>setActiveTab("primaryaccount")}
              >
         Payment Accounts
              </button>

              <button
                className={`  ${activeTab === "frontdesk" && "border-[#3056D] "
                  }   border-[#DBDBDB]  border-b-2   px-4  `}
                  onClick={() =>setActiveTab("frontdesk")}
              >
             Front Desk Display
              </button>

              <button
                className={`  ${activeTab === "advancesetting" && "border-[#3056D] "
                  }    border-[#DBDBDB]   border-b-2     px-4  `}
                  onClick={() =>setActiveTab("advancesetting")}
              >
                Advance Settings
              </button>
            </div>
            <div></div>
          </div>
          <div  className=" border-[1px]  flex justify-between items-center rounded-[10px] mt-10  p-6 border-[#D2E3E8]  bg-white">

<div>
    <h5 className=" text-[24px] font-medium">Primary Account</h5>
    <p className=" text-[14px] text-[#636363]">The default payment account used to accept payments for the business.</p>
</div>
<div>
    <button className=" bg-[#B42672]  text-base font-medium px-[30px] rounded-[8px] text-white py-[13px]">Manage Account</button>
   <div className=" flex justify-center mt-5  items-center"><span className=" text-[#2E3289] text-[12px]  underline-offset-4   underline">View Payments</span></div> 
</div>
          </div>
     
      </div>
    </>
  );
};

export default PrimaryAccount;
