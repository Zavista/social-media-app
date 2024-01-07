import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import Login from './pages/login/Login.jsx'
import Profile from './pages/profile/Profile.jsx'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { CssBaseline, ThemeProvider, createTheme} from '@mui/material'
import { themeSettings } from './theme.js'

const App = () => {

  const mode = useSelector((state) => (state.mode));
  const theme = useMemo(()=> createTheme(themeSettings(mode)), [mode])
  const isAuth = true;

  return (
    <div className='app'>
      <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline></CssBaseline>
            <Routes>
              <Route path='/' element={<Login></Login>}></Route>
              <Route path='/home' element={isAuth ? <Home></Home> : <Navigate to='/'></Navigate>}></Route>
              <Route path='/profile/:userId' element={isAuth ? <Profile></Profile> : <Navigate to='/'></Navigate>}></Route>
            </Routes>
          </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App