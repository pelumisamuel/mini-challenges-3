// function listSorting(needle, haystack) {

//    let position = []

//     if (Array.isArray(haystack[0])){
//         console.log('multi-dimensional');
//          for(let i = 0; i < haystack.length; i++){
//             //  console.log([i,haystack[i].lastIndexOf(needle)]);
//              //position.push([i,haystack[i].lastIndexOf(needle)])
//              if(haystack[i].lastIndexOf(needle) !== -1){
//                 position.push([i,haystack[i].lastIndexOf(needle)])
//              }
//             // for(let j = 0; j<haystack[i].length; j++){
//             //     console.log(haystack[i][j]);

//             // }
//              }
//     }else{
//       return console.log( haystack.lastIndexOf(needle))

//     }
//     console.log(position.length<1 ? -1 : position[position.length-1]);
// }

// let testArr = [[1,2,3],[3,6,5],[3,2,1],[2,1,3],[3,4,5]]
//  let testArr2 = [1,2,3,4,5,6,7,5]

// //console.log(testArr.length);
// //console.log(testArr2.length);

// // listSorting(9,[1,2,3,6,4,5,6,6,6,7,5])
// listSorting(9,[[],[],[],[]])

function binaryReversal(value) {
  let bin = "";
  let dec = "";
  while (value) {
    bin += value % 2;
    value = Math.floor(value / 2);
  }
  while (bin.length < 8) {
    bin += "0";
  }
  //bin = bin.split("").reverse().join("");
  [...bin].forEach((number) => {
    dec = 2 * dec + parseInt(number);
  });
  console.log(dec);
}

binaryReversal(4567);
