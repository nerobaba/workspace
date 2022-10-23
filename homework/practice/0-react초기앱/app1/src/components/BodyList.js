import {useState, useEffect} from 'react'
export default function BodyList(){
    
    const [body, setBody ] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => {return res.json()})
        .then(json => {setBody(json)} )
    }, [])
    const render = body.map((item => {
        return(
            <div key = {item.id}>
                <p>{item.body}</p>
            </div>
        )
    }))

    return (
        <>
            {render}
        </>
        )

}