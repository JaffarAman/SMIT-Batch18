import React, { useEffect } from 'react'

const Child2 = () => {

  useEffect(() => {
    console.log("Child 2 mounting...")

  }, [])


  return (
    <div>
      <h1>CHILD 2</h1>
    </div>
  )
}

export default Child2
