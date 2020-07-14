import React, { Component } from 'react';
import { render } from 'react-dom';
import { PlyrComponent } from 'plyr-react';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sources: {
       type: 'video',
        sources: [
        {
            src: 'ZPt9dJw1Dbw',
            provider: 'youtube',
        },
    ],
}
    };
  }

  render() {
    return (
      <div>
        <PlyrComponent sources={this.state.sources}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
