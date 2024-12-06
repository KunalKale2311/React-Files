import { Button } from '@mui/material'
import React, { useState } from 'react'

const MyCounter = () => {

    let friends =["Kunal","Akshay","Prem","Om","Pratik"]

    const[currentCount, setCurrentCount] = useState(0)

    const increment =()=> {
        setCurrentCount(currentCount + 1)
    }
    const decrement =()=> {
            setCurrentCount(currentCount - 1)
    }
    
  return ( 
    <>
    <div>
        <Button variant='contained' onClick={()=>{
            decrement()
        }}>Decre</Button>
       <h1>{currentCount}</h1> 
       <h1>{friends[currentCount]}</h1>
        <Button variant='contained'onClick={()=>{
                increment()
        }}>Incre</Button>
    </div>
    
    </>
  )
}

export default MyCounter