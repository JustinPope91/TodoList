import React from 'react'

function Temp() {
    let value =true
    
  return (
    <>
        {value ? 
        (<div>true</div>) 
        :
        (<div>Temp</div>)}
    </>

    
  )
}

export default Temp