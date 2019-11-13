import React from 'react'

import Items from './Items'

export default function News(props) {
    return (
        <div>
            <p>{props.title}</p>
            <Items {...props} />
        </div>
    )
}
