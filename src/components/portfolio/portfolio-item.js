import React from 'react';
import { Link } from 'react-router-dom'





export default function(props) {
    //data we need:
        //bakcground image:thumb_image_url
        //logo: logo_url
        //description: description
        //id: id

        const{ id, description, thumb_image_url, logo } = props.item
    return (
        <div>
            <div>{description}</div>

            <Link to={`/portfolio/${id}`}>Link</Link>
        </div>
    )
}
