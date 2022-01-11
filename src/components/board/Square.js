import React from 'react'

export default function Square({ black, children }) {
  const fill = black ? 'black' : 'yellow';
  const stroke = black ? 'white' : 'black';

  return (
    <div className="container" style={{
        width: '100%',
        height: '100%',
        backgroundColor: fill,
        color: stroke,
       
    }}>
      {children}
    </div>
  );
}