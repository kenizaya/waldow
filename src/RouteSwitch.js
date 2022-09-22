import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import App from './App'

const RouteSwitch = () => {
  return (
    <BrowserRouter basename='/waldow'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/play' element={<App />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch
