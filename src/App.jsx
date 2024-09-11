import { Routes, Route } from 'react-router-dom'

import Navigation from './components/Navigation/index.jsx'

// Pages
import Home from './pages/Home/index.jsx'
import Login from './pages/Login/index.jsx'
import NotFound from './pages/NotFound/index.jsx'
import Registration from './pages/Registration/index.jsx'

function App() {
  return <>
    <Navigation />
    <h1 className="text-3xl font-bold underline">Mini Twitter</h1>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/registration' element={<Registration />} />
      <Route path='/login' element={<Login />} />


      <Route path='*' element={<NotFound />} />
    </Routes>
  </>
}

export default App
