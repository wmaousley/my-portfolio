import React from 'react';
import './App.css';
import Header from './components/Header';
import LeftSidebar from './components/LeftSidebar';
import MainDashboard from './components/MainDashboard';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <LeftSidebar />
        <MainDashboard />
      </main>
      <footer>
        <p>&copy; 2023 Your Company. All rights reserved. | <a href="#">Terms of Service</a> | <a href="#">Privacy Policy</a></p>
      </footer>
    </div>
  );
}

