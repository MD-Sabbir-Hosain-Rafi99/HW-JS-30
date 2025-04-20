let teamMembarName = ["Sabbir", "Soumik", "Ratul", "Tonmoy"];
let area = ["Dhaka", "Barisal", "Khulna", "Manikganj"];
let age = [24, 25, 28, 30];

console.log("My name is "+teamMembarName[0]+", "+"I live in "+area[0]+", "+"I am "+age[0]+" years old.");

//=========================================================================================================

let numtaNumber = 5;
for(let i=1; i <= 10; i++){
    console.log(numtaNumber+" X"+" "+i+" = "+numtaNumber*i);
}

//=========================================================================================================

let teamMemberInfo = {
    membarOne:{
        name : "Rafi",
        age : 24,
        area : "Dhaka",
        hobby : ["Bike Riding", "Gaming", "Eating"]
    },
    membarTwo:{
        firstName : "MD Jubair",
        lastName : "Ahmed",
        age : 22,
        area : "Dhaka"
    }
}
console.log(teamMemberInfo.membarOne.hobby[1]);

//===========================================================================================================

let {name, id, department} = {
    name: "Rafi",
    id: 222, 
    department: "SWE"
}
console.log(id);