import React, { useState } from 'react';
import "../styles/App.css"

const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);


  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);

  return (
    <div
      className="tooltip"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      <span className="tooltiptext" style={visible? {display:"block"}:{display:"none"}}>{text}</span>
      {children}
    </div>
  );
};

export default Tooltip;