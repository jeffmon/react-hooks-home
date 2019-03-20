import React, { useEffect, useState } from 'react';

const Stories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch('https://news-proxy-server.appspot.com/topstories')
      .then(response => response.json())
      .then(json => {
        setStories(json);
      });
  }, []);

  const openLink = link => {
    window.open(link, '_blank');
  };

  return (
    <div>
      <h3>Stories</h3>
      {stories.map(story => (
        <div key={story.id}>
          <h4 onClick={() => openLink(story.url)}>{`${story.title} (${
            story.score
          })`}</h4>
        </div>
      ))}
    </div>
  );
};

export default Stories;
