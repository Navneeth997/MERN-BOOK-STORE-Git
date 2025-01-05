
import './App.css'
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <Navbar/>
      
      <div className='min-h-screen'>
      <Outlet/>
      </div>
    
    </>
  )
}

export default App;
