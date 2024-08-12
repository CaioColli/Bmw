import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './Pages/HomePage/homePage'
import { PagePattern } from './PagePattern'
import { AllCarsModels } from './Pages/CarModels'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PagePattern />}>
          <Route index element={<HomePage />} />
          <Route path='modelos' element={<AllCarsModels />} />
          <Route path='*' element={<div> Nada </div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)