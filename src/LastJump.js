import React from 'react';

const LastJump = (props) => (
  <div className={props.className}>
    <p class='lastJump'>Your last jump was jump #
      <span class='lastJumpData'>{props.jump.number}</span> a
      <span class='lastJumpData'> {props.jump.type}</span> jump on
      <span class='lastJumpData'> {props.jump.date}</span> at
      <span class='lastJumpData'> {props.jump.location}</span> from
      <span class='lastJumpData'> {props.jump.altitude}</span></p>
  </div>
);

export default LastJump;
