import React, { Component } from 'react'

import {Home, Add, News, SetState} from './components'

export default class App extends Component {
    constructor(){
        super();
        this.state = {
            title: '组件化项目 目录结构组织方式 - todolist练习',
            desc: '待办事项处理:',
            todos: [
                {id:1,name:'react',isCompleted:true},
                {id:2,name:'node',isCompleted:true},
                {id:3,name:'vue',isCompleted:false},
                {id:4,name:'angular',isCompleted:true},
                {id:5,name:'javascript',isCompleted:false}
            ],
            itemAdd: (item)=>{
                this.setState({
                    title: '15d1a5'
                })
            }
        }
    }
    render() {
        return (
            <div>
                <p>{this.state.title}</p>
                <Home x={1} y={2}>
                    {this.state.desc}
                </Home>
                <Add add={this.state.itemAdd} />
                <News title="事项列表" list={this.state.todos} />
                
                {/* 修改状态 */}
                <SetState />
            </div>
        )
    }
}