"use client";
import {
  HiArrowLeft,
  HiPause,
  HiOutlinePlay,
  HiOutlineSpeakerWave,
  HiOutlineEllipsisVertical,
  HiOutlineViewfinderCircle,
} from "react-icons/hi2";
import { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import Toogle from "../components/toogle/page";

const VedioCall = () => {
  const [record, setRecord] = useState(false);
  const [recordStart, setRecordStart] = useState(false);
  const [preview, setPreview] = useState(false);
  const [vedio, setVedio] = useState(false);
  const [count, setCount] = useState(null);
  const [seconds, setSeconds] = useState(null);
  const [recording, setRecording] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [recordedVideoUrl, setRecordedVideoUrl] = useState("");
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  console.log(recordStart, "susryryryry");
  // console.log(recordedChunks, "sfgffgf");
  const startRecording = () => {
    console.log("hello");
    setRecordStart(true);
    setRecordedChunks([]);

    const stream = webcamRef.current.stream;
    mediaRecorderRef.current = new MediaRecorder(stream);

    mediaRecorderRef.current.ondataavailable = (event) => {
      console.log(event, "eve");
      if (event.data.size > 0) {
        setRecordedChunks((prev) => prev.concat(event.data));
      }
    };

    mediaRecorderRef.current.onstop = () => {
      const recordedBlob = new Blob(recordedChunks, {
        type: "vedio/webm",
      });
      const videoUrl = URL.createObjectURL(recordedBlob);
      console.log(videoUrl);
      setRecordedVideoUrl(videoUrl);
    };

    mediaRecorderRef.current.start();
    setRecording(true);
  };

  const stopRecording = () => {
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state === "recording"
    ) {
      mediaRecorderRef.current.stop();
      setPreview(true);
      setRecording(false);
    }
  };

  useEffect(() => {
    if (count === 0) {
      startRecording();
      setSeconds(180);
    }
  }, [count]);

  const startCountdown = () => {
    setCount(3);
  };

  useEffect(() => {
    if (count > 0) {
      const countdownTimer = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);

      return () => clearInterval(countdownTimer);
    }
  }, [count]);
  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000); // Decrease by 1 second every second

    // Clear the timer when seconds reach 0
    return () => clearInterval(timer);
  }, [seconds]);
  // if (seconds === 0) {
  //   stopRecording();
  // }

  // Format seconds as minutes and seconds
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <>
      {preview ? (
        <div className=" bg-[#F9F9F8] ">
          <div className=" px-6 sm:flex sm:justify-center sm:px-20 mt-4 sm:my-10 sm:items-center ">
            <div className="">
              <div className=" flex  justify-center items-center">
                <div className=" border-[8px]   flex justify-center items-center  border-[#D4C0FA]  rounded-full bg-[#8745FE] h-16 w-16">
                  <svg
                    width="22"
                    height="19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillule="evenodd"
                      clipRule="evenodd"
                      d="M7.304.324h-.037c-1.097 0-1.972 0-2.68.058-.724.06-1.347.185-1.92.48A4.908 4.908 0 0 0 .534 3.014C.24 3.592.117 4.22.058 4.951 0 5.664 0 6.547 0 7.654V10.98c0 1.106 0 1.99.058 2.702.059.732.183 1.36.475 1.937a4.908 4.908 0 0 0 2.135 2.153c.572.294 1.195.42 1.92.48.707.058 1.582.058 2.679.058h3.298c1.097 0 1.973 0 2.68-.058.725-.06 1.347-.186 1.92-.48A4.908 4.908 0 0 0 17.3 15.62c.245-.486.372-1.007.44-1.596l1.14.862c1.229.93 2.982.045 2.982-1.504v-8.13c0-1.549-1.753-2.433-2.982-1.503l-1.14.861c-.068-.588-.195-1.11-.44-1.595A4.908 4.908 0 0 0 15.164.861c-.572-.294-1.194-.419-1.92-.479-.706-.058-1.582-.058-2.679-.058H7.304Zm10.528 7.33V6.777c0-.048.023-.093.06-.122l2.016-1.524a.151.151 0 0 1 .241.122v8.13a.151.151 0 0 1-.241.121l-2.015-1.524a.15.15 0 0 1-.06-.12V11.047m0-3.393V10.98M16.12 7.69c0-1.152-.001-1.965-.053-2.599-.05-.624-.146-1-.293-1.293A3.187 3.187 0 0 0 14.387 2.4c-.29-.149-.663-.245-1.282-.296-.629-.052-1.434-.052-2.577-.052H7.304c-1.142 0-1.948 0-2.577.052-.619.051-.991.147-1.282.296A3.187 3.187 0 0 0 2.06 3.8c-.148.292-.244.668-.294 1.292-.052.635-.052 1.447-.052 2.6v3.251c0 1.153 0 1.965.052 2.6.05.624.146 1 .294 1.292.304.603.79 1.092 1.386 1.4.29.148.663.245 1.282.296.63.052 1.435.052 2.577.052h3.224c1.143 0 1.948 0 2.577-.052.62-.051.992-.148 1.282-.297a3.187 3.187 0 0 0 1.387-1.399c.148-.292.243-.668.293-1.292.052-.635.052-1.447.052-2.6V7.691Z"
                      fill="#fff"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className=" mt-3 ">
                <h1 className=" text-center font-semibold text-[24px] text-[#2e2c34]">
                  Record a testimonial. Relax, you got this!
                </h1>
                <div className=" flex justify-center">
                  {" "}
                  <p className="   text-center  w-[420px]  text-[#6c687d]  text-[14px] font-semibold">
                    Don't worry, you get the chance to rewatch or redo your
                    video before you send it in!
                  </p>
                </div>
              </div>
              <div className=" border-[1px]  mt-1 p-3 sm:p-[35px]  rounded-[20px] border-[#ececec] bg-[#fafafc]">
                <h3 className=" text-base text-[#2e2c34] font-semibold flex items-center">
                  {" "}
                  <HiArrowLeft className="  text-xl text-[#6c687d] mr-2" />
                  What you could mention:
                </h3>
                <ul className="text-[14px] text-[#6c687d] my-10">
                  <li className=" list-disc list-inside font-medium">
                    How has our contribution helped you out? How is your
                    experience working with us?
                  </li>
                </ul>
                <div>
                  <video controls width="640" height="480">
                    <source src={recordedVideoUrl} type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                  {/* <button onClick={handleDownload}>Download Video</button> */}
                </div>
              </div>
              <button className="bg-[#8645FF] text-white  rounded-md w-full py-3 mt-14 font-semibold text-[14px]">
                Continue to last step!
              </button>
              <button className=" border-[1px] border-[#ececec]   rounded-md w-full py-3 mt-5 font-semibold text-[14px] shadow-md text-[#2e2c34]">
                Delete video and start over.
              </button>{" "}
            </div>
          </div>
        </div>
      ) : (
        <div className=" bg-[#F9F9F8] ">
          <div className=" px-6 sm:flex sm:justify-center sm:px-20 mt-4 sm:my-10 sm:items-center ">
            <div className="">
              <div className=" flex  justify-center items-center">
                <div className=" border-[8px]   flex justify-center items-center  border-[#D4C0FA]  rounded-full bg-[#8745FE] h-16 w-16">
                  <svg
                    width="22"
                    height="19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillule="evenodd"
                      clipRule="evenodd"
                      d="M7.304.324h-.037c-1.097 0-1.972 0-2.68.058-.724.06-1.347.185-1.92.48A4.908 4.908 0 0 0 .534 3.014C.24 3.592.117 4.22.058 4.951 0 5.664 0 6.547 0 7.654V10.98c0 1.106 0 1.99.058 2.702.059.732.183 1.36.475 1.937a4.908 4.908 0 0 0 2.135 2.153c.572.294 1.195.42 1.92.48.707.058 1.582.058 2.679.058h3.298c1.097 0 1.973 0 2.68-.058.725-.06 1.347-.186 1.92-.48A4.908 4.908 0 0 0 17.3 15.62c.245-.486.372-1.007.44-1.596l1.14.862c1.229.93 2.982.045 2.982-1.504v-8.13c0-1.549-1.753-2.433-2.982-1.503l-1.14.861c-.068-.588-.195-1.11-.44-1.595A4.908 4.908 0 0 0 15.164.861c-.572-.294-1.194-.419-1.92-.479-.706-.058-1.582-.058-2.679-.058H7.304Zm10.528 7.33V6.777c0-.048.023-.093.06-.122l2.016-1.524a.151.151 0 0 1 .241.122v8.13a.151.151 0 0 1-.241.121l-2.015-1.524a.15.15 0 0 1-.06-.12V11.047m0-3.393V10.98M16.12 7.69c0-1.152-.001-1.965-.053-2.599-.05-.624-.146-1-.293-1.293A3.187 3.187 0 0 0 14.387 2.4c-.29-.149-.663-.245-1.282-.296-.629-.052-1.434-.052-2.577-.052H7.304c-1.142 0-1.948 0-2.577.052-.619.051-.991.147-1.282.296A3.187 3.187 0 0 0 2.06 3.8c-.148.292-.244.668-.294 1.292-.052.635-.052 1.447-.052 2.6v3.251c0 1.153 0 1.965.052 2.6.05.624.146 1 .294 1.292.304.603.79 1.092 1.386 1.4.29.148.663.245 1.282.296.63.052 1.435.052 2.577.052h3.224c1.143 0 1.948 0 2.577-.052.62-.051.992-.148 1.282-.297a3.187 3.187 0 0 0 1.387-1.399c.148-.292.243-.668.293-1.292.052-.635.052-1.447.052-2.6V7.691Z"
                      fill="#fff"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className=" mt-3 ">
                <h1 className=" text-center font-semibold text-[24px] text-[#2e2c34]">
                  Record a testimonial. Relax, you got this!
                </h1>
                <div className=" flex justify-center">
                  {" "}
                  <p className="   text-center  w-[420px]  text-[#6c687d]  text-[14px] font-semibold">
                    Don't worry, you get the chance to rewatch or redo your
                    video before you send it in!
                  </p>
                </div>
              </div>
              <div className=" border-[1px]  mt-1 p-3 sm:p-[35px]  rounded-[20px] border-[#ececec] bg-[#fafafc]">
                <h3 className=" text-base text-[#2e2c34] font-semibold flex items-center">
                  {" "}
                  <HiArrowLeft className="  text-xl text-[#6c687d] mr-2" />
                  What you could mention:
                </h3>
                <ul className="text-[14px] text-[#6c687d] my-10">
                  <li className=" list-disc list-inside font-medium">
                    How has our contribution helped you out? How is your
                    experience working with us?
                  </li>
                </ul>
                <div className=" grid grid-cols-3 mt-4 gap-3 sm:gap-10">
                  <div className="border-[1px]  flex-col flex sm:flex-row justify-center gap-2 items-center   p-[5px]  text-[12px] text-[#2e2c34] font-semibold  rounded-[5px] border-[#ececec]">
                    <svg
                      width="13"
                      height="21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M.56 5.934c.121-1.595.737-2.843 1.846-3.744C3.516 1.289 4.954.838 6.722.838c1.179 0 2.193.217 3.042.65.867.416 1.517.988 1.95 1.716.45.728.676 1.551.676 2.47 0 1.075-.312 2.002-.936 2.782-.607.78-1.404 1.283-2.392 1.508v.13c1.127.277 2.02.823 2.678 1.638.659.815.988 1.88.988 3.198 0 .988-.225 1.88-.676 2.678-.45.78-1.127 1.395-2.028 1.846-.901.45-1.985.676-3.25.676-1.837 0-3.345-.477-4.524-1.43C1.07 17.73.413 16.36.274 14.592h2.288c.121 1.04.546 1.89 1.274 2.548.728.659 1.699.988 2.912.988 1.213 0 2.132-.312 2.756-.936.641-.641.962-1.465.962-2.47 0-1.3-.433-2.236-1.3-2.808-.867-.572-2.175-.858-3.926-.858h-.598V9.08h.624c1.595-.017 2.8-.277 3.614-.78.815-.52 1.222-1.317 1.222-2.392 0-.919-.303-1.655-.91-2.21-.59-.555-1.439-.832-2.548-.832-1.075 0-1.941.277-2.6.832-.659.555-1.049 1.3-1.17 2.236H.56Z"
                        fill="#F7A6EE"
                      ></path>
                    </svg>
                    minutes max.
                  </div>
                  <div className="border-[1px] flex-col flex sm:flex-row justify-center gap-2 items-center   p-[5px]  text-[12px] text-[#2e2c34] font-semibold   rounded-[5px] border-[#ececec]">
                    <svg
                      width="29"
                      height="29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.291 6.042 7.25 10.875H2.417v7.25H7.25l6.041 4.833V6.042ZM18.777 10.223a6.042 6.042 0 0 1 0 8.542"
                        stroke="#F7A6EE"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    Quiet room.
                  </div>
                  <div className="border-[1px] flex-col flex sm:flex-row justify-center gap-2 items-center   p-[5px]  text-[12px] text-[#2e2c34] font-semibold   rounded-[5px] border-[#ececec]">
                    <svg
                      width="29"
                      height="29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.5 20.542a6.042 6.042 0 1 0 0-12.084 6.042 6.042 0 0 0 0 12.084ZM14.5 1.208v2.417M14.5 25.375v2.417M5.1 5.1l1.715 1.715M22.185 22.185l1.716 1.716M1.208 14.5h2.417M25.375 14.5h2.417M5.1 23.9l1.715-1.715M22.185 6.815l1.716-1.716"
                        stroke="#F7A6EE"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    {count}
                    Brightly lit.
                  </div>
                </div>
                <div className=" mt-10  cursor-pointer  relative  rounded-[10px]">
                  {count < 1 && (
                    <div className=" absolute top-2 left-2 flex items-center gap-3">
                      <div className=" bg-[#f55] w-3 h-3 rounded-full"></div>{" "}
                      <p className=" text-white">
                        {" "}
                        {minutes}:{remainingSeconds < 10 ? "0" : ""}
                        {remainingSeconds}
                      </p>
                    </div>
                  )}
                  <div className="  absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 ">
                    <div
                      className={` ${
                        count < 1 && "hidden"
                      } font-bold   text-6xl text-white`}
                    >
                      {count}
                    </div>
                  </div>
                  <div
                    onClick={startCountdown}
                    className={` ${
                      recordStart && "hidden"
                    } border-[8px] absolute left-3 bottom-9   z-50  flex justify-center items-center  border-[#9e989b]  text-white  tracking-[4px]  text-[12px]    rounded-full bg-[#f55] h-16 w-16`}
                  >
                    REC
                  </div>
                  {recordStart && (
                    <div
                      onClick={stopRecording}
                      className={` absolute left-3 bottom-9  z-50   flex justify-center items-center bg-[#9e989b]    tracking-[4px]  text-[12px]  rounded-full     h-16 w-16 `}
                    >
                      <div className="bg-[#f55] w-8 h-8"></div>
                    </div>
                  )}
                  <Webcam ref={webcamRef} className="w-full h-full" />
                </div>
              </div>
              {recordedVideoUrl && (
                <div>
                  <video controls width="640" height="480">
                    <source src={recordedVideoUrl} type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                  {/* <button onClick={handleDownload}>Download Video</button> */}
                </div>
              )}
              {vedio && (
                <>
                  {" "}
                  <button className="bg-[#8645FF] text-white  rounded-md w-full py-3 mt-14 font-semibold text-[14px]">
                    Continue to last step!
                  </button>
                  <button className=" border-[1px] border-[#ececec]   rounded-md w-full py-3 mt-5 font-semibold text-[14px] shadow-md text-[#2e2c34]">
                    Delete video and start over.
                  </button>{" "}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VedioCall;
