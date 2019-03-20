import React, { useState } from 'react';

const App = () => {
  const [userQuery, setUserQuery] = useState('');
  // const state = useState();
  // const userQuery = state[0]
  // const setUserQuery = state[1]

  const updateUserQuery = event => {
    setUserQuery(event.target.value);
  };

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      searchQuery();
    }
  };

  const searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`, '_blank');
    setUserQuery('');
  };

  console.log(userQuery);

  return (
    <div className="App">
      <h1>Hello Jeff</h1>
      <div className="form">
        <input
          type="text"
          value={userQuery}
          onChange={updateUserQuery}
          onKeyPress={handleKeyPress}
        />
        <button onClick={searchQuery}>Search</button>
      </div>
    </div>
  );
};

export default App;
