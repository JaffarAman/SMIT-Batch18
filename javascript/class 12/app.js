// console.log("HELLO WORLD")

// var str = "Jaffar Aman"
// console.log(str[1])
// console.log(str.length)

// var str = "My name is 'Jaff 'ar' Aman' ";
// console.log(str);

var para =
  "The New Yorker magazine doesn't allow the phrase World War II. ' They say it should be 'the Second World War.' So let's search the following sentence for the banned characters and replace them with the phrase that the New Yorker prefers.";

// h => index 24 => length => 25
// . => index 23 => 24
// var para2 =
//   "for documents designed to.HTML is the  standard markup language be displayed in a web browser.";

//   find index number.
// for (var i = 0; i < para2.length; i++) {
//   if (para2.slice(i, i + 4) === "HTML") {
//     console.log(i);
//     break;
//   }
// }

// replace para word
// for (var i = 0; i < para2.length; i++) {
//   if (para2.slice(i, i + 4) === "HTML") {
//     console.log(i);
//     var part1 = para2.slice(0 , i)
//     var part2 = para2.slice(i + 4)
//     console.log(part1);
//     console.log(part2);
//     var final = part1 + "HYPER TEXT MARKUP LANG" + part2
//     console.log(final);
//     break;
//   }
// }

// var para =
//   "The New Yorker magazine doesn't allow the phrase World War II. They say it should be the Second World War. So let's search the following sentence for the banned characters and replace them with the phrase that the New Yorker prefers.";

// console.log(para);
// for (var i = 0; i < para.length; i++) {
//   //   console.log();
//   if (para.slice(i, i + 12) == "World War II") {
//     // console.log(i);
//     var part1 = para.slice(0, i);
//     var part2 = para.slice(i + 12 );
//     // console.log(part1);
//     // console.log(part2);
//     var final = part1 + "the Second World War" + part2
//     console.log(final);
//     break;
//   }
// }

// var para =
//   "The New Yorker magazine doesn't allow the phrase World War II. They say it should be the Second World War. So let's search the following sentence for the banned characters and World War II replace them with the phrase that the New Yorker prefers.";

// console.log(para);
// for (var i = 0; i < para.length; i++) {
//   //   console.log();
//   if (para.slice(i, i + 12) == "World War II") {
//     // console.log(i);
//     var part1 = para.slice(0, i);
//     var part2 = para.slice(i + 12);
//     // console.log(part1);
//     // console.log(part2);
//     para = part1 + "the Second World War" + part2;
//     // console.log(final);
//   }
// }

// console.log(para)

// var para =
//   "The New Yorker magazine doesn't allow the phrase World War II. They say it should be the Second World War. So let's search the following sentence for the banned characters and replace them with the phrase that the New Yorker prefers.";

// var indexNumber = para.indexOf("World War II");
// var replaceWord =
//   para.slice(0, indexNumber) +
//   "The second world war" +
//   para.slice(indexNumber + 12);
// console.log(replaceWord);

// var str = "saylani mass"
// console.log(str.lastIndexOf("a"))
// console.log(str.indexOf("mass"))
// console.log(str.indexOf("jaffar")) //-1

// var cities = ["karachi", "lahore", "multan"];
// var check =  cities.indexOf("islamabad")
// console.log("check" , check)
// if(check != -1){
//     console.log("welcome")
// }else{
//     console.log("not welcome")
// }

// var para =
//   "The New Yorker magazine doesn't allow the phrase World War II. They say it World War II should be the Second World War. So let's search the World War II following sentence for the banned characters and World War II replace them with the phrase that the New Yorker prefers.";

// var newPara = para.replaceAll("World War II", "the Second World War");
// console.log(newPara)





// var str = "Hello World!"
// console.log(str.indexOf("W"))
// console.log(str.charAt(0))
// console.log(str[4])

var num1 = 584.1
var num1Round = Math.ceil(num1)
console.log('====================================');
console.log(num1Round);
console.log('====================================');

