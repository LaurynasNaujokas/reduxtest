import React from 'react';

export default ({ post: {title, body, userId, _id}}) => {
    return (
        <div>
            <hr/>
            <h2>{title}</h2>
            <h4>{body}<br/> > User: {userId}</h4>
        </div>
    );
};