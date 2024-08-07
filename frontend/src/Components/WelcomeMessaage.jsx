import React from 'react';

const WelcomeMessage = ({ username }) => {
  return (
    <div>
      <h1>Welcome, {username}!</h1>
    </div>
  );
};

export default WelcomeMessage;
