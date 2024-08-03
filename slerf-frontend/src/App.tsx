import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'
import VolumeBot from './pages/VolumeBot'

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/volumebot' element={<VolumeBot />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
