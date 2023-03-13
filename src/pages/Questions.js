import React from 'react'
import QuestionList from '../components/QuestionList'

const Questions = () => {

  const questions = [
    {
      que_no: '1',
      text: "What is the capital of America?",
      options: [
        { text: "New York City", isCorrect: false },
        { text: "Boston", isCorrect: false },
        { text: "Santa Fe", isCorrect: false },
        { text: "Washington DC", isCorrect: true },
      ],
    },
    {
      que_no: '2',
      text: "What year was the Constitution of America written?",
      options: [
        { text: "1787", isCorrect: true },
        { text: "1776", isCorrect: false },
        { text: "1774", isCorrect: false },
        { text: "1826", isCorrect: false },
      ],
    },
  ];
    return (
    <>
      <h1>Question List</h1>
      <QuestionList questions={questions}/>
    </>
  )

}

export default Questions
