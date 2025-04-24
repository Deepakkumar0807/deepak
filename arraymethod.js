//array method 
// 1.for.Each
let arr=[1, 2,3,4,5];
arr.forEach(function(el){
    console.log(el);
});
//2.MAP
let num=[1, 2,3,4,5];
let double=num.map((el)=>{
    return el*el;
});
//filter
let nums=[1, 2,3,4,5];
let even=nums.filter((el)=>{
    return el%2==0;
});
//every method
let ever=[1, 2,3,4,5];
let result=ever.every((el)=>{
    return el%2==0;
});
//reduce method
let numm=[1, 2,3,4,5,6,7,8,9,10];
let final=numm.reduce((res ,el)=>{
    console.log(res);
   return res+el;
});
console.log(final);
//print max value
let number=[1, 2,3,4,5,6,7,8,9,10];
let max=number.reduce((max,el)=>{
    if(max<el){
        return el;
    }
    else{
        return max;
    }
});
console.log(max);



//defoult parameter
function sum(a,b=2){
    return a+b;
}
console.log(sum(3));


//spread value
let arrs=[1,2,3,4,5,6,7,8,9,10]
console.log(...arrs);


//reset funtion
function sum(...args){//argument
    return args.reduce((sum,el)=>sum+el)

}

  