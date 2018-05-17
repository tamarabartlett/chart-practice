import React from 'react';

const LastJump = (props) => (
  <div className='lastJump'>
    <p>Your last jump, #
      <span class='lastJumpData'>{props.jump.number}</span>, <br/> was a
      <span class='lastJumpData'> {props.jump.type}</span> jump on
      <span class='lastJumpData'> {props.jump.date}</span> at
      <span class='lastJumpData'> {props.jump.location}</span> from
      <span class='lastJumpData'> {props.jump.altitude}</span> feet AGL</p>
  </div>
);

export default LastJump;
