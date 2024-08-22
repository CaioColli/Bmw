import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './Pages/HomePage/homePage'
import { PagePattern } from './PagePattern'
import { AllCarsModels } from './Pages/CarModels'
import { ModalProvider } from './Modal/ModalContext'
import { CarLaunch } from './Pages/CarLaunch'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ModalProvider>
        <Routes>
          <Route path='/' element={<PagePattern />}>
            <Route index element={<HomePage />} />
            <Route path='modelos' element={<AllCarsModels />} />
            <Route path='lançamento' element={<CarLaunch />} />
            <Route path='*' element={<div> Nada </div>} />
          </Route>
        </Routes>
      </ModalProvider>
    </BrowserRouter>
  </React.StrictMode>,
)