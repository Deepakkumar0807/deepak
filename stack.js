//visaliging the call stack
// function one(){
//     return 1;

// }
// function two(){
//     return one()+one();
// }
// function three(){
//     let ans=two()+one();
//     console.log(ans);
// }
// three();

//callback hell:=
// h1=document.querySelector("h1");
// setTimeout(() => {
//     h1.style.color="red";
// },1000);
// setTimeout(() => {
//     h1.style.color="green";
// },2000);



//callback hell=;
// function savetoDb(data,succes,failure){
//     let internetSpeed=Math.floor(Math.random()*10)+1;
//     if(internetSpeed>4){
//         succes()
//     }
//     else{
//         failure();
//     }

// }
// savetoDb(
//     "apna college",
//     ()=>{
//         console.log("success:your data is save");
//      savetoDb(
//             "helo college",()=>{
//         console.log("success2:your data2 is save");
//         savetoDb(
//         " college",
//         ()=>{
//         console.log("success3:your data3 is save");
//         },
//         ()=>{
//             console.log("failure3:week conection")
//         }
//         );
// },
// ()=>{
//     console.log("failure2:week conection")
// }
// );
// },
// ()=>{
//  console.log("failouer");
// }
// );
// savetoDb();


//promises:===== RESOLVE $ REJECT
// function savetoDb(data){
//     return new Promise((resolve, reject) => {
//         let internetSpeed=Math.floor(Math.random()*10)+1;
//         if(internetSpeed>4){
//             resolve("sussess:data saved")
//         }
//         else{
//             reject("failure:low data")
//         }
//     });
// }
// savetoDb();

//PROMISES:===THEN $CATCH
// function savetoDb(data){
//     return new Promise((resolve, reject) => {
//         let internetSpeed=Math.floor(Math.random()*10)+1;
//         if(internetSpeed>4){
//             resolve("sussess:data saved")
//         }
//         else{
//             reject("failure:low data")
//         }
//     });
// }
//  savetoDb("apna college")
//   .then(()=>{
//     console.log("promise was resolved");
    
//  })
//     .Cache(()=>{
//     console.log("promiss was reject");
//  });
 

 //pomiss chaining:===
//  function savetoDb(data){
//     return new Promise((resolve, reject) => {
//         let internetSpeed=Math.floor(Math.random()*10)+1;
//         if(internetSpeed>4){
//             resolve("sussess:data saved")
//         }
//         else{
//             reject("failure:low data")
//         }
//     });
// }
//  savetoDb("apna college")
//   .then(()=>{
//     console.log(" data1 saved:promise was resolved");
//      return savetoDb("helloworld")
//     })
//     .then(()=>{
//         console.log("data2:saved");
//  })
//     .Cache(()=>{
//     console.log("promiss was reject");
//  });



//result:=promise
// function savetoDb(data){
//     return new Promise((resolve, reject) => {
//         let internetSpeed=Math.floor(Math.random()*10)+1;
//         if(internetSpeed>4){
//             resolve("sussess:data saved")
//         }
//         else{
//             reject("failure:low data")
//         }
//     });
// }
//  savetoDb("apna college")
//   .then((result)=>{
//     console.log(" data1:saved");
//     console.log("result of promise:",result)
//      return savetoDb("helloworld")
//     })
//     .then((result)=>{
//         console.log("data2:saved");
//         console.log("result of promise:",result)
//  })
//     .Cache((error )=>{
//     console.log("promiss was reject",error);
//  });