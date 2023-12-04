import React from 'react';

const Notification = ({ message, children }) => {
  return (
    <div>
      <h2>{message}</h2>
      {children}
    </div>
  );
};

export default Notification;
