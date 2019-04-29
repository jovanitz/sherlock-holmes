// Libraries
import React from 'react';

// Components
import LoanList from './components/LoanList';
import loanData from './data/index.js';

// Other
import './App.css';

class App extends React.Component {
  render () {
    console.log(loanData)
    return (
      <LoanList />
    );
  }
}

export default App;
