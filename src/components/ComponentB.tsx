import React from "react"
function ComponentB(props:{setValue:(value:boolean)=>any})
{
   
    console.log('RUN Component B')
    return <input type="button" value="Enable" onClick={_=>props.setValue(true)}></input>
}

export default React.memo(ComponentB)