import { useCallback, useState } from 'react';

import './App.css';
import ComponentA from './components/ComponentA';

import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';

function App() {
  const [value,setValue]=useState(false)
  const [name,setName]=useState('')
  //Para componentA e componentB deve-se usar o Reac.memo combinado do useCallback por que nesses
  //casos vai se passar uma funcao
  const changeValue=useCallback((v:boolean)=>{ setValue(v) },[])

  console.log('Run App',value)


  //Para o componenteA que tem um props que so tem um tipo primitivo so o Rect.memo bastaria para evitar a execucao desnecessaria
  
  return (
    <div className="App">
      <input type="text" value={name} onChange={event=>setName(event.target.value)}></input>
      <ComponentA value={value}/>
      <ComponentB setValue={changeValue}/>
      <ComponentC setValue={changeValue}/>
    </div>
  );
}

export default App;
