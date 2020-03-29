import React from 'react';

function Hello( {color, name} ) {
  console.log( name, color );
  return <div style={{
    color
  }}>hi hi {name}</div>;
}

Hello.defaultProps = {
  name: 'No Name'
};

export default Hello;