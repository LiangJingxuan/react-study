import React, {createRef} from 'react'

import PropTypes from 'prop-types'

export default class Add extends React.Component {
    constructor(){
        super();
        this.state = {
            inputValue: ''
        }
        // 创建ref
        this.inputDom = createRef();
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
        console.log(this.inputDom)
        // console.log(this.state)
        if(this.state.inputValue===''){
            return
        }
        this.props.add(this.state.inputValue);
        this.setState({
            inputValue: ''
        },()=>{
            this.inputDom.current.focus()
        });
    }
    render (){ 
        return (
            <div>
                <input ref={this.inputDom} onChange={this.addInput} type="text" value={this.state.inputValue} />
                <button onClick={this.addItem}>{this.props.title}</button>
            </div>
        )
    }
}
