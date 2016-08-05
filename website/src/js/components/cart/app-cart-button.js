import React from 'react'

export default (props) => {
    return (
        <a href
            className="btn btn-default btn-sm"
            onClick={ props.handler }>
            { props.txt }
        </a>
    );
};
