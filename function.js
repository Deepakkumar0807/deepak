function hello(){
    console.log("hello")
}
hello();
function isadult(){
    let age=18;
    if(age>=18){
        console.log("vote")
    }
    else{
        console.log("not vote")
    }
}
isadult();

//create a functin in random number
function roledice(){
    let rand=Math.floor(Math.random()*6)+1;
    console.log(rand)
}
roledice();


//functin with arguments (arg1,arg2......)
function printinfo(name,age){
    console.log(`${name} age is ${age}`)
}
printinfo("deepak",23);


//retun value in js
function sum(a,b){
    return a+b;
    
}
 let s=sum(sum(5,4),6);
 console.log(s);


 //1 to n number =sum
 function getsum(n){
    let sum=0;
    for(let i=0;i<=n;i++){
        sum+=i
    }
    return sum;
 }
 console.log(getsum(10000));

 //retun concatination
 let str=["hi","hello","bye","!"]
 function concate(str){
    let result="";
    for(let i=0;i<str.length;i++){
        result+=str[i]
    }
    return result;
 }
 console.log(concate(str));


 //function expression
 const sum =function(a,b){
    return a+b;
 }
console.log(sum(5,4));



