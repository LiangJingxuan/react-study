import React from 'react';
import {render} from 'react-dom';

import './index.css';
import classname from 'classname';

let b=false;
let a={color:'#FF5722', fontSize: '15px', background: b?'#ccc':'#789'}

class App extends React.Component{
    render(){
        return (
            <div>
                <p style={a}>react app</p>
                <span className="app-p">react css</span>
                <span className={classname('c1',{'c2': true,'c3': false})}></span>
            </div>
        )
    }
}

render(
    <App />,
    document.querySelector('#root')
)