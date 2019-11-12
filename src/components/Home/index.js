import React from 'react'

import PropTypes from 'prop-types'

export default function Home(props) {
    console.log(props)
    return (
        <div>
            <h3>{props.children}</h3>
            <h4>{props.desc}</h4>
            <p>{props.x+props.y}</p>
        </div>
    )
}
// 默认属性值
Home.defaultProps = {
    desc: '事项'
}
// 类型检查
Home.propTypes = {
    desc: PropTypes.string,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
}
