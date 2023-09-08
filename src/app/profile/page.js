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

const Profile = () => {
  const [passwordForm, setPasswordFrom] = useState(false);
  const [tab, setTab] = useState("password");
  const [isProviderChecked, setIsProviderCheck] = useState(false)
  const HandleClick = () => { };
  return (
    <>
      <div className=" flex justify-center items-center">
        <div>
          <div className="bg-white shadow rounded-xl px-8  relative mt-40 border-[1px] w-[1000px] pb-20 ">
            <div className=" flex items-center  absolute top-[-30px] left-9  gap-5">
              <div className=" w-32 h-32 relative rounded-full p-2 bg-white">
                <img src={"https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373_1280.jpg"}   className="w-full h-full rounded-full object-cover"/>
                <div className="w-8 h-8 absolute bottom-0 rounded-full right-[16px]  flex justify-center items-center  bg-white  border-2 border-[#461f84] ">
                  <HiPencil className=" text-lg text-[#461f84]" />
                </div>
              </div>
              <div className="  mt-12 ">
                <h2 className=" font-semibold capitalize text-lg ">
                  suman dulal
                </h2>
                <span className=" text-[12px]  font-medium text-[#838187]">
                  dulalsuman853@gmail.com
                </span>
              </div>
            </div>
            <div className="mt-32">
              <div className=" flex items-center justify-between py-6  border-t-2">
                <div className={`flex ${tab === "password" ? "text-[#461f84]  font-semibold" : " text-gray-400"}   items-center text-base gap-2`} onClick={() => setTab("password")}>
                  <HiOutlineLockClosed className="text-2xl" />
                  <span className=""> Password</span>
                </div>
                <div className={`flex ${tab === "preferences" ? "text-[#461f84] font-semibold" : " text-gray-400"}    items-center gap-2`} onClick={() => setTab("preferences")}>
                  <HiOutlineAdjustments className="text-2xl" />{" "}
                  <span className="semibold"> Preferences</span>
                </div>
                <div className={`flex  items-center ${tab === "notification" ? "text-[#461f84] font-semibold" : " text-gray-400"}  gap-2`} onClick={() => setTab("notification")}>
                  < HiOutlineBell className="text-2xl" />{" "}
                  <span className="semibold"> Notification</span>
                </div>
                <div className={`flex  items-center  ${tab === "workschedule" ? "text-[#461f84] " : " text-gray-400"} gap-2`} onClick={() => setTab("workschedule")}>
                  <HiOutlineClipboardCheck className="text-2xl" />{" "}
                  <span className="semibold"> Work Schedule</span>
                </div>
              </div>
            </div>
            <div>
              {
                tab === "password" && <div className=" rounded-xl overflow-hidden  border-2  border-[#E6E6E6]  mt-3 ">
                  <div className="flex py-2 bg-[#F4F2FF] justify-between px-10">
                    <div className=" capitalize text-base font-bold text-[#3B3840]">
                      password
                    </div>
                    <div className=" w-6 flex justify-center items-center border-2 text-[#461f84]   rounded  border-[#461f84]">
                      <HiPencilAlt onClick={() => setPasswordFrom(!passwordForm)} />
                    </div>
                  </div>
                  <div className="">
                    {passwordForm ? (
                      <div className=" px-6 py-6 ">
                        <form action="" className="flex flex-col gap-4">
                          <div className="w-1/3">
                            <div className="flex flex-col  gap-2">
                              <label
                                htmlFor="currentPassword"
                                className="pl-1 text-sm font-bold"
                              >
                                Current Password
                              </label>
                              <input
                                type="password"
                                className="w-full h-12 px-4 placeholder:text-xs py-4 border-2 rounded-lg focus-visible:outline-none"
                                placeholder="Enter Current Password"
                              />
                            </div>
                            <div className="flex flex-col  my-4 gap-2">
                              <label
                                htmlFor="newPassword"
                                className="pl-1 text-sm font-bold"
                              >
                                New Password
                              </label>
                              <input
                                type="password"
                                className="w-full h-12 px-4 placeholder:text-xs py-4 border-2 rounded-lg focus-visible:outline-none"
                                placeholder="Enter New Password"
                              />
                            </div>
                            {/* Email */}
                            <div className="flex flex-col  gap-2">
                              <label
                                htmlFor="comfirmPassword"
                                className="pl-1 text-sm font-bold"
                              >
                                Confirm New Password
                              </label>
                              <input
                                type="password"
                                className="w-full h-12 px-4 placeholder:text-xs py-4 border-2 rounded-lg focus-visible:outline-none"
                                placeholder="Enter New Password"
                              />
                            </div>
                          </div>

                          <div className="mt-4 border-t-2 w-full">
                            <div className="flex justify-end gap-6 py-4 mt-2">
                              <button className=" border-2 border-[#461f84] text-[#461f84] font-medium py-2 px-6 rounded-lg">
                                Cancel
                              </button>
                              <button className="bg-[#461f84] text-white py-2 px-6 rounded-lg">
                                Change
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    ) : (
                      <div className=" flex justify-center items-center py-32 font-normal bg-[#F5F7F8] text-[#838187] text-[16px]">
                        To change your password press the Edit button
                      </div>
                    )}

                    <div></div>
                  </div>
                </div>

              }
              {
                tab === "preferences" && <div className=" rounded-xl overflow-hidden  border-2  border-[#E6E6E6]  mt-3 ">
                  <div className="flex py-2 bg-[#F4F2FF] justify-between px-10">
                    <div className=" capitalize text-base font-bold text-[#3B3840]">
                      Preferences
                    </div>
                    <div className=" w-6 flex justify-center items-center border-2 text-[#461f84]   rounded  border-[#461f84]">
                      <HiPencilAlt onClick={() => setPasswordFrom(!passwordForm)} />
                    </div>
                  </div>
                  <div className="">
                    {passwordForm ? (
                      <div className=" px-6 py-6 ">
                          <div className=" mb-3  font-normal bg-[#F5F7F8] text-[#838187] text-[16px]">
                        Please note: the settings here apply to you only and do not affect other users of katewil
                      </div>
                        <form action="" className="flex flex-col gap-4">
                          <div className="w-1/2">
                            <div className="flex flex-col  gap-2">
                              <label htmlFor="sort" className="pl-1 text-sm font-bold">
                                Sort client list by
                              </label>
                              <select
                                name=""
                                id="gender"
                                className="w-full h-10 px-2 border rounded-lg focus-visible:outline-none"
                              >
                                <option value="Alphabate">Alphabate</option>
                                <option value="Alphabate">Alphabate</option>
                                <option value="Non-Alphabate">Alphabate-binary</option>
                              </select>
                            </div>
                          </div>

                          <div className="pt-2  border-t-2">
                            <div className="flex justify-end gap-4 items-center mt-2">
                              <button className=" border-2 border-[#461f84] text-[#461f84] font-medium py-2 px-6 rounded-lg">
                                Cancel
                              </button>
                              <button className="bg-[#461f84] text-white py-2 px-6 rounded-lg">
                                save
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    ) : (
                      <div className=" flex justify-center items-center py-32 font-normal bg-[#F5F7F8] text-[#838187] text-[16px]">
                        Please note: the settings here apply to you only and do not affect other users of katewil
                      </div>
                    )}

                    <div></div>
                  </div>
                </div>
              }
              {
                tab === "notification" && <div className=" rounded-xl overflow-hidden  border-2  border-[#E6E6E6]  mt-3 ">
                  <div className="flex py-2 bg-[#F4F2FF] justify-between px-10">
                    <div className=" capitalize text-base font-bold text-[#3B3840]">
                      notification
                    </div>
                    {/* <div className=" w-6 flex justify-center items-center border-2 text-[#461f84]   rounded  border-[#461f84]">
                <HiPencilAlt onClick={() => setPasswordFrom(!passwordForm)} />
              </div> */}
                  </div>
                  <div className=" px-6">

                    <div className="text-[#3B3840] my-8 ">
                      <p className=" font-bold text-base ">Send SMS when:</p>
                      <div className=" my-6">


                        <div className=" flex items-center gap-2">   <Toogle /> < span className=" font-semibold text-[14px]">Clients check-in</span> </div>

                        <div className=" flex items-center mt-5 gap-2">   <Toogle /> < span className=" font-semibold text-[14px]">Other bookings are created, changed, or removed</span> </div>
                        <div className=" flex items-center mt-5  gap-2">   <Toogle /> < span className=" font-semibold text-[14px]">Other bookings are created, changed, or removed</span> </div>

                      </div>

                    </div>

                    <div className="text-[#3B3840] my-8 ">
                      <p className=" font-bold text-base ">Send email when:</p>
                      <div className=" my-6">


                        <div className=" flex items-center gap-2">   <Toogle /> < span className=" font-semibold text-[14px]">Online bookings are created</span> </div>

                      </div>

                    </div>
                    <div className="text-[#3B3840] my-6 ">
                      <p className=" font-bold text-base ">Send mobile app notification when:</p>
                      <div className=" my-6">


                        <div className=" flex items-center gap-2">   <Toogle /> < span className=" font-semibold text-[14px]">New message is received</span> </div>

                      </div>

                    </div>
                    <div></div>
                  </div>
                </div>
              }
              {
                tab === "workschedule" && <div className=" rounded-xl overflow-hidden  border-2  border-[#E6E6E6]  mt-3 ">
                  <div className="flex py-2 bg-[#F4F2FF] justify-between px-10">
                    <div className=" capitalize text-base font-bold text-[#3B3840]">
                      workschedule
                    </div>
             
                  </div>
                  <div className="px-6 py-10">
                  <div className=" flex justify-end mt-4 ">   
                   <div>
                   <form action="" className="flex ">
                      
                          <div className="">
                            <div className="flex flex-col  gap-2">
                              <select
                                name=""
                             
                                className="w-full font-semibold text-[14px] text-[#3B3840] h-12 px-2 border rounded-lg focus-visible:outline-none"
                              >
                                <option value="Alphabate">May 20 – May 26, 2023</option>
                                <option value="Alphabate">May 20 – May 26, 2023</option>
                                <option value="Non-Alphabate">May 20 – May 26, 2023</option>
                              </select>
                            </div>
                          </div>

                    
                        </form>
                    
                     </div>
                         </div>

                 
                    <div className=" mt-6 grid grid-cols-4 rounded-[10px]  bg-[#F7F7F9] border-[#E6E6E6] border-[1px] border-l-6 pr-3">
                      <div className=" border-l-[12px]  rounded-[10px] pl-3 py-3">
                        <div className="text-[#3B3840]">
                          <p className=" font-bold text-[12px] capitalize ">sunday</p>
                          <span className=" text-[14px] font-normal">20th May</span>

                        </div>


                      </div>
                      <div className=" flex items-center">
                        <div className="text-[#3B3840]">
                          <p className=" font-bold text-[12px] ">No Shifts</p>
                        

                        </div>


                      </div>
                      <div className=" flex items-center">
                       


                      </div>
                      <div className="  flex justify-end items-center ">
                      <div className=" w-6 flex justify-center items-center border-2 text-[#461f84]   rounded  border-[#461f84]">
                      <HiPencilAlt onClick={() => setPasswordFrom(!passwordForm)} />
                    </div>


                      </div>
                      <div>
                      </div>



                    </div>
                    <div className=" mt-5 grid grid-cols-4 rounded-[10px]  border-[#E6E6E6] border-[1px] border-l-6 pr-3">
                      <div className=" border-l-[12px] border-[#48BA6F]  rounded-[10px] pl-3 py-3">
                        <div className="text-[#3B3840]">
                          <p className=" font-bold text-[12px] capitalize ">monday</p>
                          <span className=" text-[14px] font-normal">20th May</span>

                        </div>


                      </div>
                      <div className=" flex items-center">
                        <div className="text-[#3B3840]">
                          <p className=" font-bold text-[12px] ">8:00 AM - 10:00 AM</p>
                        

                        </div>


                      </div>
                      <div className=" flex items-center">
                      <div className="text-[#3B3840]">
                          <p className=" font-bold  uppercase text-[12px] ">  OVERRIDDEN</p>
                        

                        </div>
                    


                      </div>
                      <div className="  flex justify-end items-center ">
                      <div className=" w-6 flex justify-center items-center border-2 text-[#461f84]   rounded  border-[#461f84]">
                      <HiPencilAlt onClick={() => setPasswordFrom(!passwordForm)} />
                    </div>


                      </div>
                      <div>
                      </div>



                    </div>
                    <div className=" mt-5 grid grid-cols-4 rounded-[10px]  border-[#E6E6E6] border-[1px] border-l-6 pr-3">
                      <div className=" border-l-[12px] border-[#48BA6F]  rounded-[10px] pl-3 py-3">
                        <div className="text-[#3B3840]">
                          <p className=" font-bold text-[12px] capitalize ">monday</p>
                          <span className=" text-[14px] font-normal">20th May</span>

                        </div>


                      </div>
                      <div className=" flex items-center">
                        <div className="text-[#3B3840]">
                          <p className=" font-bold text-[12px] ">8:00 AM - 10:00 AM</p>
                          <p className=" font-bold text-[12px] ">8:00 AM - 10:00 AM</p>
                          <p className=" font-bold text-[12px] ">8:00 AM - 10:00 AM</p>
                        

                        </div>


                      </div>
                      <div className=" flex items-center">
                      <div className="text-[#3B3840]">
                          <p className=" font-bold  uppercase text-[12px] ">  OVERRIDDEN</p>
                        

                        </div>
                    


                      </div>
                      <div className="  flex justify-end items-center ">
                      <div className=" w-6 flex justify-center items-center border-2 text-[#461f84]   rounded  border-[#461f84]">
                      <HiPencilAlt onClick={() => setPasswordFrom(!passwordForm)} />
                    </div>


                      </div>
                      <div>
                      </div>



                    </div>
                  </div>
                </div>
              }
            </div>
          </div>


        </div>
      </div>
    </>
  );
};

export default Profile;
