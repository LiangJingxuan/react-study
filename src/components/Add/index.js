import React from 'react'

import PropTypes from 'prop-types'

export default class Add extends React.Component {
    // 类型检查
    static propTypes = {
        title: PropTypes.string.isRequired
    }
    // 默认属性值
    static defaultProps = {
        title: '新增'
    }
    render (){ 
        return (
            <div>
                <input type="text" /><button>{this.props.title}</button>
            </div>
        )
    }
}
