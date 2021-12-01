import React from "react"
function ComponentC(props:{setValue:(value:boolean)=>any})
{
   
    console.log('RUN Component C')
    return <input type="button" value="Disable" onClick={_=>props.setValue(false)}></input>
}

export default React.memo(ComponentC)