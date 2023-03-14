import React from 'react'
import { useNavigate } from 'react-router-dom'
import PageContent from '../ui/PageContent';
import classes from './CandidateDetails.module.css'
import {useState } from 'react';

const CandidateDetails = () => {
  const [name,setName] = useState('')
  const [gender,setGender] = useState('')
  // const gender =  useRef();
  // const [nameIsValid, setNameIsValid] = useState(false)
  // const [genderIsValid, setGenderIsValid] = useState(false)
  // const [formIsValid, setFormIsValid] = useState(false)

  const navigate = useNavigate();
  const startTestHandler = (e) => {
    navigate('/questions')
    
  }
  
const nameIsValid = name.trim() !== ''
const genderIsValid = gender!== ''
const formIsValid = nameIsValid && genderIsValid;
const nameInputHandler = (e) => {
  setName(e.target.value)
}
const genderInputHandler1 = (e) => {
  setGender(e.target.value)
}
const genderInputHandler2 = (e) => {
  setGender(e.target.value)
}


 
  
  return (
    <PageContent>
      <form  className={classes['candidate-form']}>
        <div className={classes['form-control']}>
          <label>Name</label>
          <input  type="text" onChange={nameInputHandler} value={name}/>
        </div>
        <div className={classes['form-control']}>
          <label>Gender</label>
          <input type="radio" id="gender" name="gender" onChange={genderInputHandler1} value="male" /> Male    
          <input type="radio" id="gender" name="gender" value="female" onChange={genderInputHandler2}/> Female 
        </div>
        <div className={classes['form-action']}>
          <button  disabled={!formIsValid} onClick={startTestHandler}>Start</button>
        </div>
           
      </form>
      {console.log(name.current)}
    </PageContent>
  )
}

export default CandidateDetails
