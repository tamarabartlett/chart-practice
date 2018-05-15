import React, { Component } from 'react';

const LastJump = (props) => (
  <div className={props.className}>
    <h1>{props.jump.number}</h1>
    <h1>{props.jump.location}</h1>
  </div>
);

export default LastJump;
