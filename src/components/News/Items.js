import React from 'react'

export default class Items extends React.Component {
    // 修改状态
    editWork = (e)=>{
        this.props.editWork(3)
    }
    
    render (){
        console.log(this.props)
        return (
            <ul>
                {
                    this.props.list.map(item=>{
                        // console.log(item);
                        return (
                            <li key={item.id}>
                                {item.name} --- {item.isCompleted?'已完成':'未完成'}
                                {item.isCompleted?'':<button onClick={this.editWork}>修改</button>}
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}
