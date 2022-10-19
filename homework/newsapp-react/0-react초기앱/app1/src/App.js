import React,{useEffect, useState} from 'react'
import './App.css'
import NewsList from './component/NewsList';

export default function App () {
  // JS
  const [news, setNews ] = useState([])

  useEffect(() => {
    fetch('https://api.hnpwa.com/v0/news.json')
      .then((res) => {return res.json()})
      .then((json) => { setNews(json)} )

  },[])
  console.log(news)
  

  // XML
  return (
    <div>
      <h1>뉴스 리스트</h1>
      <NewsList news = {news} />
    </div>
  )
}
