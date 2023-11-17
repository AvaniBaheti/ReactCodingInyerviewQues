import React, { createContext } from 'react'
import CompN from './CompN'

const Biodata=createContext()
const CompAM = () => {

  return (

    <Biodata.Provider value={"Avani Baheti"}>
        <CompN  />
    </Biodata.Provider>

  )
//   return(
//     <CompN name={"Avani"}/>
//   )

}

export default CompAM

export {Biodata}