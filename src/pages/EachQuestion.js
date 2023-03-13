import React, { useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

const EachQuestion = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
  
    const questions = [
        {
          que_no: '1',
          text: " What is ReactJS?",
          options: [
            { 
                text: " Open-source JavaScript back-end library", isCorrect: false 
            },
            { 
                text: " JavaScript front-end library to create a database", 
                isCorrect: false 
            },
            { 
                text: "Free and open-source JavaScript front-end library", 
                isCorrect: true 
            },
            { text: " None of the mentioned", isCorrect: false },
          ],
        },
        {
          que_no: '2',
          text: "Which of the following acts as the input of a class-based component?",
          options: [
            { text: "Class", isCorrect: false },
            { text: "Props", isCorrect: true },
            { text: "Factory", isCorrect: false },
            { text: "None of the mentioned", isCorrect: false },
          ],
        },
        {
            que_no: '3',
            text: "React.js is written in which of the following language?",
            options: [
              { text: "C", isCorrect: false },
              { text: "C++", isCorrect: false },
              { text: "JavaScript", isCorrect: true },
              { text: "Java", isCorrect: false },
            ],
          },
          {
            que_no: '4',
            text: "How many elements can a valid react component return?",
            options: [
              { text: "React doesn’t return element", isCorrect: false },
              { text: "1 Element", isCorrect: true },
              { text: "More than 1 element", isCorrect: false },
              { text: " None of the mentioned", isCorrect: false },
            ],
          },
          {
            que_no: '5',
            text: "Which of the following command is used to Install create-react-app?",
            options: [
              { 
                text: " npm install create-react-app", 
                isCorrect: false 
            },
              { 
                text: "npm install -f create-react-app", 
                isCorrect: false 
            },
              { 
                text: "npm install -g create-react-app", 
                isCorrect: true 
            },
              { 
                text: "install -g create-react-app", 
                isCorrect: false 
            },
            ],
          },
      ];
     let id = params.questionId

     const calculateScoreHandler = (isCorrect) => {
        if(isCorrect) {
            setScore((prevState) => prevState + 1)
            console.log('SCORE',score)
        }
        navigate(`/questions/${+id+1}`)
    }
    
  return (
    <div>
      <h1>{params.questionId}</h1>
      <h2>{questions[id-1].text}</h2>
      <ul>
       {
        questions[id-1].options.map((op,idx) => (
            <li key={idx} onClick={() => calculateScoreHandler(op.isCorrect)}>{op.text}</li>
        ))
       }
      </ul>
      <div style={{display: 'flex', justifyContent: 'space-between', width: '100px'}}>
        <Link to='..' relative='path'>Back</Link>
     
        <Link to='/report'>Submit</Link>
      </div>
     
    </div>
  )
}

export default EachQuestion
