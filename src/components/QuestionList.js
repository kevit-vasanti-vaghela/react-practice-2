import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import QuestionsContext from '../context/QuestionsContext'

const QuestionList = () => {
  const { questions } = useContext(QuestionsContext)
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
