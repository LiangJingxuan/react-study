import React, { Component } from 'react'

export default class SetState extends Component {
    constructor(){
        super();
        this.state = {
            like: true
        }
    }
    upLike = ()=>{
        // 方法一
        // this.setState({
        //     like: !this.state.like
        // })

        // 方法二
        this.setState((prevState,prevProps)=>{
            // 上一次的状态，上一次的属性
            // console.log(prevState,prevProps)
            console.log(1)
            return {
                like: !prevState.like
            }
        },()=>{
            console.log(3)
            // 最新的state
            console.log(this.state.like)
        })
        console.log(2)
    }
    render(){
        return (
            <div>
                <p onClick={this.upLike}>
                    修改状态...  点击修改状态: 
                    <span style={{color:'red',fontSize:'20px',fontWeight:'bold'}}>{this.state.like?'yes':'no'}</span>
                </p>
            </div>
        )
    }
}
