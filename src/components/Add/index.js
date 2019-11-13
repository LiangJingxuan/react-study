import React from 'react'

import PropTypes from 'prop-types'

export default class Add extends React.Component {
    constructor(){
        super();
        this.state = {
            inputValue: ''
        }
    }
    // 类型检查
    static propTypes = {
        title: PropTypes.string.isRequired
    }
    // 默认属性值
    static defaultProps = {
        title: '新增'
    }
    // 设置项目
    addInput = (e)=>{
        // console.log(e.currentTarget.value);
        this.setState({
            inputValue: e.currentTarget.value
        })
    }
    // 添加项目
    addItem = ()=>{
        // console.log(this.state)
        this.props.add(this.state.inputValue)
    }
    render (){ 
        return (
            <div>
                <input onChange={this.addInput} type="text" value={this.state.inputValue} />
                <button onClick={this.addItem}>{this.props.title}</button>
            </div>
        )
    }
}
