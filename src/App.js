 import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { adminRouter } from './routes'

export default class App extends Component {
    render() {
        return (
            <div>
                {/* 公共的部分 */}
                <Switch>
                    {
                        adminRouter.map(route=>{
                            return <Route 
                                        key={route.pathname} 
                                        path={route.pathname}
                                        exact={route.exact}
                                        render={
                                            (routerProps)=>{
                                                return <route.component {...routerProps} />
                                            }
                                        }
                                    />
                        })
                    }
                    <Redirect to={adminRouter[0].pathname} from='/admin' exact />
                    <Redirect to='/404' />
                </Switch>
            </div>
        )
    }
}
