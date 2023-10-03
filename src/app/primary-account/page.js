"use client";

import { useState } from "react";
import { HiEllipsisHorizontal } from "react-icons/hi2";


const PrimaryAccount = () => {
  const [activeTab, setActiveTab] = useState("primaryaccount");

  return (
    <>
    {/* mobile  navbar */}
    <div className="  py-3 px-3  text-white bg-[#191E48]">

<div className=" flex justify-between items-center">
<h3 className=" font-medium  text-[24px] ">Payment Accounts</h3>
<div className=" w-[32px] h-[32px] rounded-full flex items-center text-white justify-center bg-[#B42672]">
<HiEllipsisHorizontal className=" text-xl"/>
</div>
</div>
    </div>
      <div className=" px-4 sm:px-10 pt-7 sm:pt-15 bg-[#f5f7fd]  pb-10 ">
        <div className="text-[#343434] font-medium">
          <h4 className="  text-[24px] ">Payment Accounts</h4>
         <div className=" hidden sm:block">
         <div className=" gap-2 flex items-center text-[14px]">
            {" "}
            <span>All Settings </span>{" "}
            <div className="  rounded-full bg-[#343434] h-[6px] w-[6px]"></div>
            <span>Payments & Checkout</span>
          </div>
         </div>
        </div>
        <div className=" hidden sm:block mt-5  border-[#DBDBDB]  border-b-[1px]">
          <div className=" flex text-[#636363]  gap-7 font-medium  ">
            <button
              className={`  ${
                activeTab === "primaryaccount" &&
                "  border-b-2  text-[18px] text-[#343434]  border-[#3056D3] "
              }   p-[10px]  ml-4     `}
              onClick={() => setActiveTab("primaryaccount")}
            >
              Payment Accounts
            </button>

            <button
              className={`  ${
                activeTab === "frontdesk" && " border-b-2  text-[18px] text-[#343434]  border-[#3056D3] "
              }      p-[10px]  `}
              onClick={() => setActiveTab("frontdesk")}
            >
              Front Desk Display
            </button>

            <button
              className={`  ${
                activeTab === "advancesetting" && "  text-[18px] text-[#343434] border-[#3056D3]"
              }  border-[#3056D3]  p-[10px] `}
              onClick={() => setActiveTab("advancesetting")}
            >
              Advance Settings
            </button>
          </div>
        </div>
        <div className="mt-6 sm:mt-10 sm:w-[900px]">
          <div className=" border-[1px]  flex flex-col sm:flex-row justify-between sm:items-center rounded-[10px]  p-6 border-[#D2E3E8]   bg-white">
            <div>
              <h5 className=" text-[24px] font-medium">Primary Account</h5>
              <p className=" text-[14px] text-[#636363]">
                The default payment account used to accept payments for the
                business.
              </p>
            </div>
            <div className=" mt-4 sm:mt-0 ">
              <button className=" bg-[#B42672] w-full   text-base font-medium px-[30px] rounded-[8px] text-white py-[13px]">
                Manage Account
              </button>
              <div className=" flex justify-center mt-3  items-center">
                <span className=" text-[#2E3289] text-[12px] font-medium  underline-offset-4   underline">
                  View Payments
                </span>
              </div>
            </div>
          </div>
          <div className=" mt-10 grid sm:grid-cols-2 gap-10">
            <div className="border-[#D2E3E8] rounded-[10px]  px-8 py-6    bg-white border-[1px]">
              <div className=" flex items-center gap-5 sm:gap-10 pb-8 border-b-[1px] border-[#BEBEBE]">
                <div className=" h-[94px] w-[94px]">
                  <img
                    src="/../p.jpeg"
                    className=" w-full h-full rounded-full  object-cover"
                  />
                </div>
                <div>
                  <h6 className=" font-medium text-[18px] text-[#343434]">
                    Jennifer White
                  </h6>
                  <span className=" text-base text-[#909090]">
                    Staff member since August 26
                  </span>
                </div>
              </div>
              <div>
                <p className=" my-6 text-base text-[#636363] leading-[23px]">
                  This payment account is used to accept payments for the
                  assigned staff members.
                </p>
                <div className=" my-4 flex justify-between items-center">
                  <div>
                    <p className=" text-[18px] font-medium leading-[22px]">
                      Assigned staff:
                    </p>
                    <span className=" text-[#909090] text-base  font-normal">
                      Andre Butler
                    </span>
                  </div>
                  <div>
                    {" "}
                    <span className=" text-[#2E3289] text-[12px] font-medium   underline-offset-4   underline">
                      View Payments
                    </span>
                  </div>
                </div>
                <button className=" bg-[#B42672]  text-base font-medium px-[30px] rounded-[8px] w-full text-white py-[13px]">
                  Manage Account
                </button>
              </div>
            </div>
            <div className="border-[#D2E3E8] rounded-[10px]  px-8 py-6    bg-white border-[1px]">
              <div className=" flex items-center gap-5 sm:gap-10 pb-8 border-b-[1px] border-[#BEBEBE]">
                <div className=" h-[94px] w-[94px]">
                  <img
                    src="/../p.jpeg"
                    className=" w-full h-full rounded-full  object-cover"
                  />
                </div>
                <div>
                  <h6 className=" font-medium text-[18px] text-[#343434]">
                    Jennifer White
                  </h6>
                  <span className=" text-base text-[#909090]">
                    Staff member since August 26
                  </span>
                </div>
              </div>
              <div>
                <p className=" my-6 text-base text-[#636363] leading-[23px]">
                  This payment account is used to accept payments for the
                  assigned staff members.
                </p>
                <div className=" my-4 flex justify-between items-center">
                  <div>
                    <p className=" text-[18px] font-medium leading-[22px]">
                      Assigned staff:
                    </p>
                    <span className=" text-[#909090] text-base  font-normal">
                      Andre Butler
                    </span>
                  </div>
                  <div>
                    {" "}
                    <span className=" text-[#2E3289] text-[12px] font-medium   underline-offset-4   underline">
                      View Payments
                    </span>
                  </div>
                </div>
                <button className=" bg-[#B42672]  text-base font-medium px-[30px] rounded-[8px] w-full text-white py-[13px]">
                  Manage Account
                </button>
              </div>
            </div>
            <div className="border-[#D2E3E8] rounded-[10px]  px-8 py-6    bg-white border-[1px]">
              <div className=" flex items-center gap-5 sm:gap-10 pb-8 border-b-[1px] border-[#BEBEBE]">
                <div className=" h-[94px] w-[94px]">
                  <img
                    src="/../p.jpeg"
                    className=" w-full h-full rounded-full  object-cover"
                  />
                </div>
                <div>
                  <h6 className=" font-medium text-[18px] text-[#343434]">
                    Jennifer White
                  </h6>
                  <span className=" text-base text-[#909090]">
                    Staff member since August 26
                  </span>
                </div>
              </div>
              <div>
                <p className=" my-6 text-base text-[#636363] leading-[23px]">
                  This payment account is used to accept payments for the
                  assigned staff members.
                </p>
                <div className=" my-4 flex justify-between items-center">
                  <div>
                    <p className=" text-[18px] font-medium leading-[22px]">
                      Assigned staff:
                    </p>
                    <span className=" text-[#909090] text-base  font-normal">
                      Andre Butler
                    </span>
                  </div>
                  <div>
                    {" "}
                    <span className=" text-[#2E3289] text-[12px] font-medium   underline-offset-4   underline">
                      View Payments
                    </span>
                  </div>
                </div>
                <button className=" bg-[#B42672]  text-base font-medium px-[30px] rounded-[8px] w-full text-white py-[13px]">
                  Manage Account
                </button>
              </div>
            </div>
            <div className="border-[#D2E3E8] rounded-[10px]  px-8 py-6    bg-white border-[1px]">
              <div className=" flex items-center gap-5 sm:gap-10 pb-8 border-b-[1px] border-[#BEBEBE]">
                <div className=" h-[94px] w-[94px]">
                  <img
                    src="/../p.jpeg"
                    className=" w-full h-full rounded-full  object-cover"
                  />
                </div>
                <div>
                  <h6 className=" font-medium text-[18px] text-[#343434]">
                    Jennifer White
                  </h6>
                  <span className=" text-base text-[#909090]">
                    Staff member since August 26
                  </span>
                </div>
              </div>
              <div>
                <p className=" my-6 text-base text-[#636363] leading-[23px]">
                  This payment account is used to accept payments for the
                  assigned staff members.
                </p>
                <div className=" my-4 flex justify-between items-center">
                  <div>
                    <p className=" text-[18px] font-medium leading-[22px]">
                      Assigned staff:
                    </p>
                    <span className=" text-[#909090] text-base  font-normal">
                      Andre Butler
                    </span>
                  </div>
                  <div>
                    {" "}
                    <span className=" text-[#2E3289] text-[12px] font-medium   underline-offset-4   underline">
                      View Payments
                    </span>
                  </div>
                </div>
                <button className=" bg-[#B42672]  text-base font-medium px-[30px] rounded-[8px] w-full text-white py-[13px]">
                  Manage Account
                </button>
              </div>
            </div>
          </div>
          <div className=" my-10 flex flex-col   sm:flex-row items-center justify-between ">
            <div className=" sm:basis-[70%]">
            <p className=" text-[14px] text-[#636363] leading-[21px]">
              Some businesses require additional payment accounts in order to
              accept payments for staff members, staff groups, or independent
              contractors.
            </p>
            </div>
          <div className=" sm:basis-[30%]">
          <button className=" mt-6 sm:mt-0 ml-10 sm:ml-0 bg-[#3056D3] px-[30px] w-full  py-[13px] text-base font-medium  rounded-[8px] text-white ">
            Add Payment Account
        </button>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrimaryAccount;
