import React, {Component} from 'react'
import {render} from 'react-dom'

// const app=<h1>react hello react11</h1>;

// const creatApp = (props)=>{
// 	return (
// 		<div>
// 			<h1>react hello {props.name}</h1>
// 			<p>{props.name}</p>
// 		</div>
// 	)
// }

// const app=creatApp({
// 	name: 'react hello'
// })

// 函数组件
const App=(props)=>{
	return (
		<div>
			<h1 title={props.name}>react hello {props.name}</h1>
			<p>{props.name}</p>
		</div>
	)
}

// 对象组件
class Context extends Component{
	render(){
		return (
			<div>
				<ul>
					<li>{this.props.list}</li>
				</ul>
			</div>
		)
	}
}
class Body extends Component{
	render(){
		return (
			<div className='body' title='jsx原理'>
				<p>{this.props.desc}</p>
				<span></span>
				<Context list='子组件内容' />

				<Jsxdom />
			</div>
		)
	}
}


// jsx原理
const Dom = {
	tag: 'div',
	attrs: {
		className: 'body',
		title: 'jsx原理'
	},
	children: [
		{
			tag: 'p',
			attrs: {
				title: 'jsx'
			},
			children: ['jsx原理']
		},
		{
			tag: 'span',
			attrs: null,
			children: null
		}
	]
}

class Jsxdom extends Component {
	render(){
		return React.createElement(
			'div',
			{
				className: 'body',
				title: 'jsx原理'
			},
			React.createElement(
				'p',
				{
					title: 'jsx原理'
				},
				'jsx原理内容...'	
			),
			React.createElement(
				'span',
				{
					title: 'jsx原理'
				},
				'jsx原理内容...'
			)
		)
	}
}

render(

	<Body desc='react组件' />,

	document.getElementById('root')

);

