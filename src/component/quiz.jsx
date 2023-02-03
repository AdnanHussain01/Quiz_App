import { useContext, useState } from "react"
import { QuizContext } from "../context/quizHolder";

export default function Quiz(){
    const [current , setCurrent] = useState(0);
    return(
        <div className="quizstart">
            <Box current={current} next={setCurrent} />           
        </div>
    )
}

const Box = ({current , next}) =>{
    const {quizzz ,correct ,setCorrect ,setExit} = useContext(QuizContext);
    const [ans , setAns] = useState("");

    const saveHandler = () =>{
        if(quizzz[current].correct === ans){
            setCorrect(correct+1);
        }
        setAns("");
        if(current+1 === quizzz.length){
            setExit(true)
        }else{
            next(current+1);
        }
    } 
    return(
        <div className="Box">
            <div className="p-2 text-4x1"> {current+1}) {quizzz[current].question} </div>
            <div className="d-flex">
                <div className="option">
                <div className={`p-2 ${ans === "a" ? 'forcolor' : ''} border options`} onClick={() => setAns("a")}>{quizzz[current].a}</div>
                <div className={`p-2 ${ans === "b" ? 'forcolor' : ''} border options`} onClick={() => setAns("b")}>{quizzz[current].b}</div>
                </div>
                <div className="option">
                <div className={`p-2 ${ans === "c" ? 'forcolor' : ''} border options`} onClick={() => setAns("c")}>{quizzz[current].c}</div>
                <div className={`p-2 ${ans === "d" ? 'forcolor' : ''} border options`} onClick={() => setAns("d")}>{quizzz[current].d}</div>
                </div>
            </div>
            <div className="bottombtn">
                <div className='buttons1' onClick={()=> setAns("")}>Reset</div>
                <div className='buttons2' onClick={saveHandler}>Next</div>
                <div className='buttons3' onClick={()=> setExit(true)}>Exit</div>
            </div>

        </div>
    )
}