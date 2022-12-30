import { TEXT } from "public/util/colors";
import React from "react";
import Trans from "public/trans/hooks/Trans";

export default function Privacy({ onChange }) {
  const transSignup = Trans().register;
  return (
    <div className="items-center flex mb-3">
      <label className="inline-flex items-center cursor-pointer">
        <input
          id="checkbox"
          type="checkbox"
          onChange={onChange}
          className={`form-checkbox border-0 rounded border-[${TEXT}] w-5 h-5 ease-linear transition-all duration-150`}
        />
        <span className={`ml-2 text-sm font-semibold text-[${TEXT}]`}>
          {transSignup.policy.read}{" "}
          <a
            href="#pablo"
            className={`text-[${TEXT}] font-bold`}
            // onClick={(e) => e.preventDefault()} --handle logic open privavy display
          >
            {transSignup.policy.rules}
          </a>
        </span>
      </label>
    </div>
  );
}
