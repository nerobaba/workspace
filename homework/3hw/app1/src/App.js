import React, {useEffect, useState} from 'react'
import './App.css'
// import VlogList from './VlogList'

export default function App () {
  // JS
  const [vlog, setVlog] = useState([])

    

  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {return res.json() })
      .then((json) => { setVlog(json)})
  }, [])


  const render = vlog.map((item) => {

    
    
    return(
      <div key = {item.id}>
        <a href ='/'>{item.title}</a>
        <p>{item.body}</p>
              
              
      </div>
      )
    })
  
    
  // XML
  return (
    <div>
      Hello React!
      {render}
    </div>
  )
}
