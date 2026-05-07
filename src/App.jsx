
import { Route, Routes } from 'react-router-dom'
import './App.css'
import RootLayout from './components/layouts/RootLayout'
import Home from './components/pages/Home'
import Pages from './components/pages/Pages'

function App() {
 

  return (
    <>
    <Routes>
      <Route path='/' element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='/pages' element={<Pages/>}/>

      </Route>
    </Routes>
    </>
  )
}

export default App
