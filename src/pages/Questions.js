import React, { useContext } from 'react'
import QuestionList from '../components/QuestionList'
import QuestionsContext from '../context/QuestionsContext'

const Questions = () => {
    const { questions } = useContext(QuestionsContext)
 
    return (
    <>
      <h1>Question List</h1>
      <QuestionList questions={questions}/>
    </>
    )
 

}
export default Questions