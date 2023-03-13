import React from 'react'
import { Link } from 'react-router-dom'
import { questions } from '../context/questionsContext'

const QuestionList = ({ questions }) => {
  return (
    <div>
      <ul>
        {
            questions.map(question => (
               <li key={question.text}><Link to={question.que_no}>{question.text}</Link></li>
            ))
        }
      </ul>
    </div>
  )
}

export default QuestionList
