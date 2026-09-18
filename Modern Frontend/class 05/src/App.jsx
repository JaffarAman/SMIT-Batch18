import { useState } from "react"
import Navbar from "./components/navbar"
import Footer from "./components/footer"

const App = () => {

  // api call
  // const userName = "Jaffar"

  const [userName, setUserName] = useState("Jaffar")

  console.log("Parent")

  const foo = () => {
    console.log("foo")
  }


  const getCampusValue = (value) => {
    console.log("parent getCampusValue", value)
  }


  const [arr, setArr] = useState(["Jaffar", "Sufiyan", "Bilal"])

  const ele = arr.map((val, index) => {
    return (
      <h1> USER : {val} </h1>
    )
  })
  console.log("ele", ele)

  // const newEle = ["<h1>HELLO SAYLANI</h1>"]


  const obj = {}

  return (
    <div>



      {

        arr.map((val, index) => {
          return (
            <h1 key={index} > {index + 1} : USER  : {val} </h1>
          )
        })

      }


      {/* <div>
        {obj}
      </div> */}


      {/* <div>
        {arr}
      </div> */}
      {/* 


  

      <h1>USER: {arr[0]} </h1>
      <h1>USER: {arr[1]} </h1>
      <h1>USER: {arr[2]} </h1> */}

      {/* <h1>Parent Cmp</h1> */}


      {/* <Navbar name={userName} age={20} /> */}
      {/* <Navbar userName={userName} foo={foo}
        setUserName={setUserName}
        getCampusValue={getCampusValue}
      />

      <Footer data={["apple", "mango"]} age={20} /> */}

    </div>
  )

}


export default App