import React from 'react'

const Question = ({ question }) => {
  return (
    <div>
      <h2>{question.text}</h2>
      <ul>
        {question.options.map((que_op) => 
            <li>{que_op}</li>
        )}
      </ul>
    </div>
  )
}

export default Question
