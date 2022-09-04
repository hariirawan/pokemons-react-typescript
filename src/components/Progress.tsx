import React from "react";

export default function Progress(props: any) {
  return (
    <div className="w-full bg-gray-300  rounded-l-full h-3 rounded-r-full  ">
      <div
        className="bg-blue-600 text-xs font-medium text-blue-100 text-center  leading-none rounded-l-full rounded-r-full "
        style={{ width: `${props.value}%` }}
      >
        {props.value}%
      </div>
    </div>
  );
}
