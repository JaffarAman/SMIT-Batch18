import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { jobArr } from './jobData'

function App() {


  // const [data, setData] = useState(["Jaffar", "Sufiyan"])


  // const UIArray = data.filter((value, index) => {
  //   return <h1 key={index} > HELLO {value} </h1>
  // })

  // console.log("UIArray", UIArray)

  // console.log("jobArr", jobArr.data)



  // const [name, setName] = useState("")

  // const getUserName = () => {
  //   // console.log(document.getElementById("name").value)
  //   console.log("name state", name)

  // }


  // const setInput = () => {
  //   setName("SAYLANI!")
  // }


  const [userName, setUserName] = useState("")


  const getValue = () => {
    console.log("getValue", userName)
  }


  const setValue = () => {
    setUserName("JAFFAR AMAN")
  }

  console.log("re-render")


  const [gender, setGender] = useState("")



  const [filterPosition, setFilterPosition] = useState("")

  console.log("filterPosition", filterPosition)
  return (
    <div>
      <h1>REACT FORM!</h1>

      <select name="" id="" onChange={(e) => {
        console.log(e.target.value)
        setFilterPosition(e.target.value)
      }} >
        <option value="#" disabled selected >Select your job position</option>
        <option value="Junior">Junior</option>
        <option value="Mid-Level">Mid-Level</option>
        <option value="Senior-Level">Senior</option>
      </select>


      {
        jobArr.data.map((job, index) => {

          if (!filterPosition) {
            return (


              <div key={job._id} style={{ border: "1px solid black", padding: 5 }} >
                <h1> {index + 1}  {job.designation}</h1>
                <p> {job.companyName}  </p>
                <p> {job.position} </p>
                <p> {job.salary} </p>
              </div>
            )
          }
          return (
            filterPosition === job.position ? <div key={job._id} style={{ border: "1px solid black", padding: 5 }} >
              <h1> {index + 1}  {job.designation}</h1>
              <p> {job.companyName}  </p>
              <p> {job.position} </p>
              <p> {job.salary} </p>
            </div> : null

          )


        })
      }






      {/*  */}

      <h1>SELECT YOUR GENDER...</h1>
      <label htmlFor="">
        <input
          onChange={e => {
            // console.log("male", e.target.checked)
            setGender("male")

          }}
          type="radio" name="gender" value="male" />
        Male
      </label>

      <label htmlFor="">
        <input type="radio" name="gender" value="female"
          onChange={e => {
            // console.log("male", e.target.checked)
            // if (e.target.checked) {
            setGender("female")
            // }

          }}
        />
        feMale
      </label>

      <br />
      <br />
      <br />





      <br />
      <br />
      <br />


      <input
        value={userName}
        type="text"
        placeholder='Enter UserName'
        onChange={(e) => setUserName(e.target.value)}
      />


      <br />
      <br />
      <button onClick={getValue} >GET VALUE</button>
      <button onClick={setValue} >SET VALUE</button>


      {
        <h1> {userName} </h1>
      }


      {/* <input value={name} type="text" placeholder='Enter your name'
        onChange={(e) => {
          console.log("input ele", e.target.value)
          setName(e.target.value)
        }}
      />
      <button onClick={getUserName} >GET USERNAME!</button>
      <button onClick={setInput}  >SET USERNAME!</button>
      <h1> {name} </h1> */}


      {/* {
        data.map((val, index) => {
          return (
            <h1 key={index} >HELLO WORLD!</h1>
          )
        })
      } */}

      {/* {
        jobArr.data.map((job, index) => {
          // console.log("job map", job)
          return (
            <div key={job._id} style={{ border: "1px solid black", padding: 5 }} >
              <h1> {index + 1}  {job.designation}</h1>
              <p> {job.companyName}  </p>
              <p> {job.position} </p>
              <p> {job.salary} </p>
            </div>
          )
        })
      } */}


      {/* 
      {
        jobArr.data.map((job, index) => {
          if (job.position == "Mid-Level") {
            return (<div key={job._id} style={{ border: "1px solid black", padding: 5 }} >
              <h1> {index + 1}  {job.designation}</h1>
              <p> {job.companyName}  </p>
              <p> {job.position} </p>
              <p> {job.salary} </p>
            </div>)
          }
        })
      } */}



    </div>
  )
}

export default App
