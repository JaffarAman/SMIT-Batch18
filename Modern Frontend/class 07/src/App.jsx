import { useEffect, useState } from "react"
import Child1 from "./components/Child1"
import Child2 from "./components/Child2"

function App() {

  let [count, setCount] = useState(0)
  let [isDarktheme, setIsDarkTheme] = useState(false)


  // useEffect(callBack , array)


  // // mounting
  // useEffect(() => {
  //   // console.log("useEffect")
  //   getData()

  // }, []) //empty array


  // // updating 
  // useEffect(() => {
  //   // console.log("useEffect")
  //   getData()

  // }, [count, isDarktheme]) //empty array


  // const getData = () => {
  //   console.log("API CALL")
  // }


  // useEffect(() => {
  //   console.log("first time chaly or har re-render run hoga.....")
  // })


  // useEffect(() => {
  //   console.log("first time chaly ga bs.....")
  // }, [])


  // useEffect(() => {
  //   console.log("first time chaly or count update hone pr.....")
  // }, [count, isDarktheme])


  // const [toggle, setToggle] = useState(false)

  // console.log("toggle", toggle)


  const [userName, setUserName] = useState("")
  const [githubData, setGithubData] = useState({})

  const searchHandler = async () => {
    console.log("userName", userName)
    const data = await fetch(`https://api.github.com/users/${userName}`).then(res => res.json())
    setGithubData(data)
  }

  console.log("githubData", githubData)

  return (
    <div style={{ background: isDarktheme ? "black" : "white" }}  >



      <input type="text" placeholder="Enter Github UserName"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={() => searchHandler()} >Search...</button>


      <div>

        <img src={githubData.avatar_url} alt="" width={300} height={300} />
        <h1> {githubData.name} </h1>
        <p>{githubData.bio}</p>
      </div>



      {/* <h1>REACT USEEFFECT!</h1>

      <button onClick={() => {
        setCount(++count)
      }} > Click Counter: {count} </button>


      <button onClick={() => setIsDarkTheme(!isDarktheme)} >
        {
          isDarktheme ? "Light Theme" :
            "Dark Theme"
        }
      </button> */}



      {/* {
        toggle ?
          <Child1 /> :
          <Child2 />
      } */}



      {/* {
        toggle && <Child1 />
      } */}

      {/* {
        toggle ? <Child1 /> : null
      } */}



      {/* <button onClick={() => setToggle(!toggle)} >Toggle</button> */}



    </div>
  )
}

export default App
