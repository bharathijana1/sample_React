import React from 'react'
import { useState } from 'react'
import Questions from './Questions';
export const QuizIndex = () => {
    const [questionindex, setquestionindex] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false)
    const currentquestion = Questions[questionindex];

    const selectOption = (i) => {
        if(currentquestion.answer === i){
            setScore(score + 1);
        }
        const nextQuestion = questionindex + 1;
        if(nextQuestion < Questions.length){
            setquestionindex(questionindex + 1);
        }
        else{
            setShowScore(true)
            
        }
    }
    const reset = () =>{
        setquestionindex(0);
        setScore(0);
        setShowScore(false)
    }


  return (
    <>        
    <h3 className='text-center p-3'>Quiz Game</h3>
    <div className="quiz_app d-flex justify-content-center align-item-center p-2 mt-5">
            {showScore ? (
                <>
                <div className="score text-center">
                <h2>Your score is: {score} </h2>
                <button className='btn btn-warning text-center m-3' onClick={reset}>Restart</button>
                </div>

                </>
                
            ) : (
                <div className="question_e">
            <p className='text-center p-2'>Question {currentquestion.id}</p>
            <h2 className='text-center p-3'>{currentquestion.question}</h2>
            {currentquestion.options.map((option,index)=>{
                return <button className='btn btn-info p-2 m-2' onClick={() => selectOption(index)}>{option}</button>

            })}

        </div>
            )}

    </div>
        
    </>
  )
}
