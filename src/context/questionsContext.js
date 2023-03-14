import React, { createContext, useState } from 'react'

const QuestionsContext = createContext()

export function QuestionsProvider({ children }) {

  const [questions, setQuestions] = useState([ 
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
    ]
  },
  {
      que_no: '3',
      text: "React.js is written in which of the following language?",
      options: [
        { text: "C", isCorrect: false },
        { text: "C++", isCorrect: false },
        { text: "JavaScript", isCorrect: true },
        { text: "Java", isCorrect: false },
      ]
    },
    {
      que_no: '4',
      text: "How many elements can a valid react component return?",
      options: [
        { text: "React doesn’t return element", isCorrect: false },
        { text: "1 Element", isCorrect: true },
        { text: "More than 1 element", isCorrect: false },
        { text: " None of the mentioned", isCorrect: false },
      ]
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
      ]
    }])
   const [score, setScore] = useState(0);
   const [currentQuestion, setCurrentQuestion] = useState(0);
   const calculateScore = (isCorrect) => {
        if(isCorrect) {
            setScore((prevState) => prevState + 1)
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
    resetScore
   }

   return (
    <QuestionsContext.Provider value={values}>
        {children}
    </QuestionsContext.Provider>
)
}

export default QuestionsContext


