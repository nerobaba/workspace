import React,{ useState } from 'react'
import './App.css'
import Hello from './component/Hello'


export default function App () {
  // JS
// let name = "Mike";
const [name, setName] = useState();

function changeName() {
  const newName = name == 'Mike' ? 'Jane' : 'Mike';
  console.log(name);
  setName(newName);
}
  // XML
  return (
    <div>
      <Hello />
      <h1>{name}</h1>
      <button onClick = {changeName}>Change</button>
    </div>
  )
}
