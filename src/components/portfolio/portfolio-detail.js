import React, { Component } from "react";
import axios from "axios";





class PortfolioDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            portfolioitem: ""
        }

    }

    componentWillMount() {
        this.getPortfolioItem()
    }

    getPortfolioItem() {
        axios.get(`https://tysonboren.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`, { withCredentials: true}).then(response => {
            this.setState({
                portfolioitem: response.data.portfolio_item
            })
        }).catch(error => {
            console.log("getPortfolioItem error", error)
        })
    }

    render() {
        const {
            banner_image_url,
            category,
            description,
            logo_url,
            name,
            thumb_image_url,
            url
        } = this.state.portfolioitem
        return (
            <div>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        )
    }
}

export default PortfolioDetail