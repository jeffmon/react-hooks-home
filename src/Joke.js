import React, { useEffect, useState } from 'react';

const Joke = () => {
  useEffect(() => {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(response => response.json())
      .then(json => console.log(json));
  });
  return (
    <div>
      <h3>Joke</h3>
    </div>
  );
};

export default Joke;
