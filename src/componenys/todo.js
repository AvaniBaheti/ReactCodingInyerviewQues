import React, { useState } from 'react'

function Todo() {
    const [ans,seAns]=useState("")
    const [ams,seAms]=useState([])
    
    const handleClick=(e)=>{
        seAms([...ams,ans])
        seAns("")
    }
    const handleChange=(m)=>{
        const a = ams.filter((e)=>e!=m)
        seAms(a)
    }
  return (
    <>

    <div className='container mt-5'>
        <input type={Text} value={ans} onChange={(e)=>seAns(e.target.value)} className='input-group w-25'/>
        <button className='btn btn-success' style={{position:"relative",bottom:"30px",right:"280px"}} onClick={()=>handleClick(ans)}>Adds</button>
    </div>
    <div className='container mt-5 align-items-center' >
        <table className='table table-border table-striped'>
            <thead>
                <tr>
                    <th>
                        number
                    </th>
                    <th>

                    </th>
                    <th>
                        Todo
                    </th>
                    <th>
                        <br/>
                    </th>
                    <th>
                        Delete
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    ams.map((am,i)=>{

                        return(
                            <tr key={i}>
                            <td>{i}</td>
                            <td>{  }</td>
                            <td>{am}</td>
                            <td>{  }</td>
                            <td>
                                <span className='text-danger' onClick={()=>handleChange(am)} style={{cursor:"pointer"}}>Delete</span>
                            </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
    </>
  )
}

export default Todo