import React from 'react'

export default function Items(props) {
    // console.log(props)
    return (
        <ul>
            {
                props.list.map(item=>{
                    // console.log(item);
                    return (
                        <li key={item.id}>{item.name} --- {item.isCompleted?'已完成':'未完成'}</li>
                    )
                })
            }
        </ul>
    )
}
