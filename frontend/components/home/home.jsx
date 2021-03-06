import React from 'react';

import HomeIndex from './home_index';
import { Redirect } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-page">

        <div id="upperHomepage">
          <div id="quote">
            <h1>"There's no better feeling in the world than a warm pizza box on your lap"</h1>
            <h1>- Kevin James</h1>
          </div>

        </div>

        <div id="midHomepage">
          <h2 id="trending">Hot & New Businesses</h2>
        </div>

        <div id="lowerHomepage">
          <label id="popular"> <HomeIndex {...this.props}/></label>
        </div>
      </div>
    );
  }
}

export default Home;
