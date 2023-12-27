"use client";
import { HiOutlinePencil } from "react-icons/hi2";
import Link from "next/link";

const VedioCall = () => {
  return (
    <>
      <div className=" bg-[#F8F8F8]  min-h-screen  flex justify-center items-center ">
        <div className="border-[2] bg-white border-gray-400  py-10 px-20 w-[40rem]   shadow-xl rounded-2xl  ">
          <div>
            <span className="text-[15px]  font-normal text-[#6c687d]">
              Vernon Tuck !
            </span>
            <h3 className=" my-4 text-[28px] font-medium">Hey, there!</h3>
            <p className=" text-[15px]  font-normal text-[#6c687d] my-3 leading-[25px]">
              We want to be as honest and transparent as we can be. Therefore we
              want our clients to speak for us. Would you be willing to leave us
              an honest testimonial of your experience with our brand? Thanks in
              advance!
            </p>
            <span className=" text-[#2e2c34 text-base">
              What you could mention:
            </span>
            <ul className=" mt-3  px-3 text-[#6c687d]">
              <li className="  list-disc text-[15px]  font-normal text-[#6c687d]">
                How has our contribution helped you out? How is your experience
                working with us?
              </li>
            </ul>
            <div className=" mt-6 flex flex-col gap-4">
              <div>
                <Link href={"/vediorecord"}>
                  <button className=" bg-[#8745FE]  w-full flex items-center justify-center gap-4 text-white px-4 py-3 rounded-md">
                    <svg
                      width="22"
                      height="19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.304.324h-.037c-1.097 0-1.972 0-2.68.058-.724.06-1.347.185-1.92.48A4.908 4.908 0 0 0 .534 3.014C.24 3.592.117 4.22.058 4.951 0 5.664 0 6.547 0 7.654V10.98c0 1.106 0 1.99.058 2.702.059.732.183 1.36.475 1.937a4.908 4.908 0 0 0 2.135 2.153c.572.294 1.195.42 1.92.48.707.058 1.582.058 2.679.058h3.298c1.097 0 1.973 0 2.68-.058.725-.06 1.347-.186 1.92-.48A4.908 4.908 0 0 0 17.3 15.62c.245-.486.372-1.007.44-1.596l1.14.862c1.229.93 2.982.045 2.982-1.504v-8.13c0-1.549-1.753-2.433-2.982-1.503l-1.14.861c-.068-.588-.195-1.11-.44-1.595A4.908 4.908 0 0 0 15.164.861c-.572-.294-1.194-.419-1.92-.479-.706-.058-1.582-.058-2.679-.058H7.304Zm10.528 7.33V6.777c0-.048.023-.093.06-.122l2.016-1.524a.151.151 0 0 1 .241.122v8.13a.151.151 0 0 1-.241.121l-2.015-1.524a.15.15 0 0 1-.06-.12V11.047m0-3.393V10.98M16.12 7.69c0-1.152-.001-1.965-.053-2.599-.05-.624-.146-1-.293-1.293A3.187 3.187 0 0 0 14.387 2.4c-.29-.149-.663-.245-1.282-.296-.629-.052-1.434-.052-2.577-.052H7.304c-1.142 0-1.948 0-2.577.052-.619.051-.991.147-1.282.296A3.187 3.187 0 0 0 2.06 3.8c-.148.292-.244.668-.294 1.292-.052.635-.052 1.447-.052 2.6v3.251c0 1.153 0 1.965.052 2.6.05.624.146 1 .294 1.292.304.603.79 1.092 1.386 1.4.29.148.663.245 1.282.296.63.052 1.435.052 2.577.052h3.224c1.143 0 1.948 0 2.577-.052.62-.051.992-.148 1.282-.297a3.187 3.187 0 0 0 1.387-1.399c.148-.292.243-.668.293-1.292.052-.635.052-1.447.052-2.6V7.691Z"
                        fill="#fff"
                      ></path>
                    </svg>
                    Record a video testimonial
                  </button>
                </Link>
              </div>
              <div>
                <button className="   border-[1px] border-[#ececec]  text-[#2e2c34]  w-full flex items-center justify-center gap-4 px-4 py-3 rounded-md">
                  <HiOutlinePencil className="  text-2xl" /> Write a Review
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VedioCall;
