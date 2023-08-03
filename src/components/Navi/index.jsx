import React from 'react'
import "../Navi/style.css"



const Navi = ({page, total,onLeft,onRigth}) => {
   
  return (
    <div className='NeBa'>
        <button className='btn8' onClick={onLeft}>Back</button>
        <p>{page} de {total}</p>
        <button className='btn8' onClick={onRigth}> Next  </button>
       
    </div>
  )
}

export default Navi

