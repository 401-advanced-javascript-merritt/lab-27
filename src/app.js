import React from 'react';
import './design/reset.scss';
import './design/appStyles.scss';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Counter from './components/counter/counter.js';


class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Counter />
        <Footer />
      </div>
    );
  }
}

export default App;
