import React from 'react'
import { useParams } from 'react-router-dom'

const EachQuestion = () => {
    const params = useParams();
  return (
    <div>
      <h1>Each Question - {params.questionId}</h1>
    </div>
  )
}

export default EachQuestion
