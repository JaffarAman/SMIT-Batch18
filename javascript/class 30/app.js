// // alert(`Welcome bahi`)

// // const promptResult = prompt(`Enter user name`)
// // console.log(promptResult)
// const userName =document.querySelector("#userName")

// // userName.innerHTML = promptResult


// const userNameArr =["hammad" , "jaffar Aman" , "faheem"]

// console.log(userNameArr);

// userNameArr.map(function (value,i ){
//      userName.innerHTML += value
// })



// // for(let i = 0 ; i <  userNameArr.length  ; i++) {
// //     console.log(userNameArr[i]);

// // }


// let classPro = {
//     projecter  : `1`,
//     led : `2`,
//     age : '16',
//     gender : 'male'
// }

// console.error(classPro.projecter)
// const arr = ["1","2","3"]
// const arr1 = ['4',"5","6"]

// let arr3 =[...arr]
// console.log(arr3);

// function name (...rest) {
// console.log(rest);
// rest.map(function(hammad ,i) {
//     console.log(hammad,i);

// })
// }


// name('h', 788, '68686869869')



const tossResult = document.querySelector(".tossResult")
const root = document.getElementById("root")

let toss = () => {
    var ranNum = Math.random()
    let num = ranNum.toFixed(0)

    root.innerHTML += `
        
        <img src="https://media.tenor.com/bd3puNXKLwUAAAAM/coin-toss.gif" alt="">

        
        
        `

    console.log(num);

    if (num === "0") {
        console.log("head");


        setTimeout(() => {

            tossResult.innerHTML = `Head`
             root.innerHTML = ''
        }, 2000)

       


    } else {


        setTimeout(function () {

            tossResult.innerHTML = `Tail`
            root.innerHTML = ''
        }, 2000)
       
    }
}


