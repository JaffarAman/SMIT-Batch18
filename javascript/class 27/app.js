// console.log("start")


//     for(var i = 0 ;  i < 1000000000 ; i++){
//         // console.log(i)
//     }

// console.log("end")


// setTimeout(function(){

// } , time) time  = miliSecond


// console.log("start")

// setTimeout(function () {
//     console.log("Hello World")
// }, 3000)

// setTimeout(function () {
//     console.log("Hello World 1")
// }, 2000)


// console.log("end")


// setInterval(function(){
//     console.log("Hello World")
// } , 3000)


function fetchProduct() {
    console.log("start")
    fetch("https://fakestoreapi.com/products")
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)
            var parent = document.getElementById("parent")
            for (var product of data) {
                parent.innerHTML += `   <div class="card" style="width: 18rem;">
            <img src="${product.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title"> ${product.title} </h5>
                <p class="card-text"> ${product.description} </p>
                <a href="#" class="btn btn-primary"> ${product.price} </a>
            </div>
        </div>`
            }


        })
        .catch(function (error) {
            console.log("Error:", error)
        })


    // UI create nahi kr sakty


    console.log("end")

}