import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import QuestionsContext from '../context/QuestionsContext'
import PageContent from '../ui/PageContent'
import classes from './QuestionList.module.css'

const QuestionList = () => {
  const { questions } = useContext(QuestionsContext)
  return (
    <PageContent title='Questions'>
      <ul className={classes.list}>
        {
            questions.map(question => (
               <li className={classes.item} key={question.text}><Link to={question.que_no}>{question.text}</Link></li>
            ))
        }
      </ul>

    </PageContent>
  )
}

export default QuestionList
