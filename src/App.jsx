// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home/Home';
// import Game from './pages/Game/Game';

function App() {
  const [currentTab, setCurrentTab] = useState('home');
  // const [count, setCount] = useState(0)

  const handleNavigation = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <div>
      {/* <nav>
        <button onClick={() => handleNavigation('home')}>Home</button>
        <button onClick={() => handleNavigation('game')}>Game</button>
      </nav> */}

      {/* <div> */}
      <Home />
      {/* <Game /> */}
      {/* {currentTab === 'home' && <Home />} */}
      {/* {currentTab === 'game' && <Game />} */}
      {/* </div> */}
    </div>
  )
}

export default App
