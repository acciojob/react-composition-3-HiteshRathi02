import React from 'react';
import Tooltip from './Tooltip';

function App() {
  return (
    <div id='main' style={{margin:100}}>
      <Tooltip text="This is a tooltip">
        <span style={{cursor:'pointer'}}>Hover over me</span>
      </Tooltip>

      <br /><br />

      <Tooltip text="This is another tooltip">
        <span style={{cursor: 'pointer' }}>
          Hover over me to see another tooltip
        </span>
      </Tooltip>
    </div>
  );
}

export default App;
