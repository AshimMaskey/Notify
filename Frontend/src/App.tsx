import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import HomeLayout from './components/layout/HomeLayout'
import Search from './components/Search'
import { Create } from './components/Create'
import Signin from './components/Signin'
import Signup from './components/Signup'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomeLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='search' element={<Search/>}/>
        <Route path='create' element={<Create/>}/>
      </Route>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </>
  )
}

export default App
