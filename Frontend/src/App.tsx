import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import HomeLayout from './components/layout/HomeLayout'
import Search from './components/Search'
import { Create } from './components/Create'
import Signin from './components/Signin'

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
    </Routes>
    </>
  )
}

export default App
