
import './App.css'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Committee from './components/Committee'
import CustomCursor from './components/CustomCursor '
import About from './components/About'
import Footer from './components/Footer'

function App() {
  

  return (
    <div className='className="relative'>
      <CustomCursor/>
        <TopBar/>
        <Navbar/>
        <Home/>
        <Committee/>
        <About/>
        <Footer/>
        
    </div>
  )
}

export default App
