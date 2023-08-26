"use client";
import { useState } from "react";
import PopUpModal from "./components/popupmodal/Modal";
import Image from "next/image";
import Head from "../../public/h.png";
import ReferrelImage from "../../public/rr.png";
import { HiXMark, HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";

export default function Home() {
  const [isOpen, setClose] = useState(false);
  const [inputFields, setInputFields] = useState([{ value: "" }]);


  const handleAddField = () => {
    const newInputFields = [...inputFields, { value: "" }];
    setInputFields(newInputFields);
  };

  const handleRemoveField = (index) => {
    if (inputFields.length > 1) {
      const updatedInputFields = [...inputFields];
      updatedInputFields.splice(index, 1);
      setInputFields(updatedInputFields);
    }
  };

  const handleInputChange = (index, value) => {
    const updatedInputFields = [...inputFields];
    updatedInputFields[index].value = value;
    setInputFields(updatedInputFields);
  };
  return (
    <>
    {/* popupmodal for perview email */}

      <PopUpModal isOpen={isOpen} setClose={setClose}  >
        <div className="">
          <div className="flex justify-end"><HiXMark className="text-[#9797a5]  text-2xl" onClick={() => setClose(false)} /></div>
          <h2 className="text-[18px] text-[#0f0f39] font-semibold">Preview Email</h2>
          <div className="mt-8 text-[#0f0f39] text-[16px] font-normal">
            <strong className="">Subject:</strong> Minerva Drake thinks you'll love texting your church with
            Clearstream 🎉
          </div>

          <div className=" px-10 mt-4 bg-[#FBFBFD]">
            <div>
              <div className=" justify-center flex py-8 ">
                <div>
                  <Image src={Head} height={40} width={40} />
                </div>
              </div>
              <div className="  bg-white shadow">
                <div className=" py-8 flex justify-center ">
                  <Image src={ReferrelImage} width={300} height={300} />
                </div>
                <div className="px-6  text-[#9797a5]">
                  <p className="text-[16px] font-normal">Hey there,</p>
                  <h1 className=" text-[#0f0f39] text-[18px] font-bold my-4">
                    Clearstream is a powerful texting software that was built
                    specifically for churches.
                  </h1>

                  <p className=" text-[16px] font-normal">
                    Your friend, <span className=" font-bold">Minerva Drake</span>, is already
                    connecting with church staff, volunteers, members, and
                    guests through texting. They told us you might enjoy using
                    Clearstream as well!
                  </p>
                  <div className=" ">
                    <p className=" my-6">Here are a few things you can do:</p>
                    <ul className=" text-[#9797a5] list-disc list-outside px-10 marker:text-[#818191]  text-[14px] ">
                      <li>
                        {" "}
                     
                        Text your entire church with reliable deliverability
                      </li>
                      <li >
                        Connect with visitors using text-to-join keywords, and
                        follow up automatically with workflows
                      </li>
                      <li >
                        {" "}
                        Survey your church using text polls
                      </li>
                      <li >
                        {" "}
                        Engage in one-on-one conversations from your inbox
                      </li>
                      <li >
                      
                        Personalize your texts with links, custom fields,
                        pictures, etc.
                      </li>
                      <li >
                        Organize your campuses and ministries with subaccounts
                      </li>
                      <li >
                     
                        Integrate with your favorite church tools
                      </li>
                    </ul>

                  </div>
                  <div className=" text-[#9797a5] pb-6 mt-4">
                  <p>...and a whole lot more!</p>
                  <div className=" flex justify-center my-8">
                    <button className=" rounded  px-3 py-2 text-white bg-[#EE1B7E]">
                      Explore Clearstream
                    </button>
                  </div>
                  <p className=" text-center">This is a one-time email sent on behalf of Minerva Drake.</p>
                </div>
                </div>
               
              </div>
              <div className=" flex justify-center mt-10 text-[12px] text-[#9797a5]"><p>© 2023 Clearstream. All rights reserved.</p></div>
            </div>
          </div>
        </div>
      </PopUpModal>


{/* referral section */}
     
        <div className="">
          <div className="flex justify-center mt-20">
           
            <div className=" ">
              <div className=" bg-white  py-10 px-8 shadow rounded">
                <h2 className="text-[18px]  text-[#0f0f39] font-semibold">Referral Program</h2>
                <div className="m-5 rounded-lg bg-gray-100 p-8 dark:bg-gray-900">
                  <div className="flex">
                    <div>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="mr-4 text-pink-500"
                      >
                        <path
                          d="M23.04 6.14493H18.612C19.02 5.52464 19.26 4.78841 19.26 4C19.26 1.7942 17.403 0 15.12 0C13.878 0 12.759 0.533333 12 1.37391C11.241 0.533333 10.122 0 8.88 0C6.597 0 4.74 1.7942 4.74 4C4.74 4.78841 4.977 5.52464 5.388 6.14493H0.96C0.429 6.14493 0 6.55942 0 7.07246V12.8696C0 12.9971 0.108 13.1014 0.24 13.1014H1.44V23.0725C1.44 23.5855 1.869 24 2.4 24H21.6C22.131 24 22.56 23.5855 22.56 23.0725V13.1014H23.76C23.892 13.1014 24 12.9971 24 12.8696V7.07246C24 6.55942 23.571 6.14493 23.04 6.14493ZM13.02 4C13.02 2.88116 13.962 1.97101 15.12 1.97101C16.278 1.97101 17.22 2.88116 17.22 4C17.22 5.11884 16.278 6.02899 15.12 6.02899H13.02V4ZM8.88 1.97101C10.038 1.97101 10.98 2.88116 10.98 4V6.02899H8.88C7.722 6.02899 6.78 5.11884 6.78 4C6.78 2.88116 7.722 1.97101 8.88 1.97101ZM2.04 11.1304V8.11594H10.98V11.1304H2.04ZM3.48 13.1014H10.98V22.029H3.48V13.1014ZM20.52 22.029H13.02V13.1014H20.52V22.029ZM21.96 11.1304H13.02V8.11594H21.96V11.1304Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <p class="text-[18px] text-[#0f0f39] font-bold">
                        {" "}
                        Love Clearstream? Refer a church and you'll get $50!{" "}
                      </p>
                    </div>
                  </div>
                  <div class="mt-4  text-[14px] text-[#3e3e47] font-normal ">
                    {" "}
                    When someone you refer signs up for a paid plan, we'll email
                    you a $50 Amazon gift card!{" "}
                    <a
                      href="http://help.clearstream.io/en/articles/6136611-referral-program"
                      target="_blank"
                      class="text-gray-700 underline dark:text-gray-400"
                    >
                      {" "}
                      Learn more
                    </a>
                  </div>
                </div>
                <div className="mx-8 mb-5">
                  <div className="mt-10">
                    <label
                      for="affiliate-link"
                      className="mb-2 inline-block text-[16px] text-[#0f0f39] font-semibold"
                    >
                      {" "}
                      Share your unique link{" "}
                    </label>
                    <div className="flex ">
                      <input
                        type="text"
                        
                        placeholder="https://app.clearstream.io/r/minerva-85571"
                        className=" rounded-br-none w-1/2 border-[1px] border-[#D7DAEC] text-[14px] text-[#17191d] font-normal py-3 rounded px-2 rounded-tr-none border-r-0"
                      />
                      <button
                        type="button"
                        className=" w-40 whitespace-nowrap  rounded text-[14px] font-normal  bg-pink-500 text-white rounded-bl-none rounded-tl-none"
                      >
                        Copy Link
                      </button>
                    </div>
                  </div>
                </div>
                <form className="mx-8 mb-5">
                  <label  className="mb-2 inline-block text-[16px] text-[#0f0f39] font-semibold">
                    {" "}
                    Send an email invite{" "}
                  </label>
                  {inputFields.map((inputField, index) => (
                    <div key={index} className="relative flex mb-2">
                      <input
                        type="email"
                        className="mr-3 w-full border-[1px] border-[#D7DAEC] text-[14px] text-[#17191d] font-normal py-3   rounded px-2"
                        placeholder="Enter email address"
                        onChange={(e) => handleInputChange(index, e.target.value)}
                      />
                      <input
                        type="text"
                        placeholder="Enter name (optional)"
                        className="border-[1px] border-[#D7DAEC] text-[14px] text-[#17191d] font-normal py-3    w-full  rounded px-2"
                      />
                      {
                        index >0 &&  <button
                        type="button"
                        onClick={() => handleRemoveField(index)}
                        class="absolute bottom-0 right-0 top-0 -mr-8 flex w-8 flex-shrink-0 items-center justify-center text-gray-500 hover:text-red-500 focus:outline-none disabled:hover:text-gray-500"
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.5 3H2.5H10.5"
                            stroke="currentColor"
                            stroke-width="0.75"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M4 3V2C4 1.73478 4.10536 1.48043 4.29289 1.29289C4.48043 1.10536 4.73478 1 5 1H7C7.26522 1 7.51957 1.10536 7.70711 1.29289C7.89464 1.48043 8 1.73478 8 2V3M9.5 3V10C9.5 10.2652 9.39464 10.5196 9.20711 10.7071C9.01957 10.8946 8.76522 11 8.5 11H3.5C3.23478 11 2.98043 10.8946 2.79289 10.7071C2.60536 10.5196 2.5 10.2652 2.5 10V3H9.5Z"
                            stroke="currentColor"
                            stroke-width="0.75"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M5 5.5V8.5"
                            stroke="currentColor"
                            stroke-width="0.75"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M7 5.5V8.5"
                            stroke="currentColor"
                            stroke-width="0.75"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                      }
                     
                    </div>
                  ))}
                  <div className=" flex justify-end">
                    <button
                      onClick={handleAddField}
                      type="button"
                      class="text-[#e11172] text-[14px]  font-normal focus:outline-none"
                    >
                      {" "}
                      Add another{" "}
                    </button>
                  </div>
                  <div class="flex  items-center justify-between">
                    <div class="space-x-4">
                      <button
                        type="button"
                        class="  bg-[#EE1B7E] text-white text-[14px] font-normal  rounded px-4 py-2 whitespace-nowrap"
                      >
                        {" "}
                        Send Emails
                      </button>
                      <button
                        type="button"
                        class="text-[#e11172] text-[14px] font-normal focus:outline-none"
                        onClick={() => setClose(true)}
                      >
                        {" "}
                        Preview email{" "}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className=" mt-20  py-7 px-10 bg-white shadow rounded">
                <h2 className="text-[#0f0f39]   font-semibold text-[18px]">Referral Sign Ups</h2>
                <table class="table-auto w-full  mt-3 ">
                  <thead>
                    <tr className=" border-b-[1px] text-[#9797a5] font-normal   text-[12px] py-3 border-[#D7DAEC]">
                      <th className=" py-3   text-start">
                        Account</th>
                      <th className=" text-start">Sign Up Date</th>
                      <th className=" text-start">Reward Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className=" border-b-[1px]  border-[#D7DAEC]">
                      <td className=" py-8">--</td>
                      <td>--</td>
                      <td>--</td>
                    </tr>


                  </tbody>
                </table>
                <div className=" flex justify-end mt-8">
                  <div className=" flex gap-4 text-gray-500 text-lg"><HiOutlineChevronLeft /><HiOutlineChevronRight /></div>
                </div>

              </div>
              <div className=" mt-20  py-7 px-10 bg-white shadow rounded">
              <h2 className="text-[#0f0f39]   font-semibold text-[18px]">Email Invites</h2>
                <table class="table-auto w-full mt-3  ">
                  <thead>
                    <tr className=" border-b-[1px]  text-[#9797A5] font-normal   text-[12px]  py-3 border-[#D7DAEC]">
                      <th className=" py-3  text-start">

                        Name</th>
                      <th className=" text-start">Email</th>
                      <th className=" text-start">Invited</th>
                      <th className=" text-start">Status</th>

                    </tr>
                  </thead>
                  <tbody className=" text-[14px] text-[#0f0f39] font-normal">
                    <tr className=" border-b-[1px]  border-[#D7DAEC]">
                      <td className=" py-8">suman dulal</td>
                      <td>dulalsuman853@gmail.com</td>
                      <td><span>8/3/2023</span><br /><span className="text-[#808091]">8:43 PM </span></td>
                      <td><button className=" bg-green-100 text-[#15803d] font-semibold rounded-full py-1 text-[12px] px-3 ">Invite Sent</button></td>
                    </tr>


                  </tbody>
                </table>
                <div className=" flex justify-end mt-8">
                  <div className=" flex gap-4 text-gray-500 text-lg"><HiOutlineChevronLeft /><HiOutlineChevronRight /></div>
                </div>

              </div>
            </div>

          </div>

        </div>
    </>
  );
}
