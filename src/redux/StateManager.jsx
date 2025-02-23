import React, { use } from 'react'
import { useSelector } from 'react-redux'
import StateChanger from './StateChanger'

const StateManager = () => {
    const state = useSelector((store) => store.cartData)
    const studentInfo = useSelector(store => store.studentData)
  return (
    <div>

        <h1>The initial Cart value is {state.cart}</h1>
        <StateChanger/>

        <h2>The student name is {studentInfo.name}</h2>


      
    </div>
  )
}

export default StateManager
