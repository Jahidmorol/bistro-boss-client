import React from 'react';

const ButtonCmn = ({text}) => {
  return (
    <div className="text-center mt-4">
      <button className="btn btn-outline border-0 border-b-4">
        {text}
      </button>
    </div>
  );
};

export default ButtonCmn;
