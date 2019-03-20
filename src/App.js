import React, { useState } from 'react';
import Joke from './Joke';
import Stories from './Stories';

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
      <hr />
      <Joke />
      <hr />
      <Stories />
    </div>
  );
};

export default App;
