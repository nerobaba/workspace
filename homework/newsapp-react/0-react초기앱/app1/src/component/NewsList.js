import React from 'react';
import './NewsList.css'
export default function NewsList({news}){
    

    const render = news.map((item) =>{
        return(
            <div key = {item.id}>
                <a className = 'newsTitle' href ={item.url} target = "blank">{item.title}</a>
            </div>
        )
    })
    return(
        <>
            {render}
        </>
    )    
    
}