import React, { useEffect } from 'react';


const Hello = function (props) {

  useEffect(() => {
    console.log('Hello Component On Effect : ', props);
    return () => {
      console.log('Hello Component On Side Effect : ', props);
    }
  }, [props]);

  const { name, color, isSpecial } = props;
  return (
    <div
      style={{ color: color }}
    >
      {isSpecial && <b>*</b>}
      Hi Hi {name}
    </div>
  );
}

Hello.defaultProps = {
  name: 'No Name'
}
export default React.memo(Hello);