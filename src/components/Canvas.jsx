import React from 'react';

const Canvas = () => {
  const style = {
    border: '1px solid balck',
  };
  return (
    <svg
      id="alines-canvas"
      preserveAspectRatio="xMaxYMax none"
      style={style}
    >
      <circle cx={0} cy={0} r={50} />
    </svg>
  );
};

export default Canvas