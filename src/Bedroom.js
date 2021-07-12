import React from 'react';

const Bedroom = (props) => (
    <div className="bedroom" id={`bed-${props.bedNum}`}>
        Bedroom{props.bedNum}
    </div>
);

export default Bedroom;