import React, { useState } from 'react';
import "../styles/App.css"

const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);


  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);

  return (
    <div
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {visible && <span className="tooltiptext">{text}</span>}
      {children}
    </div>
  );
};

export default Tooltip;