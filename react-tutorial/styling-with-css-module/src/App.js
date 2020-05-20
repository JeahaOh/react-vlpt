import React, { useState } from 'react';
import CheckBox from './components/CheckBox';

function App() {
  const [check, setCheck] = useState(false);

  const onChange = (e) => {
    setCheck(e.target.checked);
  };
  return (
    <div className="App">
      <CheckBox onChange={onChange} checked={check}>Agree</CheckBox>
    </div>
  );
}

export default App;
