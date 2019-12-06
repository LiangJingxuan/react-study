import types from './types'
import { getPosts } from '../services'

const startFetchBlogList = ()=>{
    return {
        type: types.START_FETCH_BLOG_LIST
    }
}
const fetchBlogListSuccess = (payload)=>{
    return {
        type: types.FETCH_BLOG_LIST_SUCCESS,
        payload
    }
}
const FetchBlogListFailed = ()=>{
    return {
        type: types.FETCH_BLOG_LIST_FAILED
    }
}

export const fetchBlogList = ()=> dispatch => {
    dispatch(startFetchBlogList());
    getPosts()
        .then(res=>{
            console.log(res)
            if(res.status===200){
                dispatch(fetchBlogListSuccess({
                    list: res.data
                }))
            }else{
                dispatch(FetchBlogListFailed())
            }
        })
        .catch(err=>{
            console.log(err)
            dispatch(FetchBlogListFailed())
        });
}