import React, { Component } from 'react'
import { connect } from 'react-redux'

import BlogItem from './BlogItem'
import { fetchBlogList } from '../../actions/blog'

class BlogList extends Component {
    componentDidMount(){
        this.props.fetchBlogList();
    }
    render() {
        const { list, isLoading } = this.props;
        return (
            isLoading 
                ? 
                    <div>loading...</div> 
                :
                    <div>
                        {
                            list.map(item=>{
                                return <BlogItem key={item.id} {...item} />
                            })
                        }
                    </div>
        )
    }
}
const mapState = (state)=>{
    return {
        list: state.blog.list,
        isLoading: state.blog.isLoading
    }
}
export default connect(mapState, {fetchBlogList})(BlogList)

