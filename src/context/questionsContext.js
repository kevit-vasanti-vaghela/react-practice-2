import React, { createContext, useState } from 'react'

const QuestionsContext = createContext()

export function QuestionsProvider({ children }) {
    const [clicked, setClicked] = useState(false);
  const [questions, setQuestions] = useState([ 
    {
    que_no: '1',
    text: " What is ReactJS?",
    options: [
      { 
         op_no: '1', text: " Open-source JavaScript back-end library", isCorrect: false 
      },
      { 
        op_no: '2',
          text: " JavaScript front-end library to create a database", 
          isCorrect: false 
      },
      { op_no: '3',
          text: "Free and open-source JavaScript front-end library", 
          isCorrect: true 
      },
      { op_no: '4',text: " None of the mentioned", isCorrect: false },
    ],
  },
  {
    que_no: '2',
    text: "Which of the following acts as the input of a class-based component?",
    options: [
      { op_no: '1',text: "Class", isCorrect: false },
      { op_no: '2',text: "Props", isCorrect: true },
      { op_no: '3',text: "Factory", isCorrect: false },
      { op_no: '4',text: "None of the mentioned", isCorrect: false },
    ]
  },
  {
      que_no: '3',
      text: "React.js is written in which of the following language?",
      options: [
        { op_no: '1',text: "C", isCorrect: false },
        { op_no: '2',text: "C++", isCorrect: false },
        { op_no: '3',text: "JavaScript", isCorrect: true },
        { op_no: '4',text: "Java", isCorrect: false },
      ]
    },
    {
      que_no: '4',
      text: "How many elements can a valid react component return?",
      options: [
        { op_no: '1',text: "React doesn’t return element", isCorrect: false },
        { op_no: '2',text: "1 Element", isCorrect: true },
        { op_no: '3',text: "More than 1 element", isCorrect: false },
        { op_no: '4',text: " None of the mentioned", isCorrect: false },
      ]
    },
    {
      que_no: '5',
      text: "Which of the following command is used to Install create-react-app?",
      options: [
        { 
            op_no: '1',
          text: " npm install create-react-app", 
          isCorrect: false 
        },
        { 
            op_no: '2',
          text: "npm install -f create-react-app", 
          isCorrect: false 
        },
        { 
            op_no: '3',
          text: "npm install -g create-react-app", 
          isCorrect: true 
        },
        { 
            op_no:'4',
          text: "install -g create-react-app", 
          isCorrect: false 
        },
      ]
    }])
   const [score, setScore] = useState(0);
   const [currentQuestion, setCurrentQuestion] = useState(0);
   const calculateScore = (isCorrect,number) => {
        if(isCorrect && !clicked) {
            setClicked(true)
           console.log('NUM',number)
            setScore((prevState) => prevState + 1)
            if(isCorrect && clicked) {
                setScore(prevState => prevState)
            }
            console.log(score)
        }
        
   }

   const resetScore = () => {
        setScore(0)
   }

   const values = {
    score,
    setScore,
    questions,
    calculateScore,
    resetScore,
    setClicked
   }

   return (
    <QuestionsContext.Provider value={values}>
        {children}
    </QuestionsContext.Provider>
)
}

export default QuestionsContext


