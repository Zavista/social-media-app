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

  return (
    <div className='app'>
      <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline></CssBaseline>
            <Routes>
              <Route path='/' element={<Login></Login>}></Route>
              <Route path='/home' element={<Home></Home>}></Route>
              <Route path='/profile/:userId' element={<Profile></Profile>}></Route>
            </Routes>
          </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App