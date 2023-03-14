import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import QuestionsContext from '../context/QuestionsContext'
import PageContent from '../ui/PageContent'
import classes from './QuestionList.module.css'

const QuestionList = () => {
  const { questions } = useContext(QuestionsContext)
  const [isVisited, setIsVisited] = useState(true)
  const questionVisitedHandler = () => {
    setIsVisited(false)
  }
  return (
    <PageContent title='Questions'>
      <ul className={classes.list}>
        {
            questions.map(question => (
               <li 
                className={classes.item} 
                key={question.text}
                style={{color: !isVisited && 'black'}}
                >
                  <Link 
                    to={question.que_no} 
                    style={{color: !isVisited && 'black'}}
                    onClick={questionVisitedHandler}
                  >
                      {question.text}
                  </Link>
                </li>
            ))
        }
      </ul>

    </PageContent>
  )
}

export default QuestionList
