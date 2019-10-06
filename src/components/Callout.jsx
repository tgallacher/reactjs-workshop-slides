import React from 'react';

const Callout = function(props) {
  return (
    <div className="text-black border-l-8 border-solid border-pink-dark bg-pink-lighter p-8 mt-16">
      {props.children}
    </div>
  );
};

export default Callout;
