"use client";
import InputField from "../components/inputfield/InputField";

const NewGiftCard = () => {
  return (
    <div>
      <div className="bg-[#2B324D] text-center   text-white py-4 px-4     sm:hidden  ">
        {" "}
        <div className="font-[800] text-[20px]"> New Gift Card Promotion</div>
      </div>
      <div className=" mx-3 mb-10">
        <div className=" border-[1px] mt-10 py-6 px-4 rounded-[8px] border-[#E6E6E6]">
          <form>
            <div>
              <InputField
                label={"Display Name"}
                className={"rounded-[8px] py-3"}
                placeholder={"e.g. Valentines Day Special"}
              />
            </div>

            <p className=" text-[14px] text-[#838187] font-normal py-4">
              Client will see this as the name of the promotion when they buy
              gift cards online..
            </p>
            <div>
              <InputField
                label={"Description"}
                className={"rounded-[8px] py-3"}
                placeholder={"What is this Promotion all about?"}
              />
            </div>
            <div className=" grid grid-cols-2 gap-8 mt-6">
              <InputField
                label={"Gift Card Value"}
                className={"rounded-[8px] py-3"}
                placeholder={"e.g. $120.00"}
              />
              <InputField
                label={"Sale Price"}
                className={"rounded-[8px] py-3"}
                placeholder={"e.g. $100.00"}
              />
            </div>
            <p className=" text-[14px] text-[#838187] font-normal py-4">
              This is the price that people have to pay to buy this gift card.
            </p>
            <div>

            <div>
              <InputField
                label={"Start Date"}
                className={"rounded-[8px] py-3"}
                placeholder={"June 29,2023"}
              />
                  <p className=" text-[14px] text-[#838187] font-normal py-4">
                  This Promotion will be active starting June 29,20023 at 12:01am BST.
            </p>
            </div>
            <div>
              <InputField
                label={"End Date"}
                className={"rounded-[8px] py-3"}
                placeholder={"No end date"}
              />
                  <p className=" text-[14px] text-[#838187] font-normal py-4">
                  This promotion will stay active until deleted.
            </p>
            </div>
            </div>
          </form>
          <div className=" flex  justify-between mt-10 ">
          <button className="bg-white py-2 px-12 rounded-full text-[#2B324D] text-center border-[1px] text-[14px] font-bold ">
          Cancel
          </button>
          <button className="bg-[#2B324D] py-2 px-12 rounded-full text-center text-[14px] font-bold text-white">
          Save
          </button>
        </div>
        </div>
    
      </div>
    </div>
  );
};
export default NewGiftCard;
