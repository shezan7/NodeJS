let ques = {
    "problems": [{
        "Diabetes":[{
            "medications":[{
                "medicationsClasses":[{
                    "className":[{
                        "associatedDrug":[{
                            "name":"asprin",
                            "dose":"",
                            "strength":"500 mg"
                        }],
                        "associatedDrug#2":[{
                            "name":"somethingElse",
                            "dose":"",
                            "strength":"500 mg"
                        }]
                    }],
                    "className2":[{
                        "associatedDrug":[{
                            "name":"asprin",
                            "dose":"",
                            "strength":"500 mg"
                        }],
                        "associatedDrug#2":[{
                            "name":"somethingElse",
                            "dose":"",
                            "strength":"500 mg"
                        }]
                    }]
                }]
            }],
            "labs":[{
                "missing_field": "missing_value"
            }]
        }],
        "Asthma":[{}]
    }]}



    // let array1 = ques.problems[0].Diabetes[0].medications[0].medicationsClasses[0].className[0].associatedDrug[0].name
    // let array2 = ques.problems[0].Diabetes[0].medications[0].medicationsClasses[0].className[0]["associatedDrug#2"][0].name
    // let array3 = ques.problems[0].Diabetes[0].medications[0].medicationsClasses[0].className2[0].associatedDrug[0].name
    // let array4 = ques.problems[0].Diabetes[0].medications[0].medicationsClasses[0].className2[0]["associatedDrug#2"][0].name

    // console.log(array1)
    // console.log(array2)
    // console.log(array3)
    // console.log(array4)

    

    // let array = ques.problems[0].Diabetes[0].medications[0].medicationsClasses.map(a => a.className[0].associatedDrug[0].name)
    // let array = ques.problems[0].Diabetes[0].medications[0].medicationsClasses[0].className.map(a => a.associatedDrug[0].name)
    // console.log(array)

