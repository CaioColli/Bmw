import { Modal } from '@/Modal'
import { Overlay } from '@/Overlay'
import { SubTitle } from '@/SubTitle'
import styled from 'styled-components'
import { InputModal } from './Inputs'
import { FaRegTrashAlt } from 'react-icons/fa'
import { useContext, useEffect, useState } from 'react'
import { FilterContext } from '../FilterContext'

const Content = styled.form`
    padding: 48px;

    @media (max-width: 768px) {
        padding: 24px;
    }
`

const TitleFilter = styled.h3`
    font-size: 26px;
    font-weight: 500;
`

const FilterContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 24px;
    gap: 16px;
    max-width: 450px;
`

const Filters = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
`

const DeleteFilterContent = styled.button`
    all: unset;
    display: flex;
    gap: 8px;
    margin-top: 80px;
    cursor: pointer;
    transition: 0.2s ease-in;

    &:hover {
        scale: 1.02;
    }
`
const TrashIcon = styled(FaRegTrashAlt)``

const TrashText = styled.p`
    font-family: var(--fontLato);
`

export const ModalFilters = () => {
    const { setFilters } = useContext(FilterContext)

    const bodyworkType = [
        { icon: '/IconeSedã.svg', name: 'Sedã' },
        { icon: '/IconeSportsActivity.svg', name: 'Sports Activity Vehicle' }, 
        { icon: '/IconeCabrio.svg', name: 'Cabrio' }, 
        { icon: '/IconeHatch.svg', name: 'Hatch' }, 
        { icon: '/IconeCoupé.svg', name: 'Coupé' }, 
        { icon: '/IconeBMWi.svg', name: 'BMW i' }, 
        { icon: '/IconeSportsCoupé.svg', name: 'Sports Activity Coupé' }
    ]

    const fuelType = [
        { icon: '/IconeGasolina.svg', name: 'Gasolina' }, 
        { icon: '/IconeHibrido.svg', name: 'Plug-in Híbrido' }, 
        { icon: '/IconeGasolina.svg', name: 'ActiveFlex'}, 
        { icon: '/IconeEletrico.svg', name: 'Elétrico' }
    ]

    const handleChangeBodywork = (event) => {
        const value = event.target.value

        setFilters(prevFilters => ({
            ...prevFilters,
            bodywork: prevFilters.bodywork.includes(value) 
                ? prevFilters.bodywork.filter(item => item !== value)
                : [...prevFilters.bodywork, value]
        }))
    }

    const handleChangeFuelType = (event) => {
        const value = event.target.value

        setFilters(prevFilters => ({
            ...prevFilters,
            fueltype: prevFilters.fueltype.includes(value) 
                ? prevFilters.fueltype.filter(item => item !== value)
                : [...prevFilters.fueltype, value]
        }))
    }

    const handleResetFilters = (event) => {
        event.preventDefault()
        setFilters({ bodywork: [], fueltype: [] })
    }

    return (
        <>
            <Overlay />
            <Modal>
                <Content>
                    <SubTitle text='Filtro' />

                    <FilterContent>
                        <TitleFilter>
                            Carroçaria
                        </TitleFilter>

                        <Filters>
                            {bodyworkType.length > 0 && (
                                bodyworkType.map(filter => (
                                    <InputModal
                                        key={filter.name}
                                        valueinput={filter.name}
                                        onChange={handleChangeBodywork}
                                        icon={filter.icon}
                                        label={filter.name}
                                    />
                                ))
                            )}
                        </Filters>
                    </FilterContent>

                    <FilterContent>
                        <TitleFilter>
                            Combustível
                        </TitleFilter>

                        <Filters>
                            {fuelType.length > 0 && (
                                fuelType.map(filter => (
                                    <InputModal
                                        key={filter.name}
                                        valueinput={filter.name}
                                        onChange={handleChangeFuelType}
                                        icon={filter.icon}
                                        label={filter.name}
                                    />
                                ))
                            )}
                        </Filters>
                    </FilterContent>

                    <DeleteFilterContent onClick={handleResetFilters}>

                        <TrashIcon />
                        <TrashText>
                            Repor filtros
                        </TrashText>

                    </DeleteFilterContent>
                </Content>
            </Modal>
        </>
    )
}