import React from 'react';
import Oven from './Oven';
import Sink from './Sink';

const Kitchen = (props) => (
    <div id = "Kitchen">
        Kitchen
        <Oven />
        <Sink />
    </div>
);

export default Kitchen;