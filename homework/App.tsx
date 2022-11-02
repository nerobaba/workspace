import './App.css'
import { FC, useEffect,useState} from 'react'
// type moviemap = {
//   rating:number
//   url:string
//   title:string
//   large_cover_image:ImageData
//   backgroung_image:ImageData
//   id:number
// }

const App: FC = ()=> {
  const [movies, setMovies] = useState([])

  useEffect(() =>{
    fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
    .then((res) => { return res.json()})
    .then((json) => {setMovies(json.data.movies)})


  }, [])
  const render = movies.map((item:any) =>{
    const movieRankClass = item.rating === 0 ?
        'movieRankNone' :
        item.rating >= 9 ?
        'movieRankGood' :
        item.rating >= 7 ?
        'movieRankSoso' :
        'movieRankBad'

        const movieHotIcon = (item.rating && item.rating >= 9) && '💥'
    return(
      <div key = {item.id}>
                <a className = 'movieTitle' href = {item.url}>{movieHotIcon || ''} {item.title}</a>
                <div>평점 : <span className = {movieRankClass}>{item.rating}</span> / 10</div>
                <img src = {item.large_cover_image || item.backgroung_image} alt = {item.title}></img>
            </div>
    )
  } )  

  return (
    <div>
      Hello React!
      {render}
    </div>
  )
}
export default App