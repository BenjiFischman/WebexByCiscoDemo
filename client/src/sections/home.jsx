import React from 'react';

import imgLogo from '../../assets/960x0.png';

const Home = () => {
  return (
    <div className="App">
      <div className="Container Home">
          <a href={"https://www.webex.com/"}>
        <img className="img " src={imgLogo} alt="new Webex logo who dis?"></img>
        </a>
      </div>
    </div>
  );

};

export default Home;
