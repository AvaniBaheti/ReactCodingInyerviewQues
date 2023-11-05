import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Pagination() {
    const [ams,seAms] = useState([])

    const[ans,seAns]=useState(1)
    const [am,seAm]= useState(10)
    const fech=async ()=>{
        const resp = await axios.get("https://jsonplaceholder.typicode.com/todos")
        seAms(resp.data)
    }
    useEffect(()=>{
        fech()
    },[])
    const a=ans*am;
    const b = a-am;
    const m = ams.slice(b,a)
    const k=[]
    for(let i=1;i<ams.length/am;i++)
    {
        k.push(i)
    }
  return (
    <div>
        <ul className='list-group'>

            {

                am.map((elem,i)=>{
                    return(
                        <li className='list-group-item'>
                            <p>
                                {elem.title}
                            </p>
                        </li>
                    )
                })
            }

        </ul>
        <nav>
            {
                ams.map((page,i)=>{
                    return(
                        <button key={i} onClick={()=>seAns(page)} className='btn btn-outline-white'>
                            {page}
                        </button>
                    )
                })
            }
        </nav>

    </div>
  )
}

export default Pagination