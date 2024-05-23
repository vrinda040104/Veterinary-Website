import React from 'react'
import './App.css'
import './components/Navbar.jsx'
import Navbar from './components/Navbar'
import Footer from './components/Footer.jsx'
import Recents from './components/Recents.jsx'
import YB from './components/YB.jsx'
import Team from './components/Team.jsx'
import Dogs from './components/dogs.jsx'
import Vids from './components/vids.jsx'
import Treat from './components/treat.jsx'
import Abt from './components/abt.jsx'
function App() {

  return (
    <div>
      <Navbar/>
      <Abt/>
      <Treat/>
      <Vids/>
      <Dogs/>
      <Team/>
      <YB/>
      <Recents/>
      <Footer/>
    </div>
  )
}

export default App
