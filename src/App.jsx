// import './App.css'
import { Routes,Route } from 'react-router'
import { HeroPage } from './Pages/HeroPage/HeroPage'
import { SignIn } from './Pages/SignIn/SignIn'
import { SignUp } from './Pages/SignUp/SignUp'
import { AboutUs } from './Pages/AboutUs/AboutUs'
import { Feedback } from './Pages/Feedback/Feedback'
import { UserDash } from './Pages/UserDashboard/UserDash'
import { Provider,useSelector } from 'react-redux'
import { useEffect } from 'react'


function App() {
    const theme = useSelector(state => state.theme.mode);

    useEffect(() => {
      document.body.classList.toggle("dark", theme === "dark");
    }, [theme]);


  return (
    <Routes>
        <Route index element={<HeroPage/>} />
        <Route path='/SignIn' element={<SignIn/>} />
        <Route path='/SignUp' element={<SignUp/>} />
        <Route path='/AboutUs' element={<AboutUs/>} />
        <Route path='/Feedback' element={<Feedback/>} />
        <Route path='/UserDash' element={<UserDash/>} />
    </Routes>
  )
}

export default App
