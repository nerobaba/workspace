import React, { useState } from 'react'
import './App.css'
function Header (props){
  return(
    <header onClick={(event) => {
      event.preventDefault()
      props.onChangeMode()
    }}>
        <h1><a href= "/" >{props.title}</a></h1>
    </header>
  )
}
function Nav (props){
  const lis = []
  for(let i = 0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick= {(event) => {
        event.preventDefault()
        props.onChangeMode(Number(event.target.id))
      }}>{t.title}</a>
      </li>)
  }
  return(
    <nav>
        <ol>
          {lis}
        </ol>
    </nav>
  )
}
function Article (props){
  return(
    <article>
        <h2>{props.title}</h2>
        {props.body}
    </article>
  )
}

export default function App () {
  const [mode, setMode]=useState("READ")
  const [id, setId] = useState(null)
  let content = null
  const topics =[
    {id:1, title:"html", body:"html is ..."},
    {id:2, title:"css", body:"css is ..."},
    {id:3, title:"js", body:"js is ..."}
  ]
  
  if(mode === "Welcome"){
    content = <Article title="Welcome" body="Hello, WEB"></Article>
  }else if(mode === "READ"){
    let title,body =null
    for(let i=0 ; i<topics.length; i++){
      if(topics[i].id === id){
        title = topics[i].title
        body = topics[i].body
      }
      content = <Article title={title} body={body}></Article>

    }
  }
  
  
  // XML
  return (
    <div>
      <Header title="WEB" onChangeMode = {() => {
        setMode("Welcome")
      }}></Header>
      <Nav topics={topics} onChangeMode = {(id) => {
        setMode("READ")
        setId(id)
      }}></Nav>
      {content}
    </div>
  )
}
