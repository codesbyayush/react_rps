import ReactDom from "react-dom";

import React from "react";
import Rules from "./Rules";

export default function HelpPortal({ opened, setopen }) {
  if (opened) {
    return null;
  }
  return ReactDom.createPortal(
    <>
      <div className="absolute top-0 left-0 bg-black bg-opacity-70 h-screen w-screen z-10"></div>
      <div className="absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-2/4 z-10
                      w-96 h-[530px] bg-white rounded-2xl overflow-hidden">
        <Rules setopen={setopen}/>
      </div>
    </>,
    document.getElementById("portal")
  );
}
