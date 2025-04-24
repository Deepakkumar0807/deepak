//this keyword
const Studen={
    name:"deepak",
    age:21,
    phy:89,
    chem:92,
    math:98,
    getAvg(){
        console.log(this);
        let Avg=(this.phy+this.chem+this.math)/3;
        console.log(`${this.name}got avg marks=${Avg}`);
    }

}
///try and catch
try{
    console.log(a);
}catch{
    console.log("a is does not defined")
}

//misslenious topic:-
//1.arrow function
const sum=(a,b)=>{
    console.log(a+b)
}
const mul=(a,b)=>
    a*b;
//set Timeout function
console.log("hi there!");
setTimeout(()=>{
    console.log("apna college");
}, 40000);


console.log("welcome to");