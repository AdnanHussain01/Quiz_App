import React, { useState } from "react";
import { createContext } from "react";


const QuizContext = createContext();

const quizzz = [
    {
        question : "What does HTML stand for?",
        a :"Hyper Text Multiple Language",
        b :"Hyper Text Preprocessor Language",
        c :"Hyper Text Mutli Language",
        d :"Hyper Text Markup Language",
        correct : "d"
    },
    {
        
        question : "Css Stands For?",
        a :"Casecading Style Sheet",
        b :"Ram",
        c :"Java",
        d :"Hypertext markup language",
        correct : "a"
    },
    {
        
        question : "Js Stands For?",
        a :"Java Style",
        b :"Java Script",
        c :"Script",
        d :"Script Src",
        correct : "b"
    },
    {
        
        question : "Dom Stands For?",
        a :"Document Object Model",
        b :"Html",
        c :"Css",
        d :"Java",
        correct : "a"
    },
    {
        
        question : "Ram Stands For?",
        a :"For Pc",
        b :"Read Only Memory",
        c :"Random Acccess Memory",
        d :"Dom",
        correct : "c"
    }
]

export default function QuizHolder(props){
    const [start , setStart] = useState(false);  
    const [exit , setExit] = useState(false);
    const [correct ,setCorrect] = useState(0);

    return(
        <QuizContext.Provider value={{
            start,exit,setStart , setExit , quizzz , correct , setCorrect
        }}>
            {props.children}
        </QuizContext.Provider>
    )
}

export  {QuizContext};