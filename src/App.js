import React, { Component } from 'react'

import {Home, News} from './components'

export default class App extends Component {
    render() {
        return (
            <div>
                <p>组件化项目 目录结构组织方式</p>
                <Home />
                <News />
            </div>
        )
    }
}
