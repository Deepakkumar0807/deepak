//first api request

// let url="http://catfact.ninja/fact";
// fetch(url)
// .then((res)=>{
//     console.log(res);
//     return res.json();
// })
// .then((data)=>{
//     console.log(data);

// })
// .catch((err)=>{
//     console.log("error",err)

// });


//fetch in await $async function
let url="http://catfact.ninja/fact";
async function getFatch() {
    try{
    let res=await fetch(url);
    let data=await res.json();
    console.log(data.fact);
    }
    catch(e){
        console.log("error",e);
    }
}
getFatch();