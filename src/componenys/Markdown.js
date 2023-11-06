import React from 'react'
import './markdown.css'
import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
const Markdown = () => {
  const[ans,seAns]=useState("Hello Hi")
  return (
    <>

    <div className="center-div">
      <textarea className='left-side' value={ans} onChange={(e)=>seAns(e.target.value)}></textarea>
      <div className='right-side'>
        <ReactMarkdown>{ans}</ReactMarkdown>
      </div>
    </div>
    </>
  )
}

export default Markdown