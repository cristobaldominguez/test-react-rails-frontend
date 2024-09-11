import { Routes, Route } from 'react-router-dom'

import Navigation from './components/Navigation/index.jsx'
import { PrivateRoutes } from './components/PrivateRoutes/index.jsx'

// Pages
import Home from './pages/Home/index.jsx'
import Login from './pages/Login/index.jsx'
import NotFound from './pages/NotFound/index.jsx'
import Registration from './pages/Registration/index.jsx'

function App() {
  return <>
    <Navigation />
    <div className='mx-auto max-w-7xl px-6 pt-12'>
      <h1 className="text-3xl font-bold text-center">Mini Twitter</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/login' element={<Login />} />

        {/* ProtectedRoutes */}
        <Route element={<PrivateRoutes />}>
        </Route>
        {/* /ProtectedRoutes */}

        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  </>
}

export default App
