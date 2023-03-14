import React, { useState, useContext } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import QuestionsContext from '../context/QuestionsContext';

const EachQuestion = () => {
    const { questions, calculateScore } = useContext(QuestionsContext)
    const params = useParams();
    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
  
   
     let id = params.questionId

    //  const calculateScore = (isCorrect) => {
    //     if(isCorrect) {
    //         setScore((prevState) => prevState + 1)
    //         console.log('SCORE',score)
    //     }
    //     navigate(`/questions/${+id+1}`)
    // }
    
  return (
    <div>
      <h1>{params.questionId}</h1>
      <h2>{questions[id-1].text}</h2>
      <ul>
       {
        questions[id-1].options.map((op,idx) => (
            <li key={idx} onClick={() => calculateScore(op.isCorrect)}>{op.text}</li>
        ))
       }
      </ul>
      <div style={{display: 'flex', justifyContent: 'space-between', width: '100px'}}>
        <Link to='..' relative='path'>Back</Link>
     
        <Link to='/report' >Submit</Link>
      </div>
     
    </div>
  )
}

export default EachQuestion
