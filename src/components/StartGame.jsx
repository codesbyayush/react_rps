import React from "react";
import Rock from "./Rock";
import Paper from "./Paper";
import Scissor from "./Scissor";
import { Link } from "react-router-dom";

export default function StartGame() {
  return (
    <div className="w-[400px] relative mt-24 icon-div h-[400px]">
      <Link to="Selected" state = {{from : 'paper'}}>
        <button className="absolute top-[-100px] left-[-50px]">
          <Paper className="" />
        </button>
        </Link>
        <Link to="Selected" state = {{from : 'scissor'}}>
        <button className="absolute right-[-50px] top-[-100px]">
          <Scissor className="" />
        </button>
        </Link>
        <Link to="Selected" state = {{from : 'rock'}}>
        <button className=" absolute bottom-[30px] right-[100px]">
          <Rock className="" />
        </button>
        </Link>
      
    </div>
  );
}
