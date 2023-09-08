import PropTypes from "prop-types";
import { useState, useCallback } from "react";
import { classNames } from "../helpers/classNames";
import { HiChevronRight,HiChevronDown } from "react-icons/hi2";



export const Accordion = ({ data, keyAttr, valAttr, height= 200, width="100%" }) => {
  const [current, setCurrent] = useState(null);

  const select = useCallback(
    (i) => {
      if (current === i) return setCurrent(null);
      setCurrent(i);
    },
    [current]
  );

  return (
    <div
      className="  border   border-[#E7EBF0]   overflow-hidden rounded-[9px] bg-zapp-white   "
      style={{ width }}
    >
      {data.map((item, index) => (
        <div className="bg-white text-black " key={index}>
          <div
            className="text-xl cursor-pointer  border-[#E7EBF0]   flex justify-between items-center px-3  py-4 "
            onClick={() => select(index)}
          >
            <div>
              <h2 className=" text-base  font-bold capitalize">{item[keyAttr]}</h2>
            </div>
            <div>
              <span className=" text-[2rem]">
                {current === index ? <HiChevronDown /> : <HiChevronRight/> }
              </span>
            </div>
          </div>
          <div
            className={classNames(
              "text-base transition-all ease-in-out duration-500  font-medium    border-b-[0.1rem] border-[#E7EBF0]  overflow-auto ",
              current === index ? " p-4 " : "p-0"
            )}
            style={{
              maxHeight: current === index ? height : 0,
            }}
          >
            {item[valAttr]}
          </div>
        </div>
      ))}
    </div>
  );
};

Accordion.propTypes = {
  data: PropTypes.array,
  keyAttr: PropTypes.string,
  valAttr: PropTypes.string,

};

