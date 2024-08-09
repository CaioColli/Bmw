import { Outlet } from 'react-router-dom'
import { Header } from '../Header'
import { PageContainer } from '../PageContainer'
import { Footer } from '@/Footer'

export const PagePattern = () => {
    return (
        <PageContainer>
            <Header />
            {/* Outlet permite criar uma rota pai e o outlet vai ser todas as rotas filhas que vão ser encaixadas dentro da rota pai */}
            <Outlet />
            <Footer />
        </PageContainer>
    )
}