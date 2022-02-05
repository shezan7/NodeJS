const cars = [
    { "name": "Jim's Ford Focus",       "color": "white", "isDamaged": true,  "wheels": 4 },
    { "name": "Bob's Suzuki Swift",     "color": "green", "isDamaged": false, "wheels": 2 },
    { "name": "Alex's Harley Davidson", "color": "black", "isDamaged": false, "wheels": 2 },
    { "name": "Alex's Harley", "color": "black", "isDamaged": false, "wheels": 1 },
    { "name": "Jim's Ford", "color": "black", "isDamaged": false, "wheels": 2 }
  ];

  // let array1 = cars.map((a) => {
  //   console.log(a);  
  //   return a.wheels;
  // });
  // let arr1 =[];
  // let array = cars.map((x) => x);
  //  let newArray = [...newArray, array[0]];
  // console.log(newArray);


//   let outputArr = []
// const outObj = {}
// cars.map(obj=>{
//     outputArr.push(obj)
//     outObj[obj.wheels] = outputArr
// })
// console.log(outObj);




// let outputArr = []
// const outObj = {}
// cars.map(obj=>{
//     cars.forEach(c=> {
//        if(c.wheels == obj.wheels) outputArr.push(c)
//     })
//    outObj[obj.wheels] = outputArr
//    outputArr = []
// })
// console.log(outObj);

// let outputArr = []
// const outObj = {}
// cars.map(obj=>{
//     cars.forEach(c=> {
//        if(c.wheels == obj.wheels) outputArr.push(c)
//     })
//    outObj[obj.wheels] = outputArr
//    outputArr = []
// })
// console.log(outObj);












// let object = {}
// let array = []
// cars.map(a => {
//   cars.forEach(b=> {
//     if(b.wheels == a.wheels) 
//     array.push(b)
//   })  
//   object[a.wheels] = array
//   array = []
// }) 
// console.log(object)






  




/**
 * print array elements using for loop
 * 
 * declare arr1[], arr2[], arr3[]
 * if wheels == 4, push it to arr1[]
 * else if wheels == 2, push it to arr2[]
 * else if wheels == 1, push it to arr3[]
 * 
 * declare obj{}
 * add three arrays into the object
 * print obj
 */



//  let obj = {             
//     arr1: [],
//     arr2: [],
//     arr3: []
// };

// //let arr1 = [], arr2 = [], arr3 = [];
//   for(let i=0; i<cars.length; i++) {
//      // console.log(cars[i]["wheels"]); 
//      if(cars[i].wheels == 4) {
//           // arr1.push(cars[i]);
//         obj.arr1.push(cars[i]);
//       }
//        else if(cars[i].wheels == 2) {
//         // arr2.push(cars[i]);
//         obj.arr2.push(cars[i]);
//       }
//       else if(cars[i].wheels == 1) {
//        // arr3.push(cars[i]);
//        obj.arr3.push(cars[i]);
//       }

//   }
// //   console.log(arr1);
// //   console.log(arr2);
// //   console.log(arr3);
// console.log(obj);


// const ans = {};
// cars.map(({ name, color, isDamaged, wheels }) => {
//     ans[wheels] ? ans[wheels].push({ name, color, isDamaged }) : ans[wheels] = [{ name, color, isDamaged }]
// })

// console.log(ans)


let object = {}
cars.map(a => {object[a.wheels] ? object[a.wheels].push({'name' : a.name, 'color' : a.color, 'isDamaged' : a.isDamaged}) : object[a.wheels] = [{'name' : a.name, 'color' : a.color, 'isDamaged' : a.isDamaged}]}) 
console.log(object)










//   let object = {
//     // arr1: [],
//     // arr2: [],
//     // arr3: []
//   };

// let newArray = cars.map((x) => x);
// newArray.push(cars[0]);
// let newArray = cars.map((x) => x);
// newArray.push(cars[0]);
// newArray.push(cars[1]);

// console.log(newArray);



// let newArray = cars.map((x) => {
//   return x;
// })
// console.log(newArray);

// let newArray = cars.map((x) => x.wheels);
// console.log(newArray);





/*
let obj = {             
  arr1: [],
  arr2: [],
  arr3: []
};

if(cars.wheels==4) {
  obj[1].push(cars[i]);
}
else if(cars.wheels==2) {
  obj[2].push(cars[i]);
}
else if(cars.wheels==1) {
  obj[3].push(cars[i]);
}

console.log(obj);
*/


    // let array = ques.problems[0].Diabetes[0].medications[0].medicationsClasses.forEach(a => {
    //     Object.values(a).forEach(b => { 
    //         Object.values(b).forEach(c => { 
    //             Object.values(c).forEach(d => {
    //                 console.log(d[0].name);
    //             })
    //          })
    //      })
    // })
