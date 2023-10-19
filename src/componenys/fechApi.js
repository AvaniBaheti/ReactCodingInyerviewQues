import React,{ useEffect, useState }  from 'react'
export const AM = () => {

  const[ans,seAms]=useState([])
  useEffect(()=>{

    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(response =>response.json()).then(json=>{
      console.log(json) ; seAms(json)
    }).catch(error=>{

      console.log(error)
    })
  },[])
  const sn=()=>{
    const ams = {

      id:'12345',

      name:"Avaniamsn",
  
      mobile:"9922955555"
    }
    const am=ams.id?"https://jsonplaceholder.typicode.com/comments/"+ams.id:"https://jsonplaceholder.typicode.com/comments"
    fetch(am,{
    method:ams.id?"PUT":"POST",
    headers:{
      'Content-type':'application/json',
      'Access-Control-Allow-Origin':'*'
    },
    body:JSON.stringify(ams)
    })

    .then(response=>{
      console.log(response);if(response.status==200) alert("Pandokhar Sarkar Evam Haathivan Ji MAharaj Ki Jay Ho")
    }).then(json=>{
      console.log(json) ; 
    }).catch(error=>{
      console.log(error)
    })

  }
  return (
    <>
    <button onClick={sn}>AM</button>

    </>
)

}