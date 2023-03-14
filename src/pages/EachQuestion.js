import React, { useState, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import QuestionsContext from '../context/QuestionsContext';
import PageContent from '../ui/PageContent';
import classes from './EachQuestion.module.css'

const EachQuestion = () => {
    const { questions, calculateScore,isActive, setClicked } = useContext(QuestionsContext)
    
    const params = useParams();
    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
  
   
     let id = params.questionId

    //  const calculateScore = (isCorrect) => {
    //     if(isCorrect) {
    //         setScore((prevState) => prevState + 1)
    //         console.log('SCORE',score)
    //     }
    //     navigate(`/questions/${+id+1}`)
    // }
    
  return (
    <PageContent>
      <h1>{params.questionId}</h1>
      <h2>{questions[id-1].text}</h2>
      <ul className={classes.list}>
       {
        questions[id-1].options.map((op,idx) => (
            <li 
              className={!isActive ? classes.item : classes.active} 
              key={idx} 
              onClick={() => calculateScore(op.isCorrect, op.op_no)}>{op.text}</li>
        ))
       }
      </ul>
      <div  className={classes.buttonDiv} style={{display: 'flex', justifyContent: 'space-between', width: '100px'}}>
        <Link to='..' relative='path' onClick={()=>setClicked(false)}>Back</Link>
     
        <Link to='/report' >Submit</Link>
      </div>
     
    </PageContent>
  )
}

export default EachQuestion
