import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PageContainer } from './PageContainer'
import { HomePage } from './Pages/homePage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PageContainer>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <HomePage /> } />
          <Route path='*' element={ <div> Nada </div> } />
        </Routes>
      </BrowserRouter>
    </PageContainer>
  </React.StrictMode>,
)
