import React from 'react';
import './App.css';
import EmployeeList from "./components/EmployeeList";



function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Employee Directory</h1>
        <h2>view and search for employees using our simple functionality!</h2>
      </header>
      <EmployeeList />
    </div>
  );
}

export default App;
