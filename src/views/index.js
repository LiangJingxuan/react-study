import loadable from 'react-loadable'
import { Loading } from '../components' 

// import Login from './Login'
// import NotFound from './NotFound'
// import Dashboard from './Dashboard'
// import Settings from './Settings'
// import ArticleList from './Article'
// import ArticleEdit from './Article/ArticleEdit'

// 懒加载
const Login = loadable({
    loader: ()=>import('./Login'),
    loading: Loading
})
const NotFound = loadable({
    loader: ()=>import('./NotFound'),
    loading: Loading
})
const Dashboard = loadable({
    loader: ()=>import('./Dashboard'),
    loading: Loading
})
const Settings = loadable({
    loader: ()=>import('./Settings'),
    loading: Loading
})
const ArticleList = loadable({
    loader: ()=>import('./Article'),
    loading: Loading
})
const ArticleEdit = loadable({
    loader: ()=>import('./Article/ArticleEdit'),
    loading: Loading
})

export {
    Login,
    NotFound,
    Dashboard,
    Settings,
    ArticleList,
    ArticleEdit
}