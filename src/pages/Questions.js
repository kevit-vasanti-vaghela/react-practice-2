import React, { useContext } from 'react'
import QuestionList from '../components/QuestionList'
import QuestionsContext from '../context/QuestionsContext'
import PageContent from '../ui/PageContent'

const Questions = () => {
    const { questions } = useContext(QuestionsContext)
 
    return (
   
      
      <QuestionList questions={questions}/>
    )
 

}
export default Questions