let ques = {
    "surveyQuestions": [
      {
        "status": 100,
        "questions": [
          {
            "id": 1,
            "loop": 0,
            "post": "আপনি প্রতিদিন কত শলাকা (primary brand) ধূমপান করেন ? (In sticks)",
            "skip": "-1",
            "type": "numberInput",
            "options": null,
            "referTo": "2",
            "question": "আপনি প্রতিদিন কত শলাকা (primary brand) ধূমপান করেন ? (In sticks)",
            "required": true
          },
          {
            "id": 2,
            "loop": 0,
            "post": "আপনি প্রতিদিন কত শলাকা (secondary brand) ধূমপান করেন ? (In sticks)",
            "skip": "-1",
            "type": "numberInput",
            "options": null,
            "referTo": "3",
            "question": "আপনি প্রতিদিন কত শলাকা (secondary brand) ধূমপান করেন ? (In sticks)",
            "required": true
          },
          {
            "LG": "4",
            "WE": "4",
            "id": 3,
            "HTC": "4",
            "Asus": "4",
            "Lava": "4",
            "Oppo": "4",
            "Sony": "4",
            "Vivo": "4",
            "loop": 0,
            "post": "আপনার ফোন টি কোন ব্র্যান্ড এর ?",
            "skip": "-1",
            "type": "dropdown+condition",
            "Apple": "4",
            "Helio": "4",
            "Intex": "4",
            "Nokia": "4",
            "Huawei": "4",
            "Lenovo": "4",
            "Okapia": "4",
            "Others": "5",
            "Realme": "4",
            "Walton": "4",
            "Xiaomi": "4",
            "OnePlus": "4",
            "Samsung": "4",
            "options": [
              "Samsung",
              "Apple",
              "OnePlus",
              "Xiaomi",
              "Symphony",
              "Huawei",
              "Walton",
              "Realme",
              "Nokia",
              "Sony",
              "HTC",
              "LG",
              "Oppo",
              "WE",
              "Micromax",
              "Vivo",
              "Asus",
              "Lenovo",
              "Lava",
              "Helio",
              "Okapia",
              "Google Phone",
              "BlackBerry",
              "Motorola",
              "Intex",
              "Others"
            ],
            "Micromax": "4",
            "Motorola": "4",
            "Symphony": "4",
            "question": "আপনার ফোন টি কোন ব্র্যান্ড এর ?",
            "required": true,
            "BlackBerry": "4",
            "Google Phone": "4"
          },
          {
            "id": 4,
            "loop": 0,
            "post": "আপনার ফোন টি কোন Model এর ?",
            "skip": "-1",
            "type": "textInput",
            "options": null,
            "referTo": "6",
            "question": "আপনার ফোন টি কোন Model এর ?",
            "required": true
          },
          {
            "id": 5,
            "loop": 0,
            "post": "আপনার ফোন টি কোন ব্র্যান্ড এর ?  (Others)",
            "skip": "-1",
            "type": "textInput",
            "options": null,
            "referTo": "4",
            "question": "আপনার ফোন টি কোন ব্র্যান্ড এর ?  (Others)",
            "required": true
          },
          {
            "id": 6,
            "1 GB": "7",
            "3 GB": "7",
            "5 GB": "7",
            "None": "9",
            "loop": 0,
            "post": "How much internet do you use per month in average ? (In MB)",
            "skip": "-1",
            "type": "multipleChoice+condition",
            "1.5 GB": "7",
            "100 MB": "7",
            "250 MB": "7",
            "options": [
              "None",
              "Below 100 MB",
              "100 MB",
              "250 MB",
              "1 GB",
              "1.5 GB",
              "3 GB",
              "5 GB",
              "More than 5 GB"
            ],
            "referTo": "7",
            "question": "How much internet do you use per month in average ? (In MB)",
            "required": true,
            "Below 100 MB": "7",
            "More than 5 GB": "7"
          },
          {
            "id": 7,
            "loop": 0,
            "post": "How much money do you spend on internet per month in average ? (In BDT)",
            "skip": "-1",
            "type": "numberInput",
            "options": null,
            "referTo": "8",
            "question": "How much money do you spend on internet per month in average ? (In BDT)",
            "required": true
          },
          {
            "id": 8,
            "loop": 0,
            "post": "Do you use wifi in home ?",
            "skip": "-1",
            "type": "multipleChoice",
            "options": ["Yes", "No"],
            "referTo": "9",
            "question": "Do you use wifi in home ?",
            "required": true
          },
          {
            "id": 9,
            "HSC": "10",
            "Phd": "10",
            "SSC": "10",
            "None": "11",
            "loop": 0,
            "post": "What is your last educational degree ?",
            "skip": "-1",
            "type": "multipleChoice+condition",
            "options": [
              "None",
              "Below SSC",
              "SSC",
              "HSC",
              "BSC/Honours",
              "MSC/MBA/Masters",
              "Phd"
            ],
            "question": "What is your last educational degree ?",
            "required": true,
            "Below SSC": "10",
            "BSC/Honours": "10",
            "MSC/MBA/Masters": "10"
          },
          {
            "id": 10,
            "loop": 0,
            "post": "What was your last educational institutions ?",
            "skip": "-1",
            "type": "textInput",
            "options": null,
            "referTo": "11",
            "question": "What was your last educational institutions ?",
            "required": true
          },
          {
            "id": 11,
            "loop": 0,
            "post": "Social Media Pressence",
            "skip": "-1",
            "type": "checkbox",
            "options": [
              "Facebook",
              "Instagram",
              "Tiktok",
              "Snapchat",
              "Whatsapp",
              "IMO",
              "Linkedin",
              "others"
            ],
            "referTo": "submit",
            "question": "Social Media Pressence",
            "required": true
          }
        ]
      },
      {
        "status": 101,
        "questions": [
          {
            "id": 1,
            "1 GB": "2",
            "3 GB": "2",
            "5 GB": "2",
            "None": "4",
            "loop": 0,
            "post": "How much internet do you use per month in average ? (In MB)",
            "skip": "-1",
            "type": "multipleChoice+condition",
            "1.5 GB": "2",
            "100 MB": "2",
            "250 MB": "2",
            "options": [
              "Below 100 MB",
              "100 MB",
              "250 MB",
              "1 GB",
              "1.5 GB",
              "3 GB",
              "5 GB",
              "More than 5 GB"
            ],
            "referTo": "2",
            "question": "How much internet do you use per month in average ? (In MB)",
            "required": true,
            "Below 100 MB": "2",
            "More than 5 GB": "2"
          },
          {
            "id": 2,
            "loop": 0,
            "post": "How much money do you spend on internet per month in average ? (In BDT)",
            "skip": "-1",
            "type": "numberInput",
            "options": null,
            "referTo": "3",
            "question": "How much money do you spend on internet per month in average ? (In BDT)",
            "required": true
          },
          {
            "id": 3,
            "loop": 0,
            "post": "Do you use wifi in home ?",
            "skip": "-1",
            "type": "multipleChoice",
            "options": ["Yes", "No"],
            "referTo": "4",
            "question": "Do you use wifi in home ?",
            "required": true
          },
          {
            "id": 4,
            "HSC": "5",
            "Phd": "5",
            "SSC": "5",
            "None": "6",
            "loop": 0,
            "post": "What is your last educational degree ?",
            "skip": "-1",
            "type": "multipleChoice+condition",
            "options": [
              "None",
              "Below SSC",
              "SSC",
              "HSC",
              "BSC/Honours",
              "MSC/MBA/Masters",
              "Phd"
            ],
            "question": "What is your last educational degree ?",
            "required": true,
            "Below SSC": "5",
            "BSC/Honours": "5",
            "MSC/MBA/Masters": "5"
          },
          {
            "id": 5,
            "loop": 0,
            "post": "What was your last educational institutions ?",
            "skip": "-1",
            "type": "textInput",
            "options": null,
            "referTo": "6",
            "question": "What was your last educational institutions ?",
            "required": true
          },
          {
            "id": 6,
            "loop": 0,
            "post": "Social Media Pressence",
            "skip": "-1",
            "type": "checkbox",
            "options": [
              "Facebook",
              "Instagram",
              "Tiktok",
              "Snapchat",
              "Whatsapp",
              "IMO",
              "Linkedin",
              "others"
            ],
            "referTo": "submit",
            "question": "Social Media Pressence",
            "required": true
          }
        ]
      }
    ]
  }

  //  let newArray = ques.surveyQuestions[0].questions.filter(x => x.referTo).map(y => y.id);
  //  console.log(newArray);
  //  let newArray2 = ques.surveyQuestions[1].questions.filter(x => x.referTo).map(y => y.id);
  //  console.log(newArray2);
 
  // let newArray3 = ques.surveyQuestions[0].questions.filter(x => x.options).map(y => y.options);
  // console.log(newArray3);
  // let newArray4 = ques.surveyQuestions[1].questions.filter(x => x.options).map(y => y.options);
  // console.log(newArray4);

   //let newArray5 = [newArray3, newArray4];
  // let newArray5 = newArray3.concat(newArray4);
   //console.log(newArray5);

/*
   let array = [], demo = [0, 1];
   demo.map((el) => ques.surveyQuestions[el].questions.filter((x) => x.options).map((y) => array = [...array, ...y.options]))
   console.log(array);
   //console.log(array.length);
*/


 // let variable = demo.map((el) => ques.surveyQuestions[el].questions.filter((x) => x.options).flatMap((y) => y.options ).flatMap((y) => y));
//  console.log(variable);


  // var a = [1,2,3];
  // var sum = a.reduce(function(a, b) { return a + b; }, 0);

/*
  let result = [];
  let demo = [0, 1];
  demo.map((el) => ques.surveyQuestions[el].questions.filter((x) => x.options).map((y) => result = result.reduce((previous, current) => {
    previous.push(current);
    return previous;
  }, y.options)));
  console.log(result);
*/

  // let demo = [0, 1];
  // let result = demo.map((el) => ques.surveyQuestions[el].questions.filter((x) => x.options).map((y) => demo.reduce((previous, current) => {
  //   previous.push(current);
  //   return previous;
  // }, [])));
  // console.log(result);



// let demo = [0, 1];
//   let result = demo.map((el) => ques.surveyQuestions[el].questions.filter((x) => x.options).reduce((previous, current) => {
//     previous.push(...current.options);
//     return previous;
//   },[]))
//   console.log(result);



  let demo = [0, 1];
  let result = demo.map((el) => ques.surveyQuestions[el].questions.filter((x) => x.options).reduce((previous, current) => {
    previous.push(...current.options);
    return previous;
  },[])).reduce((previous, current) => {
    previous.push(...current);
    return previous;
  });
  console.log(result);


/*  
  let demo = [0, 1];
  let result = demo.map((el) => ques.surveyQuestions[el].questions.filter((x) => x.options).reduce((previous, current) => {
    previous.push(...current.options);
    return previous;
  },[])).flatMap((previous) => {
    return previous;
  });
  console.log(result);
*/ 





  

  // let array2 = [100, 200, 300, 400, 500]
  // let result = array2.reduce((previous, current) => {
  //   previous.push(current*2);
  //   return previous;
  // }, []);
  // console.log(result);
  

  // let array2 = [100, 200, 300, 400, 500]
  // let result = array2.reduce(function(previous, current) {
  //   previous.push(current*2);
  //   return previous;
  // }, []);
  // console.log(result);
  

//   console.log([1, 2, 3, 4, 5].reduce(function (a, b) {
//     a.push(b*2);
//     //console.log(a, b);
//     return a;
// }, []));

//console.log(array);
 
// array.push();
  
//   console.log(array);



//   // [2,6,7].map((el,idx) => console.log(el,idx));


// for(let i=1; i<=100; i++) {
//   if(i%15==0) {
//     console.log('fizzbuzz');
//   }
//   else if(i%3==0) {
//     console.log('fizz');
//   }
//   else if(i%5==0) {
//     console.log('buzz');
//   }
//   else {
//     console.log(i);
//   }
// }

// let demo = [0, 1];
  // // console.time('z');
  // let result = demo.map((el) => ques.surveyQuestions[el].questions.filter((x) => x.options).reduce((a,b) => {
  //   // console.log('a', a);
  //   a.push(...b.options);
  //   // console.log("b", b);
  //   return a;
  // },[])).reduce((a, b) => {
  //   a.push(...b);
  //   return a;
  // });
  // // console.timeEnd("z");
  // console.log(result);


  /*
  let demo = [0, 1];
  // console.time('z');
  let result = demo.map((el) => ques.surveyQuestions[el].questions.filter((x) => x.options).reduce((a,b) => {
    // console.log('a', a);
    a.push(...b.options);
    // console.log("b", b);
    return a;
  },[])).flatMap((a) => {
    return a;
  });
  // console.timeEnd("z");
  console.log(result);
*/