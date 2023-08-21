import {Route,Routes,Navigate } from 'react-router-dom';
import { AuthProvider } from './components/PageContext';
import Login from './components/login';
import Random from './components/random';
import './App.css'

const App:React.FC =() => {


  return (
    <div className="app">
        <AuthProvider>
          <Routes  >
                <Route  path="/" element={<Login/>}/>
                <Route  path="/random" element={<Random/>}/>
                <Route path='*' element={<Navigate to='/' replace />} />
          </Routes>
        </AuthProvider>
    </div>
  )
}

export default App
