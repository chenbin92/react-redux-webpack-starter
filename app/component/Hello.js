import React from 'react';
import './Hello.scss';

import logo from './logo.png';

class Hello extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Hello React</h1>
        <img src={logo} />
        <p>Guangzhou, China <br/> chenbin92</p>
      </div>
    );
  }
}

export default Hello;
