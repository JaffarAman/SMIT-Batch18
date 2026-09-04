// // import "./style.css"
// // import React from "react"

// // const App = () => {

// //     const userName = "Jaffar"

// //     return (
// //         <React.Fragment>
// //             <h1 className="heading" >HELLO {userName}  </h1>
// //             <h1>2 + 2  = {2 + 2} </h1>
// //             <input type="text" />
// //         </React.Fragment>
// //     )
// // }

// // export default App


// import React from 'react'
// import "./style.css"

// const App = () => {
//     const user = "Bilal"

//     const foo = (user, event) => {
//         console.log("foo", user, event?.target?.innerHTML)
//     }


//     const foo2 = (e) => {
//         console.log("foo2", e?.target)
//     }

//     return (
//         <div>
//             <h1> Hello {user} </h1>

//             {/* <button onClick={foo}  >CLICK!</button> */}
//             <button onClick={(event) => foo("Jaffar", event)}  >CLICK!</button>

//             {/* <button onClick={(event) => foo2(event)} >CLICK 2</button> */}
//             {/* <button onClick={foo2} >CLICK 2</button> */}

//             <button onClick={() => {
//                 foo()
//                 foo2()
//             }} >MULTI CLICK</button>



//             {/* <button onClick={() => {
//                 console.log("run callback!")
//                 foo("jaffar")
//             }}  >CLICK!</button> */}
//         </div>
//     )
// }

// export default App



import React from 'react'
import Navbar from './components/navbar'
import Body from './components/body'
import Footer from './components/footer'
import "./style.css"
// import "./navbar.css"

const App = () => {
    return (
        <div className='container' >
            <h1>HOME PAGE</h1>
            {/* <Navbar /> */}
            <div className='container'>
                <h1>Navbar</h1>
            </div>

            {/* <Body />
            <Footer /> */}
        </div>
    )
}

export default App
