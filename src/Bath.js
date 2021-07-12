import React from 'react';

const Bath = (props) => (
    <div className='bath' id ={`bath-$props.size}`}>
        {props.size} Bath
    </div>
)

export default Bath;