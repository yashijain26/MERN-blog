import React from 'react' 
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Home} from './pages/Home'
import {Dashboard} from './pages/Dashboard'
import {About} from './pages/About'
import {SignIn} from './pages/SignIn'
import {SignUp} from './pages/SignUp'
import {Projects} from './pages/Projects'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'

export default function App() {
  return (
<BrowserRouter>
<Header/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/About' element={<About/>}/>
  <Route path='/SignUp' element={<SignUp/>}/>
  <Route path='/SignIn' element={<SignIn/>}/>
  <Route element={<PrivateRoute />}>
  <Route path='/Dashboard' element={<Dashboard/>}/>
    </Route>  
  <Route path='/Projects' element={<Projects/>}/>
</Routes>
</BrowserRouter>
  )
}
