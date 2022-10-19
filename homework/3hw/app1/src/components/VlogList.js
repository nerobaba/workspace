import { useState, useEffect } from "react"
export default function VlogList(){
    const [Vlog, setVlog] = useState()

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {return res.json() })
        .then((json) => { setVlog()})
    }, [])
    console.log(Vlog)
    return(
        <>
        {Vlog}
        </>
    )
}