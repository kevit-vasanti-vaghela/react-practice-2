import React, { useContext } from 'react'
import QuestionsContext from '../context/QuestionsContext'
import { Link } from 'react-router-dom'

const Report = () => {
  const { score, resetScore } = useContext(QuestionsContext)
  
  return (
    <div>
      {score === 5 ? 'Congratualtions' : 'Try Again'}
      <h1>Result : {score} out of 5</h1>
      <Link to='/' onClick={resetScore}>Go Back to Home</Link>
    </div>
  )
}

export default Report
