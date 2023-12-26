"use client";
import {
  HiArrowLeft,
  HiPause,
  HiOutlinePlay,
  HiOutlineSpeakerWave,
  HiOutlineEllipsisVertical,
  HiOutlineViewfinderCircle,
} from "react-icons/hi2";
import { useEffect, useState } from "react";
import Toogle from "../components/toogle/page";
import Link from "next/link";

const VedioCall = () => {
  return (
    <>
      <div className=" bg-[#F9F9F8]  flex justify-center items-center mt-10">
        <Link href={"/vediorecord"}>
          <button className=" bg-blue-500 text-white px-4 py-2 rounded-md">
            start vedio record
          </button>
        </Link>
      </div>
    </>
  );
};

export default VedioCall;
