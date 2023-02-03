import { useContext } from "react";
import { QuizContext } from "../context/quizHolder";

const Start = ()=>{
    const {setStart} = useContext(QuizContext)
    return(
        <div className="startt">
        <div className='startmain'>
            <button onClick={() => setStart(true)} className="startbtn">Start</button>
        </div>
        </div>
    )
}

export default Start;