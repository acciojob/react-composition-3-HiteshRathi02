import React from 'react';
import Tooltip from './Tooltip';

function App() {
  return (
    <div id='main' style={{margin:100}}>
      <h2 className='tooltip'>
      <Tooltip text="This is a tooltip">
        Hover over me
      </Tooltip>
      </h2>
<br/>
<p className='tooltip'>
      <Tooltip text="This is another tooltip">

          Hover over me to see another tooltip
  
      </Tooltip>
</p>
    </div>
  );
}

export default App;