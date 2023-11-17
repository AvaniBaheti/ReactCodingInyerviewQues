import React, { useContext } from 'react'
import { Biodata } from './CompAM'
const CompS = ({name}) => {
    const amsna=useContext(Biodata)
  return (
    <div>CompS {amsna}</div>
  )
}
// const CompS = ({name}) => {
//     return (
//       <div>CompS {name}</div>
//     )
//   }

export default CompS