//liberary to make Http request
// btn=document.querySelector("button");
// btn.addEventListener("click",async()=>{
//     let fact= await getFatch();
//     let p=document.querySelector("#output");
//     p.innerText=fact;
// });
// let url="http://catfact.ninja/fact";
// async function getFatch() {
//     try{
//     let res=await axios.get(url);

//      return res.data.fact;
//     }
//     catch(e){
//         console.log("error",e);
//         return "no fact found"
//     }
// }
// getFatch();




//*sanding headers+:
const url="https://icanhazdadjock.com";
async function getjock() {
    try{
        const config={Headers:{accept:"application/json"}}
        let res=await axios.get(url,config);
        console.log(res.data);
    }
    catch(err){
        console.log(err);
    }
    
}
getjock();