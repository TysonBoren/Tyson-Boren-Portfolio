import React, { Component } from "react";
import { Link } from "react-router-dom"

export default class BlogDetail extends Component {
    constructor() {
        super()
    }




    render() {
        return (
            <div>
                <Link to={`/b/${id}`}>
                    <h1>blog detail</h1>
                </Link>
            </div>
        )
    }
}