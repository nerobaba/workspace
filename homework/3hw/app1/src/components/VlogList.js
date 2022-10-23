import BodyList from "./BodyList"
import { useState } from 'react'
import './style.css'

export default function VlogList({ vlogs }){
    const [isDetail, setIsDetail] = useState(false)
    const [id, setId] = useState(0)

    const render = vlogs.map((item) => {
        const onClick = () => {
            isDetail && id !== item.id ? setIsDetail(true) : setIsDetail(!isDetail)
            setId(item.id)
        }

        return (
            <div key = {item.id}>
                <div className='vlog' onClick={onClick}>
                    <h1>{item.title}</h1>
                </div>
            {isDetail && id === item.id && <BodyList item={item} />}            
            </div>
        )
    })
    return(
        <>
        {render}
        </>
    )
}