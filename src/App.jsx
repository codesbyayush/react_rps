import "./App.css";

import Header from "./components/Header.jsx";
import StartGame from "./components/StartGame.jsx";
import Selected from "./components/Selected.jsx";

import {Route, Routes } from "react-router-dom";
import HelpPortal from "./components/HelpPortal";
import { useState } from "react";

function App() {

  const [score, setScore] = useState(0);
  const [open, setOpen] = useState(true);

  const modal = () => {
    setOpen(!open);
  }

  

  return (
    <>
      <div className="w-[1050px] grid place-items-center">
        <Header  score={score}/>
        <Routes>
          <Route path="/" element={<StartGame/>}/>
          <Route path="/Selected" element={<Selected setscore={setScore}/>}/>
        </Routes>
      </div>


      <div>
        <button 
        onClick={modal}
        className="text-white border-white border-2 px-8 py-2 rounded-lg fixed bottom-8 right-8">
          RULES
        </button>
        <HelpPortal opened = {open} setopen = {setOpen}/>
      </div>
    </>
  );
}

export default App;
