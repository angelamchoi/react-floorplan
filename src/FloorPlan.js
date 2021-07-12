import React from 'react';
import Bath from './Bath';
import Kitchen from './Kitchen';
import LivingRoom from './LivingRoom';
import Bedroom from './Bedroom';

const FloorPlan = (props) => (
  <div id='floorplan'>
    <Bedroom bedNum={1} />
    <Kitchen />
    <Bath size ='Full'/>
    <Bedroom bedNum={2} />
    <LivingRoom />
    <Bath size ='Half'/>
    <Bedroom bedNum={3} />
  </div>
);

export default FloorPlan;