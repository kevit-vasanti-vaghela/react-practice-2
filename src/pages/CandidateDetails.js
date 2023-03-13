import React from 'react'
import { useNavigate } from 'react-router-dom'

const CandidateDetails = () => {
  const navigate = useNavigate();
  const startTestHandler = (e) => {
    navigate('/questions')
  }
  return (
    <div>
      <form>
        <div className='form-control'>
          <label>Name:</label>
          <input type="text" />
        </div>
        <div className='form-control'>
          <label>Gender:</label>
          <input type="radio" id="gender" name="gender" value="male"/> Male    
          <input type="radio" id="gender" name="gender" value="female"/> Female 
        </div>
        <div className='form-action'>
          <button onClick={startTestHandler}>Start</button>
        </div>
           
      </form>
    </div>
  )
}

export default CandidateDetails
