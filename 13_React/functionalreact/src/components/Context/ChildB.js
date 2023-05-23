import React from 'react'
import ChildC from './ChildC'
function ChildB({fname,lname}) {
  return (
    <div>
        <h1>This is Child B and its children Child C</h1>
        <ChildC fname={fname} lname={lname}/>
        {/* This concept is known as prop driving --> Bad Practice */}
    </div>
  )
}

export default ChildB