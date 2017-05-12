import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
        <Footer />
        <Navbar />
      </div>
    );
  }
}

export default App;
