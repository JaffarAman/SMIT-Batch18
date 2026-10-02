import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

const App = () => {

  // const inputRef = useRef(null)
  // const [name, setName] = useState("")
  // const [errorText, setErrorText] = useState("")


  // useEffect(() => {
  //   if (!name) return


  //   if (name.length < 8) {
  //     return setErrorText("max 8 characters")
  //   }
  //   if (name.length > 8) {
  //     return setErrorText("min 8 characters")
  //   }
  //   if (name.length === 8) {
  //     return setErrorText("")
  //   }


  // }, [name])



  // const getInputValue = () => {
  //   // console.log("inputRef", inputRef.current.value)
  //   inputRef.current.value = "Jaffar"
  // }






  // useEffect(() => {
  //   // IIFE IIFE (Immediately Invoked Function Expression)
  //   (async () => {
  //     const data = await fetch("https://api-v2.hiringmine.com/api/jobAds/all?limit=10&pageNo=1&keyWord=&category=&isPending=false&skills").then(res => res.json())

  //     console.log("data", data)

  //   })()

  // }, [])





  useEffect(() => {
    getJobData()
  }, [])


  const getJobData = async () => {
    try {
      const data = await axios.get("https://api-v2.hiringmine.com/api/jobAds/all?limit=10&pageNo=1&keyWord=&category=&isPending=false&skills")
      console.log("data", data)

    } catch (error) {
      alert("ERROR: " + error.message)
    }
  }




  //   const fetchData = async () => {
  //   try {
  //     const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}&units=metric`)
  //     console.log("response", response.data)
  //     setApiResponse(response.data)
  //   } catch (error) {
  //     console.log("error: ", error.message)
  //   }
  // }

  return (
    <div>



      {/* <input placeholder='Enter UserName' value={name} type="text" onChange={(e) => setName(e.target.value)} />

      <small style={{ color: "red" }} > {errorText} </small>


      <input ref={inputRef} type="text"
      />
      <h1>
        {name}
      </h1>
      <button onClick={getInputValue} >SUBMIT</button>



      <button onClick={() => setName("")} >Clear</button> */}
    </div>
  )
}

export default App
