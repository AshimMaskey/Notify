import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import HomeLayout from './components/layout/HomeLayout'
import Search from './components/Search'
import { Create } from './components/Create'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomeLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='search' element={<Search/>}/>
        <Route path='create' element={<Create/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
