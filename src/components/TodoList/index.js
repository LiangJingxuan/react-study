import React, { Component } from 'react'
import { jia,jian } from '../../actions/cart'

export default class TodoList extends Component {
    render() {
        console.log(this.props.store)
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>编号</th>
                            <th>名称</th>
                            <th>价格</th>
                            <th>数量</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>手机</td>
                            <td>100</td>
                            <td>
                                <button onClick={
                                    ()=>{
                                        this.props.store.dispatch(jian(1))   
                                    }
                                }>-</button>
                                <span>10</span>
                                <button onClick={
                                    ()=>{
                                        this.props.store.dispatch(jia(1))   
                                    }
                                }>+</button>
                            </td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
