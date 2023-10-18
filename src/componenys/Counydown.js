import React, { useEffect, useRef, useState } from 'react'

const Counydown = () => {
    const [ ans,seAns]= useState(0)
    const [ams,seAms] = useState(true)
    const m = useRef();
    useEffect(()=>{
        if(ams)
        {
            m.current=setInterval(()=>{
                seAns(pre => pre+1)
            },1000)
        }
        return ()=> clearInterval(m.current)
    },[ams])
  return (
    <div className='stopwatch'>
        <p className='timer'>{format(ans)}</p>
        <div className='actions'>
            <button onClick={()=>seAns(0)} style={{backgroundColor:"lightblue" , width:100, height:32}}>
                Restart
            </button>
            <button onClick={()=> {
                if(ams)
                {
                    clearInterval(m.current)
                    seAms(!ams)      
                }
                seAms(!ams)      
            }} style={{backgroundColor:"lightblue",width:100, height:32}}>
                {ams ? 'stop': 'resume'}
            </button>
        </div>

    </div>
  )
}



const format=(ans)=>{
    let a=Math.floor(ans/ 60 /60 %24)
    let am= Math.floor(ans/60%60)
    let sn = Math.floor(ans%60)
    a=a<10 ? '0'+a :a
    am = am<10?'0'+am:am
    sn = sn<10 ? '0'+sn : sn
    return a+ " "+am +" "+sn;
}
export default Counydown