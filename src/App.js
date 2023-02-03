import './App.css';
import Quiz from './component/quiz';
import Result from './component/result';
import Start from './component/start';
import {QuizContext} from "./context/quizHolder"; 
import {useContext} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const {start,exit} = useContext(QuizContext);
  return (
      <>
      {
        exit === false
        ?
        <>
        {
          start === true
          ?
          <Quiz/>
          :
        <Start/>
        }
      </>
        :
        <Result/>
      }
      </>
  );
}

export default App;
