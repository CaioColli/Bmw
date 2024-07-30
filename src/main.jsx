import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import { Header } from './Header'
import { PageContainer } from './PageContainer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PageContainer>
      <Header />
    </PageContainer>
  </React.StrictMode>,
)
