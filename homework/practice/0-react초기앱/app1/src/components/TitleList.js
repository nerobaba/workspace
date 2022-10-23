import {useState, useEffect} from 'react'
export default function TitleList(){
    
    const [title, setTitle ] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => {return res.json()})
        .then(json => {setTitle(json)} )
    }, [])
    const render = title.map((item => {
        return(
            <div key = {item.id}>
                <a href='/' >{item.title}</a>
            </div>
        )
    }))

    return (
        <>
            {render}
        </>
        )

}