import React, { useState } from 'react';
import "../styles/App.css";

const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);

  return (
    <div
      className="tooltip"
      data-testid="tooltip-wrapper"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      {visible && (
        <span
          className="tooltiptext"
          data-testid="tooltip-text"
          style={{
            position: 'absolute',
            backgroundColor: 'black',
            color: 'white',
            padding: '4px 8px',
            borderRadius: '4px',
            top: '-30px',
            left: '50%',
            transform: 'translateX(-50%)',
            whiteSpace: 'nowrap',
            zIndex: 100,
          }}
        >
          {text}
        </span>
      )}
      <div data-testid="tooltip-child">
        {children}
      </div>
    </div>
  );
};

export default Tooltip;
