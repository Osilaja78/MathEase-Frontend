import React from 'react';

const MathMLRenderer = ({ mathML }) => {
  return (
    <div className='text-[12px] sm:text-[20px]'>
      <div dangerouslySetInnerHTML={{ __html: mathML }} />
    </div>
  );
};

export default MathMLRenderer;
