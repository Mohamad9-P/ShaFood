// import { useCallback, useEffect, useState } from "react"

// async function sendHttpRequest(url,config){
//     const response=await fetch(url,config)
//     const resData=response.json()
//     if(!response.ok){
//         throw new Error("You have Error")
//     }
//     return resData
// }
// export default function usehttp(url,config){
//     const [data,setdata]=useState([])
//     const [isLoading,setisloading]=useState(false)
//     const [error ,setError]=useState()
//     const sendHttp=useCallback(
//     async function sendHttp(data2){
//         setisloading(true)
//         try{
//             const resData=await sendHttpRequest(url,{...config,body:data2})
//             setdata(resData)
//         }catch(e){
//             setError(e || "Wrong!")
//         }
//         setisloading(false)
//     }        
//     ,[url,config])
//     useEffect(()=>{
//         if((config &&(config.method==="GET"||!config.method)|| !config)){
//             sendHttp()
//         }
//     },[sendHttp,config])
//     return {
//         data,
//         error,
//         isLoading,
//         sendHttp
//     }
// }