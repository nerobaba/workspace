import React, {useEffect, useState} from 'react'
import './App.css'
import VlogList from './components/VlogList'
// import VlogList from './VlogList'

export default function App () {
  // JS
  const [vlogs, setVlog] = useState([])

    

  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {return res.json() })
      .then((json) => { setVlog(json)})
  }, [])

  console.log('vlogs: ', vlogs)


  
    
  // XML
  return (
    <div>
      Hello React!
      <VlogList vlogs={vlogs}/>
    </div>
  )
}
