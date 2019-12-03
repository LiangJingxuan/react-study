import React, { Component, createContext } from 'react';
import reactDom from 'react-dom';

const { Provider, Consumer } = createContext();
// 数据
class CounterProvider extends Component{
    constructor(){
        super();
        this.state={
            count: 100
        }
    }
    decreaseCount = ()=>{
        this.setState({
            count: this.state.count-1
        });
    }
    increaseCount = ()=>{
        this.setState({
            count: this.state.count+1
        });
    }

    render(){
        return (
            <Provider value={{
                count: this.state.count,
                decreaseCount: this.decreaseCount,
                increaseCount: this.increaseCount
            }}>
            {this.props.children}
            </Provider>
        )
    }
}

// 按钮
class Btn extends Component{
    render(){
        return (
            <Consumer> 
                {
                    ({decreaseCount, increaseCount})=>{
                        const handler = this.props.type==='decrease'?decreaseCount:increaseCount;
                        return <button onClick={handler}>{this.props.children}</button>       
                    }
                }
            </Consumer>
        )
    }
}

// 数字
class Num extends Component{
    render(){
        return (
            <Consumer>
                {
                    ({count})=>{
                        return <span>{count}</span>
                    }
                }
            </Consumer
            >
        )
    }
}

// 主组件
class App extends Component {
    render() {
        return (
            <>
                <Btn type="decrease">-</Btn>
                <Num />
                <Btn type="increase">+</Btn>
            </>
        )
    }
}

reactDom.render(
    <CounterProvider>
        <App />
    </CounterProvider>,
    document.querySelector('#root')
)
