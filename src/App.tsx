import React from 'react';
import './App.css';
import IssueList from './IssueList/IssueList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Issue Tracker
        </p>
      </header>
      <IssueList />
    </div>
  );
}

export default App;
