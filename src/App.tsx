import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar.tsx'
import Footer from './components/Footer.tsx'

function App() {

  return (
    <>
    <NavBar />
    <div className='outlet'>
    <Outlet  />

    </div>
  <Footer />
    </>
  )
}

export default App
