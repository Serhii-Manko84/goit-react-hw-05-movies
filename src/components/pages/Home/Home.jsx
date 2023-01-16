import React from 'react';
import { link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div>
        <h2>Posts</h2>
        {Array.isArray(movieses) &&
          movieses.map(movies => {
            return <link> </link>;
          })}
      </div>
    </div>
  );
}

export default Home;
