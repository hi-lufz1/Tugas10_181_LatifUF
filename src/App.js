import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Welcome to My React App</h1>
      </header>
      <main>
        <div className="content-section">
          <h2>About Us</h2>
          <p>This is a simple React application to demonstrate how to use various HTML tags within React components.</p>
          <img src="https://jagadhost.com/blog/wp-content/uploads/2023/08/react.png" alt="Sample" className="sample-image" />
        </div>
        <div className="content-section">
          <h2>Our Mission</h2>
          <p>Our mission is to make the web a better place by building beautiful and functional web applications.</p>
          <img src="https://www.wakely.com/sites/default/files/styles/content_half_large/public/images/content/Mission_0.png?h=3ca793b4&itok=2A8Fm1Gj" alt="Mission" className="sample-image" />
        </div>
      </main>
      <footer className="app-footer">
        <p>&copy; 2024 My React App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
