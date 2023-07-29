import React from 'react';

const MathMLRenderer = ({ mathML }) => {
  return (
    <div className='text-[20px] p-3'>
      <div dangerouslySetInnerHTML={{ __html: mathML }} />
    </div>
  );
};

export default MathMLRenderer;
