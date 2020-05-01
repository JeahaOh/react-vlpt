import React, { Component } from 'react';

// function Hello( {color, name, isSpecial} ) {
//   console.log( name, color );
//   return (
//     <div style={{
//       color
//     }}>
//       {isSpecial && <b>*&ensp;</b>}
//       <b>{ isSpecial ? 'IMPORTANT : ' : '!MPORTANT : ' }</b>
//       {/* JSX에서 falsy한 값은 렌더링 하지 않지만, 0은 출력함.
//         {null}
//         {false}
//         {undefined}
//         {0}
//        */}
//       hi hi {name}
//     </div>
//   );
// }

class Hello extends Component {
  static defaultProps = {
    name: 'No Name'
  };
  render() {
    const { color, isSpecial, name, } = this.props;
    return (
    <div style={{ color }}>
      {isSpecial && <b>*&ensp;</b>}
      <b>{ isSpecial ? 'IMPORTANT : ' : '!MPORTANT : ' }</b>
      hi hi {name}
    </div>
    );
  }
}

// Hello.defaultProps = {
//   name: 'No Name'
// };

export default Hello;