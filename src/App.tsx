import React from 'react';
import './App.css';
import IssueList from './IssueList/IssueList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Cosmos SDK - Open Issues
        </p>
      </header>
      <IssueList />
    </div>
  );
}

export default App;
