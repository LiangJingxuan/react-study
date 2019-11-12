import React, { Component } from 'react'

import {Home, Add, News} from './components'

export default class App extends Component {
    render() {
        return (
            <div>
                <p>组件化项目 目录结构组织方式 - 练习</p>
                <Home x={1} y={2}>
                    待办事项处理
                </Home>
                <Add />
                <News title="事项列表" />
            </div>
        )
    }
}
