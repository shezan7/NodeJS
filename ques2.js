const cars = [
    { "name": "Jim's Ford Focus",       "color": "white", "isDamaged": true,  "wheels": 4 },
    { "name": "Bob's Suzuki Swift",     "color": "green", "isDamaged": false, "wheels": 4 },
    { "name": "Alex's Harley Davidson", "color": "black", "isDamaged": false, "wheels": 2 },
    { "name": "Alex's Harley", "color": "black", "isDamaged": false, "wheels": 1 },
    { "name": "Jim's Ford", "color": "black", "isDamaged": false, "wheels": 2 }
  ];

//   let array1 = cars.map((a) => {
//     console.log(a);  
//     return a.wheels;
//   });

/**
 * print array elements using for loop
 * 
 * 
 */



 let obj = {             
    arr1: [],
    arr2: [],
    arr3: []
};

//let arr1 = [], arr2 = [], arr3 = [];
  for(let i=0; i<cars.length; i++) {
     // console.log(cars[i]["wheels"]); 
     if(cars[i].wheels == 4) {
          // arr1.push(cars[i]);
          obj.arr1.push(cars[i]);
      }
       else if(cars[i].wheels == 2) {
        // arr2.push(cars[i]);
        obj.arr2.push(cars[i]);
      }
      else if(cars[i].wheels == 1) {
       // arr3.push(cars[i]);
       obj.arr3.push(cars[i]);
      }

  }
//   console.log(arr1);
//   console.log(arr2);
//   console.log(arr3);
console.log(obj);

    

  //let array1 = cars.filter((a) => a.name[0]);

 // let array1 = cars.filter()

  //console.log(array1);

//console.log(cars);  