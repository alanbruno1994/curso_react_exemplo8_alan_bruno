import React from "react"

function ComponentA(props:{value:boolean})
{
    console.log('RUN Component A')
    return <p>{props.value? 'oi' :'' }</p>
}

export default React.memo(ComponentA)