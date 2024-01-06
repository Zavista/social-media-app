import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import Login from './pages/login/Login.jsx'
import Profile from './pages/profile/Profile.jsx'

const App = () => {


  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login></Login>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/profile/:userId' element={<Profile></Profile>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App