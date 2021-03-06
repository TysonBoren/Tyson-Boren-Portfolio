import React, { Component } from 'react';
import { Link } from 'react-router-dom'





export default class PortfolioItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            portfolioItemClass: ""
        }
        //binds for below funcitons IF you dont use arrow functions. 
        // this.onMouseEnter = this.onMouseEnter.bind(this)
        // this.onMouseLeave = this.onMouseLeave.bind(this)
    }

    handleMouseEnter() {
        this.setState({portfolioItemClass: "image-blur"})
    }

    handleMouseLeave() {
        this.setState({portfolioItemClass: ""})
    }

    render() {
        const{ id, description, thumb_image_url, logo_url } = this.props.item
            //data we need:
            //bakcground image:thumb_image_url
            //logo: logo_url
            //description: description
            //id: id

        return (
            <Link to={`/portfolio/${id}`}>
                <div className="portfolio-item-wrapper"
                //these are the functions you need to bind UNLESS you use arrow functions. 
                // onMouseEnter={this.handleMouseEnter}
                // onMouseLeave={this.handleMouseLeave}
                onMouseEnter={() => this.handleMouseEnter()}
                onMouseLeave={() => this.handleMouseLeave()}
                
                >
                    <div
                        className={'portfolio-img-background ' + this.state.portfolioItemClass}
                        style={{
                            // backgroundImage: "url(" + thumb_image_url + ")",
                            backgroundImage: `url(${thumb_image_url})`
                        }}
                    />

                    <div className="img-text-wrapper">
                        <div className="logo-wrapper">
                            <img src={logo_url} />
                        </div>

                        <div className="subtitle">{description}</div>
                    </div>
                </div>
            </Link>
        )
    }
}
