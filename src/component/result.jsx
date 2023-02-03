import React , { useContext } from "react";
import { QuizContext } from "../context/quizHolder";

const Result = ()=>{
    const {correct , setExit , setStart ,quizzz} = useContext(QuizContext)
    const playAgain = ()=>{
        setExit(false);
        setStart(false);
    }
    return(
        <div className="quizend">
            <div className="Boxs">
                <h2 className="text-4x1"> {correct} are correct out of {quizzz.length} </h2>
            </div>
            <div className="backbtn">
            <button onClick={playAgain} >Back to Start</button>
            </div>
    </div>
    )
}

export default Result;