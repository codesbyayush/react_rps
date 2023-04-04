import React, { useEffect } from "react";
import Rock from "./Rock";
import Paper from "./Paper";
import Scissor from "./Scissor";
import "./styless.css";
import { useLocation, Link } from "react-router-dom";

export default function Selected({ setscore}) {
  const location = useLocation();
  const userChoice = location.state.from;

  const options = ["rock", "paper", "scissor"];
  const comChoice = options[Math.floor(Math.random() * 3)];

  let res = "";
  if (comChoice === userChoice) {
    res = "draw"
  } else if (
    (comChoice === "rock" && userChoice === "paper")||(comChoice === "paper" && userChoice === "scissor")||(comChoice === "scissor" && userChoice === "rock")
  ) {
    res = "win";
  } else {
    res = "lose";
  }

  useEffect(() => {
    if (res === "win") {
      setscore((prev) => prev + 1);
    } else if(res === "lose") {
      setscore((prev) => prev - 1);
    }
  }, []);

  return (
    <div>
      <div className="w-[800px] grid grid-flow-col grid-cols-2 mt-12 ">
        <div className="grid place-items-center translate-left">
          <h2 className="font-bold text-white text-2xl uppercase">
            you picked
          </h2>
          <div className="scale-[1.3] mt-[5.5rem]">
            {userChoice === "rock" ? (
              <Rock />
            ) : userChoice === "paper" ? (
              <Paper />
            ) : userChoice === "scissor" ? (
              <Scissor />
            ) : null}
          </div>
        </div>

        <div className="text-center my-auto show-up ">
          <div className="opacity-0 text-6xl uppercase ">Status</div>
          <div>
            <h1 className="text-5xl font-bold m-4 text-white uppercase">
              You {res}
            </h1>
            <Link to="/">
              <button className="bg-white text-red-500 p-4 m-4 rounded-xl w-7/12 text-xl uppercase">
                play again
              </button>
            </Link>
          </div>
        </div>

        <div className="grid place-items-center translate-right">
          <h2 className="font-bold text-white text-2xl uppercase">
            The house picked
          </h2>
          <div className="scale-[1.3] mt-[5.5rem] ">
            {comChoice === "rock" ? (
              <Rock />
            ) : comChoice === "paper" ? (
              <Paper />
            ) : comChoice === "scissor" ? (
              <Scissor />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
