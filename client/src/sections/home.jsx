import React from 'react';

// New logo!
import imgLogo from '../../assets/960x0.png';

const Home = () => {
  return (
    <div className="App">
      <div className="Container Home">
        <a href="https://www.webex.com/">
          <img className="img " src={imgLogo} alt="nice new webex"></img>
        </a>
      </div>
    </div>
  );

};

export default Home;
