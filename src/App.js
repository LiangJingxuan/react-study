import React, { Component } from 'react'
import { TodoList } from './components'

export default class App extends Component {
    render() {
        return (
            <div>
                <TodoList store={this.props.store} />
            </div>
        )
    }
}
