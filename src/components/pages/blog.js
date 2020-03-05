import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import BlogItem from "../blog/blog-item"

export default class Blog extends Component {
    constructor() {
        super()
        
        this.state = {
            blogItems: []
        }

        this.getBlogItems = this.getBlogItems.bind(this)
    }


    getBlogItems() {
        axios.get("https://tysonboren.devcamp.space/portfolio/portfolio_blogs", { 
            withCredentials: true 
        }).then(response => {
            this.setState({
                blogItems: response.data.portfolio_blogs
            })
        }).catch(error => {
            console.log("getblogItems error", error);
        });
    }

    // use this after version 17 of react. https://reactjs.org/docs/react-component.html#unsafe_componentwillmount
    // componentDidMount() {
    //     this.getBlogItems()
    // }

    componentWillMount() {
        this.getBlogItems()
    }




    render() {
        const blogRecords = this.state.blogItems.map(blogItem => {
            return <BlogItem key={blogItem.id} blogItem={blogItem} />;
        });
        return (
            <div>
                {blogRecords}
            </div>
        )

    }
}