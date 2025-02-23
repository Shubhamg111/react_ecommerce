import React from 'react'
import { useDispatch } from 'react-redux'

const StateChanger = () => {
    const dispatch = useDispatch()

    const add=()=>{
        dispatch({type:'ADD'})
    }

    const remove=()=>{
        dispatch({type:'REMOVE'})
    }
    
  return (
    <div>
      
      <button onClick={add}>Add</button>
      <button onClick={remove}>Remove</button>
    </div>
  )
}

export default StateChanger
