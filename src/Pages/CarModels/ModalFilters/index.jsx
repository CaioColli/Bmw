import { Modal } from '@/Modal'
import { Overlay } from '@/Overlay'
import { SubTitle } from '@/SubTitle'
import styled from 'styled-components'
import { InputModal } from './Inputs'
import { FaRegTrashAlt } from 'react-icons/fa'

const Content = styled.div`
    padding: 48px;
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
    const bodyworkType = [
        {
            icon: './public/IconeSedã.svg',
            name: 'Sedã'
        }, {
            icon: './public/IconeSportsActivity.svg',
            name: 'Sports Activity Vehicle'

        }, {
            icon: './public/IconeCabrio.svg',
            name: 'Cabrio'

        }, {
            icon: './public/IconeHatch.svg',
            name: 'Hatch'

        }, {
            icon: './public/IconeCoupé.svg',
            name: 'Coupé'
        }, {
            icon: './public/IconeBMWi.svg',
            name: 'BMW i'
        }, {
            icon: './public/IconeSportsCoupé.svg',
            name: 'Sports Activity Coupé'
        }
    ]

    const fuelType = [
        {
            icon: './public/IconeGasolina.svg',
            name: 'Gasolina'
        }, {
            icon: './public/IconeHibrido.svg',
            name: 'Plug-in Híbrido'
        }, {
            icon: './public/IconeGasolina.svg',
            name: 'ActiveFlex'
        }, {
            icon: './public/IconeEletrico.svg',
            name: 'Elétrico'
        }
    ]

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
                                        icon={filter.icon}
                                        label={filter.name}
                                    />
                                ))
                            )}
                        </Filters>
                    </FilterContent>

                    <DeleteFilterContent>

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