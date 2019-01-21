import React from 'react';

export default ({ post: {title, _id}}) => {
    return (
        <div>
            <hr/>
            <h2>{title}</h2>
        </div>
    );
};