import { useContext, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { ItemsCarroussel } from './ItemsCarroussel'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { CustomLeftArrow, CustomRightArrow } from './Buttons'
import { SelectedModelContext } from '@/SelectedModelContext'
import { useNavigate } from 'react-router-dom'
import { useFetch } from '@/Hooks/useFetchCars'

const Container = styled.section`
    margin: 48px 0;

    @media (max-width: 768px) {
        display: none;
    }
`

export const Carroussel = () => {
    const { data } = useFetch('https://raw.githubusercontent.com/CaioColli/BmwJson/main/BmwDB.db.json')
    const container = useRef(null)

    const { setSelectedModel } = useContext(SelectedModelContext)

    const navigate = useNavigate()

    const handleClick = (modelCar) => {
        const model = modelCar.Modelo
        setSelectedModel(model)
        navigate('modelos')
        window.scrollTo(0, 0)
    }

    useEffect(() => {
        if (container.current) {

        }
    }, [data])

    const x6Data = () => {
        return data.find(car => car.ID_Carro === '10')
    }

    const m3Data = () => {
        return data.find(car => car.ID_Carro === '25')
    }

    const serie4Data = () => {
        return data.find(car => car.ID_Carro === '28')
    }

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 425, min: 0 },
            items: 1
        }
    };

    return (
        <Container ref={container} >
            <Carousel
                autoPlay
                autoPlaySpeed={5000}
                infinite
                draggable={false}
                responsive={responsive}
                pauseOnHover
                arrows
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
            >
                {x6Data && <ItemsCarroussel
                    key={x6Data.ID_carro}
                    data={x6Data()}
                    subTitleData='MOTOR TURBO V8'
                    SubSubTitleData='625 cv'
                    onClick={() => handleClick(x6Data())}
                />}

                {m3Data && <ItemsCarroussel
                    key={m3Data.ID_carro}
                    data={m3Data()}
                    subTitleData='MOTOR TURBO 6 CILINDROS'
                    SubSubTitleData='510 cv'
                    onClick={() => handleClick(m3Data())}
                />}

                {serie4Data && <ItemsCarroussel
                    key={serie4Data.ID_carro}
                    data={serie4Data()}
                    subTitleData='MOTOR TURBO 4 CILINDROS'
                    SubSubTitleData='184 cv'
                    onClick={() => handleClick(serie4Data())}
                />}
            </Carousel>
        </Container>
    )
}