import React, { useEffect, useState } from 'react'

const Counterjs = () => {

    const [num, setNum] = useState(0)
    // where num is a variable that store the value and setNum is a function that update the value of num

    const decrease=()=>{
        if (num > 0){
            setNum(num-1)
        }
    }

    useEffect(()=>{
        alert("State Changed")
    }, [])

  return (
    <div className='m-auto col-4'>

    <h1 className='text-center'>This initial state is {num}</h1>

    {
        num < 10 && <button className='btn btn-primary me-3' onClick={()=>setNum(num+1)}>Increase</button>
    }

        <button className='btn btn-success' onClick={()=>setNum(0)}>Reset</button>
    

    {
        num > 0 && <button className='btn btn-danger' onClick={decrease}>Decrease</button>
    }

    
      
    </div>
  )
}

export default Counterjs
